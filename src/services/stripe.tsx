import { StripeProvider } from '@stripe/stripe-react-native';

export const Stripe = () => {
  return (
    <StripeProvider
      publishableKey=''
    >
    </StripeProvider>
  );
}