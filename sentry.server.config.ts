import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://49f2e7d7482e69d8e6e3526e8d43aeb6@o4508178264948736.ingest.de.sentry.io/4508178281726032",

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,

    // ...

    // Note: if you want to override the automatic release value, do not set a
    // `release` value here - use the environment variable `SENTRY_RELEASE`, so
    // that it will also get attached to your source maps
});
