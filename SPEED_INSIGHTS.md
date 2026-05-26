# Vercel Speed Insights Integration

This project has been configured with Vercel Speed Insights to monitor web performance metrics.

## What is Speed Insights?

Vercel Speed Insights automatically tracks Core Web Vitals and other performance metrics for your website, including:

- **Largest Contentful Paint (LCP)**: Loading performance
- **First Input Delay (FID)**: Interactivity
- **Cumulative Layout Shift (CLS)**: Visual stability
- **Interaction to Next Paint (INP)**: Responsiveness
- **Time to First Byte (TTFB)**: Server response time

## How It Works

The integration consists of two parts:

1. **Package Installation**: The `@vercel/speed-insights` package (v1.3.1) is installed as a dependency
2. **Script Injection**: A custom JavaScript file (`js/speed-insights.js`) automatically loads the Speed Insights tracking script on every page

## Files Modified

- **index.html**: Added Speed Insights script tag before `</body>`
- **ds1.html**: Added Speed Insights script tag before `</body>`
- **pages/contato.html**: Added Speed Insights script tag before `</body>`
- **pages/servicos.html**: Added Speed Insights script tag before `</body>`
- **pages/sobre.html**: Added Speed Insights script tag before `</body>`

## Files Created

- **js/speed-insights.js**: Core integration script that injects the Speed Insights tracker
- **package.json**: Added to manage the `@vercel/speed-insights` dependency
- **package-lock.json**: Locks dependency versions

## Configuration

The Speed Insights integration is configured with the following settings:

- **Debug Mode**: Enabled in development environments (localhost)
- **Sample Rate**: 100% (all page visits are tracked)
- **Auto-initialization**: The script automatically initializes when each page loads

## Viewing Performance Data

Once deployed to Vercel:

1. Go to your project in the Vercel Dashboard
2. Navigate to **Speed Insights** in the sidebar
3. Enable Speed Insights for your project if not already enabled
4. View real-time performance metrics and Core Web Vitals

## Development vs Production

- **Development** (localhost): Uses debug script with console logging
- **Production** (Vercel): Uses optimized production script at `/_vercel/speed-insights/script.js`

## Customization

You can customize the Speed Insights behavior by modifying `js/speed-insights.js`:

```javascript
injectSpeedInsights({
  debug: true,           // Enable/disable debug logging
  sampleRate: 1,         // 0-1 range, controls % of events sent
  beforeSend: (event) => {
    // Filter or modify events before sending
    return event;
  }
});
```

## Additional Resources

- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Core Web Vitals Guide](https://web.dev/vitals/)
- [@vercel/speed-insights Package](https://www.npmjs.com/package/@vercel/speed-insights)
