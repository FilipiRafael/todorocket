import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_LIVE_KEY } from 'react-native-dotenv';

export const Stripe = ({ children }: any) => {
  return (
    <StripeProvider
      publishableKey={STRIPE_LIVE_KEY}
      merchantIdentifier="merchant.com.todorocket"
    >
      {children}
    </StripeProvider>
  );
};