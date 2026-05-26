/**
 * Vercel Speed Insights Integration
 * This file injects the Speed Insights tracking script into the page
 */

// Initialize the queue for Speed Insights
function initQueue() {
  if (window.si) return;
  window.si = function(...params) {
    (window.siq = window.siq || []).push(params);
  };
}

// Detect if we're in development mode
function isDevelopment() {
  try {
    const hostname = window.location.hostname;
    return hostname === 'localhost' || hostname === '127.0.0.1' || hostname.includes('local');
  } catch (e) {
    return false;
  }
}

// Get the appropriate script source based on environment
function getScriptSrc() {
  if (isDevelopment()) {
    // In development, use debug script
    return 'https://va.vercel-scripts.com/v1/speed-insights/script.debug.js';
  }
  // In production, use the Vercel-hosted script
  return '/_vercel/speed-insights/script.js';
}

/**
 * Inject Speed Insights tracking script
 * @param {Object} options - Configuration options
 * @param {boolean} options.debug - Enable debug mode (default: true in development)
 * @param {number} options.sampleRate - Sample rate for events (0-1, default: 1)
 * @param {Function} options.beforeSend - Middleware to modify events before sending
 */
function injectSpeedInsights(options = {}) {
  // Don't inject if already present
  const src = getScriptSrc();
  if (document.head.querySelector(`script[src*="${src}"]`)) {
    console.log('[Speed Insights] Already initialized');
    return;
  }

  // Initialize the queue
  initQueue();

  // Set up beforeSend middleware if provided
  if (options.beforeSend && window.si) {
    window.si('beforeSend', options.beforeSend);
  }

  // Create and configure the script element
  const script = document.createElement('script');
  script.src = src;
  script.defer = true;
  script.dataset.sdkn = '@vercel/speed-insights/web';
  script.dataset.sdkv = '1.3.1';

  // Apply optional configuration
  if (options.sampleRate !== undefined) {
    script.dataset.sampleRate = options.sampleRate.toString();
  }

  if (options.route) {
    script.dataset.route = options.route;
  }

  if (options.endpoint) {
    script.dataset.endpoint = options.endpoint;
  }

  // Disable debug mode if explicitly set to false
  if (isDevelopment() && options.debug === false) {
    script.dataset.debug = 'false';
  }

  // Error handling
  script.onerror = () => {
    console.error(
      `[Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled.`
    );
  };

  // Log successful initialization in debug mode
  script.onload = () => {
    if (isDevelopment() && options.debug !== false) {
      console.log('[Speed Insights] Successfully loaded and tracking page performance');
    }
  };

  // Inject the script
  document.head.appendChild(script);
  console.log('[Speed Insights] Initialized');
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectSpeedInsights({
      debug: true // Enable debug logging in development
    });
  });
} else {
  // DOM is already ready
  injectSpeedInsights({
    debug: true
  });
}
