import imgPricing1 from '@/common/assets/images/app/pricing/01.png'
import imgPricing2 from '@/common/assets/images/app/pricing/02.png'

const data = {
  pricings: [
    {
      thumb: imgPricing1,
      name: 'Standard License',
      price: '$20.00',
      description:
        'Use, by you or one client, in a single end product which end users ARE NOT charged for',
      link:
        'https://codecanyon.net/item/food-star-react-native-food-delivery-template/28398069',
      btnText: 'Get Package',
      services: [
        {
          content: 'Over 45 Well-crafted Components',
          className: '--on',
        },
        {
          content: 'Support Dark Theme & Light Theme',
          className: '--on',
        },
        {
          content: 'Seamless Cross-Platform Development',
          className: '--on',
        },
        {
          content: 'Always Updated With Latest Technology',
          className: '--off',
        },
        {
          content: 'Easy To Customize For Your Business',
          className: '--off',
        },
        {
          content: 'Detailed Documentation',
          className: '--off',
        },
        {
          content: 'Great Customer Support',
          className: '--off',
        },
      ],
    },
    {
      thumb: imgPricing2,
      name: 'Extended License',
      price: '$75.00',
      description:
        'Use, by you or one client, in a single end product which end users CAN BE charged for.',
      link:
        'https://codecanyon.net/item/food-star-react-native-food-delivery-template/28398069',
      btnText: 'Get Package',
      services: [
        {
          content: 'Over 45 Well-crafted Components',
          className: '--on',
        },
        {
          content: 'Support Dark Theme & Light Theme',
          className: '--on',
        },
        {
          content: 'Seamless Cross-Platform',
          className: '--on',
        },
        {
          content: 'Always Updated With Latest Technology',
          className: '--off',
        },
        {
          content: 'Easy To Customize',
          className: '--off',
        },
        {
          content: 'Detailed Documentation',
          className: '--off',
        },
        {
          content: 'Great Customer Support',
          className: '--off',
        },
      ],
    },
  ],
}
export default data
