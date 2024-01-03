const API_URL = 'http://localhost:1337/api/orders'

type GetOrders = {
  page?: number
}



type StrapiOrderReponse = {
  data: {
    id: number,
    attributes: Order
  }[],
  meta: object
}

const reorderOrders = (orders: StrapiOrderReponse) => {
  return orders.data.map(ordr => {
    return {
      id: ordr.id,
      ...ordr.attributes
    }
  })
}

export const getOders = async (page: GetOrders) => {
  const respuesta = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  if (!respuesta.ok) throw new Error('Error en la peticion ' + respuesta.status + " " + respuesta.statusText)

  const ordersStrapi: StrapiOrderReponse = await respuesta.json()

  return reorderOrders(ordersStrapi)
}

type Order = {
  name: string,
  phone: number,
  address: string,
  weight: number,
  total: number
}

export const insertOrder = async (datosEntrada: Order) => {
  const body = JSON.stringify({
    data: datosEntrada
  })
  console.log(body);

  const respuesta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body
  })

  console.log(respuesta)
}

// export const deleteOrder = () => {

// }