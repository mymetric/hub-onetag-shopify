# 🚀 MyMetric OneTag Shopify

> **Complete Analytics Solution for Shopify Stores** - Track 13+ events with GA4, Better Stack logging, and modern console interface.

[![GitHub](https://img.shields.io/badge/GitHub-mymetric%2Fhub--onetag--shopify-blue?style=flat-square&logo=github)](https://github.com/mymetric/hub-onetag-shopify)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square)](https://github.com/mymetric/hub-onetag-shopify/releases)

## ✨ Features

- **🎯 13 Shopify Events** - Complete e-commerce tracking
- **📊 GA4 Integration** - Centralized Google Analytics 4 tracking
- **📈 Better Stack Logging** - Real-time telemetry with customer identification
- **🎨 Modern Console** - Beautiful gradient logs with debug mode
- **🔧 Multi-Platform Ready** - Support for Meta, TikTok, Pinterest (extensible)
- **⚡ Zero Dependencies** - Lightweight vanilla JavaScript
- **🛡️ Error Handling** - Robust error management and fallbacks

## 📊 Tracked Events

| Event | Description | GA4 Event |
|-------|-------------|-----------|
| 📄 **Page View** | Page navigation tracking | `page_view` |
| 👁️ **Product View** | Product page visits | `view_item` |
| 🛒 **Add to Cart** | Product added to cart | `add_to_cart` |
| 🛒 **Cart Viewed** | Cart page visits | `view_cart` |
| ❌ **Remove from Cart** | Product removed from cart | `remove_from_cart` |
| 💳 **Checkout Start** | Checkout initiation | `begin_checkout` |
| 📍 **Address Info** | Shipping address submitted | `add_shipping_info` |
| 📧 **Contact Info** | Contact details submitted | `add_contact_info` |
| 💳 **Payment Info** | Payment method submitted | `add_payment_info` |
| 🚚 **Shipping Info** | Shipping method selected | `add_shipping_info` |
| 📚 **Collection View** | Product collection visits | `view_item_list` |
| 🔍 **Search** | Product search queries | `search` |
| ⚠️ **Alert Displayed** | System alerts and notifications | `alert_displayed` |
| 🚨 **UI Extension Error** | Extension error monitoring | `exception` |

## 🚀 Quick Start

### 1. Install via Shopify Web Pixels Extension

Create a new Web Pixels Extension in your Shopify admin and use this code:

```javascript
import {register} from '@shopify/web-pixels-extension';

register(({analytics}) => {
  // Inicializar MyMetric OneTag
  mymetric_onetag_shopify([
    "G-0JR4HXQK0K"  // Your GA4 Measurement ID
  ], "your-customer-slug", true); // customerSlug, debugMode
  
  // Configurar eventos do Shopify
  setupShopifyEvents(analytics, true, "your-customer-slug");
});
```

### 2. Alternative: Install via CDN (Theme)

Add this script to your Shopify theme's `theme.liquid` file before the closing `</head>` tag:

```html
<script type="text/javascript">
var mmonetag = document.createElement("script");
mmonetag.src = "https://cdn.jsdelivr.net/gh/mymetric/hub-onetag-shopify@main/main.js";
mmonetag.onload = function() {
    mymetric_onetag_shopify([
        "G-0JR4HXQK0K"  // Your GA4 Measurement ID
    ], "your-customer-slug", true); // customerSlug, debugMode
};
document.head.appendChild(mmonetag);
</script>
```

### 3. Configuration

```javascript
mymetric_onetag_shopify(
    trackingIds,    // Array of tracking IDs
    customerSlug,   // Customer identifier for logs
    debugMode       // Enable/disable debug logs (optional, default: true)
);
```

#### Parameters:
- **`trackingIds`** (Array): Tracking IDs for different platforms
  - GA4: `"G-XXXXXXXXXX"`
  - Meta: `"meta_XXXXXXXXXX"`
  - TikTok: `"tiktok_XXXXXXXXXX"`
  - Pinterest: `"pinterest_XXXXXXXXXX"`

- **`customerSlug`** (String): Unique identifier for your store/customer
- **`debugMode`** (Boolean): Enable detailed console logging

### 4. Example Configurations

#### Basic Setup (GA4 only)
```javascript
mymetric_onetag_shopify([
    "G-0JR4HXQK0K"
], "my-store", true);
```

#### Multi-Platform Setup
```javascript
mymetric_onetag_shopify([
    "G-0JR4HXQK0K",           // GA4
    "meta_123456789",         // Meta Pixel
    "tiktok_ABCD1234",        // TikTok Pixel
    "pinterest_987654321"     // Pinterest Tag
], "my-store", true);
```

## 🎨 Console Logs

The script provides beautiful, modern console logs with:
- **Gradient headers** for initialization
- **Color-coded events** with emojis
- **Detailed information** for each tracked event
- **Customer identification** in all logs

![Console Preview](https://via.placeholder.com/600x200/667eea/ffffff?text=Modern+Console+Logs)

## 📈 Better Stack Integration

All events are automatically logged to Better Stack with:
- **Customer identification** in message format: `[customer-slug] event description`
- **Structured data** including timestamps and event details
- **Error handling** with graceful fallbacks

## 🔧 Advanced Usage

### Custom Event Tracking
```javascript
// The script automatically handles all Shopify events
// No additional configuration needed for standard events
```

### Debug Mode
```javascript
// Enable detailed logging
mymetric_onetag_shopify(["G-XXXXXXXXXX"], "my-store", true);

// Disable debug logs for production
mymetric_onetag_shopify(["G-XXXXXXXXXX"], "my-store", false);
```

## 🛠️ Development

### Local Development
```bash
git clone https://github.com/mymetric/hub-onetag-shopify.git
cd hub-onetag-shopify
# Open main.js in your preferred editor
```

### Testing
1. Enable debug mode: `debugMode: true`
2. Open browser console
3. Navigate through your Shopify store
4. Observe detailed event logs

## 📋 Requirements

- **Shopify Store** with theme access
- **GA4 Property** (for Google Analytics tracking)
- **Better Stack Account** (for telemetry logging)
- **Modern Browser** (ES6+ support)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/mymetric/hub-onetag-shopify/issues)
- **Documentation**: [Wiki](https://github.com/mymetric/hub-onetag-shopify/wiki)
- **Email**: support@mymetric.com

## 🎯 Roadmap

- [ ] Meta Pixel integration
- [ ] TikTok Pixel integration  
- [ ] Pinterest Tag integration
- [ ] Custom event support
- [ ] A/B testing integration
- [ ] Performance monitoring

---

<div align="center">
  <strong>Made with ❤️ by MyMetric Team</strong>
</div>