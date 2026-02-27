import { AwsRum, AwsRumConfig } from 'aws-rum-web';

let awsRum: AwsRum | null = null;

export function initCloudWatchRUM(): void {
  const appId = import.meta.env.VITE_CW_RUM_APP_ID;
  const identityPoolId = import.meta.env.VITE_CW_RUM_IDENTITY_POOL_ID;
  const endpoint = import.meta.env.VITE_CW_RUM_ENDPOINT;
  const region = import.meta.env.VITE_CW_RUM_REGION || 'ap-south-1';

  // Skip if env vars are not configured (e.g., local dev)
  if (!appId || !identityPoolId) {
    return;
  }

  try {
    const config: AwsRumConfig = {
      sessionSampleRate: 1,
      identityPoolId,
      endpoint,
      telemetries: ['performance', 'errors', 'http'],
      allowCookies: true,
      enableXRay: false,
    };

    awsRum = new AwsRum(appId, '1.0.0', region, config);
  } catch (error) {
    // Silently fail — analytics should never break the app
    console.warn('CloudWatch RUM initialization failed:', error);
  }
}

export function getAwsRum(): AwsRum | null {
  return awsRum;
}
