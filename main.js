// 🎨 Função para logs discretos do MyMetric Hub
function logMyMetricEvent(eventType, eventData) {
  const timestamp = new Date().toLocaleTimeString();
  
  const eventConfigs = {
    'page_view': {
      icon: '📄',
      title: 'Page View',
      fields: [
        `URL: ${eventData.location || 'Unknown'}`,
        `Title: ${eventData.title || 'Unknown'}`,
        `Time: ${timestamp}`
      ]
    },
    'product_view': {
      icon: '👁️',
      title: 'Product View',
      fields: [
        `Product: ${eventData.product || 'Unknown'}`,
        `Brand: ${eventData.brand || 'Unknown'}`,
        `Price: ${eventData.price || 'N/A'}`,
        `Category: ${eventData.category || 'Unknown'}`,
        `Time: ${timestamp}`
      ]
    },
    'add_to_cart': {
      icon: '🛒',
      title: 'Add to Cart',
      fields: [
        `Product: ${eventData.product || 'Unknown'}`,
        `Quantity: ${eventData.quantity || 1}`,
        `Price: ${eventData.price || 'N/A'}`,
        `Total: ${eventData.total || 'N/A'}`,
        `Variant: ${eventData.variant || 'Default'}`,
        `Time: ${timestamp}`
      ]
    },
    'checkout_start': {
      icon: '💳',
      title: 'Checkout Start',
      fields: [
        `Total: ${eventData.total || 'N/A'}`,
        `Currency: ${eventData.currency || 'Unknown'}`,
        `Time: ${timestamp}`
      ]
    },
    'payment_info': {
      icon: '💳',
      title: 'Payment Info Added',
      fields: [
        `Payment Method: ${eventData.paymentMethod || 'Unknown'}`,
        `Currency: ${eventData.currency || 'Unknown'}`,
        `Total: ${eventData.total || 'N/A'}`,
        `Time: ${timestamp}`
      ]
    },
    'shipping_info': {
      icon: '🚚',
      title: 'Shipping Info Added',
      fields: [
        `Country: ${eventData.country || 'Unknown'}`,
        `City: ${eventData.city || 'Unknown'}`,
        `Postal Code: ${eventData.postalCode || 'N/A'}`,
        `Shipping Method: ${eventData.shippingMethod || 'Standard'}`,
        `Time: ${timestamp}`
      ]
    },
    'alert_displayed': {
      icon: '⚠️',
      title: 'Alert Displayed',
      fields: [
        `Target: ${eventData.target || 'Unknown'}`,
        `Type: ${eventData.type || 'Unknown'}`,
        `Message: ${eventData.message || 'N/A'}`,
        `Time: ${timestamp}`
      ]
    },
    'cart_viewed': {
      icon: '🛒',
      title: 'Cart Viewed',
      fields: [
        `Total Cost: ${eventData.totalCost || 'N/A'}`,
        `Currency: ${eventData.currency || 'Unknown'}`,
        `Items Count: ${eventData.itemsCount || 0}`,
        `First Item: ${eventData.firstItemName || 'N/A'}`,
        `Time: ${timestamp}`
      ]
    },
    'checkout_address_info': {
      icon: '📍',
      title: 'Address Info Submitted',
      fields: [
        `Address: ${eventData.addressLine1 || 'N/A'}`,
        `City: ${eventData.city || 'Unknown'}`,
        `Country: ${eventData.country || 'Unknown'}`,
        `Address Line 2: ${eventData.addressLine2 || 'N/A'}`,
        `Time: ${timestamp}`
      ]
    },
    'checkout_contact_info': {
      icon: '📧',
      title: 'Contact Info Submitted',
      fields: [
        `Email: ${eventData.email || 'N/A'}`,
        `Phone: ${eventData.phone || 'N/A'}`,
        `Time: ${timestamp}`
      ]
    },
    'collection_viewed': {
      icon: '📚',
      title: 'Collection Viewed',
      fields: [
        `Collection: ${eventData.collectionTitle || 'Unknown'}`,
        `First Item Price: ${eventData.priceFirstItem || 'N/A'}`,
        `Time: ${timestamp}`
      ]
    },
    'product_removed_from_cart': {
      icon: '❌',
      title: 'Product Removed from Cart',
      fields: [
        `Product: ${eventData.productName || 'Unknown'}`,
        `Variant: ${eventData.variantTitle || 'N/A'}`,
        `Cost: ${eventData.cartLineCost || 'N/A'}`,
        `Currency: ${eventData.currency || 'Unknown'}`,
        `Time: ${timestamp}`
      ]
    },
    'search_submitted': {
      icon: '🔍',
      title: 'Search Submitted',
      fields: [
        `Query: ${eventData.searchQuery || 'Unknown'}`,
        `First Product: ${eventData.firstProductTitle || 'N/A'}`,
        `Time: ${timestamp}`
      ]
    },
    'ui_extension_errored': {
      icon: '🚨',
      title: 'UI Extension Errored',
      fields: [
        `App Name: ${eventData.appName || 'Unknown'}`,
        `App Version: ${eventData.appVersion || 'N/A'}`,
        `API Version: ${eventData.apiVersion || 'N/A'}`,
        `App ID: ${eventData.appId || 'N/A'}`,
        `Time: ${timestamp}`
      ]
    }
  };
  
  const config = eventConfigs[eventType];
  if (!config) return;
  
  const fieldsString = config.fields.join('\n');
  
  // Log moderno com cores vibrantes
  console.log(
    `%c${config.icon} MyMetricHUB - ${config.title}`,
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-weight: 600; font-size: 12px; padding: 4px 8px; border-radius: 6px;'
  );
  console.log(
    `%c${fieldsString}`,
    'color: #6366f1; font-size: 11px; line-height: 1.4; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;'
  );
  console.log(
    `%c─────────────────────────`,
    'color: #a5b4fc; font-size: 10px; opacity: 0.6;'
  );
}

// 🎯 Função centralizada para disparos do GA4
function trackGA4Event(eventName, eventData) {
  if (window.gtag) {
    window.gtag("event", eventName, eventData);
  }
}

// 📊 Função para enviar logs ao Better Stack
function sendToBetterStack(message, customerSlug, debugMode = false) {
  const timestamp = new Date().toISOString();
  
  // Incluir customer slug no início da mensagem
  const messageWithSlug = `[${customerSlug}] ${message}`;
  
  const logData = {
    dt: timestamp,
    message: messageWithSlug,
    customer: customerSlug,
    source: "mymetric-onetag-shopify"
  };

  if (debugMode) {
    console.log(
      `%c📊 Enviando log para Better Stack`,
      'color: #8b5cf6; font-size: 11px; font-weight: 500;'
    );
    console.log(`%c  Customer: ${customerSlug}`, 'color: #6366f1; font-size: 10px;');
    console.log(`%c  Message: ${messageWithSlug}`, 'color: #6366f1; font-size: 10px;');
  }

  // Enviar para Better Stack
  fetch('https://s1508317.eu-nbg-2.betterstackdata.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sed7nDCNnoGR9GYXrWebrZaP'
    },
    body: JSON.stringify(logData)
  }).catch(error => {
    if (debugMode) {
      console.error('MyMetricHUB: Erro ao enviar log para Better Stack:', error);
    }
  });
}

// 🚀 Função principal do MyMetric OneTag Shopify
function mymetric_onetag_shopify(trackingIds, customerSlug, debugMode = true) {
  // Log de inicialização
  if (debugMode) {
    console.log(
      `%c🚀 MyMetricHUB - Inicializando OneTag Shopify`,
      'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-weight: 600; font-size: 14px; padding: 6px 12px; border-radius: 8px;'
    );
    console.log(
      `%c📊 Tracking IDs recebidos: ${trackingIds.length}`,
      'color: #6366f1; font-size: 12px; font-weight: 500;'
    );
    console.log(
      `%c👤 Customer: ${customerSlug}`,
      'color: #8b5cf6; font-size: 12px; font-weight: 500;'
    );
  }

  // Enviar log de inicialização para Better Stack
  sendToBetterStack(`MyMetricHUB inicializado com ${trackingIds.length} tracking IDs`, customerSlug, debugMode);

  // Validar se trackingIds é um array
  if (!Array.isArray(trackingIds)) {
    console.error('MyMetricHUB: trackingIds deve ser um array');
    return;
  }

  // Separar IDs por tipo de ferramenta
  const ga4Ids = trackingIds.filter(id => id.startsWith('G-'));
  const metaIds = trackingIds.filter(id => id.startsWith('meta_') || id.startsWith('fb_'));
  const tiktokIds = trackingIds.filter(id => id.startsWith('tiktok_'));
  const pinterestIds = trackingIds.filter(id => id.startsWith('pinterest_') || id.startsWith('pin_'));

  // Log de separação por tipo
  if (debugMode) {
    console.log(
      `%c🔍 Análise dos IDs:`,
      'color: #8b5cf6; font-weight: 600; font-size: 12px;'
    );
    console.log(`%c  📊 GA4: ${ga4Ids.length} IDs`, 'color: #3b82f6; font-size: 11px;');
    console.log(`%c  📘 Meta: ${metaIds.length} IDs`, 'color: #1877f2; font-size: 11px;');
    console.log(`%c  🎵 TikTok: ${tiktokIds.length} IDs`, 'color: #000000; font-size: 11px;');
    console.log(`%c  📌 Pinterest: ${pinterestIds.length} IDs`, 'color: #e60023; font-size: 11px;');
  }

  // Inicializar GA4 se houver IDs
  if (ga4Ids.length > 0) {
    if (debugMode) {
      console.log(`%c✅ Inicializando GA4 com ${ga4Ids.length} ID(s)`, 'color: #10b981; font-size: 11px;');
    }
    initGA4(ga4Ids, debugMode);
  }

  // Inicializar Meta Pixel se houver IDs
  if (metaIds.length > 0) {
    if (debugMode) {
      console.log(`%c✅ Inicializando Meta Pixel com ${metaIds.length} ID(s)`, 'color: #10b981; font-size: 11px;');
    }
    initMetaPixel(metaIds, debugMode);
  }

  // Inicializar TikTok Pixel se houver IDs
  if (tiktokIds.length > 0) {
    if (debugMode) {
      console.log(`%c✅ Inicializando TikTok Pixel com ${tiktokIds.length} ID(s)`, 'color: #10b981; font-size: 11px;');
    }
    initTikTokPixel(tiktokIds, debugMode);
  }

  // Inicializar Pinterest Tag se houver IDs
  if (pinterestIds.length > 0) {
    if (debugMode) {
      console.log(`%c✅ Inicializando Pinterest Tag com ${pinterestIds.length} ID(s)`, 'color: #10b981; font-size: 11px;');
    }
    initPinterestTag(pinterestIds, debugMode);
  }

  // Configurar eventos do Shopify
  if (debugMode) {
    console.log(`%c🛍️ Configurando eventos do Shopify`, 'color: #f59e0b; font-size: 11px;');
  }
  setupShopifyEvents(debugMode, customerSlug);

  // Log de conclusão
  if (debugMode) {
    console.log(
      `%c🎉 MyMetricHUB - Inicialização concluída!`,
      'background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; font-weight: 600; font-size: 12px; padding: 4px 8px; border-radius: 6px;'
    );
  }
}

// 📊 Inicializar GA4
function initGA4(ga4Ids, debugMode = false) {
  if (debugMode) {
    console.log(`%c  📊 Carregando gtag.js para: ${ga4Ids[0]}`, 'color: #3b82f6; font-size: 10px;');
  }
  
    // Carregar gtag.js dinamicamente
    var gtagScript = document.createElement("script");
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Ids[0]}`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);
  
    // Inicializar gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag; // expõe globalmente
    gtag("js", new Date());
  
  // Configurar todos os IDs do GA4
  ga4Ids.forEach(id => {
    gtag("config", id, { send_page_view: false });
    if (debugMode) {
      console.log(`%c  ✅ GA4 configurado: ${id}`, 'color: #10b981; font-size: 10px;');
    }
  });
}

// 📘 Inicializar Meta Pixel
function initMetaPixel(metaIds, debugMode = false) {
  if (debugMode) {
    console.log(`%c  📘 Meta Pixel IDs: ${metaIds.join(', ')}`, 'color: #1877f2; font-size: 10px;');
  }
  // TODO: Implementar Meta Pixel
}

// 🎵 Inicializar TikTok Pixel
function initTikTokPixel(tiktokIds, debugMode = false) {
  if (debugMode) {
    console.log(`%c  🎵 TikTok Pixel IDs: ${tiktokIds.join(', ')}`, 'color: #000000; font-size: 10px;');
  }
  // TODO: Implementar TikTok Pixel
}

// 📌 Inicializar Pinterest Tag
function initPinterestTag(pinterestIds, debugMode = false) {
  if (debugMode) {
    console.log(`%c  📌 Pinterest Tag IDs: ${pinterestIds.join(', ')}`, 'color: #e60023; font-size: 10px;');
  }
  // TODO: Implementar Pinterest Tag
}

// 🛍️ Configurar eventos do Shopify
function setupShopifyEvents(debugMode = false, customerSlug = 'unknown') {
  if (debugMode) {
    console.log(`%c  🛍️ Configurando 13 eventos do Shopify`, 'color: #f59e0b; font-size: 10px;');
  }
    // Mapear eventos do Shopify Customer Events para GA4
    analytics.subscribe("page_viewed", (event) => {
    logMyMetricEvent('page_view', {
      location: event.context.document.location.href,
      title: event.context.document.title
    });
    
    trackGA4Event("page_view", {
        page_location: event.context.document.location.href,
        page_title: event.context.document.title
      });
    
    sendToBetterStack(`Page viewed: ${event.context.document.title}`, customerSlug, debugMode);
    });
  
    analytics.subscribe("product_viewed", (event) => {
      const product = event.data.productVariant?.product;
    
    logMyMetricEvent('product_view', {
      product: product?.title,
      brand: product?.vendor,
      price: event.data.productVariant?.price?.amount,
      category: product?.type
    });
    
    trackGA4Event("view_item", {
        items: [{
          item_id: product?.id,
          item_name: product?.title,
          item_brand: product?.vendor,
          item_category: product?.type,
          price: event.data.productVariant?.price?.amount
        }]
      });
    
    sendToBetterStack(`Product viewed: ${product?.title} - ${product?.vendor}`, customerSlug, debugMode);
    });
  
    analytics.subscribe("product_added_to_cart", (event) => {
      const cartLine = event.data.cartLine;
      const product = cartLine?.merchandise?.product;
    
    logMyMetricEvent('add_to_cart', {
      product: product?.title,
      quantity: cartLine?.quantity,
      price: cartLine?.merchandise?.price?.amount,
      total: cartLine?.cost?.totalAmount?.amount,
      variant: cartLine?.merchandise?.title
    });
  
    trackGA4Event("add_to_cart", {
        currency: cartLine?.merchandise?.price?.currencyCode,
        value: cartLine?.cost?.totalAmount?.amount,
        items: [{
          item_id: product?.id,
          item_name: product?.title,
          item_brand: product?.vendor,
          item_category: product?.type,
          item_variant: cartLine?.merchandise?.title, // ex: "36/37"
          price: cartLine?.merchandise?.price?.amount,
          quantity: cartLine?.quantity,
          sku: cartLine?.merchandise?.sku
        }]
      });
    
    sendToBetterStack(`Added to cart: ${product?.title} (${cartLine?.quantity}x) - ${cartLine?.cost?.totalAmount?.amount}`, customerSlug, debugMode);
    });
  
    analytics.subscribe("checkout_started", (event) => {
    logMyMetricEvent('checkout_start', {
      total: event.data.checkout?.totalPrice?.amount,
      currency: event.data.checkout?.currencyCode
    });
    
    trackGA4Event("begin_checkout", {
        currency: event.data.checkout?.currencyCode,
        value: event.data.checkout?.totalPrice?.amount
      });
    
    sendToBetterStack(`Checkout started: ${event.data.checkout?.totalPrice?.amount} ${event.data.checkout?.currencyCode}`, customerSlug, debugMode);
  });

  analytics.subscribe("payment_info_submitted", (event) => {
    logMyMetricEvent('payment_info', {
      paymentMethod: event.data.paymentMethod?.type || 'Unknown',
      currency: event.data.checkout?.currencyCode,
      total: event.data.checkout?.totalPrice?.amount
    });
    
    trackGA4Event("add_payment_info", {
      currency: event.data.checkout?.currencyCode,
      value: event.data.checkout?.totalPrice?.amount,
      payment_type: event.data.paymentMethod?.type
    });
    
    sendToBetterStack(`Payment info submitted: ${event.data.paymentMethod?.type} - ${event.data.checkout?.totalPrice?.amount} ${event.data.checkout?.currencyCode}`, customerSlug, debugMode);
  });

  analytics.subscribe("checkout_shipping_info_submitted", (event) => {
    logMyMetricEvent('shipping_info', {
      country: event.data.checkout?.shippingAddress?.country,
      city: event.data.checkout?.shippingAddress?.city,
      postalCode: event.data.checkout?.shippingAddress?.zip,
      shippingMethod: event.data.checkout?.shippingLine?.title || 'Standard'
    });
    
    trackGA4Event("add_shipping_info", {
      currency: event.data.checkout?.currencyCode,
      value: event.data.checkout?.totalPrice?.amount,
      shipping_tier: event.data.checkout?.shippingLine?.title
    });
    
    sendToBetterStack(`Shipping info submitted: ${event.data.checkout?.shippingAddress?.country} - ${event.data.checkout?.shippingLine?.title}`, customerSlug, debugMode);
  });

  analytics.subscribe("alert_displayed", (event) => {
    const alert = event.data.alert;
    
    logMyMetricEvent('alert_displayed', {
      target: alert?.target,
      type: alert?.type,
      message: alert?.message
    });
    
    // Enviar evento customizado para GA4
    trackGA4Event("alert_displayed", {
      alert_target: alert?.target,
      alert_type: alert?.type,
      alert_message: alert?.message
    });
    
    sendToBetterStack(`Alert displayed: ${alert?.type} - ${alert?.message} (target: ${alert?.target})`, customerSlug, debugMode);
  });

  analytics.subscribe("cart_viewed", (event) => {
    const cart = event.data.cart;
    const firstCartLine = cart?.lines?.[0];
    
    logMyMetricEvent('cart_viewed', {
      totalCost: cart?.cost?.totalAmount?.amount,
      currency: cart?.cost?.totalAmount?.currencyCode,
      itemsCount: cart?.lines?.length || 0,
      firstItemName: firstCartLine?.merchandise?.product?.title
    });
    
    trackGA4Event("view_cart", {
      currency: cart?.cost?.totalAmount?.currencyCode,
      value: cart?.cost?.totalAmount?.amount,
      items: cart?.lines?.map(line => ({
        item_id: line?.merchandise?.product?.id,
        item_name: line?.merchandise?.product?.title,
        item_brand: line?.merchandise?.product?.vendor,
        item_category: line?.merchandise?.product?.type,
        item_variant: line?.merchandise?.title,
        price: line?.merchandise?.price?.amount,
        quantity: line?.quantity
      }))
    });
    
    sendToBetterStack(`Cart viewed: ${cart?.cost?.totalAmount?.amount} ${cart?.cost?.totalAmount?.currencyCode} (${cart?.lines?.length || 0} items)`, customerSlug, debugMode);
  });

  analytics.subscribe("checkout_address_info_submitted", (event) => {
    const checkout = event.data.checkout;
    const address = checkout?.shippingAddress;
    
    logMyMetricEvent('checkout_address_info', {
      addressLine1: address?.address1,
      addressLine2: address?.address2,
      city: address?.city,
      country: address?.country
    });
    
    trackGA4Event("add_shipping_info", {
      currency: checkout?.currencyCode,
      value: checkout?.totalPrice?.amount,
      shipping_tier: checkout?.shippingLine?.title
    });
    
    sendToBetterStack(`Address info submitted: ${address?.city}, ${address?.country}`, customerSlug, debugMode);
  });

  analytics.subscribe("checkout_contact_info_submitted", (event) => {
    const checkout = event.data.checkout;
    
    logMyMetricEvent('checkout_contact_info', {
      email: checkout?.email,
      phone: checkout?.phone
    });
    
    trackGA4Event("add_contact_info", {
      currency: checkout?.currencyCode,
      value: checkout?.totalPrice?.amount
    });
    
    sendToBetterStack(`Contact info submitted: ${checkout?.email}`, customerSlug, debugMode);
  });

  analytics.subscribe("collection_viewed", (event) => {
    const collection = event.data.collection;
    const firstProduct = collection?.productVariants?.[0];
    
    logMyMetricEvent('collection_viewed', {
      collectionTitle: collection?.title,
      priceFirstItem: firstProduct?.price?.amount
    });
    
    trackGA4Event("view_item_list", {
      item_list_name: collection?.title,
      items: collection?.productVariants?.slice(0, 10).map(variant => ({
        item_id: variant?.product?.id,
        item_name: variant?.product?.title,
        item_brand: variant?.product?.vendor,
        item_category: variant?.product?.type,
        price: variant?.price?.amount
      }))
    });
    
    sendToBetterStack(`Collection viewed: ${collection?.title}`, customerSlug, debugMode);
  });

  analytics.subscribe("product_removed_from_cart", (event) => {
    const cartLine = event.data.cartLine;
    const product = cartLine?.merchandise?.product;
    
    logMyMetricEvent('product_removed_from_cart', {
      productName: product?.title,
      variantTitle: cartLine?.merchandise?.title,
      cartLineCost: cartLine?.cost?.totalAmount?.amount,
      currency: cartLine?.cost?.totalAmount?.currencyCode
    });
    
    trackGA4Event("remove_from_cart", {
      currency: cartLine?.cost?.totalAmount?.currencyCode,
      value: cartLine?.cost?.totalAmount?.amount,
      items: [{
        item_id: product?.id,
        item_name: product?.title,
        item_brand: product?.vendor,
        item_category: product?.type,
        item_variant: cartLine?.merchandise?.title,
        price: cartLine?.merchandise?.price?.amount,
        quantity: cartLine?.quantity
      }]
    });
    
    sendToBetterStack(`Product removed from cart: ${product?.title} - ${cartLine?.cost?.totalAmount?.amount} ${cartLine?.cost?.totalAmount?.currencyCode}`, customerSlug, debugMode);
  });

  analytics.subscribe("search_submitted", (event) => {
    const searchResult = event.data.searchResult;
    const firstProduct = searchResult?.productVariants?.[0];
    
    logMyMetricEvent('search_submitted', {
      searchQuery: searchResult?.query,
      firstProductTitle: firstProduct?.product?.title
    });
    
    trackGA4Event("search", {
      search_term: searchResult?.query,
      items: searchResult?.productVariants?.slice(0, 10).map(variant => ({
        item_id: variant?.product?.id,
        item_name: variant?.product?.title,
        item_brand: variant?.product?.vendor,
        item_category: variant?.product?.type,
        price: variant?.price?.amount
      }))
    });
    
    sendToBetterStack(`Search submitted: "${searchResult?.query}"`, customerSlug, debugMode);
  });

  analytics.subscribe("ui_extension_errored", (event) => {
    const alert = event.data.alert;
    
    logMyMetricEvent('ui_extension_errored', {
      appName: alert?.appName,
      appVersion: alert?.appVersion,
      apiVersion: alert?.apiVersion,
      appId: alert?.appId
    });
    
    trackGA4Event("exception", {
      description: `UI Extension Error: ${alert?.appName} v${alert?.appVersion}`,
      fatal: false
    });
    
    sendToBetterStack(`UI Extension Error: ${alert?.appName} v${alert?.appVersion} (${alert?.appId})`, customerSlug, debugMode);
  });
}

// ---- Inicialização automática (apenas GA4 por enquanto):
mymetric_onetag_shopify([
  "G-0JR4HXQK0K"           // GA4 ID
], "linus", true); // customerSlug, debugMode