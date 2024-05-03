// Lightbox
window.State = {
	isInit: false,
	isOpen: false,
	iataPaymentId: '',
	openDialog: function() {
		State.isOpen = true;
		Lightbox.view();
	},
	closeDialog: function() {
		State.isOpen = false;
		State.iataPaymentId = '';
		Lightbox.view();
	},
	initDialog: function() {
		if (!State.isInit) {
			Lightbox.init();
			State.isInit = true;
		}
	}
}

window.Lightbox = {
  path: '',
  isMobile: false,
  loadStyle: function (href, callback) {
    // avoid duplicates
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].href == href) {
        return;
      }
    }
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    if (callback) {
      link.onload = function () {
        callback();
      };
    }
    if (head) {
      head.appendChild(link);
    }
  },
  init: function () {
    Lightbox.isMobile = Lightbox.mobileCheck();
    const script = document.getElementById('iatapay-lightbox');
    if (script) {
      Lightbox.path = new URL(script.src).origin;
    }
    Lightbox.loadStyle(
      `${Lightbox.path}/iatapay-lightbox/iatapay-lightbox.css`,
      null
    );

    const body = document.getElementsByTagName('body')[0];

    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'iatapay-modal');
    var modalCls = State.isOpen
      ? 'iatapay-modal iatapay-modal-shown'
      : 'iatapay-modal iatapay-modal-hidden';
    divElement.innerHTML = `<span class="loading"></span><div id="iatapay-modal-container" class="${modalCls}"></div>`;
    if (body) {
      body.appendChild(divElement);
    }
  },
  view: function () {
    try {
      const [body] = document.getElementsByTagName('body');
      if (!body) throw new Error('Body was not found');
      body.style.setProperty('overflow', getExternalBodyOverflow(State.isOpen));
    } catch (error) {
      console.error(error);
    }

    const container = document.getElementById('iatapay-modal-container');
    if (!container) return;

    const modalCls = State.isOpen
      ? 'iatapay-modal iatapay-modal-shown'
      : 'iatapay-modal iatapay-modal-hidden';
    container.setAttribute('class', modalCls);

    if (!State.isOpen) {
      container.innerHTML = '';
      return;
    }

    const hostname =
      Lightbox.path + (!Lightbox.path.includes('localhost') ? '/web' : '');
    const iframeUrl = `${hostname}/checkout?iataPaymentId=${State.iataPaymentId}&mode=lightbox`;
    const iframe = Lightbox.createIframe(iframeUrl);
    container.appendChild(iframe);
  },
  mobileCheck: function () {
    const isAgentMobile = a =>
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      );

    const agent = navigator.userAgent || navigator.vendor || window.opera;
    return isAgentMobile(agent);
  },
  createIframe: function (iframeUrl) {
    var iframe = document.createElement('iframe');
    iframe.id = 'iatapay-lightbox-iframe';
    iframe.src = iframeUrl;
    iframe.sandbox.add('allow-top-navigation');
    iframe.sandbox.add('allow-top-navigation-by-user-activation');
    iframe.sandbox.add('allow-scripts');
    iframe.sandbox.add('allow-forms');
    iframe.sandbox.add('allow-same-origin');
    iframe.sandbox.add('allow-popups');
    iframe.sandbox.add('allow-popups-to-escape-sandbox');
    iframe.classList.add('iatapay-iframe');
    iframe.style.border = '0';

    if (!Lightbox.isMobile) {
      iframe.classList.add('desktop');
    }
    return iframe;
  },
  createScript: function (id, scriptUrl, load) {
    var script = document.createElement('script');
    script.id = id;
    script.src = scriptUrl;
    var lightbox = document.getElementById('iatapay-lightbox');
    lightbox.parentNode.insertBefore(script, lightbox);
    if (load) {
      script.onload = function () {
        load();
      };
    }
  },
};

function receiveMessage(event) {
	console.log('Message: ', JSON.stringify(event.data));
	if (event.data.origin === 'pay-payment' || event.data.origin === 'pay-checkout-web') {
		if (event.data.name === 'close') { State.closeDialog(); }
		else if (event.data.name === 'status') {
			console.log("Status received: ", JSON.stringify(event.data.status));
			notifyStatus(event.data.status); 
		} else if (event.data.name === 'redirect') {
			var iframe = document.getElementById('iatapay-lightbox-iframe');
			if (iframe) {
				var url = event.data.url;
				if (!event.data.external) { url += ((event.data.url.includes("?") ? '&' : '?')  + 'mode=lightbox'); }
				console.log("Setting iframe src to ", url);				
				iframe.src = url;
			}
		} else if (event.data.name === 'resize') {
			if (!Lightbox.isMobile) { document.getElementById('iatapay-lightbox-iframe').style.height = event.data.height + 'px'; }
		}
	}
}
window.addEventListener("message", receiveMessage, false);

function notifyStatus(status) {
	const statusTimeout = setTimeout(function() { 
		if (typeof iatapayNotify === 'function') { iatapayNotify(status); } 
		clearTimeout(statusTimeout);
	}, 200);
}

function checkout(payment) {
	State.initDialog();
	State.iataPaymentId = payment.iataPaymentId;
	State.openDialog();
}

function getExternalBodyOverflow(isOpen = false) {
  return isOpen ? 'hidden' : 'initial';
}
