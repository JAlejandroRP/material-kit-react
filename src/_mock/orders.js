import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const orders = [...Array(24)].map((_, index) => ({

  id: faker.string.uuid(),
  // avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  weight: faker.number.int({ min: 1, max: 10 }),
  total: faker.number.int({ min: 1, max: 10 }),
  status: sample(['received', 'in process', 'completed']),
  // company: faker.company.name(),
  // isVerified: faker.datatype.boolean(),
  // role: sample([
  //   'Leader',
  //   'Hr Manager',
  //   'UI Designer',
  //   'UX Designer',
  //   'UI/UX Designer',
  //   'Project Manager',
  //   'Backend Developer',
  //   'Full Stack Designer',
  //   'Front End Developer',
  //   'Full Stack Developer',
  // ]),
}));
