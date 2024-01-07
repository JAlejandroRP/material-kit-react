const API_URL = 'http://localhost:1337/api/orders'

/**
 * @typedef {Object} Order
 * @property {String} name
 * @property {String} id
 * @property {Number} phone
 * @property {String} address
 * @property {Number} weight
 * @property {Number} total
 */

/**
 * 
 * @typedef {Object} StrapiOrderReponse
 * @property {Order[]} data
 * @property {Object} meta
 */

/**
 * 
 * @param {StrapiOrderReponse} orders 
 * @returns 
 */
const extractAttributesOrders = (orders) => orders.data.map(ordr => ({
  id: ordr.id,
  ...ordr.attributes
}))

/**
 * ID of the order
 * @param {Number} orderId 
 * @returns 
 */
export const getOder = async (orderId) => {
  const respuesta = await fetch(`${API_URL}/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  if (!respuesta.ok) throw new Error(`Error en la peticion ${respuesta.status}  ${respuesta.statusText}`)

  const orderStrapi = await respuesta.json()

  return orderStrapi.data
}

/**
 * Page of the orders
 * @param {Number} page 
 * @returns 
 */
export const getOders = async (page) => {
  const respuesta = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  if (!respuesta.ok) throw new Error(`Error en la peticion ${respuesta.status}  ${respuesta.statusText}`)

  const ordersStrapi = await respuesta.json()

  return extractAttributesOrders(ordersStrapi)
}

/**
 * 
 * @param {Order} order 
 */
export const insertOrder = async (order) => {
  const body = JSON.stringify({
    data: order
  })
  console.log(body);

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body
  })

  console.log(response)
}

/**
 * Orders to update
 * @param {Order[]} orders
 * @param {String} status new status of the orders "received, in progress, completed, delivered"
 */
export const updateOrder = async ({ orders, status }) => {
  if (!orders) throw new Error('No order object received')
  if (!status) throw new Error('No status received')

  const updatePromises = orders.map(order => putOrder({
    ...order,
    status
  }))

  const updatedOrders = await Promise.allSettled(updatePromises)
  console.log(updatedOrders);

  return updatedOrders.map(order => ({
    ...order.value.data.attributes,
    id: order.value.data.id
  }))
}

const putOrder = async (order) => {
  const body = JSON.stringify({
    data: {
      ...order,
    }
  })

  const response = await fetch(`${API_URL}/${order.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body
  })

  if (!response.ok) throw new Error(`Error in petition ${response.status}  ${response.statusText}`)

  const updatedOrder = await response.json()

  return updatedOrder
}

// export const deleteOrder = () => {

// }