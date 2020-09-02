import imgPricing1 from '@/common/assets/images/app/pricing/01.png'
import imgPricing2 from '@/common/assets/images/app/pricing/02.png'

const data = {
  pricings: [
    {
      thumb: imgPricing1,
      name: 'Free Demo',
      price: '$00.00',
      description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
      link: '#',
      btnText: 'Get Package',
      services: [
        {
          content: 'Push Notification.',
          className: '--on',
        },
        {
          content: 'Offline Synchronization.',
          className: '--on',
        },
        {
          content: 'SQL Database.',
          className: '--on',
        },
        {
          content: 'Speech & Text Analytics.',
          className: '--off',
        },
        {
          content: '24/7 Supports.',
          className: '--off',
        },
      ],
    },
    {
      thumb: imgPricing2,
      name: 'Full Version',
      price: '$75.00',
      description: 'Lorem ipsum dolor sit amet consectetur elit, sed.',
      link: '#',
      btnText: 'Get Package',
      services: [
        {
          content: 'Push Notification.',
          className: '--on',
        },
        {
          content: 'Offline Synchronization.',
          className: '--on',
        },
        {
          content: 'SQL Database.',
          className: '--on',
        },
        {
          content: 'Speech & Text Analytics.',
          className: '--on',
        },
        {
          content: '24/7 Supports.',
          className: '--off',
        },
      ],
    },
  ],
}
export default data
