import axios from 'axios';

export default async function sendMail(userEmail: string, amount: number, name: string, productNamesString: string, addressString: string) {
  try {
    const response = await axios.post('https://ecommerce-admin-eight-tau.vercel.app/api/email', {
      to: userEmail,
      amount: amount,
      name: name,
      productNamesString: productNamesString,
      addressString,
    });

    console.log(response.data);

    if (response.status === 200) {
      console.log('Email sent successfully');
    } else {
      console.log('Email request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
