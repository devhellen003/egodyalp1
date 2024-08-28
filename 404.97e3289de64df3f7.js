(self.webpackChunkapp_PlayDoge = self.webpackChunkapp_PlayDoge || []).push([
    [404], {
        6010: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CoinbaseWalletSDK = void 0;
            const t = p(5605),
                y = p(9394),
                c = p(2329),
                d = p(7260),
                i = p(1579),
                r = p(2163),
                e = p(5129),
                a = p(3483),
                g = p(7144),
                l = p(4587),
                v = p(7938);
            class s {
                constructor(u) {
                    var m, _, E;
                    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
                    const M = u.linkAPIUrl || y.LINK_API_URL;
                    this._overrideIsMetaMask = !(typeof u.overrideIsMetaMask > "u") && u.overrideIsMetaMask, this._overrideIsCoinbaseWallet = null === (m = u.overrideIsCoinbaseWallet) || void 0 === m || m, this._overrideIsCoinbaseBrowser = null !== (_ = u.overrideIsCoinbaseBrowser) && void 0 !== _ && _, this._diagnosticLogger = u.diagnosticLogger, this._reloadOnDisconnect = null === (E = u.reloadOnDisconnect) || void 0 === E || E;
                    const w = new URL(M);
                    if (this._storage = new d.ScopedLocalStorage(`-walletlink:${w.protocol}//${w.host}`), this._storage.setItem("version", s.VERSION), this.walletExtension || this.coinbaseBrowser) return;
                    this._relayEventManager = new a.RelayEventManager;
                    const x = (0, c.isMobileWeb)(),
                        z = {
                            linkAPIUrl: M,
                            version: v.LIB_VERSION,
                            darkMode: !!u.darkMode,
                            headlessMode: !!u.headlessMode,
                            uiConstructor: u.uiConstructor || (W => x ? new e.MobileRelayUI(W) : new g.WalletLinkRelayUI(W)),
                            storage: this._storage,
                            relayEventManager: this._relayEventManager,
                            diagnosticLogger: this._diagnosticLogger,
                            reloadOnDisconnect: this._reloadOnDisconnect,
                            enableMobileWalletLink: u.enableMobileWalletLink
                        };
                    this._relay = x ? new r.MobileRelay(z) : new l.WalletLinkRelay(z), this.setAppInfo(u.appName, u.appLogoUrl), !u.headlessMode && this._relay.attachUI()
                }
                makeWeb3Provider(u = "", m = 1) {
                    const _ = this.walletExtension;
                    if (_) return this.isCipherProvider(_) || _.setProviderInfo(u, m), !1 === this._reloadOnDisconnect && "function" == typeof _.disableReloadOnDisconnect && _.disableReloadOnDisconnect(), _;
                    const E = this.coinbaseBrowser;
                    if (E) return E;
                    const M = this._relay;
                    if (!M || !this._relayEventManager || !this._storage) throw new Error("Relay not initialized, should never happen");
                    return u || M.setConnectDisabled(!0), new i.CoinbaseWalletProvider({
                        relayProvider: () => Promise.resolve(M),
                        relayEventManager: this._relayEventManager,
                        storage: this._storage,
                        jsonRpcUrl: u,
                        chainId: m,
                        qrUrl: this.getQrUrl(),
                        diagnosticLogger: this._diagnosticLogger,
                        overrideIsMetaMask: this._overrideIsMetaMask,
                        overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
                        overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
                    })
                }
                setAppInfo(u, m) {
                    var _;
                    this._appName = u || "DApp", this._appLogoUrl = m || (0, c.getFavicon)();
                    const E = this.walletExtension;
                    E ? this.isCipherProvider(E) || E.setAppInfo(this._appName, this._appLogoUrl) : null === (_ = this._relay) || void 0 === _ || _.setAppInfo(this._appName, this._appLogoUrl)
                }
                disconnect() {
                    var u;
                    const m = null == this ? void 0 : this.walletExtension;
                    m ? m.close() : null === (u = this._relay) || void 0 === u || u.resetAndReload()
                }
                getQrUrl() {
                    var u, m;
                    return null !== (m = null === (u = this._relay) || void 0 === u ? void 0 : u.getQRCodeUrl()) && void 0 !== m ? m : null
                }
                getCoinbaseWalletLogo(u, m = 240) {
                    return (0, t.walletLogo)(u, m)
                }
                get walletExtension() {
                    var u;
                    return null !== (u = window.coinbaseWalletExtension) && void 0 !== u ? u : window.walletLinkExtension
                }
                get coinbaseBrowser() {
                    var u, m;
                    try {
                        const _ = null !== (u = window.ethereum) && void 0 !== u ? u : null === (m = window.top) || void 0 === m ? void 0 : m.ethereum;
                        return _ && "isCoinbaseBrowser" in _ && _.isCoinbaseBrowser ? _ : void 0
                    } catch {
                        return
                    }
                }
                isCipherProvider(u) {
                    return "boolean" == typeof u.isCipher && u.isCipher
                }
            }
            o.CoinbaseWalletSDK = s, s.VERSION = v.LIB_VERSION
        },
        5605: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.walletLogo = void 0, o.walletLogo = (t, y) => {
                let c;
                switch (t) {
                    case "standard":
                    default:
                        return c = y, `data:image/svg+xml,%3Csvg width='${y}' height='${c}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
                    case "circle":
                        return c = y, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${y}' height='${c}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
                    case "text":
                        return c = (.1 * y).toFixed(2), `data:image/svg+xml,%3Csvg width='${y}' height='${c}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogo":
                        return c = (.25 * y).toFixed(2), `data:image/svg+xml,%3Csvg width='${y}' height='${c}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
                    case "textLight":
                        return c = (.1 * y).toFixed(2), `data:image/svg+xml,%3Csvg width='${y}' height='${c}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogoLight":
                        return c = (.25 * y).toFixed(2), `data:image/svg+xml,%3Csvg width='${y}' height='${c}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
                }
            }
        },
        9394: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.LINK_API_URL = void 0, o.LINK_API_URL = "https://www.walletlink.org"
        },
        2564: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.errorValues = o.standardErrorCodes = void 0, o.standardErrorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901,
                    unsupportedChain: 4902
                }
            }, o.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                },
                4902: {
                    standard: "EIP-3085",
                    message: "Unrecognized chain ID."
                }
            }
        },
        6609: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.standardErrors = void 0;
            const t = p(2564),
                y = p(5112);

            function c(g, l) {
                const [v, s] = i(l);
                return new r(g, v || (0, y.getMessageFromCode)(g), s)
            }

            function d(g, l) {
                const [v, s] = i(l);
                return new e(g, v || (0, y.getMessageFromCode)(g), s)
            }

            function i(g) {
                if (g) {
                    if ("string" == typeof g) return [g];
                    if ("object" == typeof g && !Array.isArray(g)) {
                        const {
                            message: l,
                            data: v
                        } = g;
                        if (l && "string" != typeof l) throw new Error("Must specify string message.");
                        return [l || void 0, v]
                    }
                }
                return []
            }
            o.standardErrors = {
                rpc: {
                    parse: g => c(t.standardErrorCodes.rpc.parse, g),
                    invalidRequest: g => c(t.standardErrorCodes.rpc.invalidRequest, g),
                    invalidParams: g => c(t.standardErrorCodes.rpc.invalidParams, g),
                    methodNotFound: g => c(t.standardErrorCodes.rpc.methodNotFound, g),
                    internal: g => c(t.standardErrorCodes.rpc.internal, g),
                    server: g => {
                        if (!g || "object" != typeof g || Array.isArray(g)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
                        const {
                            code: l
                        } = g;
                        if (!Number.isInteger(l) || l > -32005 || l < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return c(l, g)
                    },
                    invalidInput: g => c(t.standardErrorCodes.rpc.invalidInput, g),
                    resourceNotFound: g => c(t.standardErrorCodes.rpc.resourceNotFound, g),
                    resourceUnavailable: g => c(t.standardErrorCodes.rpc.resourceUnavailable, g),
                    transactionRejected: g => c(t.standardErrorCodes.rpc.transactionRejected, g),
                    methodNotSupported: g => c(t.standardErrorCodes.rpc.methodNotSupported, g),
                    limitExceeded: g => c(t.standardErrorCodes.rpc.limitExceeded, g)
                },
                provider: {
                    userRejectedRequest: g => d(t.standardErrorCodes.provider.userRejectedRequest, g),
                    unauthorized: g => d(t.standardErrorCodes.provider.unauthorized, g),
                    unsupportedMethod: g => d(t.standardErrorCodes.provider.unsupportedMethod, g),
                    disconnected: g => d(t.standardErrorCodes.provider.disconnected, g),
                    chainDisconnected: g => d(t.standardErrorCodes.provider.chainDisconnected, g),
                    unsupportedChain: g => d(t.standardErrorCodes.provider.unsupportedChain, g),
                    custom: g => {
                        if (!g || "object" != typeof g || Array.isArray(g)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
                        const {
                            code: l,
                            message: v,
                            data: s
                        } = g;
                        if (!v || "string" != typeof v) throw new Error('"message" must be a nonempty string');
                        return new e(l, v, s)
                    }
                }
            };
            class r extends Error {
                constructor(l, v, s) {
                    if (!Number.isInteger(l)) throw new Error('"code" must be an integer.');
                    if (!v || "string" != typeof v) throw new Error('"message" must be a nonempty string.');
                    super(v), this.code = l, void 0 !== s && (this.data = s)
                }
            }
            class e extends r {
                constructor(l, v, s) {
                    if (! function a(g) {
                            return Number.isInteger(g) && g >= 1e3 && g <= 4999
                        }(l)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(l, v, s)
                }
            }
        },
        3311: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.standardErrors = o.standardErrorCodes = o.serializeError = o.getMessageFromCode = o.getErrorCode = void 0;
            const t = p(2564);
            Object.defineProperty(o, "standardErrorCodes", {
                enumerable: !0,
                get: function() {
                    return t.standardErrorCodes
                }
            });
            const y = p(6609);
            Object.defineProperty(o, "standardErrors", {
                enumerable: !0,
                get: function() {
                    return y.standardErrors
                }
            });
            const c = p(3008);
            Object.defineProperty(o, "serializeError", {
                enumerable: !0,
                get: function() {
                    return c.serializeError
                }
            });
            const d = p(5112);
            Object.defineProperty(o, "getErrorCode", {
                enumerable: !0,
                get: function() {
                    return d.getErrorCode
                }
            }), Object.defineProperty(o, "getMessageFromCode", {
                enumerable: !0,
                get: function() {
                    return d.getMessageFromCode
                }
            })
        },
        3008: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.serializeError = void 0;
            const t = p(8315),
                y = p(7938),
                c = p(2564),
                d = p(5112);
            o.serializeError = function i(a, g) {
                const l = (0, d.serialize)(function r(a) {
                        return "string" == typeof a ? {
                            message: a,
                            code: c.standardErrorCodes.rpc.internal
                        } : (0, t.isErrorResponse)(a) ? Object.assign(Object.assign({}, a), {
                            message: a.errorMessage,
                            code: a.errorCode,
                            data: {
                                method: a.method
                            }
                        }) : a
                    }(a), {
                        shouldIncludeStack: !0
                    }),
                    v = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
                v.searchParams.set("version", y.LIB_VERSION), v.searchParams.set("code", l.code.toString());
                const s = function e(a, g) {
                    const l = a ? .method;
                    if (l) return l;
                    if (void 0 !== g) {
                        if ("string" == typeof g) return g;
                        if (!Array.isArray(g)) return g.method;
                        if (g.length > 0) return g[0].method
                    }
                }(l.data, g);
                return s && v.searchParams.set("method", s), v.searchParams.set("message", l.message), Object.assign(Object.assign({}, l), {
                    docUrl: v.href
                })
            }
        },
        5112: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.serialize = o.getErrorCode = o.isValidCode = o.getMessageFromCode = o.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            const t = p(2564),
                y = "Unspecified error message.";

            function c(s, n = y) {
                if (s && Number.isInteger(s)) {
                    const u = s.toString();
                    if (l(t.errorValues, u)) return t.errorValues[u].message;
                    if (a(s)) return o.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return n
            }

            function d(s) {
                if (!Number.isInteger(s)) return !1;
                const n = s.toString();
                return !(!t.errorValues[n] && !a(s))
            }

            function a(s) {
                return s >= -32099 && s <= -32e3
            }

            function g(s) {
                return s && "object" == typeof s && !Array.isArray(s) ? Object.assign({}, s) : s
            }

            function l(s, n) {
                return Object.prototype.hasOwnProperty.call(s, n)
            }

            function v(s, n) {
                return "object" == typeof s && null !== s && n in s && "string" == typeof s[n]
            }
            o.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", o.getMessageFromCode = c, o.isValidCode = d, o.getErrorCode = function i(s) {
                var n;
                return "number" == typeof s ? s : function r(s) {
                    return "object" == typeof s && null !== s && ("number" == typeof s.code || "number" == typeof s.errorCode)
                }(s) ? null !== (n = s.code) && void 0 !== n ? n : s.errorCode : void 0
            }, o.serialize = function e(s, {
                shouldIncludeStack: n = !1
            } = {}) {
                const u = {};
                if (s && "object" == typeof s && !Array.isArray(s) && l(s, "code") && d(s.code)) {
                    const m = s;
                    u.code = m.code, m.message && "string" == typeof m.message ? (u.message = m.message, l(m, "data") && (u.data = m.data)) : (u.message = c(u.code), u.data = {
                        originalError: g(s)
                    })
                } else u.code = t.standardErrorCodes.rpc.internal, u.message = v(s, "message") ? s.message : y, u.data = {
                    originalError: g(s)
                };
                return n && (u.stack = v(s, "stack") ? s.stack : void 0), u
            }
        },
        8737: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ProviderType = o.RegExpString = o.IntNumber = o.BigIntString = o.AddressString = o.HexString = o.OpaqueType = void 0, o.OpaqueType = function p() {
                return c => c
            }, o.HexString = c => c, o.AddressString = c => c, o.BigIntString = c => c, o.IntNumber = function t(c) {
                return Math.floor(c)
            }, o.RegExpString = c => c;
            var y = function(c) {
                return c.CoinbaseWallet = "CoinbaseWallet", c.MetaMask = "MetaMask", c.Unselected = "", c
            }(y || (o.ProviderType = y = {}))
        },
        2329: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(I) {
                return I && I.__esModule ? I : {
                    default: I
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.isMobileWeb = o.getLocation = o.isInIFrame = o.createQrUrl = o.getFavicon = o.range = o.isBigNumber = o.ensureParsedJSONObject = o.ensureBN = o.ensureRegExpString = o.ensureIntNumber = o.ensureBuffer = o.ensureAddressString = o.ensureEvenLengthHexString = o.ensureHexString = o.isHexString = o.prepend0x = o.strip0x = o.has0xPrefix = o.hexStringFromIntNumber = o.intNumberFromHexString = o.bigIntStringFromBN = o.hexStringFromBuffer = o.hexStringToUint8Array = o.uint8ArrayToHex = o.randomBytesHex = void 0;
            const y = t(p(2662)),
                c = p(3311),
                d = p(8737),
                i = /^[0-9]*$/,
                r = /^[a-f0-9]*$/;

            function a(I) {
                return [...I].map(T => T.toString(16).padStart(2, "0")).join("")
            }

            function u(I) {
                return I.startsWith("0x") || I.startsWith("0X")
            }

            function m(I) {
                return u(I) ? I.slice(2) : I
            }

            function _(I) {
                return u(I) ? `0x${I.slice(2)}` : `0x${I}`
            }

            function E(I) {
                if ("string" != typeof I) return !1;
                const T = m(I).toLowerCase();
                return r.test(T)
            }

            function M(I, T = !1) {
                if ("string" == typeof I) {
                    const k = m(I).toLowerCase();
                    if (r.test(k)) return (0, d.HexString)(T ? `0x${k}` : k)
                }
                throw c.standardErrors.rpc.invalidParams(`"${String(I)}" is not a hexadecimal string`)
            }

            function w(I, T = !1) {
                let k = M(I, !1);
                return k.length % 2 == 1 && (k = (0, d.HexString)(`0${k}`)), T ? (0, d.HexString)(`0x${k}`) : k
            }

            function N(I) {
                if ("number" == typeof I && Number.isInteger(I)) return (0, d.IntNumber)(I);
                if ("string" == typeof I) {
                    if (i.test(I)) return (0, d.IntNumber)(Number(I));
                    if (E(I)) return (0, d.IntNumber)(new y.default(w(I, !1), 16).toNumber())
                }
                throw c.standardErrors.rpc.invalidParams(`Not an integer: ${String(I)}`)
            }

            function ne(I) {
                if (null == I || "function" != typeof I.constructor) return !1;
                const {
                    constructor: T
                } = I;
                return "function" == typeof T.config && "number" == typeof T.EUCLID
            }

            function D() {
                try {
                    return null !== window.frameElement
                } catch {
                    return !1
                }
            }
            o.randomBytesHex = function e(I) {
                return a(crypto.getRandomValues(new Uint8Array(I)))
            }, o.uint8ArrayToHex = a, o.hexStringToUint8Array = function g(I) {
                return new Uint8Array(I.match(/.{1,2}/g).map(T => parseInt(T, 16)))
            }, o.hexStringFromBuffer = function l(I, T = !1) {
                const k = I.toString("hex");
                return (0, d.HexString)(T ? `0x${k}` : k)
            }, o.bigIntStringFromBN = function v(I) {
                return (0, d.BigIntString)(I.toString(10))
            }, o.intNumberFromHexString = function s(I) {
                return (0, d.IntNumber)(new y.default(w(I, !1), 16).toNumber())
            }, o.hexStringFromIntNumber = function n(I) {
                return (0, d.HexString)(`0x${new y.default(I).toString(16)}`)
            }, o.has0xPrefix = u, o.strip0x = m, o.prepend0x = _, o.isHexString = E, o.ensureHexString = M, o.ensureEvenLengthHexString = w, o.ensureAddressString = function A(I) {
                if ("string" == typeof I) {
                    const T = m(I).toLowerCase();
                    if (E(T) && 40 === T.length) return (0, d.AddressString)(_(T))
                }
                throw c.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(I)}`)
            }, o.ensureBuffer = function x(I) {
                if (Buffer.isBuffer(I)) return I;
                if ("string" == typeof I) {
                    if (E(I)) {
                        const T = w(I, !1);
                        return Buffer.from(T, "hex")
                    }
                    return Buffer.from(I, "utf8")
                }
                throw c.standardErrors.rpc.invalidParams(`Not binary data: ${String(I)}`)
            }, o.ensureIntNumber = N, o.ensureRegExpString = function z(I) {
                if (I instanceof RegExp) return (0, d.RegExpString)(I.toString());
                throw c.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(I)}`)
            }, o.ensureBN = function W(I) {
                if (null !== I && (y.default.isBN(I) || ne(I))) return new y.default(I.toString(10), 10);
                if ("number" == typeof I) return new y.default(N(I));
                if ("string" == typeof I) {
                    if (i.test(I)) return new y.default(I, 10);
                    if (E(I)) return new y.default(w(I, !1), 16)
                }
                throw c.standardErrors.rpc.invalidParams(`Not an integer: ${String(I)}`)
            }, o.ensureParsedJSONObject = function K(I) {
                if ("string" == typeof I) return JSON.parse(I);
                if ("object" == typeof I) return I;
                throw c.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(I)}`)
            }, o.isBigNumber = ne, o.range = function se(I, T) {
                return Array.from({
                    length: T - I
                }, (k, O) => I + O)
            }, o.getFavicon = function le() {
                const I = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
                    {
                        protocol: T,
                        host: k
                    } = document.location,
                    O = I ? I.getAttribute("href") : null;
                return !O || O.startsWith("javascript:") || O.startsWith("vbscript:") ? null : O.startsWith("http://") || O.startsWith("https://") || O.startsWith("data:") ? O : O.startsWith("//") ? T + O : `${T}//${k}${O}`
            }, o.createQrUrl = function pe(I, T, k, O, U, P) {
                return `${k}/#/link?${new URLSearchParams({[O?"parent-id":"id"]:I,secret:T,server:k,v:U,chainId:P.toString()}).toString()}`
            }, o.isInIFrame = D, o.getLocation = function h() {
                try {
                    return D() && window.top ? window.top.location : window.location
                } catch {
                    return window.location
                }
            }, o.isMobileWeb = function C() {
                var I;
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (I = window ? .navigator) || void 0 === I ? void 0 : I.userAgent)
            }
        },
        9404: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CoinbaseWalletProvider = o.CoinbaseWalletSDK = void 0;
            const t = p(6010),
                y = p(1579);
            var c = p(6010);
            Object.defineProperty(o, "CoinbaseWalletSDK", {
                enumerable: !0,
                get: function() {
                    return c.CoinbaseWalletSDK
                }
            });
            var d = p(1579);
            Object.defineProperty(o, "CoinbaseWalletProvider", {
                enumerable: !0,
                get: function() {
                    return d.CoinbaseWalletProvider
                }
            }), o.default = t.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = t.CoinbaseWalletSDK, window.CoinbaseWalletProvider = y.CoinbaseWalletProvider, window.WalletLink = t.CoinbaseWalletSDK, window.WalletLinkProvider = y.CoinbaseWalletProvider)
        },
        8048: ($, o, p) => {
            "use strict";
            var t = p(7156).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.Cipher = void 0;
            const y = p(2329);
            o.Cipher = class c {
                constructor(i) {
                    this.secret = i
                }
                encrypt(i) {
                    var r = this;
                    return t(function*() {
                        const e = r.secret;
                        if (64 !== e.length) throw Error("secret must be 256 bits");
                        const a = crypto.getRandomValues(new Uint8Array(12)),
                            g = yield crypto.subtle.importKey("raw", (0, y.hexStringToUint8Array)(e), {
                                name: "aes-gcm"
                            }, !1, ["encrypt", "decrypt"]), l = new TextEncoder, v = yield window.crypto.subtle.encrypt({
                                name: "AES-GCM",
                                iv: a
                            }, g, l.encode(i)), n = v.slice(v.byteLength - 16), u = v.slice(0, v.byteLength - 16), m = new Uint8Array(n), _ = new Uint8Array(u), E = new Uint8Array([...a, ...m, ..._]);
                        return (0, y.uint8ArrayToHex)(E)
                    })()
                }
                decrypt(i) {
                    var r = this;
                    return t(function*() {
                        const e = r.secret;
                        if (64 !== e.length) throw Error("secret must be 256 bits");
                        return new Promise((a, g) => {
                            t(function*() {
                                const l = yield crypto.subtle.importKey("raw", (0, y.hexStringToUint8Array)(e), {
                                    name: "aes-gcm"
                                }, !1, ["encrypt", "decrypt"]), v = (0, y.hexStringToUint8Array)(i), s = v.slice(0, 12), n = v.slice(12, 28), u = v.slice(28), m = new Uint8Array([...u, ...n]), _ = {
                                    name: "AES-GCM",
                                    iv: new Uint8Array(s)
                                };
                                try {
                                    const E = yield window.crypto.subtle.decrypt(_, l, m), M = new TextDecoder;
                                    a(M.decode(E))
                                } catch (E) {
                                    g(E)
                                }
                            })()
                        })
                    })()
                }
            }
        },
        7260: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ScopedLocalStorage = void 0, o.ScopedLocalStorage = class p {
                constructor(y) {
                    this.scope = y
                }
                setItem(y, c) {
                    localStorage.setItem(this.scopedKey(y), c)
                }
                getItem(y) {
                    return localStorage.getItem(this.scopedKey(y))
                }
                removeItem(y) {
                    localStorage.removeItem(this.scopedKey(y))
                }
                clear() {
                    const y = this.scopedKey(""),
                        c = [];
                    for (let d = 0; d < localStorage.length; d++) {
                        const i = localStorage.key(d);
                        "string" == typeof i && i.startsWith(y) && c.push(i)
                    }
                    c.forEach(d => localStorage.removeItem(d))
                }
                scopedKey(y) {
                    return `${this.scope}:${y}`
                }
            }
        },
        3187: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
        },
        8070: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.injectCssReset = void 0;
            const y = t(p(3187));
            o.injectCssReset = function c() {
                const d = document.createElement("style");
                d.type = "text/css", d.appendChild(document.createTextNode(y.default)), document.documentElement.appendChild(d)
            }
        },
        1579: function($, o, p) {
            "use strict";
            var t = p(7156).default,
                y = this && this.__importDefault || function(M) {
                    return M && M.__esModule ? M : {
                        default: M
                    }
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CoinbaseWalletProvider = void 0;
            const c = y(p(2662)),
                d = p(9424),
                i = p(3311),
                r = p(2329),
                e = p(2163),
                a = p(8561),
                g = p(6293),
                l = p(8315),
                v = y(p(3348)),
                s = p(6480),
                n = p(4016),
                u = p(2506),
                m = "DefaultChainId",
                _ = "DefaultJsonRpcUrl";
            o.CoinbaseWalletProvider = class E extends d.EventEmitter {
                constructor(w) {
                    var A, x;
                    super(), this._filterPolyfill = new n.FilterPolyfill(this), this._subscriptionManager = new u.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = w.chainId, this._jsonRpcUrlFromOpts = w.jsonRpcUrl, this._overrideIsMetaMask = w.overrideIsMetaMask, this._relayProvider = w.relayProvider, this._storage = w.storage, this._relayEventManager = w.relayEventManager, this.diagnostic = w.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = null === (A = w.overrideIsCoinbaseWallet) || void 0 === A || A, this.isCoinbaseBrowser = null !== (x = w.overrideIsCoinbaseBrowser) && void 0 !== x && x, this.qrUrl = w.qrUrl;
                    const N = this.getChainId(),
                        z = (0, r.prepend0x)(N.toString(16));
                    this.emit("connect", {
                        chainIdStr: z
                    });
                    const W = this._storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
                    if (W) {
                        const K = W.split(" ");
                        "" !== K[0] && (this._addresses = K.map(ne => (0, r.ensureAddressString)(ne)), this.emit("accountsChanged", K))
                    }
                    this._subscriptionManager.events.on("notification", K => {
                        this.emit("message", {
                            type: K.method,
                            data: K.params
                        })
                    }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", K => {
                        var ne;
                        if (K.origin === location.origin && K.source === window && "walletLinkMessage" === K.data.type && "dappChainSwitched" === K.data.data.action) {
                            const le = null !== (ne = K.data.data.jsonRpcUrl) && void 0 !== ne ? ne : this.jsonRpcUrl;
                            this.updateProviderInfo(le, Number(K.data.data.chainId))
                        }
                    })
                }
                get selectedAddress() {
                    return this._addresses[0] || void 0
                }
                get networkVersion() {
                    return this.getChainId().toString(10)
                }
                get chainId() {
                    return (0, r.prepend0x)(this.getChainId().toString(16))
                }
                get isWalletLink() {
                    return !0
                }
                get isMetaMask() {
                    return this._overrideIsMetaMask
                }
                get host() {
                    return this.jsonRpcUrl
                }
                get connected() {
                    return !0
                }
                isConnected() {
                    return !0
                }
                get jsonRpcUrl() {
                    var w;
                    return null !== (w = this._storage.getItem(_)) && void 0 !== w ? w : this._jsonRpcUrlFromOpts
                }
                set jsonRpcUrl(w) {
                    this._storage.setItem(_, w)
                }
                disableReloadOnDisconnect() {
                    this.reloadOnDisconnect = !1
                }
                setProviderInfo(w, A) {
                    this.isCoinbaseBrowser || (this._chainIdFromOpts = A, this._jsonRpcUrlFromOpts = w), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId())
                }
                updateProviderInfo(w, A) {
                    this.jsonRpcUrl = w;
                    const x = this.getChainId();
                    this._storage.setItem(m, A.toString(10)), ((0, r.ensureIntNumber)(A) !== x || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0)
                }
                watchAsset(w, A, x, N, z, W) {
                    var K = this;
                    return t(function*() {
                        const se = yield(yield K.initializeRelay()).watchAsset(w, A, x, N, z, W ? .toString()).promise;
                        return !(0, l.isErrorResponse)(se) && !!se.result
                    })()
                }
                addEthereumChain(w, A, x, N, z, W) {
                    var K = this;
                    return t(function*() {
                        var ne, se;
                        if ((0, r.ensureIntNumber)(w) === K.getChainId()) return !1;
                        const le = yield K.initializeRelay(), pe = le.inlineAddEthereumChain(w.toString());
                        !K._isAuthorized() && !pe && (yield le.requestEthereumAccounts().promise);
                        const D = yield le.addEthereumChain(w.toString(), A, z, x, N, W).promise;
                        return !(0, l.isErrorResponse)(D) && (!0 === (null === (ne = D.result) || void 0 === ne ? void 0 : ne.isApproved) && K.updateProviderInfo(A[0], w), !0 === (null === (se = D.result) || void 0 === se ? void 0 : se.isApproved))
                    })()
                }
                switchEthereumChain(w) {
                    var A = this;
                    return t(function*() {
                        const N = yield(yield A.initializeRelay()).switchEthereumChain(w.toString(10), A.selectedAddress || void 0).promise;
                        if ((0, l.isErrorResponse)(N)) {
                            if (!N.errorCode) return;
                            throw N.errorCode === i.standardErrorCodes.provider.unsupportedChain ? i.standardErrors.provider.unsupportedChain() : i.standardErrors.provider.custom({
                                message: N.errorMessage,
                                code: N.errorCode
                            })
                        }
                        const z = N.result;
                        z.isApproved && z.rpcUrl.length > 0 && A.updateProviderInfo(z.rpcUrl, w)
                    })()
                }
                setAppInfo(w, A) {
                    this.initializeRelay().then(x => x.setAppInfo(w, A))
                }
                enable() {
                    var w = this;
                    return t(function*() {
                        var A;
                        return null === (A = w.diagnostic) || void 0 === A || A.log(s.EVENTS.ETH_ACCOUNTS_STATE, {
                            method: "provider::enable",
                            addresses_length: w._addresses.length,
                            sessionIdHash: w._relay ? g.Session.hash(w._relay.session.id) : void 0
                        }), w._isAuthorized() ? [...w._addresses] : yield w.send("eth_requestAccounts")
                    })()
                }
                close() {
                    var w = this;
                    return t(function*() {
                        (yield w.initializeRelay()).resetAndReload()
                    })()
                }
                send(w, A) {
                    try {
                        const x = this._send(w, A);
                        if (x instanceof Promise) return x.catch(N => {
                            throw (0, i.serializeError)(N, w)
                        })
                    } catch (x) {
                        throw (0, i.serializeError)(x, w)
                    }
                }
                _send(w, A) {
                    if ("string" == typeof w) {
                        const N = w,
                            z = Array.isArray(A) ? A : void 0 !== A ? [A] : [];
                        return this._sendRequestAsync({
                            jsonrpc: "2.0",
                            id: 0,
                            method: N,
                            params: z
                        }).then(K => K.result)
                    }
                    return "function" == typeof A ? this._sendAsync(w, A) : Array.isArray(w) ? w.map(z => this._sendRequest(z)) : this._sendRequest(w)
                }
                sendAsync(w, A) {
                    var x = this;
                    return t(function*() {
                        try {
                            return x._sendAsync(w, A).catch(N => {
                                throw (0, i.serializeError)(N, w)
                            })
                        } catch (N) {
                            return Promise.reject((0, i.serializeError)(N, w))
                        }
                    })()
                }
                _sendAsync(w, A) {
                    var x = this;
                    return t(function*() {
                        if ("function" != typeof A) throw new Error("callback is required");
                        if (Array.isArray(w)) {
                            const z = A;
                            return void x._sendMultipleRequestsAsync(w).then(W => z(null, W)).catch(W => z(W, null))
                        }
                        const N = A;
                        return x._sendRequestAsync(w).then(z => N(null, z)).catch(z => N(z, null))
                    })()
                }
                request(w) {
                    var A = this;
                    return t(function*() {
                        try {
                            return A._request(w).catch(x => {
                                throw (0, i.serializeError)(x, w.method)
                            })
                        } catch (x) {
                            return Promise.reject((0, i.serializeError)(x, w.method))
                        }
                    })()
                }
                _request(w) {
                    var A = this;
                    return t(function*() {
                        if (!w || "object" != typeof w || Array.isArray(w)) throw i.standardErrors.rpc.invalidRequest({
                            message: "Expected a single, non-array, object argument.",
                            data: w
                        });
                        const {
                            method: x,
                            params: N
                        } = w;
                        if ("string" != typeof x || 0 === x.length) throw i.standardErrors.rpc.invalidRequest({
                            message: "'args.method' must be a non-empty string.",
                            data: w
                        });
                        if (void 0 !== N && !Array.isArray(N) && ("object" != typeof N || null === N)) throw i.standardErrors.rpc.invalidRequest({
                            message: "'args.params' must be an object or array if provided.",
                            data: w
                        });
                        const z = void 0 === N ? [] : N,
                            W = A._relayEventManager.makeRequestId();
                        return (yield A._sendRequestAsync({
                            method: x,
                            params: z,
                            jsonrpc: "2.0",
                            id: W
                        })).result
                    })()
                }
                scanQRCode(w) {
                    var A = this;
                    return t(function*() {
                        const N = yield(yield A.initializeRelay()).scanQRCode((0, r.ensureRegExpString)(w)).promise;
                        if ((0, l.isErrorResponse)(N)) throw (0, i.serializeError)(N.errorMessage, "scanQRCode");
                        if ("string" != typeof N.result) throw (0, i.serializeError)("result was not a string", "scanQRCode");
                        return N.result
                    })()
                }
                genericRequest(w, A) {
                    var x = this;
                    return t(function*() {
                        const z = yield(yield x.initializeRelay()).genericRequest(w, A).promise;
                        if ((0, l.isErrorResponse)(z)) throw (0, i.serializeError)(z.errorMessage, "generic");
                        if ("string" != typeof z.result) throw (0, i.serializeError)("result was not a string", "generic");
                        return z.result
                    })()
                }
                connectAndSignIn(w) {
                    var A = this;
                    return t(function*() {
                        var x;
                        let N;
                        null === (x = A.diagnostic) || void 0 === x || x.log(s.EVENTS.ETH_ACCOUNTS_STATE, {
                            method: "provider::connectAndSignIn",
                            sessionIdHash: A._relay ? g.Session.hash(A._relay.session.id) : void 0
                        });
                        try {
                            const W = yield A.initializeRelay();
                            if (!(W instanceof e.MobileRelay)) throw new Error("connectAndSignIn is only supported on mobile");
                            if (N = yield W.connectAndSignIn(w).promise, (0, l.isErrorResponse)(N)) throw new Error(N.errorMessage)
                        } catch (W) {
                            throw "string" == typeof W.message && W.message.match(/(denied|rejected)/i) ? i.standardErrors.provider.userRejectedRequest("User denied account authorization") : W
                        }
                        if (!N.result) throw new Error("accounts received is empty");
                        const {
                            accounts: z
                        } = N.result;
                        return A._setAddresses(z), A.isCoinbaseBrowser || (yield A.switchEthereumChain(A.getChainId())), N.result
                    })()
                }
                selectProvider(w) {
                    var A = this;
                    return t(function*() {
                        const N = yield(yield A.initializeRelay()).selectProvider(w).promise;
                        if ((0, l.isErrorResponse)(N)) throw (0, i.serializeError)(N.errorMessage, "selectProvider");
                        if ("string" != typeof N.result) throw (0, i.serializeError)("result was not a string", "selectProvider");
                        return N.result
                    })()
                }
                supportsSubscriptions() {
                    return !1
                }
                subscribe() {
                    throw new Error("Subscriptions are not supported")
                }
                unsubscribe() {
                    throw new Error("Subscriptions are not supported")
                }
                disconnect() {
                    return !0
                }
                _sendRequest(w) {
                    const A = {
                            jsonrpc: "2.0",
                            id: w.id
                        },
                        {
                            method: x
                        } = w;
                    if (A.result = this._handleSynchronousMethods(w), void 0 === A.result) throw new Error(`Coinbase Wallet does not support calling ${x} synchronously without a callback. Please provide a callback parameter to call ${x} asynchronously.`);
                    return A
                }
                _setAddresses(w, A) {
                    if (!Array.isArray(w)) throw new Error("addresses is not an array");
                    const x = w.map(N => (0, r.ensureAddressString)(N));
                    JSON.stringify(x) !== JSON.stringify(this._addresses) && (this._addresses = x, this.emit("accountsChanged", this._addresses), this._storage.setItem(a.LOCAL_STORAGE_ADDRESSES_KEY, x.join(" ")))
                }
                _sendRequestAsync(w) {
                    return new Promise((A, x) => {
                        try {
                            const N = this._handleSynchronousMethods(w);
                            if (void 0 !== N) return A({
                                jsonrpc: "2.0",
                                id: w.id,
                                result: N
                            });
                            const z = this._handleAsynchronousFilterMethods(w);
                            if (void 0 !== z) return void z.then(K => A(Object.assign(Object.assign({}, K), {
                                id: w.id
                            }))).catch(K => x(K));
                            const W = this._handleSubscriptionMethods(w);
                            if (void 0 !== W) return void W.then(K => A({
                                jsonrpc: "2.0",
                                id: w.id,
                                result: K.result
                            })).catch(K => x(K))
                        } catch (N) {
                            return x(N)
                        }
                        this._handleAsynchronousMethods(w).then(N => N && A(Object.assign(Object.assign({}, N), {
                            id: w.id
                        }))).catch(N => x(N))
                    })
                }
                _sendMultipleRequestsAsync(w) {
                    return Promise.all(w.map(A => this._sendRequestAsync(A)))
                }
                _handleSynchronousMethods(w) {
                    const {
                        method: A
                    } = w, x = w.params || [];
                    switch (A) {
                        case "eth_accounts":
                            return this._eth_accounts();
                        case "eth_coinbase":
                            return this._eth_coinbase();
                        case "eth_uninstallFilter":
                            return this._eth_uninstallFilter(x);
                        case "net_version":
                            return this._net_version();
                        case "eth_chainId":
                            return this._eth_chainId();
                        default:
                            return
                    }
                }
                _handleAsynchronousMethods(w) {
                    var A = this;
                    return t(function*() {
                        const {
                            method: x
                        } = w, N = w.params || [];
                        switch (x) {
                            case "eth_requestAccounts":
                                return A._eth_requestAccounts();
                            case "eth_sign":
                                return A._eth_sign(N);
                            case "eth_ecRecover":
                                return A._eth_ecRecover(N);
                            case "personal_sign":
                                return A._personal_sign(N);
                            case "personal_ecRecover":
                                return A._personal_ecRecover(N);
                            case "eth_signTransaction":
                                return A._eth_signTransaction(N);
                            case "eth_sendRawTransaction":
                                return A._eth_sendRawTransaction(N);
                            case "eth_sendTransaction":
                                return A._eth_sendTransaction(N);
                            case "eth_signTypedData_v1":
                                return A._eth_signTypedData_v1(N);
                            case "eth_signTypedData_v2":
                                return A._throwUnsupportedMethodError();
                            case "eth_signTypedData_v3":
                                return A._eth_signTypedData_v3(N);
                            case "eth_signTypedData_v4":
                            case "eth_signTypedData":
                                return A._eth_signTypedData_v4(N);
                            case "cbWallet_arbitrary":
                                return A._cbwallet_arbitrary(N);
                            case "wallet_addEthereumChain":
                                return A._wallet_addEthereumChain(N);
                            case "wallet_switchEthereumChain":
                                return A._wallet_switchEthereumChain(N);
                            case "wallet_watchAsset":
                                return A._wallet_watchAsset(N)
                        }
                        return (yield A.initializeRelay()).makeEthereumJSONRPCRequest(w, A.jsonRpcUrl).catch(W => {
                            var K;
                            throw (W.code === i.standardErrorCodes.rpc.methodNotFound || W.code === i.standardErrorCodes.rpc.methodNotSupported) && (null === (K = A.diagnostic) || void 0 === K || K.log(s.EVENTS.METHOD_NOT_IMPLEMENTED, {
                                method: w.method,
                                sessionIdHash: A._relay ? g.Session.hash(A._relay.session.id) : void 0
                            })), W
                        })
                    })()
                }
                _handleAsynchronousFilterMethods(w) {
                    const {
                        method: A
                    } = w, x = w.params || [];
                    switch (A) {
                        case "eth_newFilter":
                            return this._eth_newFilter(x);
                        case "eth_newBlockFilter":
                            return this._eth_newBlockFilter();
                        case "eth_newPendingTransactionFilter":
                            return this._eth_newPendingTransactionFilter();
                        case "eth_getFilterChanges":
                            return this._eth_getFilterChanges(x);
                        case "eth_getFilterLogs":
                            return this._eth_getFilterLogs(x)
                    }
                }
                _handleSubscriptionMethods(w) {
                    switch (w.method) {
                        case "eth_subscribe":
                        case "eth_unsubscribe":
                            return this._subscriptionManager.handleRequest(w)
                    }
                }
                _isKnownAddress(w) {
                    try {
                        const A = (0, r.ensureAddressString)(w);
                        return this._addresses.map(N => (0, r.ensureAddressString)(N)).includes(A)
                    } catch {}
                    return !1
                }
                _ensureKnownAddress(w) {
                    var A;
                    if (!this._isKnownAddress(w)) throw null === (A = this.diagnostic) || void 0 === A || A.log(s.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address")
                }
                _prepareTransactionParams(w) {
                    const A = w.from ? (0, r.ensureAddressString)(w.from) : this.selectedAddress;
                    if (!A) throw new Error("Ethereum address is unavailable");
                    return this._ensureKnownAddress(A), {
                        fromAddress: A,
                        toAddress: w.to ? (0, r.ensureAddressString)(w.to) : null,
                        weiValue: null != w.value ? (0, r.ensureBN)(w.value) : new c.default(0),
                        data: w.data ? (0, r.ensureBuffer)(w.data) : Buffer.alloc(0),
                        nonce: null != w.nonce ? (0, r.ensureIntNumber)(w.nonce) : null,
                        gasPriceInWei: null != w.gasPrice ? (0, r.ensureBN)(w.gasPrice) : null,
                        maxFeePerGas: null != w.maxFeePerGas ? (0, r.ensureBN)(w.maxFeePerGas) : null,
                        maxPriorityFeePerGas: null != w.maxPriorityFeePerGas ? (0, r.ensureBN)(w.maxPriorityFeePerGas) : null,
                        gasLimit: null != w.gas ? (0, r.ensureBN)(w.gas) : null,
                        chainId: w.chainId ? (0, r.ensureIntNumber)(w.chainId) : this.getChainId()
                    }
                }
                _isAuthorized() {
                    return this._addresses.length > 0
                }
                _requireAuthorization() {
                    if (!this._isAuthorized()) throw i.standardErrors.provider.unauthorized({})
                }
                _throwUnsupportedMethodError() {
                    throw i.standardErrors.provider.unsupportedMethod({})
                }
                _signEthereumMessage(w, A, x, N) {
                    var z = this;
                    return t(function*() {
                        z._ensureKnownAddress(A);
                        try {
                            const K = yield(yield z.initializeRelay()).signEthereumMessage(w, A, x, N).promise;
                            if ((0, l.isErrorResponse)(K)) throw new Error(K.errorMessage);
                            return {
                                jsonrpc: "2.0",
                                id: 0,
                                result: K.result
                            }
                        } catch (W) {
                            throw "string" == typeof W.message && W.message.match(/(denied|rejected)/i) ? i.standardErrors.provider.userRejectedRequest("User denied message signature") : W
                        }
                    })()
                }
                _ethereumAddressFromSignedMessage(w, A, x) {
                    var N = this;
                    return t(function*() {
                        const W = yield(yield N.initializeRelay()).ethereumAddressFromSignedMessage(w, A, x).promise;
                        if ((0, l.isErrorResponse)(W)) throw new Error(W.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: W.result
                        }
                    })()
                }
                _eth_accounts() {
                    return [...this._addresses]
                }
                _eth_coinbase() {
                    return this.selectedAddress || null
                }
                _net_version() {
                    return this.getChainId().toString(10)
                }
                _eth_chainId() {
                    return (0, r.hexStringFromIntNumber)(this.getChainId())
                }
                getChainId() {
                    const w = this._storage.getItem(m);
                    if (!w) return (0, r.ensureIntNumber)(this._chainIdFromOpts);
                    const A = parseInt(w, 10);
                    return (0, r.ensureIntNumber)(A)
                }
                _eth_requestAccounts() {
                    var w = this;
                    return t(function*() {
                        var A;
                        if (null === (A = w.diagnostic) || void 0 === A || A.log(s.EVENTS.ETH_ACCOUNTS_STATE, {
                                method: "provider::_eth_requestAccounts",
                                addresses_length: w._addresses.length,
                                sessionIdHash: w._relay ? g.Session.hash(w._relay.session.id) : void 0
                            }), w._isAuthorized()) return Promise.resolve({
                            jsonrpc: "2.0",
                            id: 0,
                            result: w._addresses
                        });
                        let x;
                        try {
                            if (x = yield(yield w.initializeRelay()).requestEthereumAccounts().promise, (0, l.isErrorResponse)(x)) throw new Error(x.errorMessage)
                        } catch (N) {
                            throw "string" == typeof N.message && N.message.match(/(denied|rejected)/i) ? i.standardErrors.provider.userRejectedRequest("User denied account authorization") : N
                        }
                        if (!x.result) throw new Error("accounts received is empty");
                        return w._setAddresses(x.result), w.isCoinbaseBrowser || (yield w.switchEthereumChain(w.getChainId())), {
                            jsonrpc: "2.0",
                            id: 0,
                            result: w._addresses
                        }
                    })()
                }
                _eth_sign(w) {
                    this._requireAuthorization();
                    const A = (0, r.ensureAddressString)(w[0]),
                        x = (0, r.ensureBuffer)(w[1]);
                    return this._signEthereumMessage(x, A, !1)
                }
                _eth_ecRecover(w) {
                    const A = (0, r.ensureBuffer)(w[0]),
                        x = (0, r.ensureBuffer)(w[1]);
                    return this._ethereumAddressFromSignedMessage(A, x, !1)
                }
                _personal_sign(w) {
                    this._requireAuthorization();
                    const A = (0, r.ensureBuffer)(w[0]),
                        x = (0, r.ensureAddressString)(w[1]);
                    return this._signEthereumMessage(A, x, !0)
                }
                _personal_ecRecover(w) {
                    const A = (0, r.ensureBuffer)(w[0]),
                        x = (0, r.ensureBuffer)(w[1]);
                    return this._ethereumAddressFromSignedMessage(A, x, !0)
                }
                _eth_signTransaction(w) {
                    var A = this;
                    return t(function*() {
                        A._requireAuthorization();
                        const x = A._prepareTransactionParams(w[0] || {});
                        try {
                            const z = yield(yield A.initializeRelay()).signEthereumTransaction(x).promise;
                            if ((0, l.isErrorResponse)(z)) throw new Error(z.errorMessage);
                            return {
                                jsonrpc: "2.0",
                                id: 0,
                                result: z.result
                            }
                        } catch (N) {
                            throw "string" == typeof N.message && N.message.match(/(denied|rejected)/i) ? i.standardErrors.provider.userRejectedRequest("User denied transaction signature") : N
                        }
                    })()
                }
                _eth_sendRawTransaction(w) {
                    var A = this;
                    return t(function*() {
                        const x = (0, r.ensureBuffer)(w[0]),
                            z = yield(yield A.initializeRelay()).submitEthereumTransaction(x, A.getChainId()).promise;
                        if ((0, l.isErrorResponse)(z)) throw new Error(z.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: z.result
                        }
                    })()
                }
                _eth_sendTransaction(w) {
                    var A = this;
                    return t(function*() {
                        A._requireAuthorization();
                        const x = A._prepareTransactionParams(w[0] || {});
                        try {
                            const z = yield(yield A.initializeRelay()).signAndSubmitEthereumTransaction(x).promise;
                            if ((0, l.isErrorResponse)(z)) throw new Error(z.errorMessage);
                            return {
                                jsonrpc: "2.0",
                                id: 0,
                                result: z.result
                            }
                        } catch (N) {
                            throw "string" == typeof N.message && N.message.match(/(denied|rejected)/i) ? i.standardErrors.provider.userRejectedRequest("User denied transaction signature") : N
                        }
                    })()
                }
                _eth_signTypedData_v1(w) {
                    var A = this;
                    return t(function*() {
                        A._requireAuthorization();
                        const x = (0, r.ensureParsedJSONObject)(w[0]),
                            N = (0, r.ensureAddressString)(w[1]);
                        A._ensureKnownAddress(N);
                        const z = v.default.hashForSignTypedDataLegacy({
                                data: x
                            }),
                            W = JSON.stringify(x, null, 2);
                        return A._signEthereumMessage(z, N, !1, W)
                    })()
                }
                _eth_signTypedData_v3(w) {
                    var A = this;
                    return t(function*() {
                        A._requireAuthorization();
                        const x = (0, r.ensureAddressString)(w[0]),
                            N = (0, r.ensureParsedJSONObject)(w[1]);
                        A._ensureKnownAddress(x);
                        const z = v.default.hashForSignTypedData_v3({
                                data: N
                            }),
                            W = JSON.stringify(N, null, 2);
                        return A._signEthereumMessage(z, x, !1, W)
                    })()
                }
                _eth_signTypedData_v4(w) {
                    var A = this;
                    return t(function*() {
                        A._requireAuthorization();
                        const x = (0, r.ensureAddressString)(w[0]),
                            N = (0, r.ensureParsedJSONObject)(w[1]);
                        A._ensureKnownAddress(x);
                        const z = v.default.hashForSignTypedData_v4({
                                data: N
                            }),
                            W = JSON.stringify(N, null, 2);
                        return A._signEthereumMessage(z, x, !1, W)
                    })()
                }
                _cbwallet_arbitrary(w) {
                    var A = this;
                    return t(function*() {
                        const x = w[0],
                            N = w[1];
                        if ("string" != typeof N) throw new Error("parameter must be a string");
                        if ("object" != typeof x || null === x) throw new Error("parameter must be an object");
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield A.genericRequest(x, N)
                        }
                    })()
                }
                _wallet_addEthereumChain(w) {
                    var A = this;
                    return t(function*() {
                        var x, N, z, W;
                        const K = w[0];
                        if (0 === (null === (x = K.rpcUrls) || void 0 === x ? void 0 : x.length)) return {
                            jsonrpc: "2.0",
                            id: 0,
                            error: {
                                code: 2,
                                message: "please pass in at least 1 rpcUrl"
                            }
                        };
                        if (!K.chainName || "" === K.chainName.trim()) throw i.standardErrors.rpc.invalidParams("chainName is a required field");
                        if (!K.nativeCurrency) throw i.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                        const ne = parseInt(K.chainId, 16);
                        return (yield A.addEthereumChain(ne, null !== (N = K.rpcUrls) && void 0 !== N ? N : [], null !== (z = K.blockExplorerUrls) && void 0 !== z ? z : [], K.chainName, null !== (W = K.iconUrls) && void 0 !== W ? W : [], K.nativeCurrency)) ? {
                            jsonrpc: "2.0",
                            id: 0,
                            result: null
                        } : {
                            jsonrpc: "2.0",
                            id: 0,
                            error: {
                                code: 2,
                                message: "unable to add ethereum chain"
                            }
                        }
                    })()
                }
                _wallet_switchEthereumChain(w) {
                    var A = this;
                    return t(function*() {
                        const x = w[0];
                        return yield A.switchEthereumChain(parseInt(x.chainId, 16)), {
                            jsonrpc: "2.0",
                            id: 0,
                            result: null
                        }
                    })()
                }
                _wallet_watchAsset(w) {
                    var A = this;
                    return t(function*() {
                        const x = Array.isArray(w) ? w[0] : w;
                        if (!x.type) throw i.standardErrors.rpc.invalidParams("Type is required");
                        if ("ERC20" !== x ? .type) throw i.standardErrors.rpc.invalidParams(`Asset of type '${x.type}' is not supported`);
                        if (!x ? .options) throw i.standardErrors.rpc.invalidParams("Options are required");
                        if (!x ? .options.address) throw i.standardErrors.rpc.invalidParams("Address is required");
                        const N = A.getChainId(),
                            {
                                address: z,
                                symbol: W,
                                image: K,
                                decimals: ne
                            } = x.options;
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield A.watchAsset(x.type, z, W, ne, K, N)
                        }
                    })()
                }
                _eth_uninstallFilter(w) {
                    const A = (0, r.ensureHexString)(w[0]);
                    return this._filterPolyfill.uninstallFilter(A)
                }
                _eth_newFilter(w) {
                    var A = this;
                    return t(function*() {
                        const x = w[0];
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield A._filterPolyfill.newFilter(x)
                        }
                    })()
                }
                _eth_newBlockFilter() {
                    var w = this;
                    return t(function*() {
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield w._filterPolyfill.newBlockFilter()
                        }
                    })()
                }
                _eth_newPendingTransactionFilter() {
                    var w = this;
                    return t(function*() {
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: yield w._filterPolyfill.newPendingTransactionFilter()
                        }
                    })()
                }
                _eth_getFilterChanges(w) {
                    const A = (0, r.ensureHexString)(w[0]);
                    return this._filterPolyfill.getFilterChanges(A)
                }
                _eth_getFilterLogs(w) {
                    const A = (0, r.ensureHexString)(w[0]);
                    return this._filterPolyfill.getFilterLogs(A)
                }
                initializeRelay() {
                    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then(w => (w.setAccountsCallback((A, x) => this._setAddresses(A, x)), w.setChainCallback((A, x) => {
                        this.updateProviderInfo(x, parseInt(A, 10))
                    }), w.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = w, w))
                }
            }
        },
        6480: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.EVENTS = void 0, o.EVENTS = {
                STARTED_CONNECTING: "walletlink_sdk.started.connecting",
                CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
                DISCONNECTED: "walletlink_sdk.disconnected",
                METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
                LINKED: "walletlink_sdk.linked",
                FAILURE: "walletlink_sdk.generic_failure",
                SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
                ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
                SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
                UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
                SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
                GENERAL_ERROR: "walletlink_sdk.general_error",
                WEB3_REQUEST: "walletlink_sdk.web3.request",
                WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
                WEB3_RESPONSE: "walletlink_sdk.web3.response",
                METHOD_NOT_IMPLEMENTED: "walletlink_sdk.method_not_implemented",
                UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
            }
        },
        4016: ($, o, p) => {
            "use strict";
            var t = p(7156).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.filterFromParam = o.FilterPolyfill = void 0;
            const y = p(8737),
                c = p(2329),
                i = {
                    jsonrpc: "2.0",
                    id: 0
                };

            function e(n) {
                return {
                    fromBlock: g(n.fromBlock),
                    toBlock: g(n.toBlock),
                    addresses: void 0 === n.address ? null : Array.isArray(n.address) ? n.address : [n.address],
                    topics: n.topics || []
                }
            }

            function a(n) {
                const u = {
                    fromBlock: l(n.fromBlock),
                    toBlock: l(n.toBlock),
                    topics: n.topics
                };
                return null !== n.addresses && (u.address = n.addresses), u
            }

            function g(n) {
                if (void 0 === n || "latest" === n || "pending" === n) return "latest";
                if ("earliest" === n) return (0, y.IntNumber)(0);
                if ((0, c.isHexString)(n)) return (0, c.intNumberFromHexString)(n);
                throw new Error(`Invalid block option: ${String(n)}`)
            }

            function l(n) {
                return "latest" === n ? n : (0, c.hexStringFromIntNumber)(n)
            }

            function v() {
                return Object.assign(Object.assign({}, i), {
                    error: {
                        code: -32e3,
                        message: "filter not found"
                    }
                })
            }

            function s() {
                return Object.assign(Object.assign({}, i), {
                    result: []
                })
            }
            o.FilterPolyfill = class r {
                constructor(u) {
                    this.logFilters = new Map, this.blockFilters = new Set, this.pendingTransactionFilters = new Set, this.cursors = new Map, this.timeouts = new Map, this.nextFilterId = (0, y.IntNumber)(1), this.REQUEST_THROTTLE_INTERVAL = 1e3, this.lastFetchTimestamp = new Date(0), this.resolvers = [], this.provider = u
                }
                newFilter(u) {
                    var m = this;
                    return t(function*() {
                        const _ = e(u),
                            E = m.makeFilterId(),
                            M = yield m.setInitialCursorPosition(E, _.fromBlock);
                        return console.info(`Installing new log filter(${E}):`, _, "initial cursor position:", M), m.logFilters.set(E, _), m.setFilterTimeout(E), (0, c.hexStringFromIntNumber)(E)
                    })()
                }
                newBlockFilter() {
                    var u = this;
                    return t(function*() {
                        const m = u.makeFilterId(),
                            _ = yield u.setInitialCursorPosition(m, "latest");
                        return console.info(`Installing new block filter (${m}) with initial cursor position:`, _), u.blockFilters.add(m), u.setFilterTimeout(m), (0, c.hexStringFromIntNumber)(m)
                    })()
                }
                newPendingTransactionFilter() {
                    var u = this;
                    return t(function*() {
                        const m = u.makeFilterId(),
                            _ = yield u.setInitialCursorPosition(m, "latest");
                        return console.info(`Installing new block filter (${m}) with initial cursor position:`, _), u.pendingTransactionFilters.add(m), u.setFilterTimeout(m), (0, c.hexStringFromIntNumber)(m)
                    })()
                }
                uninstallFilter(u) {
                    const m = (0, c.intNumberFromHexString)(u);
                    return console.info(`Uninstalling filter (${m})`), this.deleteFilter(m), !0
                }
                getFilterChanges(u) {
                    const m = (0, c.intNumberFromHexString)(u);
                    return this.timeouts.has(m) && this.setFilterTimeout(m), this.logFilters.has(m) ? this.getLogFilterChanges(m) : this.blockFilters.has(m) ? this.getBlockFilterChanges(m) : this.pendingTransactionFilters.has(m) ? this.getPendingTransactionFilterChanges(m) : Promise.resolve(v())
                }
                getFilterLogs(u) {
                    var m = this;
                    return t(function*() {
                        const _ = (0, c.intNumberFromHexString)(u),
                            E = m.logFilters.get(_);
                        return E ? m.sendAsyncPromise(Object.assign(Object.assign({}, i), {
                            method: "eth_getLogs",
                            params: [a(E)]
                        })) : v()
                    })()
                }
                makeFilterId() {
                    return (0, y.IntNumber)(++this.nextFilterId)
                }
                sendAsyncPromise(u) {
                    return new Promise((m, _) => {
                        this.provider.sendAsync(u, (E, M) => E ? _(E) : Array.isArray(M) || null == M ? _(new Error(`unexpected response received: ${JSON.stringify(M)}`)) : void m(M))
                    })
                }
                deleteFilter(u) {
                    console.info(`Deleting filter (${u})`), this.logFilters.delete(u), this.blockFilters.delete(u), this.pendingTransactionFilters.delete(u), this.cursors.delete(u), this.timeouts.delete(u)
                }
                getLogFilterChanges(u) {
                    var m = this;
                    return t(function*() {
                        const _ = m.logFilters.get(u),
                            E = m.cursors.get(u);
                        if (!E || !_) return v();
                        const M = yield m.getCurrentBlockHeight(), w = "latest" === _.toBlock ? M : _.toBlock;
                        if (E > M || E > Number(_.toBlock)) return s();
                        console.info(`Fetching logs from ${E} to ${w} for filter ${u}`);
                        const A = yield m.sendAsyncPromise(Object.assign(Object.assign({}, i), {
                            method: "eth_getLogs",
                            params: [a(Object.assign(Object.assign({}, _), {
                                fromBlock: E,
                                toBlock: w
                            }))]
                        }));
                        if (Array.isArray(A.result)) {
                            const x = A.result.map(z => (0, c.intNumberFromHexString)(z.blockNumber || "0x0")),
                                N = Math.max(...x);
                            if (N && N > E) {
                                const z = (0, y.IntNumber)(N + 1);
                                console.info(`Moving cursor position for filter (${u}) from ${E} to ${z}`), m.cursors.set(u, z)
                            }
                        }
                        return A
                    })()
                }
                getBlockFilterChanges(u) {
                    var m = this;
                    return t(function*() {
                        const _ = m.cursors.get(u);
                        if (!_) return v();
                        const E = yield m.getCurrentBlockHeight();
                        if (_ > E) return s();
                        console.info(`Fetching blocks from ${_} to ${E} for filter (${u})`);
                        const M = (yield Promise.all((0, c.range)(_, E + 1).map(A => m.getBlockHashByNumber((0, y.IntNumber)(A))))).filter(A => !!A),
                            w = (0, y.IntNumber)(_ + M.length);
                        return console.info(`Moving cursor position for filter (${u}) from ${_} to ${w}`), m.cursors.set(u, w), Object.assign(Object.assign({}, i), {
                            result: M
                        })
                    })()
                }
                getPendingTransactionFilterChanges(u) {
                    return t(function*() {
                        return Promise.resolve(s())
                    })()
                }
                setInitialCursorPosition(u, m) {
                    var _ = this;
                    return t(function*() {
                        const E = yield _.getCurrentBlockHeight(), M = "number" == typeof m && m > E ? m : E;
                        return _.cursors.set(u, M), M
                    })()
                }
                setFilterTimeout(u) {
                    const m = this.timeouts.get(u);
                    m && window.clearTimeout(m);
                    const _ = window.setTimeout(() => {
                        console.info(`Filter (${u}) timed out`), this.deleteFilter(u)
                    }, 3e5);
                    this.timeouts.set(u, _)
                }
                getCurrentBlockHeight() {
                    var u = this;
                    return t(function*() {
                        const m = new Date;
                        if (m.getTime() - u.lastFetchTimestamp.getTime() > u.REQUEST_THROTTLE_INTERVAL) {
                            u.lastFetchTimestamp = m;
                            const _ = yield u._getCurrentBlockHeight();
                            u.currentBlockHeight = _, u.resolvers.forEach(E => E(_)), u.resolvers = []
                        }
                        return u.currentBlockHeight ? u.currentBlockHeight : new Promise(_ => u.resolvers.push(_))
                    })()
                }
                _getCurrentBlockHeight() {
                    var u = this;
                    return t(function*() {
                        const {
                            result: m
                        } = yield u.sendAsyncPromise(Object.assign(Object.assign({}, i), {
                            method: "eth_blockNumber",
                            params: []
                        }));
                        return (0, c.intNumberFromHexString)((0, c.ensureHexString)(m))
                    })()
                }
                getBlockHashByNumber(u) {
                    var m = this;
                    return t(function*() {
                        const _ = yield m.sendAsyncPromise(Object.assign(Object.assign({}, i), {
                            method: "eth_getBlockByNumber",
                            params: [(0, c.hexStringFromIntNumber)(u), !1]
                        }));
                        return _.result && "string" == typeof _.result.hash ? (0, c.ensureHexString)(_.result.hash) : null
                    })()
                }
            }, o.filterFromParam = e
        },
        2506: ($, o, p) => {
            "use strict";
            var t = p(7156).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.SubscriptionManager = void 0;
            const y = p(1496),
                c = p(4035),
                d = () => {};
            o.SubscriptionManager = class i {
                constructor(e) {
                    const a = new y.PollingBlockTracker({
                            provider: e,
                            pollingInterval: 15e3,
                            setSkipCacheFlag: !0
                        }),
                        {
                            events: g,
                            middleware: l
                        } = c({
                            blockTracker: a,
                            provider: e
                        });
                    this.events = g, this.subscriptionMiddleware = l
                }
                handleRequest(e) {
                    var a = this;
                    return t(function*() {
                        const g = {};
                        return yield a.subscriptionMiddleware(e, g, d, d), g
                    })()
                }
                destroy() {
                    this.subscriptionMiddleware.destroy()
                }
            }
        },
        8561: ($, o, p) => {
            "use strict";
            var t = p(7156).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.RelayAbstract = o.APP_VERSION_KEY = o.LOCAL_STORAGE_ADDRESSES_KEY = o.WALLET_USER_NAME_KEY = void 0;
            const y = p(3311);
            o.WALLET_USER_NAME_KEY = "walletUsername", o.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses", o.APP_VERSION_KEY = "AppVersion", o.RelayAbstract = class c {
                makeEthereumJSONRPCRequest(i, r) {
                    return t(function*() {
                        if (!r) throw new Error("Error: No jsonRpcUrl provided");
                        return window.fetch(r, {
                            method: "POST",
                            body: JSON.stringify(i),
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(e => e.json()).then(e => {
                            if (!e) throw y.standardErrors.rpc.parse({});
                            const a = e,
                                {
                                    error: g
                                } = a;
                            if (g) throw (0, y.serializeError)(g, i.method);
                            return a
                        })
                    })()
                }
            }
        },
        3483: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.RelayEventManager = void 0;
            const t = p(2329);
            o.RelayEventManager = class y {
                constructor() {
                    this._nextRequestId = 0, this.callbacks = new Map
                }
                makeRequestId() {
                    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                    const d = this._nextRequestId,
                        i = (0, t.prepend0x)(d.toString(16));
                    return this.callbacks.get(i) && this.callbacks.delete(i), d
                }
            }
        },
        6293: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.Session = void 0;
            const t = p(7965),
                y = p(2329),
                c = "session:id",
                d = "session:secret",
                i = "session:linked";
            class r {
                constructor(a, g, l, v) {
                    this._storage = a, this._id = g || (0, y.randomBytesHex)(16), this._secret = l || (0, y.randomBytesHex)(32), this._key = (new t.sha256).update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!v
                }
                static load(a) {
                    const g = a.getItem(c),
                        l = a.getItem(i),
                        v = a.getItem(d);
                    return g && v ? new r(a, g, v, "1" === l) : null
                }
                static hash(a) {
                    return (new t.sha256).update(a).digest("hex")
                }
                get id() {
                    return this._id
                }
                get secret() {
                    return this._secret
                }
                get key() {
                    return this._key
                }
                get linked() {
                    return this._linked
                }
                set linked(a) {
                    this._linked = a, this.persistLinked()
                }
                save() {
                    return this._storage.setItem(c, this._id), this._storage.setItem(d, this._secret), this.persistLinked(), this
                }
                persistLinked() {
                    this._storage.setItem(i, this._linked ? "1" : "0")
                }
            }
            o.Session = r
        },
        2163: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.MobileRelay = void 0;
            const t = p(2329),
                y = p(4587),
                c = p(5129);
            o.MobileRelay = class d extends y.WalletLinkRelay {
                constructor(r) {
                    var e;
                    super(r), this._enableMobileWalletLink = null !== (e = r.enableMobileWalletLink) && void 0 !== e && e
                }
                requestEthereumAccounts() {
                    return this._enableMobileWalletLink ? super.requestEthereumAccounts() : {
                        promise: new Promise(() => {
                            const r = (0, t.getLocation)();
                            r.href = `https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(r.href)}`
                        }),
                        cancel: () => {}
                    }
                }
                publishWeb3RequestEvent(r, e) {
                    if (super.publishWeb3RequestEvent(r, e), !(this._enableMobileWalletLink && this.ui instanceof c.MobileRelayUI)) return;
                    let a = !1;
                    switch (e.method) {
                        case "requestEthereumAccounts":
                        case "connectAndSignIn":
                            a = !0, this.ui.openCoinbaseWalletDeeplink(this.getQRCodeUrl());
                            break;
                        case "switchEthereumChain":
                            return;
                        default:
                            a = !0, this.ui.openCoinbaseWalletDeeplink()
                    }
                    a && window.addEventListener("blur", () => {
                        window.addEventListener("focus", () => {
                            this.connection.checkUnseenEvents()
                        }, {
                            once: !0
                        })
                    }, {
                        once: !0
                    })
                }
                handleWeb3ResponseMessage(r) {
                    super.handleWeb3ResponseMessage(r)
                }
                connectAndSignIn(r) {
                    if (!this._enableMobileWalletLink) throw new Error("connectAndSignIn is supported only when enableMobileWalletLink is on");
                    return this.sendRequest({
                        method: "connectAndSignIn",
                        params: {
                            appName: this.appName,
                            appLogoUrl: this.appLogoUrl,
                            domain: window.location.hostname,
                            aud: window.location.href,
                            version: "1",
                            type: "eip4361",
                            nonce: r.nonce,
                            iat: (new Date).toISOString(),
                            chainId: `eip155:${this.dappDefaultChain}`,
                            statement: r.statement,
                            resources: r.resources
                        }
                    })
                }
            }
        },
        5129: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.MobileRelayUI = void 0;
            const t = p(8669);
            o.MobileRelayUI = class y {
                constructor(d) {
                    this.attached = !1, this.darkMode = !1, this.redirectDialog = new t.RedirectDialog, this.darkMode = d.darkMode
                }
                attach() {
                    if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
                    this.redirectDialog.attach(), this.attached = !0
                }
                setConnected(d) {}
                redirectToCoinbaseWallet(d) {
                    const i = new URL("https://go.cb-w.com/walletlink");
                    i.searchParams.append("redirect_url", window.location.href), d && i.searchParams.append("wl_url", d);
                    const r = document.createElement("a");
                    r.target = "cbw-opener", r.href = i.href, r.rel = "noreferrer noopener", r.click()
                }
                openCoinbaseWalletDeeplink(d) {
                    this.redirectDialog.present({
                        title: "Redirecting to Coinbase Wallet...",
                        buttonText: "Open",
                        darkMode: this.darkMode,
                        onButtonClick: () => {
                            this.redirectToCoinbaseWallet(d)
                        }
                    }), setTimeout(() => {
                        this.redirectToCoinbaseWallet(d)
                    }, 99)
                }
                showConnecting(d) {
                    return () => {
                        this.redirectDialog.clear()
                    }
                }
                hideRequestEthereumAccounts() {
                    this.redirectDialog.clear()
                }
                requestEthereumAccounts() {}
                addEthereumChain() {}
                watchAsset() {}
                selectProvider() {}
                switchEthereumChain() {}
                signEthereumMessage() {}
                signEthereumTransaction() {}
                submitEthereumTransaction() {}
                ethereumAddressFromSignedMessage() {}
                reloadUI() {}
                setStandalone() {}
                setConnectDisabled() {}
                inlineAccountsResponse() {
                    return !1
                }
                inlineAddEthereumChain() {
                    return !1
                }
                inlineWatchAsset() {
                    return !1
                }
                inlineSwitchEthereumChain() {
                    return !1
                }
                isStandalone() {
                    return !1
                }
            }
        },
        4587: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.WalletLinkRelay = void 0;
            const t = p(3311),
                y = p(8737),
                c = p(2329),
                d = p(6480),
                i = p(8561),
                r = p(6293),
                e = p(7547),
                a = p(8315),
                g = p(7144);
            class l extends i.RelayAbstract {
                constructor(s) {
                    var n;
                    super(), this.accountsCallback = null, this.chainCallbackParams = {
                        chainId: "",
                        jsonRpcUrl: ""
                    }, this.chainCallback = null, this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.linkedUpdated = E => {
                        var M;
                        this.isLinked = E;
                        const w = this.storage.getItem(i.LOCAL_STORAGE_ADDRESSES_KEY);
                        if (E && (this.session.linked = E), this.isUnlinkedErrorState = !1, w) {
                            const A = w.split(" "),
                                x = "true" === this.storage.getItem("IsStandaloneSigning");
                            if ("" !== A[0] && !E && this.session.linked && !x) {
                                this.isUnlinkedErrorState = !0;
                                const N = this.getSessionIdHash();
                                null === (M = this.diagnostic) || void 0 === M || M.log(d.EVENTS.UNLINKED_ERROR_STATE, {
                                    sessionIdHash: N
                                })
                            }
                        }
                    }, this.metadataUpdated = (E, M) => {
                        this.storage.setItem(E, M)
                    }, this.chainUpdated = (E, M) => {
                        this.chainCallbackParams.chainId === E && this.chainCallbackParams.jsonRpcUrl === M || (this.chainCallbackParams = {
                            chainId: E,
                            jsonRpcUrl: M
                        }, this.chainCallback && this.chainCallback(E, M))
                    }, this.accountUpdated = E => {
                        this.accountsCallback && this.accountsCallback([E]), l.accountRequestCallbackIds.size > 0 && (Array.from(l.accountRequestCallbackIds.values()).forEach(M => {
                            this.invokeCallback(Object.assign(Object.assign({}, {
                                type: "WEB3_RESPONSE",
                                id: M,
                                response: {
                                    method: "requestEthereumAccounts",
                                    result: [E]
                                }
                            }), {
                                id: M
                            }))
                        }), l.accountRequestCallbackIds.clear())
                    }, this.connectedUpdated = E => {
                        this.ui.setConnected(E)
                    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = s.linkAPIUrl, this.storage = s.storage, this.options = s;
                    const {
                        session: u,
                        ui: m,
                        connection: _
                    } = this.subscribe();
                    this._session = u, this.connection = _, this.relayEventManager = s.relayEventManager, this.diagnostic = s.diagnosticLogger, this._reloadOnDisconnect = null === (n = s.reloadOnDisconnect) || void 0 === n || n, this.ui = m
                }
                subscribe() {
                    const s = r.Session.load(this.storage) || new r.Session(this.storage).save(),
                        {
                            linkAPIUrl: n,
                            diagnostic: u
                        } = this,
                        m = new e.WalletLinkConnection({
                            session: s,
                            linkAPIUrl: n,
                            diagnostic: u,
                            listener: this
                        }),
                        {
                            version: _,
                            darkMode: E
                        } = this.options,
                        M = this.options.uiConstructor({
                            linkAPIUrl: n,
                            version: _,
                            darkMode: E,
                            session: s
                        });
                    return m.connect(), {
                        session: s,
                        ui: M,
                        connection: m
                    }
                }
                attachUI() {
                    this.ui.attach()
                }
                resetAndReload() {
                    Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise(s => setTimeout(() => s(null), 1e3))]).then(() => {
                        var s, n;
                        const u = this.ui.isStandalone();
                        null === (s = this.diagnostic) || void 0 === s || s.log(d.EVENTS.SESSION_STATE_CHANGE, {
                            method: "relay::resetAndReload",
                            sessionMetadataChange: "__destroyed, 1",
                            sessionIdHash: this.getSessionIdHash()
                        }), this.connection.destroy();
                        const m = r.Session.load(this.storage);
                        if (m ? .id === this._session.id ? this.storage.clear() : m && (null === (n = this.diagnostic) || void 0 === n || n.log(d.EVENTS.SKIPPED_CLEARING_SESSION, {
                                sessionIdHash: this.getSessionIdHash(),
                                storedSessionIdHash: r.Session.hash(m.id)
                            })), this._reloadOnDisconnect) return void this.ui.reloadUI();
                        this.accountsCallback && this.accountsCallback([], !0);
                        const {
                            session: _,
                            ui: E,
                            connection: M
                        } = this.subscribe();
                        this._session = _, this.connection = M, this.ui = E, u && this.ui.setStandalone && this.ui.setStandalone(!0), this.options.headlessMode || this.attachUI()
                    }).catch(s => {
                        var n;
                        null === (n = this.diagnostic) || void 0 === n || n.log(d.EVENTS.FAILURE, {
                            method: "relay::resetAndReload",
                            message: `failed to reset and reload with ${s}`,
                            sessionIdHash: this.getSessionIdHash()
                        })
                    })
                }
                setAppInfo(s, n) {
                    this.appName = s, this.appLogoUrl = n
                }
                getStorageItem(s) {
                    return this.storage.getItem(s)
                }
                get session() {
                    return this._session
                }
                setStorageItem(s, n) {
                    this.storage.setItem(s, n)
                }
                signEthereumMessage(s, n, u, m) {
                    return this.sendRequest({
                        method: "signEthereumMessage",
                        params: {
                            message: (0, c.hexStringFromBuffer)(s, !0),
                            address: n,
                            addPrefix: u,
                            typedDataJson: m || null
                        }
                    })
                }
                ethereumAddressFromSignedMessage(s, n, u) {
                    return this.sendRequest({
                        method: "ethereumAddressFromSignedMessage",
                        params: {
                            message: (0, c.hexStringFromBuffer)(s, !0),
                            signature: (0, c.hexStringFromBuffer)(n, !0),
                            addPrefix: u
                        }
                    })
                }
                signEthereumTransaction(s) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: s.fromAddress,
                            toAddress: s.toAddress,
                            weiValue: (0, c.bigIntStringFromBN)(s.weiValue),
                            data: (0, c.hexStringFromBuffer)(s.data, !0),
                            nonce: s.nonce,
                            gasPriceInWei: s.gasPriceInWei ? (0, c.bigIntStringFromBN)(s.gasPriceInWei) : null,
                            maxFeePerGas: s.gasPriceInWei ? (0, c.bigIntStringFromBN)(s.gasPriceInWei) : null,
                            maxPriorityFeePerGas: s.gasPriceInWei ? (0, c.bigIntStringFromBN)(s.gasPriceInWei) : null,
                            gasLimit: s.gasLimit ? (0, c.bigIntStringFromBN)(s.gasLimit) : null,
                            chainId: s.chainId,
                            shouldSubmit: !1
                        }
                    })
                }
                signAndSubmitEthereumTransaction(s) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: s.fromAddress,
                            toAddress: s.toAddress,
                            weiValue: (0, c.bigIntStringFromBN)(s.weiValue),
                            data: (0, c.hexStringFromBuffer)(s.data, !0),
                            nonce: s.nonce,
                            gasPriceInWei: s.gasPriceInWei ? (0, c.bigIntStringFromBN)(s.gasPriceInWei) : null,
                            maxFeePerGas: s.maxFeePerGas ? (0, c.bigIntStringFromBN)(s.maxFeePerGas) : null,
                            maxPriorityFeePerGas: s.maxPriorityFeePerGas ? (0, c.bigIntStringFromBN)(s.maxPriorityFeePerGas) : null,
                            gasLimit: s.gasLimit ? (0, c.bigIntStringFromBN)(s.gasLimit) : null,
                            chainId: s.chainId,
                            shouldSubmit: !0
                        }
                    })
                }
                submitEthereumTransaction(s, n) {
                    return this.sendRequest({
                        method: "submitEthereumTransaction",
                        params: {
                            signedTransaction: (0, c.hexStringFromBuffer)(s, !0),
                            chainId: n
                        }
                    })
                }
                scanQRCode(s) {
                    return this.sendRequest({
                        method: "scanQRCode",
                        params: {
                            regExp: s
                        }
                    })
                }
                getQRCodeUrl() {
                    return (0, c.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain)
                }
                genericRequest(s, n) {
                    return this.sendRequest({
                        method: "generic",
                        params: {
                            action: n,
                            data: s
                        }
                    })
                }
                sendGenericMessage(s) {
                    return this.sendRequest(s)
                }
                sendRequest(s) {
                    let n = null;
                    const u = (0, c.randomBytesHex)(8),
                        m = E => {
                            this.publishWeb3RequestCanceledEvent(u), this.handleErrorResponse(u, s.method, E), n ? .()
                        };
                    return {
                        promise: new Promise((E, M) => {
                            this.ui.isStandalone() || (n = this.ui.showConnecting({
                                isUnlinkedErrorState: this.isUnlinkedErrorState,
                                onCancel: m,
                                onResetConnection: this.resetAndReload
                            })), this.relayEventManager.callbacks.set(u, w => {
                                if (n ? .(), (0, a.isErrorResponse)(w)) return M(new Error(w.errorMessage));
                                E(w)
                            }), this.ui.isStandalone() ? this.sendRequestStandalone(u, s) : this.publishWeb3RequestEvent(u, s)
                        }),
                        cancel: m
                    }
                }
                setConnectDisabled(s) {
                    this.ui.setConnectDisabled(s)
                }
                setAccountsCallback(s) {
                    this.accountsCallback = s
                }
                setChainCallback(s) {
                    this.chainCallback = s
                }
                setDappDefaultChainCallback(s) {
                    this.dappDefaultChain = s, this.ui instanceof g.WalletLinkRelayUI && this.ui.setChainId(s)
                }
                publishWeb3RequestEvent(s, n) {
                    var u;
                    const m = {
                            type: "WEB3_REQUEST",
                            id: s,
                            request: n
                        },
                        _ = r.Session.load(this.storage);
                    null === (u = this.diagnostic) || void 0 === u || u.log(d.EVENTS.WEB3_REQUEST, {
                        eventId: m.id,
                        method: `relay::${n.method}`,
                        sessionIdHash: this.getSessionIdHash(),
                        storedSessionIdHash: _ ? r.Session.hash(_.id) : "",
                        isSessionMismatched: (_ ? .id !== this._session.id).toString()
                    }), this.publishEvent("Web3Request", m, !0).then(E => {
                        var M;
                        null === (M = this.diagnostic) || void 0 === M || M.log(d.EVENTS.WEB3_REQUEST_PUBLISHED, {
                            eventId: m.id,
                            method: `relay::${n.method}`,
                            sessionIdHash: this.getSessionIdHash(),
                            storedSessionIdHash: _ ? r.Session.hash(_.id) : "",
                            isSessionMismatched: (_ ? .id !== this._session.id).toString()
                        })
                    }).catch(E => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: m.id,
                            response: {
                                method: n.method,
                                errorMessage: E.message
                            }
                        })
                    })
                }
                publishWeb3RequestCanceledEvent(s) {
                    this.publishEvent("Web3RequestCanceled", {
                        type: "WEB3_REQUEST_CANCELED",
                        id: s
                    }, !1).then()
                }
                publishEvent(s, n, u) {
                    return this.connection.publishEvent(s, n, u)
                }
                handleWeb3ResponseMessage(s) {
                    var n;
                    const {
                        response: u
                    } = s;
                    if (null === (n = this.diagnostic) || void 0 === n || n.log(d.EVENTS.WEB3_RESPONSE, {
                            eventId: s.id,
                            method: `relay::${u.method}`,
                            sessionIdHash: this.getSessionIdHash()
                        }), "requestEthereumAccounts" === u.method) return l.accountRequestCallbackIds.forEach(m => this.invokeCallback(Object.assign(Object.assign({}, s), {
                        id: m
                    }))), void l.accountRequestCallbackIds.clear();
                    this.invokeCallback(s)
                }
                handleErrorResponse(s, n, u, m) {
                    var _;
                    const E = null !== (_ = u ? .message) && void 0 !== _ ? _ : (0, t.getMessageFromCode)(m);
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: s,
                        response: {
                            method: n,
                            errorMessage: E,
                            errorCode: m
                        }
                    })
                }
                invokeCallback(s) {
                    const n = this.relayEventManager.callbacks.get(s.id);
                    n && (n(s.response), this.relayEventManager.callbacks.delete(s.id))
                }
                requestEthereumAccounts() {
                    const s = {
                            method: "requestEthereumAccounts",
                            params: {
                                appName: this.appName,
                                appLogoUrl: this.appLogoUrl || null
                            }
                        },
                        u = (0, c.randomBytesHex)(8),
                        m = E => {
                            this.publishWeb3RequestCanceledEvent(u), this.handleErrorResponse(u, s.method, E)
                        };
                    return {
                        promise: new Promise((E, M) => {
                            if (this.relayEventManager.callbacks.set(u, w => {
                                    if (this.ui.hideRequestEthereumAccounts(), (0, a.isErrorResponse)(w)) return M(new Error(w.errorMessage));
                                    E(w)
                                }), this.ui.inlineAccountsResponse()) this.ui.requestEthereumAccounts({
                                onCancel: m,
                                onAccounts: A => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: u,
                                        response: {
                                            method: "requestEthereumAccounts",
                                            result: A
                                        }
                                    })
                                }
                            });
                            else {
                                const w = t.standardErrors.provider.userRejectedRequest("User denied account authorization");
                                this.ui.requestEthereumAccounts({
                                    onCancel: () => m(w)
                                })
                            }
                            l.accountRequestCallbackIds.add(u), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, s)
                        }),
                        cancel: m
                    }
                }
                selectProvider(s) {
                    const u = (0, c.randomBytesHex)(8);
                    return {
                        cancel: E => {
                            this.publishWeb3RequestCanceledEvent(u), this.handleErrorResponse(u, "selectProvider", E)
                        },
                        promise: new Promise((E, M) => {
                            this.relayEventManager.callbacks.set(u, x => {
                                if ((0, a.isErrorResponse)(x)) return M(new Error(x.errorMessage));
                                E(x)
                            }), this.ui.selectProvider && this.ui.selectProvider({
                                onApprove: x => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: u,
                                        response: {
                                            method: "selectProvider",
                                            result: x
                                        }
                                    })
                                },
                                onCancel: x => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: u,
                                        response: {
                                            method: "selectProvider",
                                            result: y.ProviderType.Unselected
                                        }
                                    })
                                },
                                providerOptions: s
                            })
                        })
                    }
                }
                watchAsset(s, n, u, m, _, E) {
                    const M = {
                        method: "watchAsset",
                        params: {
                            type: s,
                            options: {
                                address: n,
                                symbol: u,
                                decimals: m,
                                image: _
                            },
                            chainId: E
                        }
                    };
                    let w = null;
                    const A = (0, c.randomBytesHex)(8),
                        x = z => {
                            this.publishWeb3RequestCanceledEvent(A), this.handleErrorResponse(A, M.method, z), w ? .()
                        };
                    return this.ui.inlineWatchAsset() || (w = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: x,
                        onResetConnection: this.resetAndReload
                    })), {
                        cancel: x,
                        promise: new Promise((z, W) => {
                            this.relayEventManager.callbacks.set(A, se => {
                                if (w ? .(), (0, a.isErrorResponse)(se)) return W(new Error(se.errorMessage));
                                z(se)
                            }), this.ui.inlineWatchAsset() && this.ui.watchAsset({
                                onApprove: () => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: A,
                                        response: {
                                            method: "watchAsset",
                                            result: !0
                                        }
                                    })
                                },
                                onCancel: se => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: A,
                                        response: {
                                            method: "watchAsset",
                                            result: !1
                                        }
                                    })
                                },
                                type: s,
                                address: n,
                                symbol: u,
                                decimals: m,
                                image: _,
                                chainId: E
                            }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(A, M)
                        })
                    }
                }
                addEthereumChain(s, n, u, m, _, E) {
                    const M = {
                        method: "addEthereumChain",
                        params: {
                            chainId: s,
                            rpcUrls: n,
                            blockExplorerUrls: m,
                            chainName: _,
                            iconUrls: u,
                            nativeCurrency: E
                        }
                    };
                    let w = null;
                    const A = (0, c.randomBytesHex)(8),
                        x = z => {
                            this.publishWeb3RequestCanceledEvent(A), this.handleErrorResponse(A, M.method, z), w ? .()
                        };
                    return this.ui.inlineAddEthereumChain(s) || (w = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: x,
                        onResetConnection: this.resetAndReload
                    })), {
                        promise: new Promise((z, W) => {
                            this.relayEventManager.callbacks.set(A, se => {
                                if (w ? .(), (0, a.isErrorResponse)(se)) return W(new Error(se.errorMessage));
                                z(se)
                            }), this.ui.inlineAddEthereumChain(s) && this.ui.addEthereumChain({
                                onCancel: se => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: A,
                                        response: {
                                            method: "addEthereumChain",
                                            result: {
                                                isApproved: !1,
                                                rpcUrl: ""
                                            }
                                        }
                                    })
                                },
                                onApprove: se => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: A,
                                        response: {
                                            method: "addEthereumChain",
                                            result: {
                                                isApproved: !0,
                                                rpcUrl: se
                                            }
                                        }
                                    })
                                },
                                chainId: M.params.chainId,
                                rpcUrls: M.params.rpcUrls,
                                blockExplorerUrls: M.params.blockExplorerUrls,
                                chainName: M.params.chainName,
                                iconUrls: M.params.iconUrls,
                                nativeCurrency: M.params.nativeCurrency
                            }), !this.ui.inlineAddEthereumChain(s) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(A, M)
                        }),
                        cancel: x
                    }
                }
                switchEthereumChain(s, n) {
                    const u = {
                            method: "switchEthereumChain",
                            params: Object.assign({
                                chainId: s
                            }, {
                                address: n
                            })
                        },
                        m = (0, c.randomBytesHex)(8);
                    return {
                        promise: new Promise((M, w) => {
                            this.relayEventManager.callbacks.set(m, N => (0, a.isErrorResponse)(N) && N.errorCode ? w(t.standardErrors.provider.custom({
                                code: N.errorCode,
                                message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                            })) : (0, a.isErrorResponse)(N) ? w(new Error(N.errorMessage)) : void M(N)), this.ui.switchEthereumChain({
                                onCancel: N => {
                                    var z;
                                    if (N) {
                                        const W = null !== (z = (0, t.getErrorCode)(N)) && void 0 !== z ? z : t.standardErrorCodes.provider.unsupportedChain;
                                        this.handleErrorResponse(m, "switchEthereumChain", N instanceof Error ? N : t.standardErrors.provider.unsupportedChain(s), W)
                                    } else this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: m,
                                        response: {
                                            method: "switchEthereumChain",
                                            result: {
                                                isApproved: !1,
                                                rpcUrl: ""
                                            }
                                        }
                                    })
                                },
                                onApprove: N => {
                                    this.handleWeb3ResponseMessage({
                                        type: "WEB3_RESPONSE",
                                        id: m,
                                        response: {
                                            method: "switchEthereumChain",
                                            result: {
                                                isApproved: !0,
                                                rpcUrl: N
                                            }
                                        }
                                    })
                                },
                                chainId: u.params.chainId,
                                address: u.params.address
                            }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(m, u)
                        }),
                        cancel: M => {
                            this.publishWeb3RequestCanceledEvent(m), this.handleErrorResponse(m, u.method, M)
                        }
                    }
                }
                inlineAddEthereumChain(s) {
                    return this.ui.inlineAddEthereumChain(s)
                }
                getSessionIdHash() {
                    return r.Session.hash(this._session.id)
                }
                sendRequestStandalone(s, n) {
                    const u = _ => {
                            this.handleErrorResponse(s, n.method, _)
                        },
                        m = _ => {
                            this.handleWeb3ResponseMessage({
                                type: "WEB3_RESPONSE",
                                id: s,
                                response: _
                            })
                        };
                    switch (n.method) {
                        case "signEthereumMessage":
                            this.ui.signEthereumMessage({
                                request: n,
                                onSuccess: m,
                                onCancel: u
                            });
                            break;
                        case "signEthereumTransaction":
                            this.ui.signEthereumTransaction({
                                request: n,
                                onSuccess: m,
                                onCancel: u
                            });
                            break;
                        case "submitEthereumTransaction":
                            this.ui.submitEthereumTransaction({
                                request: n,
                                onSuccess: m,
                                onCancel: u
                            });
                            break;
                        case "ethereumAddressFromSignedMessage":
                            this.ui.ethereumAddressFromSignedMessage({
                                request: n,
                                onSuccess: m
                            });
                            break;
                        default:
                            u()
                    }
                }
            }
            o.WalletLinkRelay = l, l.accountRequestCallbackIds = new Set
        },
        7547: ($, o, p) => {
            "use strict";
            var t = p(7156).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.WalletLinkConnection = void 0;
            const y = p(8737),
                c = p(8048),
                d = p(6480),
                i = p(8561),
                r = p(6293),
                e = p(6724),
                a = p(243);
            o.WalletLinkConnection = class v {
                constructor({
                    session: n,
                    linkAPIUrl: u,
                    listener: m,
                    diagnostic: _,
                    WebSocketClass: E = WebSocket
                }) {
                    var M = this;
                    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, y.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = new Map, this.handleSessionMetadataUpdated = A => {
                        A && new Map([
                            ["__destroyed", this.handleDestroyed],
                            ["EthereumAddress", this.handleAccountUpdated],
                            ["WalletUsername", this.handleWalletUsernameUpdated],
                            ["AppVersion", this.handleAppVersionUpdated],
                            ["ChainId", N => A.JsonRpcUrl && this.handleChainUpdated(N, A.JsonRpcUrl)]
                        ]).forEach((N, z) => {
                            const W = A[z];
                            void 0 !== W && N(W)
                        })
                    }, this.handleDestroyed = A => {
                        var x, N;
                        "1" === A && (null === (x = this.listener) || void 0 === x || x.resetAndReload(), null === (N = this.diagnostic) || void 0 === N || N.log(d.EVENTS.METADATA_DESTROYED, {
                            alreadyDestroyed: this.isDestroyed,
                            sessionIdHash: r.Session.hash(this.session.id)
                        }))
                    }, this.handleAccountUpdated = function() {
                        var A = t(function*(x) {
                            var N, z;
                            try {
                                const W = yield M.cipher.decrypt(x);
                                null === (N = M.listener) || void 0 === N || N.accountUpdated(W)
                            } catch {
                                null === (z = M.diagnostic) || void 0 === z || z.log(d.EVENTS.GENERAL_ERROR, {
                                    message: "Had error decrypting",
                                    value: "selectedAddress"
                                })
                            }
                        });
                        return function(x) {
                            return A.apply(this, arguments)
                        }
                    }(), this.handleMetadataUpdated = function() {
                        var A = t(function*(x, N) {
                            var z, W;
                            try {
                                const K = yield M.cipher.decrypt(N);
                                null === (z = M.listener) || void 0 === z || z.metadataUpdated(x, K)
                            } catch {
                                null === (W = M.diagnostic) || void 0 === W || W.log(d.EVENTS.GENERAL_ERROR, {
                                    message: "Had error decrypting",
                                    value: x
                                })
                            }
                        });
                        return function(x, N) {
                            return A.apply(this, arguments)
                        }
                    }(), this.handleWalletUsernameUpdated = function() {
                        var A = t(function*(x) {
                            M.handleMetadataUpdated(i.WALLET_USER_NAME_KEY, x)
                        });
                        return function(x) {
                            return A.apply(this, arguments)
                        }
                    }(), this.handleAppVersionUpdated = function() {
                        var A = t(function*(x) {
                            M.handleMetadataUpdated(i.APP_VERSION_KEY, x)
                        });
                        return function(x) {
                            return A.apply(this, arguments)
                        }
                    }(), this.handleChainUpdated = function() {
                        var A = t(function*(x, N) {
                            var z, W;
                            try {
                                const K = yield M.cipher.decrypt(x), ne = yield M.cipher.decrypt(N);
                                null === (z = M.listener) || void 0 === z || z.chainUpdated(K, ne)
                            } catch {
                                null === (W = M.diagnostic) || void 0 === W || W.log(d.EVENTS.GENERAL_ERROR, {
                                    message: "Had error decrypting",
                                    value: "chainId|jsonRpcUrl"
                                })
                            }
                        });
                        return function(x, N) {
                            return A.apply(this, arguments)
                        }
                    }(), this.session = n, this.cipher = new c.Cipher(n.secret), this.diagnostic = _, this.listener = m;
                    const w = new a.WalletLinkWebSocket(`${u}/rpc`, E);
                    w.setConnectionStateListener(function() {
                        var A = t(function*(x) {
                            var N;
                            null === (N = M.diagnostic) || void 0 === N || N.log(d.EVENTS.CONNECTED_STATE_CHANGE, {
                                state: x,
                                sessionIdHash: r.Session.hash(n.id)
                            });
                            let z = !1;
                            switch (x) {
                                case a.ConnectionState.DISCONNECTED:
                                    if (!M.destroyed) {
                                        const W = function() {
                                            var K = t(function*() {
                                                yield new Promise(ne => setTimeout(ne, 5e3)), M.destroyed || w.connect().catch(() => {
                                                    W()
                                                })
                                            });
                                            return function() {
                                                return K.apply(this, arguments)
                                            }
                                        }();
                                        W()
                                    }
                                    break;
                                case a.ConnectionState.CONNECTED:
                                    try {
                                        yield M.authenticate(), M.sendIsLinked(), M.sendGetSessionConfig(), z = !0
                                    } catch {}
                                    M.updateLastHeartbeat(), setInterval(() => {
                                        M.heartbeat()
                                    }, 1e4), M.shouldFetchUnseenEventsOnConnect && M.fetchUnseenEventsAPI()
                            }
                            M.connected !== z && (M.connected = z)
                        });
                        return function(x) {
                            return A.apply(this, arguments)
                        }
                    }()), w.setIncomingDataListener(A => {
                        var x, N, z;
                        switch (A.type) {
                            case "Heartbeat":
                                return void this.updateLastHeartbeat();
                            case "IsLinkedOK":
                            case "Linked":
                                {
                                    const W = "IsLinkedOK" === A.type ? A.linked : void 0;null === (x = this.diagnostic) || void 0 === x || x.log(d.EVENTS.LINKED, {
                                        sessionIdHash: r.Session.hash(n.id),
                                        linked: W,
                                        type: A.type,
                                        onlineGuests: A.onlineGuests
                                    }),
                                    this.linked = W || A.onlineGuests > 0;
                                    break
                                }
                            case "GetSessionConfigOK":
                            case "SessionConfigUpdated":
                                null === (N = this.diagnostic) || void 0 === N || N.log(d.EVENTS.SESSION_CONFIG_RECEIVED, {
                                    sessionIdHash: r.Session.hash(n.id),
                                    metadata_keys: A && A.metadata ? Object.keys(A.metadata) : void 0
                                }), this.handleSessionMetadataUpdated(A.metadata);
                                break;
                            case "Event":
                                this.handleIncomingEvent(A)
                        }
                        void 0 !== A.id && (null === (z = this.requestResolutions.get(A.id)) || void 0 === z || z(A))
                    }), this.ws = w, this.http = new e.WalletLinkHTTP(u, n.id, n.key)
                }
                connect() {
                    var n;
                    if (this.destroyed) throw new Error("instance is destroyed");
                    null === (n = this.diagnostic) || void 0 === n || n.log(d.EVENTS.STARTED_CONNECTING, {
                        sessionIdHash: r.Session.hash(this.session.id)
                    }), this.ws.connect()
                }
                destroy() {
                    var n;
                    this.destroyed = !0, this.ws.disconnect(), null === (n = this.diagnostic) || void 0 === n || n.log(d.EVENTS.DISCONNECTED, {
                        sessionIdHash: r.Session.hash(this.session.id)
                    }), this.listener = void 0
                }
                get isDestroyed() {
                    return this.destroyed
                }
                get connected() {
                    return this._connected
                }
                set connected(n) {
                    var u, m;
                    this._connected = n, n && (null === (u = this.onceConnected) || void 0 === u || u.call(this)), null === (m = this.listener) || void 0 === m || m.connectedUpdated(n)
                }
                setOnceConnected(n) {
                    return new Promise(u => {
                        this.connected ? n().then(u) : this.onceConnected = () => {
                            n().then(u), this.onceConnected = void 0
                        }
                    })
                }
                get linked() {
                    return this._linked
                }
                set linked(n) {
                    var u, m;
                    this._linked = n, n && (null === (u = this.onceLinked) || void 0 === u || u.call(this)), null === (m = this.listener) || void 0 === m || m.linkedUpdated(n)
                }
                setOnceLinked(n) {
                    return new Promise(u => {
                        this.linked ? n().then(u) : this.onceLinked = () => {
                            n().then(u), this.onceLinked = void 0
                        }
                    })
                }
                handleIncomingEvent(n) {
                    var u = this;
                    return t(function*() {
                        var m, _;
                        if ("Event" === n.type && "Web3Response" === n.event) try {
                            const E = yield u.cipher.decrypt(n.data), M = JSON.parse(E);
                            if ("WEB3_RESPONSE" !== M.type) return;
                            null === (m = u.listener) || void 0 === m || m.handleWeb3ResponseMessage(M)
                        } catch {
                            null === (_ = u.diagnostic) || void 0 === _ || _.log(d.EVENTS.GENERAL_ERROR, {
                                message: "Had error decrypting",
                                value: "incomingEvent"
                            })
                        }
                    })()
                }
                checkUnseenEvents() {
                    var n = this;
                    return t(function*() {
                        if (n.connected) {
                            yield new Promise(u => setTimeout(u, 250));
                            try {
                                yield n.fetchUnseenEventsAPI()
                            } catch (u) {
                                console.error("Unable to check for unseen events", u)
                            }
                        } else n.shouldFetchUnseenEventsOnConnect = !0
                    })()
                }
                fetchUnseenEventsAPI() {
                    var n = this;
                    return t(function*() {
                        n.shouldFetchUnseenEventsOnConnect = !1, (yield n.http.fetchUnseenEvents()).forEach(m => n.handleIncomingEvent(m))
                    })()
                }
                setSessionMetadata(n, u) {
                    var m = this;
                    return t(function*() {
                        const _ = {
                            type: "SetSessionConfig",
                            id: (0, y.IntNumber)(m.nextReqId++),
                            sessionId: m.session.id,
                            metadata: {
                                [n]: u
                            }
                        };
                        return m.setOnceConnected(t(function*() {
                            const E = yield m.makeRequest(_);
                            if ("Fail" === E.type) throw new Error(E.error || "failed to set session metadata")
                        }))
                    })()
                }
                publishEvent(n, u, m = !1) {
                    var _ = this;
                    return t(function*() {
                        const E = yield _.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, u), {
                            origin: location.origin,
                            relaySource: window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
                        }))), M = {
                            type: "PublishEvent",
                            id: (0, y.IntNumber)(_.nextReqId++),
                            sessionId: _.session.id,
                            event: n,
                            data: E,
                            callWebhook: m
                        };
                        return _.setOnceLinked(t(function*() {
                            const w = yield _.makeRequest(M);
                            if ("Fail" === w.type) throw new Error(w.error || "failed to publish event");
                            return w.eventId
                        }))
                    })()
                }
                sendData(n) {
                    this.ws.sendData(JSON.stringify(n))
                }
                updateLastHeartbeat() {
                    this.lastHeartbeatResponse = Date.now()
                }
                heartbeat() {
                    if (Date.now() - this.lastHeartbeatResponse > 2e4) this.ws.disconnect();
                    else try {
                        this.ws.sendData("h")
                    } catch {}
                }
                makeRequest(n, u = 6e4) {
                    var m = this;
                    return t(function*() {
                        const _ = n.id;
                        let E;
                        return m.sendData(n), Promise.race([new Promise((M, w) => {
                            E = window.setTimeout(() => {
                                w(new Error(`request ${_} timed out`))
                            }, u)
                        }), new Promise(M => {
                            m.requestResolutions.set(_, w => {
                                clearTimeout(E), M(w), m.requestResolutions.delete(_)
                            })
                        })])
                    })()
                }
                authenticate() {
                    var n = this;
                    return t(function*() {
                        const u = {
                                type: "HostSession",
                                id: (0, y.IntNumber)(n.nextReqId++),
                                sessionId: n.session.id,
                                sessionKey: n.session.key
                            },
                            m = yield n.makeRequest(u);
                        if ("Fail" === m.type) throw new Error(m.error || "failed to authentcate")
                    })()
                }
                sendIsLinked() {
                    const n = {
                        type: "IsLinked",
                        id: (0, y.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(n)
                }
                sendGetSessionConfig() {
                    const n = {
                        type: "GetSessionConfig",
                        id: (0, y.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(n)
                }
            }
        },
        6724: ($, o, p) => {
            "use strict";
            var t = p(7156).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.WalletLinkHTTP = void 0, o.WalletLinkHTTP = class y {
                constructor(d, i, r) {
                    this.linkAPIUrl = d, this.sessionId = i, this.auth = `Basic ${btoa(`${i}:${r}`)}`
                }
                markUnseenEventsAsSeen(d) {
                    var i = this;
                    return t(function*() {
                        return Promise.all(d.map(r => fetch(`${i.linkAPIUrl}/events/${r.eventId}/seen`, {
                            method: "POST",
                            headers: {
                                Authorization: i.auth
                            }
                        }))).catch(r => console.error("Unabled to mark event as failed:", r))
                    })()
                }
                fetchUnseenEvents() {
                    var d = this;
                    return t(function*() {
                        var i;
                        const r = yield fetch(`${d.linkAPIUrl}/events?unseen=true`, {
                            headers: {
                                Authorization: d.auth
                            }
                        });
                        if (r.ok) {
                            const {
                                events: e,
                                error: a
                            } = yield r.json();
                            if (a) throw new Error(`Check unseen events failed: ${a}`);
                            const g = null !== (i = e ? .filter(l => "Web3Response" === l.event).map(l => ({
                                type: "Event",
                                sessionId: d.sessionId,
                                eventId: l.id,
                                event: l.event,
                                data: l.data
                            }))) && void 0 !== i ? i : [];
                            return d.markUnseenEventsAsSeen(g), g
                        }
                        throw new Error(`Check unseen events failed: ${r.status}`)
                    })()
                }
            }
        },
        243: ($, o, p) => {
            "use strict";
            var t = p(7156).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.WalletLinkWebSocket = o.ConnectionState = void 0;
            var y = function(d) {
                return d[d.DISCONNECTED = 0] = "DISCONNECTED", d[d.CONNECTING = 1] = "CONNECTING", d[d.CONNECTED = 2] = "CONNECTED", d
            }(y || (o.ConnectionState = y = {}));
            o.WalletLinkWebSocket = class c {
                setConnectionStateListener(i) {
                    this.connectionStateListener = i
                }
                setIncomingDataListener(i) {
                    this.incomingDataListener = i
                }
                constructor(i, r = WebSocket) {
                    this.WebSocketClass = r, this.webSocket = null, this.pendingData = [], this.url = i.replace(/^http/, "ws")
                }
                connect() {
                    var i = this;
                    return t(function*() {
                        if (i.webSocket) throw new Error("webSocket object is not null");
                        return new Promise((r, e) => {
                            var a;
                            let g;
                            try {
                                i.webSocket = g = new i.WebSocketClass(i.url)
                            } catch (l) {
                                return void e(l)
                            }
                            null === (a = i.connectionStateListener) || void 0 === a || a.call(i, y.CONNECTING), g.onclose = l => {
                                var v;
                                i.clearWebSocket(), e(new Error(`websocket error ${l.code}: ${l.reason}`)), null === (v = i.connectionStateListener) || void 0 === v || v.call(i, y.DISCONNECTED)
                            }, g.onopen = l => {
                                var v;
                                r(), null === (v = i.connectionStateListener) || void 0 === v || v.call(i, y.CONNECTED), i.pendingData.length > 0 && ([...i.pendingData].forEach(n => i.sendData(n)), i.pendingData = [])
                            }, g.onmessage = l => {
                                var v, s;
                                if ("h" === l.data) null === (v = i.incomingDataListener) || void 0 === v || v.call(i, {
                                    type: "Heartbeat"
                                });
                                else try {
                                    const n = JSON.parse(l.data);
                                    null === (s = i.incomingDataListener) || void 0 === s || s.call(i, n)
                                } catch {}
                            }
                        })
                    })()
                }
                disconnect() {
                    var i;
                    const {
                        webSocket: r
                    } = this;
                    if (r) {
                        this.clearWebSocket(), null === (i = this.connectionStateListener) || void 0 === i || i.call(this, y.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
                        try {
                            r.close()
                        } catch {}
                    }
                }
                sendData(i) {
                    const {
                        webSocket: r
                    } = this;
                    if (!r) return this.pendingData.push(i), void this.connect();
                    r.send(i)
                }
                clearWebSocket() {
                    const {
                        webSocket: i
                    } = this;
                    i && (this.webSocket = null, i.onclose = null, i.onerror = null, i.onmessage = null, i.onopen = null)
                }
            }
        },
        8315: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.isErrorResponse = void 0, o.isErrorResponse = function p(t) {
                return void 0 !== t.errorMessage
            }
        },
        7144: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.WalletLinkRelayUI = void 0;
            const t = p(8070),
                y = p(3953),
                c = p(1926);
            o.WalletLinkRelayUI = class d {
                constructor(r) {
                    this.standalone = null, this.attached = !1, this.snackbar = new c.Snackbar({
                        darkMode: r.darkMode
                    }), this.linkFlow = new y.LinkFlow({
                        darkMode: r.darkMode,
                        version: r.version,
                        sessionId: r.session.id,
                        sessionSecret: r.session.secret,
                        linkAPIUrl: r.linkAPIUrl,
                        isParentConnection: !1
                    })
                }
                attach() {
                    if (this.attached) throw new Error("Coinbase Wallet SDK UI is already attached");
                    const r = document.documentElement,
                        e = document.createElement("div");
                    e.className = "-cbwsdk-css-reset", r.appendChild(e), this.linkFlow.attach(e), this.snackbar.attach(e), this.attached = !0, (0, t.injectCssReset)()
                }
                setConnected(r) {
                    this.linkFlow.setConnected(r)
                }
                setChainId(r) {
                    this.linkFlow.setChainId(r)
                }
                setConnectDisabled(r) {
                    this.linkFlow.setConnectDisabled(r)
                }
                addEthereumChain() {}
                watchAsset() {}
                switchEthereumChain() {}
                requestEthereumAccounts(r) {
                    this.linkFlow.open({
                        onCancel: r.onCancel
                    })
                }
                hideRequestEthereumAccounts() {
                    this.linkFlow.close()
                }
                signEthereumMessage() {}
                signEthereumTransaction() {}
                submitEthereumTransaction() {}
                ethereumAddressFromSignedMessage() {}
                showConnecting(r) {
                    let e;
                    return e = r.isUnlinkedErrorState ? {
                        autoExpand: !0,
                        message: "Connection lost",
                        menuItems: [{
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: r.onResetConnection
                        }]
                    } : {
                        message: "Confirm on phone",
                        menuItems: [{
                            isRed: !0,
                            info: "Cancel transaction",
                            svgWidth: "11",
                            svgHeight: "11",
                            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                            defaultFillRule: "inherit",
                            defaultClipRule: "inherit",
                            onClick: r.onCancel
                        }, {
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: r.onResetConnection
                        }]
                    }, this.snackbar.presentItem(e)
                }
                reloadUI() {
                    document.location.reload()
                }
                inlineAccountsResponse() {
                    return !1
                }
                inlineAddEthereumChain() {
                    return !1
                }
                inlineWatchAsset() {
                    return !1
                }
                inlineSwitchEthereumChain() {
                    return !1
                }
                setStandalone(r) {
                    this.standalone = r
                }
                isStandalone() {
                    var r;
                    return null !== (r = this.standalone) && void 0 !== r && r
                }
            }
        },
        4475: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer;border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}"
        },
        9959: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(E) {
                return E && E.__esModule ? E : {
                    default: E
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CoinbaseWalletSteps = o.ConnectContent = void 0;
            const y = t(p(6915)),
                c = p(4354),
                d = p(2329),
                i = p(7938),
                r = p(1757),
                e = p(7072),
                a = p(7341),
                g = p(5499),
                l = p(2531),
                v = t(p(4475)),
                s_steps = _,
                n = E => "light" === E ? "#FFFFFF" : "#0A0B0D";

            function m({
                title: E,
                description: M,
                theme: w
            }) {
                return (0, c.h)("div", {
                    className: (0, y.default)("-cbwsdk-connect-item", w)
                }, (0, c.h)("div", null, (0, c.h)(e.CoinbaseWalletRound, null)), (0, c.h)("div", {
                    className: "-cbwsdk-connect-item-copy-wrapper"
                }, (0, c.h)("h3", {
                    className: "-cbwsdk-connect-item-title"
                }, E), (0, c.h)("p", {
                    className: "-cbwsdk-connect-item-description"
                }, M)))
            }

            function _({
                theme: E
            }) {
                return (0, c.h)("ol", {
                    className: "-cbwsdk-wallet-steps"
                }, (0, c.h)("li", {
                    className: (0, y.default)("-cbwsdk-wallet-steps-item", E)
                }, (0, c.h)("div", {
                    className: "-cbwsdk-wallet-steps-item-wrapper"
                }, "Open Coinbase Wallet app")), (0, c.h)("li", {
                    className: (0, y.default)("-cbwsdk-wallet-steps-item", E)
                }, (0, c.h)("div", {
                    className: "-cbwsdk-wallet-steps-item-wrapper"
                }, (0, c.h)("span", null, "Tap ", (0, c.h)("strong", null, "Scan"), " "), (0, c.h)("span", {
                    className: (0, y.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", E)
                }, (0, c.h)(a.QRCodeIcon, {
                    fill: n(E)
                })))))
            }
            o.ConnectContent = function u(E) {
                const {
                    theme: M
                } = E, w = (0, d.createQrUrl)(E.sessionId, E.sessionSecret, E.linkAPIUrl, E.isParentConnection, E.version, E.chainId), A = s_steps;
                return (0, c.h)("div", {
                    "data-testid": "connect-content",
                    className: (0, y.default)("-cbwsdk-connect-content", M)
                }, (0, c.h)("style", null, v.default), (0, c.h)("div", {
                    className: "-cbwsdk-connect-content-header"
                }, (0, c.h)("h2", {
                    className: (0, y.default)("-cbwsdk-connect-content-heading", M)
                }, "Scan to connect with our mobile app"), E.onCancel && (0, c.h)("button", {
                    type: "button",
                    className: "-cbwsdk-cancel-button",
                    onClick: E.onCancel
                }, (0, c.h)(r.CloseIcon, {
                    fill: "light" === M ? "#0A0B0D" : "#FFFFFF"
                }))), (0, c.h)("div", {
                    className: "-cbwsdk-connect-content-layout"
                }, (0, c.h)("div", {
                    className: "-cbwsdk-connect-content-column-left"
                }, (0, c.h)(m, {
                    title: "Coinbase Wallet app",
                    description: "Connect with your self-custody wallet",
                    theme: M
                })), (0, c.h)("div", {
                    className: "-cbwsdk-connect-content-column-right"
                }, (0, c.h)("div", {
                    className: "-cbwsdk-connect-content-qr-wrapper"
                }, (0, c.h)(g.QRCode, {
                    content: w,
                    width: 200,
                    height: 200,
                    fgColor: "#000",
                    bgColor: "transparent"
                }), (0, c.h)("input", {
                    type: "hidden",
                    name: "cbw-cbwsdk-version",
                    value: i.LIB_VERSION
                }), (0, c.h)("input", {
                    type: "hidden",
                    value: w
                })), (0, c.h)(A, {
                    theme: M
                }), !E.isConnected && (0, c.h)("div", {
                    "data-testid": "connecting-spinner",
                    className: (0, y.default)("-cbwsdk-connect-content-qr-connecting", M)
                }, (0, c.h)(l.Spinner, {
                    size: 36,
                    color: "dark" === M ? "#FFF" : "#000"
                }), (0, c.h)("p", null, "Connecting...")))))
            }, o.CoinbaseWalletSteps = _
        },
        7077: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}"
        },
        8767: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(g) {
                return g && g.__esModule ? g : {
                    default: g
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ConnectDialog = void 0;
            const y = t(p(6915)),
                c = p(4354),
                d = p(491),
                i = p(9959),
                r = p(6021),
                e = t(p(7077));
            o.ConnectDialog = g => {
                const {
                    isOpen: l,
                    darkMode: v
                } = g, [s, n] = (0, d.useState)(!l), [u, m] = (0, d.useState)(!l);
                (0, d.useEffect)(() => {
                    const E = [window.setTimeout(() => {
                        m(!l)
                    }, 10)];
                    return l ? n(!1) : E.push(window.setTimeout(() => {
                        n(!0)
                    }, 360)), () => {
                        E.forEach(window.clearTimeout)
                    }
                }, [l]);
                const _ = v ? "dark" : "light";
                return (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-connect-dialog-container", s && "-cbwsdk-connect-dialog-container-hidden")
                }, (0, c.h)("style", null, e.default), (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-connect-dialog-backdrop", _, u && "-cbwsdk-connect-dialog-backdrop-hidden")
                }), (0, c.h)("div", {
                    class: "-cbwsdk-connect-dialog"
                }, (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-connect-dialog-box", u && "-cbwsdk-connect-dialog-box-hidden")
                }, g.connectDisabled ? null : (0, c.h)(i.ConnectContent, {
                    theme: _,
                    version: g.version,
                    sessionId: g.sessionId,
                    sessionSecret: g.sessionSecret,
                    linkAPIUrl: g.linkAPIUrl,
                    isConnected: g.isConnected,
                    isParentConnection: g.isParentConnection,
                    chainId: g.chainId,
                    onCancel: g.onCancel
                }), (0, c.h)(r.TryExtensionContent, {
                    theme: _
                }))))
            }
        },
        3953: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.LinkFlow = void 0;
            const t = p(4354),
                y = p(8767);
            o.LinkFlow = class c {
                constructor(i) {
                    this.connected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = i.darkMode, this.version = i.version, this.sessionId = i.sessionId, this.sessionSecret = i.sessionSecret, this.linkAPIUrl = i.linkAPIUrl, this.isParentConnection = i.isParentConnection
                }
                attach(i) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", i.appendChild(this.root), this.render()
                }
                setConnected(i) {
                    this.connected !== i && (this.connected = i, this.render())
                }
                setChainId(i) {
                    this.chainId !== i && (this.chainId = i, this.render())
                }
                detach() {
                    var i;
                    this.root && ((0, t.render)(null, this.root), null === (i = this.root.parentElement) || void 0 === i || i.removeChild(this.root))
                }
                setConnectDisabled(i) {
                    this.connectDisabled = i
                }
                open(i) {
                    this.isOpen = !0, this.onCancel = i.onCancel, this.render()
                }
                close() {
                    this.isOpen = !1, this.onCancel = null, this.render()
                }
                render() {
                    this.root && (0, t.render)((0, t.h)(y.ConnectDialog, {
                        darkMode: this.darkMode,
                        version: this.version,
                        sessionId: this.sessionId,
                        sessionSecret: this.sessionSecret,
                        linkAPIUrl: this.linkAPIUrl,
                        isOpen: this.isOpen,
                        isConnected: this.connected,
                        isParentConnection: this.isParentConnection,
                        chainId: this.chainId,
                        onCancel: this.onCancel,
                        connectDisabled: this.connectDisabled
                    }), this.root)
                }
            }
        },
        5499: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.QRCode = void 0;
            const y = p(4354),
                c = p(491),
                d = t(p(8167));
            o.QRCode = r => {
                const [e, a] = (0, c.useState)("");
                return (0, c.useEffect)(() => {
                    var g, l;
                    const v = new d.default({
                            content: r.content,
                            background: r.bgColor || "#ffffff",
                            color: r.fgColor || "#000000",
                            container: "svg",
                            ecl: "M",
                            width: null !== (g = r.width) && void 0 !== g ? g : 256,
                            height: null !== (l = r.height) && void 0 !== l ? l : 256,
                            padding: 0,
                            image: r.image
                        }),
                        s = Buffer.from(v.svg(), "utf8").toString("base64");
                    a(`data:image/svg+xml;base64,${s}`)
                }, [r.bgColor, r.content, r.fgColor, r.height, r.image, r.width]), e ? (0, y.h)("img", {
                    src: e,
                    alt: "QR Code"
                }) : null
            }
        },
        9983: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
        },
        8669: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(g) {
                return g && g.__esModule ? g : {
                    default: g
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.RedirectDialog = void 0;
            const y = t(p(6915)),
                c = p(4354),
                d = p(8070),
                i = p(9963),
                r = t(p(9983));
            o.RedirectDialog = class e {
                constructor() {
                    this.root = null
                }
                attach() {
                    const l = document.documentElement;
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", l.appendChild(this.root), (0, d.injectCssReset)()
                }
                present(l) {
                    this.render(l)
                }
                clear() {
                    this.render(null)
                }
                render(l) {
                    this.root && ((0, c.render)(null, this.root), l && (0, c.render)((0, c.h)(a, Object.assign({}, l, {
                        onDismiss: () => {
                            this.clear()
                        }
                    })), this.root))
                }
            };
            const a = ({
                title: g,
                buttonText: l,
                darkMode: v,
                onButtonClick: s,
                onDismiss: n
            }) => {
                const u = v ? "dark" : "light";
                return (0, c.h)(i.SnackbarContainer, {
                    darkMode: v
                }, (0, c.h)("div", {
                    class: "-cbwsdk-redirect-dialog"
                }, (0, c.h)("style", null, r.default), (0, c.h)("div", {
                    class: "-cbwsdk-redirect-dialog-backdrop",
                    onClick: n
                }), (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-redirect-dialog-box", u)
                }, (0, c.h)("p", null, g), (0, c.h)("button", {
                    onClick: s
                }, l))))
            }
        },
        1916: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
        },
        1926: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(v) {
                return v && v.__esModule ? v : {
                    default: v
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.SnackbarInstance = o.SnackbarContainer = o.Snackbar = void 0;
            const y = t(p(6915)),
                c = p(4354),
                d = p(491),
                i = t(p(1916));
            o.Snackbar = class a {
                constructor(s) {
                    this.items = new Map, this.nextItemKey = 0, this.root = null, this.darkMode = s.darkMode
                }
                attach(s) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", s.appendChild(this.root), this.render()
                }
                presentItem(s) {
                    const n = this.nextItemKey++;
                    return this.items.set(n, s), this.render(), () => {
                        this.items.delete(n), this.render()
                    }
                }
                clear() {
                    this.items.clear(), this.render()
                }
                render() {
                    this.root && (0, c.render)((0, c.h)("div", null, (0, c.h)(o.SnackbarContainer, {
                        darkMode: this.darkMode
                    }, Array.from(this.items.entries()).map(([s, n]) => (0, c.h)(o.SnackbarInstance, Object.assign({}, n, {
                        key: s
                    }))))), this.root)
                }
            }, o.SnackbarContainer = v => (0, c.h)("div", {
                class: (0, y.default)("-cbwsdk-snackbar-container")
            }, (0, c.h)("style", null, i.default), (0, c.h)("div", {
                class: "-cbwsdk-snackbar"
            }, v.children)), o.SnackbarInstance = ({
                autoExpand: v,
                message: s,
                menuItems: n
            }) => {
                const [u, m] = (0, d.useState)(!0), [_, E] = (0, d.useState)(v ? ? !1);
                return (0, d.useEffect)(() => {
                    const w = [window.setTimeout(() => {
                        m(!1)
                    }, 1), window.setTimeout(() => {
                        E(!0)
                    }, 1e4)];
                    return () => {
                        w.forEach(window.clearTimeout)
                    }
                }), (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-snackbar-instance", u && "-cbwsdk-snackbar-instance-hidden", _ && "-cbwsdk-snackbar-instance-expanded")
                }, (0, c.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header",
                    onClick: () => {
                        E(!_)
                    }
                }, (0, c.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                    class: "-cbwsdk-snackbar-instance-header-cblogo"
                }), " ", (0, c.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header-message"
                }, s), (0, c.h)("div", {
                    class: "-gear-container"
                }, !_ && (0, c.h)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, c.h)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#F5F7F8"
                })), (0, c.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand"
                }))), n && n.length > 0 && (0, c.h)("div", {
                    class: "-cbwsdk-snackbar-instance-menu"
                }, n.map((w, A) => (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-snackbar-instance-menu-item", w.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                    onClick: w.onClick,
                    key: A
                }, (0, c.h)("svg", {
                    width: w.svgWidth,
                    height: w.svgHeight,
                    viewBox: "0 0 10 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, c.h)("path", {
                    "fill-rule": w.defaultFillRule,
                    "clip-rule": w.defaultClipRule,
                    d: w.path,
                    fill: "#AAAAAA"
                })), (0, c.h)("span", {
                    class: (0, y.default)("-cbwsdk-snackbar-instance-menu-item-info", w.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
                }, w.info)))))
            }
        },
        9963: function($, o, p) {
            "use strict";
            var t = this && this.__createBinding || (Object.create ? function(c, d, i, r) {
                    void 0 === r && (r = i);
                    var e = Object.getOwnPropertyDescriptor(d, i);
                    (!e || ("get" in e ? !d.__esModule : e.writable || e.configurable)) && (e = {
                        enumerable: !0,
                        get: function() {
                            return d[i]
                        }
                    }), Object.defineProperty(c, r, e)
                } : function(c, d, i, r) {
                    void 0 === r && (r = i), c[r] = d[i]
                }),
                y = this && this.__exportStar || function(c, d) {
                    for (var i in c) "default" !== i && !Object.prototype.hasOwnProperty.call(d, i) && t(d, c, i)
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), y(p(1926), o)
        },
        9436: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}"
        },
        2531: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.Spinner = void 0;
            const y = p(4354),
                c = t(p(9436));
            o.Spinner = i => {
                var r;
                const e = null !== (r = i.size) && void 0 !== r ? r : 64,
                    a = i.color || "#000";
                return (0, y.h)("div", {
                    class: "-cbwsdk-spinner"
                }, (0, y.h)("style", null, c.default), (0, y.h)("svg", {
                    viewBox: "0 0 100 100",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                        width: e,
                        height: e
                    }
                }, (0, y.h)("circle", {
                    style: {
                        cx: 50,
                        cy: 50,
                        r: 45,
                        stroke: a
                    }
                })))
            }
        },
        3325: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}"
        },
        6021: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.TryExtensionContent = void 0;
            const y = t(p(6915)),
                c = p(4354),
                d = p(491),
                i = p(1654),
                r = p(4453),
                e = p(1115),
                a = t(p(3325));
            o.TryExtensionContent = function g({
                theme: l
            }) {
                const [v, s] = (0, d.useState)(!1), n = (0, d.useCallback)(() => {
                    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank")
                }, []), u = (0, d.useCallback)(() => {
                    v ? window.location.reload() : (n(), s(!0))
                }, [n, v]);
                return (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-try-extension", l)
                }, (0, c.h)("style", null, a.default), (0, c.h)("div", {
                    class: "-cbwsdk-try-extension-column-half"
                }, (0, c.h)("h3", {
                    class: (0, y.default)("-cbwsdk-try-extension-heading", l)
                }, "Or try the Coinbase Wallet browser extension"), (0, c.h)("div", {
                    class: "-cbwsdk-try-extension-cta-wrapper"
                }, (0, c.h)("button", {
                    class: (0, y.default)("-cbwsdk-try-extension-cta", l),
                    onClick: u
                }, v ? "Refresh" : "Install"), (0, c.h)("div", null, !v && (0, c.h)(i.ArrowLeftIcon, {
                    class: "-cbwsdk-try-extension-cta-icon",
                    fill: "light" === l ? "#0052FF" : "#588AF5"
                })))), (0, c.h)("div", {
                    class: "-cbwsdk-try-extension-column-half"
                }, (0, c.h)("ul", {
                    class: "-cbwsdk-try-extension-list"
                }, (0, c.h)("li", {
                    class: "-cbwsdk-try-extension-list-item"
                }, (0, c.h)("div", {
                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                }, (0, c.h)("span", {
                    class: (0, y.default)("-cbwsdk-try-extension-list-item-icon", l)
                }, (0, c.h)(r.LaptopIcon, {
                    fill: "light" === l ? "#0A0B0D" : "#FFFFFF"
                }))), (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-try-extension-list-item-copy", l)
                }, "Connect with dapps with just one click on your desktop browser")), (0, c.h)("li", {
                    class: "-cbwsdk-try-extension-list-item"
                }, (0, c.h)("div", {
                    class: "-cbwsdk-try-extension-list-item-icon-wrapper"
                }, (0, c.h)("span", {
                    class: (0, y.default)("-cbwsdk-try-extension-list-item-icon", l)
                }, (0, c.h)(e.SafeIcon, {
                    fill: "light" === l ? "#0A0B0D" : "#FFFFFF"
                }))), (0, c.h)("div", {
                    class: (0, y.default)("-cbwsdk-try-extension-list-item-copy", l)
                }, "Add an additional layer of security by using a supported Ledger hardware wallet")))))
            }
        },
        1654: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ArrowLeftIcon = void 0;
            const t = p(4354);
            o.ArrowLeftIcon = function y(c) {
                return (0, t.h)("svg", Object.assign({
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg"
                }, c), (0, t.h)("path", {
                    d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z"
                }))
            }
        },
        1757: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CloseIcon = void 0;
            const t = p(4354);
            o.CloseIcon = function y(c) {
                return (0, t.h)("svg", Object.assign({
                    width: "40",
                    height: "40",
                    viewBox: "0 0 40 40",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, c), (0, t.h)("path", {
                    d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z"
                }))
            }
        },
        7072: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CoinbaseWalletRound = void 0;
            const t = p(4354);
            o.CoinbaseWalletRound = function y(c) {
                return (0, t.h)("svg", Object.assign({
                    width: "28",
                    height: "28",
                    viewBox: "0 0 28 28",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, c), (0, t.h)("circle", {
                    cx: "14",
                    cy: "14",
                    r: "14",
                    fill: "#0052FF"
                }), (0, t.h)("path", {
                    d: "M23.8521 14.0003C23.8521 19.455 19.455 23.8521 14.0003 23.8521C8.54559 23.8521 4.14844 19.455 4.14844 14.0003C4.14844 8.54559 8.54559 4.14844 14.0003 4.14844C19.455 4.14844 23.8521 8.54559 23.8521 14.0003Z",
                    fill: "white"
                }), (0, t.h)("path", {
                    d: "M11.1855 12.5042C11.1855 12.0477 11.1855 11.7942 11.2835 11.642C11.3814 11.4899 11.4793 11.3377 11.6261 11.287C11.8219 11.1855 12.0178 11.1855 12.5073 11.1855H15.4934C15.983 11.1855 16.1788 11.1855 16.3746 11.287C16.5215 11.3884 16.6683 11.4899 16.7173 11.642C16.8152 11.8449 16.8152 12.0477 16.8152 12.5042V15.4965C16.8152 15.953 16.8152 16.2066 16.7173 16.3587C16.6194 16.5109 16.5215 16.663 16.3746 16.7137C16.1788 16.8152 15.983 16.8152 15.4934 16.8152H12.5073C12.0178 16.8152 11.8219 16.8152 11.6261 16.7137C11.4793 16.6123 11.3324 16.5109 11.2835 16.3587C11.1855 16.1558 11.1855 15.953 11.1855 15.4965V12.5042Z",
                    fill: "#0052FF"
                }))
            }
        },
        4453: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.LaptopIcon = void 0;
            const t = p(4354);
            o.LaptopIcon = function y(c) {
                return (0, t.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, c), (0, t.h)("path", {
                    d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z"
                }), (0, t.h)("path", {
                    d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z"
                }))
            }
        },
        7341: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.QRCodeIcon = void 0;
            const t = p(4354);
            o.QRCodeIcon = function y(c) {
                return (0, t.h)("svg", Object.assign({
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, c), (0, t.h)("path", {
                    d: "M3 3V8.99939L5 8.99996V5H9V3H3Z"
                }), (0, t.h)("path", {
                    d: "M15 21L21 21V15.0006L19 15V19L15 19V21Z"
                }), (0, t.h)("path", {
                    d: "M21 9H19V5H15.0006L15 3H21V9Z"
                }), (0, t.h)("path", {
                    d: "M3 15V21H8.99939L8.99996 19H5L5 15H3Z"
                }))
            }
        },
        1115: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.SafeIcon = void 0;
            const t = p(4354);
            o.SafeIcon = function y(c) {
                return (0, t.h)("svg", Object.assign({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    xmlns: "http://www.w3.org/2000/svg"
                }, c), (0, t.h)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z"
                }))
            }
        },
        7252: ($, o, p) => {
            const t = p(2814),
                y = p(2662);

            function c(u) {
                return u.startsWith("int[") ? "int256" + u.slice(3) : "int" === u ? "int256" : u.startsWith("uint[") ? "uint256" + u.slice(4) : "uint" === u ? "uint256" : u.startsWith("fixed[") ? "fixed128x128" + u.slice(5) : "fixed" === u ? "fixed128x128" : u.startsWith("ufixed[") ? "ufixed128x128" + u.slice(6) : "ufixed" === u ? "ufixed128x128" : u
            }

            function d(u) {
                return parseInt(/^\D+(\d+)$/.exec(u)[1], 10)
            }

            function i(u) {
                var m = /^\D+(\d+)x(\d+)$/.exec(u);
                return [parseInt(m[1], 10), parseInt(m[2], 10)]
            }

            function r(u) {
                var m = u.match(/(.*)\[(.*?)\]$/);
                return m ? "" === m[2] ? "dynamic" : parseInt(m[2], 10) : null
            }

            function e(u) {
                var m = typeof u;
                if ("string" === m) return t.isHexString(u) ? new y(t.stripHexPrefix(u), 16) : new y(u, 10);
                if ("number" === m) return new y(u);
                if (u.toArray) return u;
                throw new Error("Argument is not a number")
            }

            function a(u, m) {
                var _, E, M, w;
                if ("address" === u) return a("uint160", e(m));
                if ("bool" === u) return a("uint8", m ? 1 : 0);
                if ("string" === u) return a("bytes", new Buffer(m, "utf8"));
                if (function l(u) {
                        return u.lastIndexOf("]") === u.length - 1
                    }(u)) {
                    if (typeof m.length > "u") throw new Error("Not an array?");
                    if ("dynamic" !== (_ = r(u)) && 0 !== _ && m.length > _) throw new Error("Elements exceed array size: " + _);
                    for (w in M = [], u = u.slice(0, u.lastIndexOf("[")), "string" == typeof m && (m = JSON.parse(m)), m) M.push(a(u, m[w]));
                    if ("dynamic" === _) {
                        var A = a("uint256", m.length);
                        M.unshift(A)
                    }
                    return Buffer.concat(M)
                }
                if ("bytes" === u) return m = new Buffer(m), M = Buffer.concat([a("uint256", m.length), m]), m.length % 32 != 0 && (M = Buffer.concat([M, t.zeros(32 - m.length % 32)])), M;
                if (u.startsWith("bytes")) {
                    if ((_ = d(u)) < 1 || _ > 32) throw new Error("Invalid bytes<N> width: " + _);
                    return t.setLengthRight(m, 32)
                }
                if (u.startsWith("uint")) {
                    if ((_ = d(u)) % 8 || _ < 8 || _ > 256) throw new Error("Invalid uint<N> width: " + _);
                    if ((E = e(m)).bitLength() > _) throw new Error("Supplied uint exceeds width: " + _ + " vs " + E.bitLength());
                    if (E < 0) throw new Error("Supplied uint is negative");
                    return E.toArrayLike(Buffer, "be", 32)
                }
                if (u.startsWith("int")) {
                    if ((_ = d(u)) % 8 || _ < 8 || _ > 256) throw new Error("Invalid int<N> width: " + _);
                    if ((E = e(m)).bitLength() > _) throw new Error("Supplied int exceeds width: " + _ + " vs " + E.bitLength());
                    return E.toTwos(256).toArrayLike(Buffer, "be", 32)
                }
                if (u.startsWith("ufixed")) {
                    if (_ = i(u), (E = e(m)) < 0) throw new Error("Supplied ufixed is negative");
                    return a("uint256", E.mul(new y(2).pow(new y(_[1]))))
                }
                if (u.startsWith("fixed")) return _ = i(u), a("int256", e(m).mul(new y(2).pow(new y(_[1]))));
                throw new Error("Unsupported or invalid type: " + u)
            }

            function g(u) {
                return "string" === u || "bytes" === u || "dynamic" === r(u)
            }

            function s(u, m) {
                if (u.length !== m.length) throw new Error("Number of types are not matching the values");
                for (var _, E, M = [], w = 0; w < u.length; w++) {
                    var A = c(u[w]),
                        x = m[w];
                    if ("bytes" === A) M.push(x);
                    else if ("string" === A) M.push(new Buffer(x, "utf8"));
                    else if ("bool" === A) M.push(new Buffer(x ? "01" : "00", "hex"));
                    else if ("address" === A) M.push(t.setLength(x, 20));
                    else if (A.startsWith("bytes")) {
                        if ((_ = d(A)) < 1 || _ > 32) throw new Error("Invalid bytes<N> width: " + _);
                        M.push(t.setLengthRight(x, _))
                    } else if (A.startsWith("uint")) {
                        if ((_ = d(A)) % 8 || _ < 8 || _ > 256) throw new Error("Invalid uint<N> width: " + _);
                        if ((E = e(x)).bitLength() > _) throw new Error("Supplied uint exceeds width: " + _ + " vs " + E.bitLength());
                        M.push(E.toArrayLike(Buffer, "be", _ / 8))
                    } else {
                        if (!A.startsWith("int")) throw new Error("Unsupported or invalid type: " + A);
                        if ((_ = d(A)) % 8 || _ < 8 || _ > 256) throw new Error("Invalid int<N> width: " + _);
                        if ((E = e(x)).bitLength() > _) throw new Error("Supplied int exceeds width: " + _ + " vs " + E.bitLength());
                        M.push(E.toTwos(_).toArrayLike(Buffer, "be", _ / 8))
                    }
                }
                return Buffer.concat(M)
            }
            $.exports = {
                rawEncode: function v(u, m) {
                    var _ = [],
                        E = [],
                        M = 32 * u.length;
                    for (var w in u) {
                        var A = c(u[w]),
                            N = a(A, m[w]);
                        g(A) ? (_.push(a("uint256", M)), E.push(N), M += N.length) : _.push(N)
                    }
                    return Buffer.concat(_.concat(E))
                },
                solidityPack: s,
                soliditySHA3: function n(u, m) {
                    return t.keccak(s(u, m))
                }
            }
        },
        3348: ($, o, p) => {
            const t = p(2814),
                y = p(7252),
                c = {
                    type: "object",
                    properties: {
                        types: {
                            type: "object",
                            additionalProperties: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    },
                                    required: ["name", "type"]
                                }
                            }
                        },
                        primaryType: {
                            type: "string"
                        },
                        domain: {
                            type: "object"
                        },
                        message: {
                            type: "object"
                        }
                    },
                    required: ["types", "primaryType", "domain", "message"]
                },
                d = {
                    encodeData(r, e, a, g = !0) {
                        const l = ["bytes32"],
                            v = [this.hashType(r, a)];
                        if (g) {
                            const s = (n, u, m) => {
                                if (void 0 !== a[u]) return ["bytes32", null == m ? "0x0000000000000000000000000000000000000000000000000000000000000000" : t.keccak(this.encodeData(u, m, a, g))];
                                if (void 0 === m) throw new Error(`missing value for field ${n} of type ${u}`);
                                if ("bytes" === u) return ["bytes32", t.keccak(m)];
                                if ("string" === u) return "string" == typeof m && (m = Buffer.from(m, "utf8")), ["bytes32", t.keccak(m)];
                                if (u.lastIndexOf("]") === u.length - 1) {
                                    const _ = u.slice(0, u.lastIndexOf("[")),
                                        E = m.map(M => s(n, _, M));
                                    return ["bytes32", t.keccak(y.rawEncode(E.map(([M]) => M), E.map(([, M]) => M)))]
                                }
                                return [u, m]
                            };
                            for (const n of a[r]) {
                                const [u, m] = s(n.name, n.type, e[n.name]);
                                l.push(u), v.push(m)
                            }
                        } else
                            for (const s of a[r]) {
                                let n = e[s.name];
                                if (void 0 !== n)
                                    if ("bytes" === s.type) l.push("bytes32"), n = t.keccak(n), v.push(n);
                                    else if ("string" === s.type) l.push("bytes32"), "string" == typeof n && (n = Buffer.from(n, "utf8")), n = t.keccak(n), v.push(n);
                                else if (void 0 !== a[s.type]) l.push("bytes32"), n = t.keccak(this.encodeData(s.type, n, a, g)), v.push(n);
                                else {
                                    if (s.type.lastIndexOf("]") === s.type.length - 1) throw new Error("Arrays currently unimplemented in encodeData");
                                    l.push(s.type), v.push(n)
                                }
                            }
                        return y.rawEncode(l, v)
                    },
                    encodeType(r, e) {
                        let a = "",
                            g = this.findTypeDependencies(r, e).filter(l => l !== r);
                        g = [r].concat(g.sort());
                        for (const l of g) {
                            if (!e[l]) throw new Error("No type definition specified: " + l);
                            a += l + "(" + e[l].map(({
                                name: s,
                                type: n
                            }) => n + " " + s).join(",") + ")"
                        }
                        return a
                    },
                    findTypeDependencies(r, e, a = []) {
                        if (r = r.match(/^\w*/)[0], a.includes(r) || void 0 === e[r]) return a;
                        a.push(r);
                        for (const g of e[r])
                            for (const l of this.findTypeDependencies(g.type, e, a)) !a.includes(l) && a.push(l);
                        return a
                    },
                    hashStruct(r, e, a, g = !0) {
                        return t.keccak(this.encodeData(r, e, a, g))
                    },
                    hashType(r, e) {
                        return t.keccak(this.encodeType(r, e))
                    },
                    sanitizeData(r) {
                        const e = {};
                        for (const a in c.properties) r[a] && (e[a] = r[a]);
                        return e.types && (e.types = Object.assign({
                            EIP712Domain: []
                        }, e.types)), e
                    },
                    hash(r, e = !0) {
                        const a = this.sanitizeData(r),
                            g = [Buffer.from("1901", "hex")];
                        return g.push(this.hashStruct("EIP712Domain", a.domain, a.types, e)), "EIP712Domain" !== a.primaryType && g.push(this.hashStruct(a.primaryType, a.message, a.types, e)), t.keccak(Buffer.concat(g))
                    }
                };
            $.exports = {
                TYPED_MESSAGE_SCHEMA: c,
                TypedDataUtils: d,
                hashForSignTypedDataLegacy: function(r) {
                    return function i(r) {
                        const e = new Error("Expect argument to be non-empty array");
                        if ("object" != typeof r || !r.length) throw e;
                        const a = r.map(function(v) {
                                return "bytes" === v.type ? t.toBuffer(v.value) : v.value
                            }),
                            g = r.map(function(v) {
                                return v.type
                            }),
                            l = r.map(function(v) {
                                if (!v.name) throw e;
                                return v.type + " " + v.name
                            });
                        return y.soliditySHA3(["bytes32", "bytes32"], [y.soliditySHA3(new Array(r.length).fill("string"), l), y.soliditySHA3(g, a)])
                    }(r.data)
                },
                hashForSignTypedData_v3: function(r) {
                    return d.hash(r.data, !1)
                },
                hashForSignTypedData_v4: function(r) {
                    return d.hash(r.data)
                }
            }
        },
        2814: ($, o, p) => {
            const t = p(568),
                y = p(2662);

            function c(s) {
                return Buffer.allocUnsafe(s).fill(0)
            }

            function d(s, n, u) {
                const m = c(n);
                return s = r(s), u ? s.length < n ? (s.copy(m), m) : s.slice(0, n) : s.length < n ? (s.copy(m, n - s.length), m) : s.slice(-n)
            }

            function r(s) {
                if (!Buffer.isBuffer(s))
                    if (Array.isArray(s)) s = Buffer.from(s);
                    else if ("string" == typeof s) s = l(s) ? Buffer.from(function g(s) {
                    return s.length % 2 ? "0" + s : s
                }(v(s)), "hex") : Buffer.from(s);
                else if ("number" == typeof s) s = intToBuffer(s);
                else if (null == s) s = Buffer.allocUnsafe(0);
                else if (y.isBN(s)) s = s.toArrayLike(Buffer);
                else {
                    if (!s.toArray) throw new Error("invalid type");
                    s = Buffer.from(s.toArray())
                }
                return s
            }

            function l(s) {
                return "string" == typeof s && s.match(/^0x[0-9A-Fa-f]*$/)
            }

            function v(s) {
                return "string" == typeof s && s.startsWith("0x") ? s.slice(2) : s
            }
            $.exports = {
                zeros: c,
                setLength: d,
                setLengthRight: function i(s, n) {
                    return d(s, n, !0)
                },
                isHexString: l,
                stripHexPrefix: v,
                toBuffer: r,
                bufferToHex: function e(s) {
                    return "0x" + (s = r(s)).toString("hex")
                },
                keccak: function a(s, n) {
                    return s = r(s), n || (n = 256), t("keccak" + n).update(s).digest()
                }
            }
        },
        8167: $ => {
            function o(s) {
                this.mode = t.MODE_8BIT_BYTE, this.data = s, this.parsedData = [];
                for (var n = 0, u = this.data.length; n < u; n++) {
                    var m = [],
                        _ = this.data.charCodeAt(n);
                    _ > 65536 ? (m[0] = 240 | (1835008 & _) >>> 18, m[1] = 128 | (258048 & _) >>> 12, m[2] = 128 | (4032 & _) >>> 6, m[3] = 128 | 63 & _) : _ > 2048 ? (m[0] = 224 | (61440 & _) >>> 12, m[1] = 128 | (4032 & _) >>> 6, m[2] = 128 | 63 & _) : _ > 128 ? (m[0] = 192 | (1984 & _) >>> 6, m[1] = 128 | 63 & _) : m[0] = _, this.parsedData.push(m)
                }
                this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
            }

            function p(s, n) {
                this.typeNumber = s, this.errorCorrectLevel = n, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            o.prototype = {
                getLength: function(s) {
                    return this.parsedData.length
                },
                write: function(s) {
                    for (var n = 0, u = this.parsedData.length; n < u; n++) s.put(this.parsedData[n], 8)
                }
            }, p.prototype = {
                addData: function(s) {
                    var n = new o(s);
                    this.dataList.push(n), this.dataCache = null
                },
                isDark: function(s, n) {
                    if (s < 0 || this.moduleCount <= s || n < 0 || this.moduleCount <= n) throw new Error(s + "," + n);
                    return this.modules[s][n]
                },
                getModuleCount: function() {
                    return this.moduleCount
                },
                make: function() {
                    this.makeImpl(!1, this.getBestMaskPattern())
                },
                makeImpl: function(s, n) {
                    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                    for (var u = 0; u < this.moduleCount; u++) {
                        this.modules[u] = new Array(this.moduleCount);
                        for (var m = 0; m < this.moduleCount; m++) this.modules[u][m] = null
                    }
                    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(s, n), this.typeNumber >= 7 && this.setupTypeNumber(s), null == this.dataCache && (this.dataCache = p.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, n)
                },
                setupPositionProbePattern: function(s, n) {
                    for (var u = -1; u <= 7; u++)
                        if (!(s + u <= -1 || this.moduleCount <= s + u))
                            for (var m = -1; m <= 7; m++) n + m <= -1 || this.moduleCount <= n + m || (this.modules[s + u][n + m] = 0 <= u && u <= 6 && (0 == m || 6 == m) || 0 <= m && m <= 6 && (0 == u || 6 == u) || 2 <= u && u <= 4 && 2 <= m && m <= 4)
                },
                getBestMaskPattern: function() {
                    for (var s = 0, n = 0, u = 0; u < 8; u++) {
                        this.makeImpl(!0, u);
                        var m = d.getLostPoint(this);
                        (0 == u || s > m) && (s = m, n = u)
                    }
                    return n
                },
                createMovieClip: function(s, n, u) {
                    var m = s.createEmptyMovieClip(n, u);
                    this.make();
                    for (var E = 0; E < this.modules.length; E++)
                        for (var M = 1 * E, w = 0; w < this.modules[E].length; w++) {
                            var A = 1 * w;
                            this.modules[E][w] && (m.beginFill(0, 100), m.moveTo(A, M), m.lineTo(A + 1, M), m.lineTo(A + 1, M + 1), m.lineTo(A, M + 1), m.endFill())
                        }
                    return m
                },
                setupTimingPattern: function() {
                    for (var s = 8; s < this.moduleCount - 8; s++) null == this.modules[s][6] && (this.modules[s][6] = s % 2 == 0);
                    for (var n = 8; n < this.moduleCount - 8; n++) null == this.modules[6][n] && (this.modules[6][n] = n % 2 == 0)
                },
                setupPositionAdjustPattern: function() {
                    for (var s = d.getPatternPosition(this.typeNumber), n = 0; n < s.length; n++)
                        for (var u = 0; u < s.length; u++) {
                            var m = s[n],
                                _ = s[u];
                            if (null == this.modules[m][_])
                                for (var E = -2; E <= 2; E++)
                                    for (var M = -2; M <= 2; M++) this.modules[m + E][_ + M] = -2 == E || 2 == E || -2 == M || 2 == M || 0 == E && 0 == M
                        }
                },
                setupTypeNumber: function(s) {
                    for (var n = d.getBCHTypeNumber(this.typeNumber), u = 0; u < 18; u++) {
                        var m = !s && 1 == (n >> u & 1);
                        this.modules[Math.floor(u / 3)][u % 3 + this.moduleCount - 8 - 3] = m
                    }
                    for (u = 0; u < 18; u++) m = !s && 1 == (n >> u & 1), this.modules[u % 3 + this.moduleCount - 8 - 3][Math.floor(u / 3)] = m
                },
                setupTypeInfo: function(s, n) {
                    for (var m = d.getBCHTypeInfo(this.errorCorrectLevel << 3 | n), _ = 0; _ < 15; _++) {
                        var E = !s && 1 == (m >> _ & 1);
                        _ < 6 ? this.modules[_][8] = E : _ < 8 ? this.modules[_ + 1][8] = E : this.modules[this.moduleCount - 15 + _][8] = E
                    }
                    for (_ = 0; _ < 15; _++) E = !s && 1 == (m >> _ & 1), _ < 8 ? this.modules[8][this.moduleCount - _ - 1] = E : _ < 9 ? this.modules[8][15 - _ - 1 + 1] = E : this.modules[8][15 - _ - 1] = E;
                    this.modules[this.moduleCount - 8][8] = !s
                },
                mapData: function(s, n) {
                    for (var u = -1, m = this.moduleCount - 1, _ = 7, E = 0, M = this.moduleCount - 1; M > 0; M -= 2)
                        for (6 == M && M--;;) {
                            for (var w = 0; w < 2; w++)
                                if (null == this.modules[m][M - w]) {
                                    var A = !1;
                                    E < s.length && (A = 1 == (s[E] >>> _ & 1)), d.getMask(n, m, M - w) && (A = !A), this.modules[m][M - w] = A, -1 == --_ && (E++, _ = 7)
                                }
                            if ((m += u) < 0 || this.moduleCount <= m) {
                                m -= u, u = -u;
                                break
                            }
                        }
                }
            }, p.PAD0 = 236, p.PAD1 = 17, p.createData = function(s, n, u) {
                for (var m = a.getRSBlocks(s, n), _ = new g, E = 0; E < u.length; E++) {
                    var M = u[E];
                    _.put(M.mode, 4), _.put(M.getLength(), d.getLengthInBits(M.mode, s)), M.write(_)
                }
                var w = 0;
                for (E = 0; E < m.length; E++) w += m[E].dataCount;
                if (_.getLengthInBits() > 8 * w) throw new Error("code length overflow. (" + _.getLengthInBits() + ">" + 8 * w + ")");
                for (_.getLengthInBits() + 4 <= 8 * w && _.put(0, 4); _.getLengthInBits() % 8 != 0;) _.putBit(!1);
                for (; !(_.getLengthInBits() >= 8 * w || (_.put(p.PAD0, 8), _.getLengthInBits() >= 8 * w));) _.put(p.PAD1, 8);
                return p.createBytes(_, m)
            }, p.createBytes = function(s, n) {
                for (var u = 0, m = 0, _ = 0, E = new Array(n.length), M = new Array(n.length), w = 0; w < n.length; w++) {
                    var A = n[w].dataCount,
                        x = n[w].totalCount - A;
                    m = Math.max(m, A), _ = Math.max(_, x), E[w] = new Array(A);
                    for (var N = 0; N < E[w].length; N++) E[w][N] = 255 & s.buffer[N + u];
                    u += A;
                    var z = d.getErrorCorrectPolynomial(x),
                        K = new e(E[w], z.getLength() - 1).mod(z);
                    for (M[w] = new Array(z.getLength() - 1), N = 0; N < M[w].length; N++) {
                        var ne = N + K.getLength() - M[w].length;
                        M[w][N] = ne >= 0 ? K.get(ne) : 0
                    }
                }
                var se = 0;
                for (N = 0; N < n.length; N++) se += n[N].totalCount;
                var le = new Array(se),
                    pe = 0;
                for (N = 0; N < m; N++)
                    for (w = 0; w < n.length; w++) N < E[w].length && (le[pe++] = E[w][N]);
                for (N = 0; N < _; N++)
                    for (w = 0; w < n.length; w++) N < M[w].length && (le[pe++] = M[w][N]);
                return le
            };
            for (var t = {
                    MODE_NUMBER: 1,
                    MODE_ALPHA_NUM: 2,
                    MODE_8BIT_BYTE: 4,
                    MODE_KANJI: 8
                }, y = {
                    L: 1,
                    M: 0,
                    Q: 3,
                    H: 2
                }, c = {
                    PATTERN000: 0,
                    PATTERN001: 1,
                    PATTERN010: 2,
                    PATTERN011: 3,
                    PATTERN100: 4,
                    PATTERN101: 5,
                    PATTERN110: 6,
                    PATTERN111: 7
                }, d = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(s) {
                        for (var n = s << 10; d.getBCHDigit(n) - d.getBCHDigit(d.G15) >= 0;) n ^= d.G15 << d.getBCHDigit(n) - d.getBCHDigit(d.G15);
                        return (s << 10 | n) ^ d.G15_MASK
                    },
                    getBCHTypeNumber: function(s) {
                        for (var n = s << 12; d.getBCHDigit(n) - d.getBCHDigit(d.G18) >= 0;) n ^= d.G18 << d.getBCHDigit(n) - d.getBCHDigit(d.G18);
                        return s << 12 | n
                    },
                    getBCHDigit: function(s) {
                        for (var n = 0; 0 != s;) n++, s >>>= 1;
                        return n
                    },
                    getPatternPosition: function(s) {
                        return d.PATTERN_POSITION_TABLE[s - 1]
                    },
                    getMask: function(s, n, u) {
                        switch (s) {
                            case c.PATTERN000:
                                return (n + u) % 2 == 0;
                            case c.PATTERN001:
                                return n % 2 == 0;
                            case c.PATTERN010:
                                return u % 3 == 0;
                            case c.PATTERN011:
                                return (n + u) % 3 == 0;
                            case c.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(u / 3)) % 2 == 0;
                            case c.PATTERN101:
                                return n * u % 2 + n * u % 3 == 0;
                            case c.PATTERN110:
                                return (n * u % 2 + n * u % 3) % 2 == 0;
                            case c.PATTERN111:
                                return (n * u % 3 + (n + u) % 2) % 2 == 0;
                            default:
                                throw new Error("bad maskPattern:" + s)
                        }
                    },
                    getErrorCorrectPolynomial: function(s) {
                        for (var n = new e([1], 0), u = 0; u < s; u++) n = n.multiply(new e([1, i.gexp(u)], 0));
                        return n
                    },
                    getLengthInBits: function(s, n) {
                        if (1 <= n && n < 10) switch (s) {
                            case t.MODE_NUMBER:
                                return 10;
                            case t.MODE_ALPHA_NUM:
                                return 9;
                            case t.MODE_8BIT_BYTE:
                            case t.MODE_KANJI:
                                return 8;
                            default:
                                throw new Error("mode:" + s)
                        } else if (n < 27) switch (s) {
                            case t.MODE_NUMBER:
                                return 12;
                            case t.MODE_ALPHA_NUM:
                                return 11;
                            case t.MODE_8BIT_BYTE:
                                return 16;
                            case t.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error("mode:" + s)
                        } else {
                            if (!(n < 41)) throw new Error("type:" + n);
                            switch (s) {
                                case t.MODE_NUMBER:
                                    return 14;
                                case t.MODE_ALPHA_NUM:
                                    return 13;
                                case t.MODE_8BIT_BYTE:
                                    return 16;
                                case t.MODE_KANJI:
                                    return 12;
                                default:
                                    throw new Error("mode:" + s)
                            }
                        }
                    },
                    getLostPoint: function(s) {
                        for (var n = s.getModuleCount(), u = 0, m = 0; m < n; m++)
                            for (var _ = 0; _ < n; _++) {
                                for (var E = 0, M = s.isDark(m, _), w = -1; w <= 1; w++)
                                    if (!(m + w < 0 || n <= m + w))
                                        for (var A = -1; A <= 1; A++) _ + A < 0 || n <= _ + A || 0 == w && 0 == A || M == s.isDark(m + w, _ + A) && E++;
                                E > 5 && (u += 3 + E - 5)
                            }
                        for (m = 0; m < n - 1; m++)
                            for (_ = 0; _ < n - 1; _++) {
                                var x = 0;
                                s.isDark(m, _) && x++, s.isDark(m + 1, _) && x++, s.isDark(m, _ + 1) && x++, s.isDark(m + 1, _ + 1) && x++, (0 == x || 4 == x) && (u += 3)
                            }
                        for (m = 0; m < n; m++)
                            for (_ = 0; _ < n - 6; _++) s.isDark(m, _) && !s.isDark(m, _ + 1) && s.isDark(m, _ + 2) && s.isDark(m, _ + 3) && s.isDark(m, _ + 4) && !s.isDark(m, _ + 5) && s.isDark(m, _ + 6) && (u += 40);
                        for (_ = 0; _ < n; _++)
                            for (m = 0; m < n - 6; m++) s.isDark(m, _) && !s.isDark(m + 1, _) && s.isDark(m + 2, _) && s.isDark(m + 3, _) && s.isDark(m + 4, _) && !s.isDark(m + 5, _) && s.isDark(m + 6, _) && (u += 40);
                        var N = 0;
                        for (_ = 0; _ < n; _++)
                            for (m = 0; m < n; m++) s.isDark(m, _) && N++;
                        return u + Math.abs(100 * N / n / n - 50) / 5 * 10
                    }
                }, i = {
                    glog: function(s) {
                        if (s < 1) throw new Error("glog(" + s + ")");
                        return i.LOG_TABLE[s]
                    },
                    gexp: function(s) {
                        for (; s < 0;) s += 255;
                        for (; s >= 256;) s -= 255;
                        return i.EXP_TABLE[s]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, r = 0; r < 8; r++) i.EXP_TABLE[r] = 1 << r;
            for (r = 8; r < 256; r++) i.EXP_TABLE[r] = i.EXP_TABLE[r - 4] ^ i.EXP_TABLE[r - 5] ^ i.EXP_TABLE[r - 6] ^ i.EXP_TABLE[r - 8];
            for (r = 0; r < 255; r++) i.LOG_TABLE[i.EXP_TABLE[r]] = r;

            function e(s, n) {
                if (null == s.length) throw new Error(s.length + "/" + n);
                for (var u = 0; u < s.length && 0 == s[u];) u++;
                this.num = new Array(s.length - u + n);
                for (var m = 0; m < s.length - u; m++) this.num[m] = s[m + u]
            }

            function a(s, n) {
                this.totalCount = s, this.dataCount = n
            }

            function g() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function(s) {
                    return this.num[s]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(s) {
                    for (var n = new Array(this.getLength() + s.getLength() - 1), u = 0; u < this.getLength(); u++)
                        for (var m = 0; m < s.getLength(); m++) n[u + m] ^= i.gexp(i.glog(this.get(u)) + i.glog(s.get(m)));
                    return new e(n, 0)
                },
                mod: function(s) {
                    if (this.getLength() - s.getLength() < 0) return this;
                    for (var n = i.glog(this.get(0)) - i.glog(s.get(0)), u = new Array(this.getLength()), m = 0; m < this.getLength(); m++) u[m] = this.get(m);
                    for (m = 0; m < s.getLength(); m++) u[m] ^= i.gexp(i.glog(s.get(m)) + n);
                    return new e(u, 0).mod(s)
                }
            }, a.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], a.getRSBlocks = function(s, n) {
                var u = a.getRsBlockTable(s, n);
                if (null == u) throw new Error("bad rs block @ typeNumber:" + s + "/errorCorrectLevel:" + n);
                for (var m = u.length / 3, _ = [], E = 0; E < m; E++)
                    for (var M = u[3 * E + 0], w = u[3 * E + 1], A = u[3 * E + 2], x = 0; x < M; x++) _.push(new a(w, A));
                return _
            }, a.getRsBlockTable = function(s, n) {
                switch (n) {
                    case y.L:
                        return a.RS_BLOCK_TABLE[4 * (s - 1) + 0];
                    case y.M:
                        return a.RS_BLOCK_TABLE[4 * (s - 1) + 1];
                    case y.Q:
                        return a.RS_BLOCK_TABLE[4 * (s - 1) + 2];
                    case y.H:
                        return a.RS_BLOCK_TABLE[4 * (s - 1) + 3];
                    default:
                        return
                }
            }, g.prototype = {
                get: function(s) {
                    var n = Math.floor(s / 8);
                    return 1 == (this.buffer[n] >>> 7 - s % 8 & 1)
                },
                put: function(s, n) {
                    for (var u = 0; u < n; u++) this.putBit(1 == (s >>> n - u - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(s) {
                    var n = Math.floor(this.length / 8);
                    this.buffer.length <= n && this.buffer.push(0), s && (this.buffer[n] |= 128 >>> this.length % 8), this.length++
                }
            };
            var l = [
                [17, 14, 11, 7],
                [32, 26, 20, 14],
                [53, 42, 32, 24],
                [78, 62, 46, 34],
                [106, 84, 60, 44],
                [134, 106, 74, 58],
                [154, 122, 86, 64],
                [192, 152, 108, 84],
                [230, 180, 130, 98],
                [271, 213, 151, 119],
                [321, 251, 177, 137],
                [367, 287, 203, 155],
                [425, 331, 241, 177],
                [458, 362, 258, 194],
                [520, 412, 292, 220],
                [586, 450, 322, 250],
                [644, 504, 364, 280],
                [718, 560, 394, 310],
                [792, 624, 442, 338],
                [858, 666, 482, 382],
                [929, 711, 509, 403],
                [1003, 779, 565, 439],
                [1091, 857, 611, 461],
                [1171, 911, 661, 511],
                [1273, 997, 715, 535],
                [1367, 1059, 751, 593],
                [1465, 1125, 805, 625],
                [1528, 1190, 868, 658],
                [1628, 1264, 908, 698],
                [1732, 1370, 982, 742],
                [1840, 1452, 1030, 790],
                [1952, 1538, 1112, 842],
                [2068, 1628, 1168, 898],
                [2188, 1722, 1228, 958],
                [2303, 1809, 1283, 983],
                [2431, 1911, 1351, 1051],
                [2563, 1989, 1423, 1093],
                [2699, 2099, 1499, 1139],
                [2809, 2213, 1579, 1219],
                [2953, 2331, 1663, 1273]
            ];

            function v(s) {
                if (this.options = {
                        padding: 4,
                        width: 256,
                        height: 256,
                        typeNumber: 4,
                        color: "#000000",
                        background: "#ffffff",
                        ecl: "M",
                        image: {
                            svg: "",
                            width: 0,
                            height: 0
                        }
                    }, "string" == typeof s && (s = {
                        content: s
                    }), s)
                    for (var u in s) this.options[u] = s[u];
                if ("string" != typeof this.options.content) throw new Error("Expected 'content' as string!");
                if (0 === this.options.content.length) throw new Error("Expected 'content' to be non-empty!");
                if (!(this.options.padding >= 0)) throw new Error("Expected 'padding' value to be non-negative!");
                if (!(this.options.width > 0 && this.options.height > 0)) throw new Error("Expected 'width' or 'height' value to be higher than zero!");
                var M = this.options.content,
                    w = function _(x, N) {
                        for (var z = function E(x) {
                                var N = encodeURI(x).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
                                return N.length + (N.length != x ? 3 : 0)
                            }(x), W = 1, K = 0, ne = 0, se = l.length; ne <= se; ne++) {
                            var le = l[ne];
                            if (!le) throw new Error("Content too long: expected " + K + " but got " + z);
                            switch (N) {
                                case "L":
                                    K = le[0];
                                    break;
                                case "M":
                                    K = le[1];
                                    break;
                                case "Q":
                                    K = le[2];
                                    break;
                                case "H":
                                    K = le[3];
                                    break;
                                default:
                                    throw new Error("Unknwon error correction level: " + N)
                            }
                            if (z <= K) break;
                            W++
                        }
                        if (W > l.length) throw new Error("Content too long");
                        return W
                    }(M, this.options.ecl),
                    A = function m(x) {
                        switch (x) {
                            case "L":
                                return y.L;
                            case "M":
                                return y.M;
                            case "Q":
                                return y.Q;
                            case "H":
                                return y.H;
                            default:
                                throw new Error("Unknwon error correction level: " + x)
                        }
                    }(this.options.ecl);
                this.qrcode = new p(w, A), this.qrcode.addData(M), this.qrcode.make()
            }
            v.prototype.svg = function(s) {
                var n = this.options || {},
                    u = this.qrcode.modules;
                typeof s > "u" && (s = {
                    container: n.container || "svg"
                });
                for (var m = !(typeof n.pretty < "u" && !n.pretty), _ = m ? "  " : "", E = m ? "\r\n" : "", M = n.width, w = n.height, A = u.length, x = M / (A + 2 * n.padding), N = w / (A + 2 * n.padding), z = typeof n.join < "u" && !!n.join, W = typeof n.swap < "u" && !!n.swap, K = !(typeof n.xmlDeclaration < "u" && !n.xmlDeclaration), ne = typeof n.predefined < "u" && !!n.predefined, se = ne ? _ + '<defs><path id="qrmodule" d="M0 0 h' + N + " v" + x + ' H0 z" style="fill:' + n.color + ';shape-rendering:crispEdges;" /></defs>' + E : "", le = _ + '<rect x="0" y="0" width="' + M + '" height="' + w + '" style="fill:' + n.background + ';shape-rendering:crispEdges;"/>' + E, pe = "", D = "", h = 0; h < A; h++)
                    for (var C = 0; C < A; C++)
                        if (u[C][h]) {
                            var T = C * x + n.padding * x,
                                k = h * N + n.padding * N;
                            if (W) {
                                var O = T;
                                T = k, k = O
                            }
                            if (z) {
                                var U = x + T,
                                    P = N + k;
                                T = Number.isInteger(T) ? Number(T) : T.toFixed(2), k = Number.isInteger(k) ? Number(k) : k.toFixed(2), U = Number.isInteger(U) ? Number(U) : U.toFixed(2), D += "M" + T + "," + k + " V" + (P = Number.isInteger(P) ? Number(P) : P.toFixed(2)) + " H" + U + " V" + k + " H" + T + " Z "
                            } else pe += ne ? _ + '<use x="' + T.toString() + '" y="' + k.toString() + '" href="#qrmodule" />' + E : _ + '<rect x="' + T.toString() + '" y="' + k.toString() + '" width="' + x + '" height="' + N + '" style="fill:' + n.color + ';shape-rendering:crispEdges;"/>' + E
                        }
                z && (pe = _ + '<path x="0" y="0" style="fill:' + n.color + ';shape-rendering:crispEdges;" d="' + D + '" />');
                let S = "";
                if (void 0 !== this.options.image && this.options.image.svg) {
                    const ae = M * this.options.image.width / 100,
                        oe = w * this.options.image.height / 100;
                    S += `<svg x="${M/2-ae/2}" y="${w/2-oe/2}" width="${ae}" height="${oe}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, S += this.options.image.svg + E, S += "</svg>"
                }
                var j = "";
                switch (s.container) {
                    case "svg":
                        K && (j += '<?xml version="1.0" standalone="yes"?>' + E), j += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + M + '" height="' + w + '">' + E, j += se + le + pe, j += S, j += "</svg>";
                        break;
                    case "svg-viewbox":
                        K && (j += '<?xml version="1.0" standalone="yes"?>' + E), j += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + M + " " + w + '">' + E, j += se + le + pe, j += S, j += "</svg>";
                        break;
                    case "g":
                        j += '<g width="' + M + '" height="' + w + '">' + E, j += se + le + pe, j += S, j += "</g>";
                        break;
                    default:
                        j += (se + le + pe + S).replace(/^\s+/, "")
                }
                return j
            }, $.exports = v
        },
        7938: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.LIB_VERSION = void 0, o.LIB_VERSION = "3.9.3"
        },
        9424: $ => {
            "use strict";
            var o = Object.prototype.hasOwnProperty,
                p = "~";

            function t() {}

            function y(r, e, a) {
                this.fn = r, this.context = e, this.once = a || !1
            }

            function c(r, e, a, g, l) {
                if ("function" != typeof a) throw new TypeError("The listener must be a function");
                var v = new y(a, g || r, l),
                    s = p ? p + e : e;
                return r._events[s] ? r._events[s].fn ? r._events[s] = [r._events[s], v] : r._events[s].push(v) : (r._events[s] = v, r._eventsCount++), r
            }

            function d(r, e) {
                0 == --r._eventsCount ? r._events = new t : delete r._events[e]
            }

            function i() {
                this._events = new t, this._eventsCount = 0
            }
            Object.create && (t.prototype = Object.create(null), (new t).__proto__ || (p = !1)), i.prototype.eventNames = function() {
                var a, g, e = [];
                if (0 === this._eventsCount) return e;
                for (g in a = this._events) o.call(a, g) && e.push(p ? g.slice(1) : g);
                return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(a)) : e
            }, i.prototype.listeners = function(e) {
                var g = this._events[p ? p + e : e];
                if (!g) return [];
                if (g.fn) return [g.fn];
                for (var l = 0, v = g.length, s = new Array(v); l < v; l++) s[l] = g[l].fn;
                return s
            }, i.prototype.listenerCount = function(e) {
                var g = this._events[p ? p + e : e];
                return g ? g.fn ? 1 : g.length : 0
            }, i.prototype.emit = function(e, a, g, l, v, s) {
                var n = p ? p + e : e;
                if (!this._events[n]) return !1;
                var _, E, u = this._events[n],
                    m = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0), m) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, a), !0;
                        case 3:
                            return u.fn.call(u.context, a, g), !0;
                        case 4:
                            return u.fn.call(u.context, a, g, l), !0;
                        case 5:
                            return u.fn.call(u.context, a, g, l, v), !0;
                        case 6:
                            return u.fn.call(u.context, a, g, l, v, s), !0
                    }
                    for (E = 1, _ = new Array(m - 1); E < m; E++) _[E - 1] = arguments[E];
                    u.fn.apply(u.context, _)
                } else {
                    var w, M = u.length;
                    for (E = 0; E < M; E++) switch (u[E].once && this.removeListener(e, u[E].fn, void 0, !0), m) {
                        case 1:
                            u[E].fn.call(u[E].context);
                            break;
                        case 2:
                            u[E].fn.call(u[E].context, a);
                            break;
                        case 3:
                            u[E].fn.call(u[E].context, a, g);
                            break;
                        case 4:
                            u[E].fn.call(u[E].context, a, g, l);
                            break;
                        default:
                            if (!_)
                                for (w = 1, _ = new Array(m - 1); w < m; w++) _[w - 1] = arguments[w];
                            u[E].fn.apply(u[E].context, _)
                    }
                }
                return !0
            }, i.prototype.on = function(e, a, g) {
                return c(this, e, a, g, !1)
            }, i.prototype.once = function(e, a, g) {
                return c(this, e, a, g, !0)
            }, i.prototype.removeListener = function(e, a, g, l) {
                var v = p ? p + e : e;
                if (!this._events[v]) return this;
                if (!a) return d(this, v), this;
                var s = this._events[v];
                if (s.fn) s.fn === a && (!l || s.once) && (!g || s.context === g) && d(this, v);
                else {
                    for (var n = 0, u = [], m = s.length; n < m; n++)(s[n].fn !== a || l && !s[n].once || g && s[n].context !== g) && u.push(s[n]);
                    u.length ? this._events[v] = 1 === u.length ? u[0] : u : d(this, v)
                }
                return this
            }, i.prototype.removeAllListeners = function(e) {
                var a;
                return e ? this._events[a = p ? p + e : e] && d(this, a) : (this._events = new t, this._eventsCount = 0), this
            }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prefixed = p, i.EventEmitter = i, $.exports = i
        },
        2753: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            const t = p(2016);

            function y(i, r, e) {
                try {
                    Reflect.apply(i, r, e)
                } catch (a) {
                    setTimeout(() => {
                        throw a
                    })
                }
            }
            o.default = class d extends t.EventEmitter {
                emit(r, ...e) {
                    let a = "error" === r;
                    const g = this._events;
                    if (void 0 !== g) a = a && void 0 === g.error;
                    else if (!a) return !1;
                    if (a) {
                        let v;
                        if (e.length > 0 && ([v] = e), v instanceof Error) throw v;
                        const s = new Error("Unhandled error." + (v ? ` (${v.message})` : ""));
                        throw s.context = v, s
                    }
                    const l = g[r];
                    if (void 0 === l) return !1;
                    if ("function" == typeof l) y(l, this, e);
                    else {
                        const v = l.length,
                            s = function c(i) {
                                const r = i.length,
                                    e = new Array(r);
                                for (let a = 0; a < r; a += 1) e[a] = i[a];
                                return e
                            }(l);
                        for (let n = 0; n < v; n += 1) y(s[n], this, e)
                    }
                    return !0
                }
            }
        },
        3689: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.assertExhaustive = o.assertStruct = o.assert = o.AssertionError = void 0;
            const t = p(54);

            function i(l, v) {
                return function c(l) {
                    var v, s;
                    return "string" == typeof(null === (s = null === (v = l ? .prototype) || void 0 === v ? void 0 : v.constructor) || void 0 === s ? void 0 : s.name)
                }(l) ? new l({
                    message: v
                }) : l({
                    message: v
                })
            }
            class r extends Error {
                constructor(v) {
                    super(v.message), this.code = "ERR_ASSERTION"
                }
            }
            o.AssertionError = r, o.assert = function e(l, v = "Assertion failed.", s = r) {
                if (!l) throw v instanceof Error ? v : i(s, v)
            }, o.assertStruct = function a(l, v, s = "Assertion failed", n = r) {
                try {
                    (0, t.assert)(l, v)
                } catch (u) {
                    throw i(n, `${s}: ${function d(l){const v=function y(l){return"object"==typeof l&&null!==l&&"message"in l}(l)?l.message:String(l);return v.endsWith(".")?v.slice(0,-1):v}(u)}.`)
                }
            }, o.assertExhaustive = function g(l) {
                throw new Error("Invalid branch reached. Should be detected during compilation.")
            }
        },
        3845: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.base64 = void 0;
            const t = p(54),
                y = p(3689);
            o.base64 = (d, i = {}) => {
                var r, e;
                const a = null !== (r = i.paddingRequired) && void 0 !== r && r,
                    g = null !== (e = i.characterSet) && void 0 !== e ? e : "base64";
                let l, v;
                return "base64" === g ? l = String.raw `[A-Za-z0-9+\/]` : ((0, y.assert)("base64url" === g), l = String.raw `[-_A-Za-z0-9]`), v = a ? new RegExp(`^(?:${l}{4})*(?:${l}{3}=|${l}{2}==)?$`, "u") : new RegExp(`^(?:${l}{4})*(?:${l}{2,3}|${l}{3}=|${l}{2}==)?$`, "u"), (0, t.pattern)(d, v)
            }
        },
        6468: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.createDataView = o.concatBytes = o.valueToBytes = o.stringToBytes = o.numberToBytes = o.signedBigIntToBytes = o.bigIntToBytes = o.hexToBytes = o.bytesToString = o.bytesToNumber = o.bytesToSignedBigInt = o.bytesToBigInt = o.bytesToHex = o.assertIsBytes = o.isBytes = void 0;
            const t = p(3689),
                y = p(1506),
                c = 48,
                d = 58,
                i = 87,
                e = function r() {
                    const W = [];
                    return () => {
                        if (0 === W.length)
                            for (let K = 0; K < 256; K++) W.push(K.toString(16).padStart(2, "0"));
                        return W
                    }
                }();

            function a(W) {
                return W instanceof Uint8Array
            }

            function g(W) {
                (0, t.assert)(a(W), "Value must be a Uint8Array.")
            }

            function l(W) {
                if (g(W), 0 === W.length) return "0x";
                const K = e(),
                    ne = new Array(W.length);
                for (let se = 0; se < W.length; se++) ne[se] = K[W[se]];
                return (0, y.add0x)(ne.join(""))
            }

            function v(W) {
                g(W);
                const K = l(W);
                return BigInt(K)
            }

            function m(W) {
                var K;
                if ("0x" === (null === (K = W ? .toLowerCase) || void 0 === K ? void 0 : K.call(W))) return new Uint8Array;
                (0, y.assertIsHexString)(W);
                const ne = (0, y.remove0x)(W).toLowerCase(),
                    se = ne.length % 2 == 0 ? ne : `0${ne}`,
                    le = new Uint8Array(se.length / 2);
                for (let pe = 0; pe < le.length; pe++) {
                    const D = se.charCodeAt(2 * pe),
                        h = se.charCodeAt(2 * pe + 1);
                    le[pe] = 16 * (D - (D < d ? c : i)) + (h - (h < d ? c : i))
                }
                return le
            }

            function _(W) {
                return (0, t.assert)("bigint" == typeof W, "Value must be a bigint."), (0, t.assert)(W >= BigInt(0), "Value must be a non-negative bigint."), m(W.toString(16))
            }

            function w(W) {
                return (0, t.assert)("number" == typeof W, "Value must be a number."), (0, t.assert)(W >= 0, "Value must be a non-negative number."), (0, t.assert)(Number.isSafeInteger(W), "Value is not a safe integer. Use `bigIntToBytes` instead."), m(W.toString(16))
            }

            function A(W) {
                return (0, t.assert)("string" == typeof W, "Value must be a string."), (new TextEncoder).encode(W)
            }

            function x(W) {
                if ("bigint" == typeof W) return _(W);
                if ("number" == typeof W) return w(W);
                if ("string" == typeof W) return W.startsWith("0x") ? m(W) : A(W);
                if (a(W)) return W;
                throw new TypeError(`Unsupported value type: "${typeof W}".`)
            }
            o.isBytes = a, o.assertIsBytes = g, o.bytesToHex = l, o.bytesToBigInt = v, o.bytesToSignedBigInt = function s(W) {
                g(W);
                let K = BigInt(0);
                for (const ne of W) K = (K << BigInt(8)) + BigInt(ne);
                return BigInt.asIntN(8 * W.length, K)
            }, o.bytesToNumber = function n(W) {
                g(W);
                const K = v(W);
                return (0, t.assert)(K <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(K)
            }, o.bytesToString = function u(W) {
                return g(W), (new TextDecoder).decode(W)
            }, o.hexToBytes = m, o.bigIntToBytes = _, o.signedBigIntToBytes = function M(W, K) {
                (0, t.assert)("bigint" == typeof W, "Value must be a bigint."), (0, t.assert)("number" == typeof K, "Byte length must be a number."), (0, t.assert)(K > 0, "Byte length must be greater than 0."), (0, t.assert)(function E(W, K) {
                    (0, t.assert)(K > 0);
                    const ne = W >> BigInt(31);
                    return !((~W & ne) + (W & ~ne) >> BigInt(8 * K - 1))
                }(W, K), "Byte length is too small to represent the given value.");
                let ne = W;
                const se = new Uint8Array(K);
                for (let le = 0; le < se.length; le++) se[le] = Number(BigInt.asUintN(8, ne)), ne >>= BigInt(8);
                return se.reverse()
            }, o.numberToBytes = w, o.stringToBytes = A, o.valueToBytes = x, o.concatBytes = function N(W) {
                const K = new Array(W.length);
                let ne = 0;
                for (let le = 0; le < W.length; le++) {
                    const pe = x(W[le]);
                    K[le] = pe, ne += pe.length
                }
                const se = new Uint8Array(ne);
                for (let le = 0, pe = 0; le < K.length; le++) se.set(K[le], pe), pe += K[le].length;
                return se
            }, o.createDataView = function z(W) {
                if (typeof Buffer < "u" && W instanceof Buffer) {
                    const K = W.buffer.slice(W.byteOffset, W.byteOffset + W.byteLength);
                    return new DataView(K)
                }
                return new DataView(W.buffer, W.byteOffset, W.byteLength)
            }
        },
        7634: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ChecksumStruct = void 0;
            const t = p(54),
                y = p(3845);
            o.ChecksumStruct = (0, t.size)((0, y.base64)((0, t.string)(), {
                paddingRequired: !0
            }), 44, 44)
        },
        8081: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.createHex = o.createBytes = o.createBigInt = o.createNumber = void 0;
            const t = p(54),
                y = p(3689),
                c = p(6468),
                d = p(1506),
                i = (0, t.union)([(0, t.number)(), (0, t.bigint)(), (0, t.string)(), d.StrictHexStruct]),
                r = (0, t.coerce)((0, t.number)(), i, Number),
                e = (0, t.coerce)((0, t.bigint)(), i, BigInt),
                g = ((0, t.union)([d.StrictHexStruct, (0, t.instance)(Uint8Array)]), (0, t.coerce)((0, t.instance)(Uint8Array), (0, t.union)([d.StrictHexStruct]), c.hexToBytes)),
                l = (0, t.coerce)(d.StrictHexStruct, (0, t.instance)(Uint8Array), c.bytesToHex);
            o.createNumber = function v(m) {
                try {
                    const _ = (0, t.create)(m, r);
                    return (0, y.assert)(Number.isFinite(_), `Expected a number-like value, got "${m}".`), _
                } catch (_) {
                    throw _ instanceof t.StructError ? new Error(`Expected a number-like value, got "${m}".`) : _
                }
            }, o.createBigInt = function s(m) {
                try {
                    return (0, t.create)(m, e)
                } catch (_) {
                    throw _ instanceof t.StructError ? new Error(`Expected a number-like value, got "${String(_.value)}".`) : _
                }
            }, o.createBytes = function n(m) {
                if ("string" == typeof m && "0x" === m.toLowerCase()) return new Uint8Array;
                try {
                    return (0, t.create)(m, g)
                } catch (_) {
                    throw _ instanceof t.StructError ? new Error(`Expected a bytes-like value, got "${String(_.value)}".`) : _
                }
            }, o.createHex = function u(m) {
                if (m instanceof Uint8Array && 0 === m.length || "string" == typeof m && "0x" === m.toLowerCase()) return "0x";
                try {
                    return (0, t.create)(m, l)
                } catch (_) {
                    throw _ instanceof t.StructError ? new Error(`Expected a bytes-like value, got "${String(_.value)}".`) : _
                }
            }
        },
        6722: function($, o) {
            "use strict";
            var y, c, p = this && this.__classPrivateFieldSet || function(r, e, a, g, l) {
                    if ("m" === g) throw new TypeError("Private method is not writable");
                    if ("a" === g && !l) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof e ? r !== e || !l : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === g ? l.call(r, a) : l ? l.value = a : e.set(r, a), a
                },
                t = this && this.__classPrivateFieldGet || function(r, e, a, g) {
                    if ("a" === a && !g) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof e ? r !== e || !g : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === a ? g : "a" === a ? g.call(r) : g ? g.value : e.get(r)
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.FrozenSet = o.FrozenMap = void 0;
            class d {
                constructor(e) {
                    y.set(this, void 0), p(this, y, new Map(e), "f"), Object.freeze(this)
                }
                get size() {
                    return t(this, y, "f").size
                }[(y = new WeakMap, Symbol.iterator)]() {
                    return t(this, y, "f")[Symbol.iterator]()
                }
                entries() {
                    return t(this, y, "f").entries()
                }
                forEach(e, a) {
                    return t(this, y, "f").forEach((g, l, v) => e.call(a, g, l, this))
                }
                get(e) {
                    return t(this, y, "f").get(e)
                }
                has(e) {
                    return t(this, y, "f").has(e)
                }
                keys() {
                    return t(this, y, "f").keys()
                }
                values() {
                    return t(this, y, "f").values()
                }
                toString() {
                    return `FrozenMap(${this.size}) {${this.size>0?` ${[...this.entries()].map(([e,a])=>`${String(e)} => ${String(a)}`).join(", ")} `:""}}`
                }
            }
            o.FrozenMap = d;
            class i {
                constructor(e) {
                    c.set(this, void 0), p(this, c, new Set(e), "f"), Object.freeze(this)
                }
                get size() {
                    return t(this, c, "f").size
                }[(c = new WeakMap, Symbol.iterator)]() {
                    return t(this, c, "f")[Symbol.iterator]()
                }
                entries() {
                    return t(this, c, "f").entries()
                }
                forEach(e, a) {
                    return t(this, c, "f").forEach((g, l, v) => e.call(a, g, l, this))
                }
                has(e) {
                    return t(this, c, "f").has(e)
                }
                keys() {
                    return t(this, c, "f").keys()
                }
                values() {
                    return t(this, c, "f").values()
                }
                toString() {
                    return `FrozenSet(${this.size}) {${this.size>0?` ${[...this.values()].map(e=>String(e)).join(", ")} `:""}}`
                }
            }
            o.FrozenSet = i, Object.freeze(d), Object.freeze(d.prototype), Object.freeze(i), Object.freeze(i.prototype)
        },
        3243: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            })
        },
        1506: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.remove0x = o.add0x = o.assertIsStrictHexString = o.assertIsHexString = o.isStrictHexString = o.isHexString = o.StrictHexStruct = o.HexStruct = void 0;
            const t = p(54),
                y = p(3689);

            function c(g) {
                return (0, t.is)(g, o.HexStruct)
            }

            function d(g) {
                return (0, t.is)(g, o.StrictHexStruct)
            }
            o.HexStruct = (0, t.pattern)((0, t.string)(), /^(?:0x)?[0-9a-f]+$/iu), o.StrictHexStruct = (0, t.pattern)((0, t.string)(), /^0x[0-9a-f]+$/iu), o.isHexString = c, o.isStrictHexString = d, o.assertIsHexString = function i(g) {
                (0, y.assert)(c(g), "Value must be a hexadecimal string.")
            }, o.assertIsStrictHexString = function r(g) {
                (0, y.assert)(d(g), 'Value must be a hexadecimal string, starting with "0x".')
            }, o.add0x = function e(g) {
                return g.startsWith("0x") ? g : g.startsWith("0X") ? `0x${g.substring(2)}` : `0x${g}`
            }, o.remove0x = function a(g) {
                return g.startsWith("0x") || g.startsWith("0X") ? g.substring(2) : g
            }
        },
        7184: function($, o, p) {
            "use strict";
            var t = this && this.__createBinding || (Object.create ? function(c, d, i, r) {
                    void 0 === r && (r = i);
                    var e = Object.getOwnPropertyDescriptor(d, i);
                    (!e || ("get" in e ? !d.__esModule : e.writable || e.configurable)) && (e = {
                        enumerable: !0,
                        get: function() {
                            return d[i]
                        }
                    }), Object.defineProperty(c, r, e)
                } : function(c, d, i, r) {
                    void 0 === r && (r = i), c[r] = d[i]
                }),
                y = this && this.__exportStar || function(c, d) {
                    for (var i in c) "default" !== i && !Object.prototype.hasOwnProperty.call(d, i) && t(d, c, i)
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), y(p(3689), o), y(p(3845), o), y(p(6468), o), y(p(7634), o), y(p(8081), o), y(p(6722), o), y(p(3243), o), y(p(1506), o), y(p(6261), o), y(p(352), o), y(p(7464), o), y(p(3571), o), y(p(6885), o), y(p(5127), o), y(p(9246), o), y(p(1655), o), y(p(9383), o)
        },
        6261: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.getJsonRpcIdValidator = o.assertIsJsonRpcError = o.isJsonRpcError = o.assertIsJsonRpcFailure = o.isJsonRpcFailure = o.assertIsJsonRpcSuccess = o.isJsonRpcSuccess = o.assertIsJsonRpcResponse = o.isJsonRpcResponse = o.assertIsPendingJsonRpcResponse = o.isPendingJsonRpcResponse = o.JsonRpcResponseStruct = o.JsonRpcFailureStruct = o.JsonRpcSuccessStruct = o.PendingJsonRpcResponseStruct = o.assertIsJsonRpcRequest = o.isJsonRpcRequest = o.assertIsJsonRpcNotification = o.isJsonRpcNotification = o.JsonRpcNotificationStruct = o.JsonRpcRequestStruct = o.JsonRpcParamsStruct = o.JsonRpcErrorStruct = o.JsonRpcIdStruct = o.JsonRpcVersionStruct = o.jsonrpc2 = o.getJsonSize = o.isValidJson = o.JsonStruct = o.UnsafeJsonStruct = void 0;
            const t = p(54),
                y = p(3689);
            o.UnsafeJsonStruct = (0, t.union)([(0, t.literal)(null), (0, t.boolean)(), (0, t.define)("finite number", x => (0, t.is)(x, (0, t.number)()) && Number.isFinite(x)), (0, t.string)(), (0, t.array)((0, t.lazy)(() => o.UnsafeJsonStruct)), (0, t.record)((0, t.string)(), (0, t.lazy)(() => o.UnsafeJsonStruct))]), o.JsonStruct = (0, t.define)("Json", (x, N) => {
                function z(W, K) {
                    const se = [...K.validator(W, N)];
                    return !(se.length > 0) || se
                }
                try {
                    const W = z(x, o.UnsafeJsonStruct);
                    return !0 !== W ? W : z(JSON.parse(JSON.stringify(x)), o.UnsafeJsonStruct)
                } catch (W) {
                    return W instanceof RangeError && "Circular reference detected"
                }
            }), o.isValidJson = function d(x) {
                return (0, t.is)(x, o.JsonStruct)
            }, o.getJsonSize = function i(x) {
                (0, y.assertStruct)(x, o.JsonStruct, "Invalid JSON value");
                const N = JSON.stringify(x);
                return (new TextEncoder).encode(N).byteLength
            }, o.jsonrpc2 = "2.0", o.JsonRpcVersionStruct = (0, t.literal)(o.jsonrpc2), o.JsonRpcIdStruct = (0, t.nullable)((0, t.union)([(0, t.number)(), (0, t.string)()])), o.JsonRpcErrorStruct = (0, t.object)({
                code: (0, t.integer)(),
                message: (0, t.string)(),
                data: (0, t.optional)(o.JsonStruct),
                stack: (0, t.optional)((0, t.string)())
            }), o.JsonRpcParamsStruct = (0, t.optional)((0, t.union)([(0, t.record)((0, t.string)(), o.JsonStruct), (0, t.array)(o.JsonStruct)])), o.JsonRpcRequestStruct = (0, t.object)({
                id: o.JsonRpcIdStruct,
                jsonrpc: o.JsonRpcVersionStruct,
                method: (0, t.string)(),
                params: o.JsonRpcParamsStruct
            }), o.JsonRpcNotificationStruct = (0, t.omit)(o.JsonRpcRequestStruct, ["id"]), o.isJsonRpcNotification = function r(x) {
                return (0, t.is)(x, o.JsonRpcNotificationStruct)
            }, o.assertIsJsonRpcNotification = function e(x, N) {
                (0, y.assertStruct)(x, o.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", N)
            }, o.isJsonRpcRequest = function a(x) {
                return (0, t.is)(x, o.JsonRpcRequestStruct)
            }, o.assertIsJsonRpcRequest = function g(x, N) {
                (0, y.assertStruct)(x, o.JsonRpcRequestStruct, "Invalid JSON-RPC request", N)
            }, o.PendingJsonRpcResponseStruct = (0, t.object)({
                id: o.JsonRpcIdStruct,
                jsonrpc: o.JsonRpcVersionStruct,
                result: (0, t.optional)((0, t.unknown)()),
                error: (0, t.optional)(o.JsonRpcErrorStruct)
            }), o.JsonRpcSuccessStruct = (0, t.object)({
                id: o.JsonRpcIdStruct,
                jsonrpc: o.JsonRpcVersionStruct,
                result: o.JsonStruct
            }), o.JsonRpcFailureStruct = (0, t.object)({
                id: o.JsonRpcIdStruct,
                jsonrpc: o.JsonRpcVersionStruct,
                error: o.JsonRpcErrorStruct
            }), o.JsonRpcResponseStruct = (0, t.union)([o.JsonRpcSuccessStruct, o.JsonRpcFailureStruct]), o.isPendingJsonRpcResponse = function l(x) {
                return (0, t.is)(x, o.PendingJsonRpcResponseStruct)
            }, o.assertIsPendingJsonRpcResponse = function v(x, N) {
                (0, y.assertStruct)(x, o.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", N)
            }, o.isJsonRpcResponse = function s(x) {
                return (0, t.is)(x, o.JsonRpcResponseStruct)
            }, o.assertIsJsonRpcResponse = function n(x, N) {
                (0, y.assertStruct)(x, o.JsonRpcResponseStruct, "Invalid JSON-RPC response", N)
            }, o.isJsonRpcSuccess = function u(x) {
                return (0, t.is)(x, o.JsonRpcSuccessStruct)
            }, o.assertIsJsonRpcSuccess = function m(x, N) {
                (0, y.assertStruct)(x, o.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", N)
            }, o.isJsonRpcFailure = function _(x) {
                return (0, t.is)(x, o.JsonRpcFailureStruct)
            }, o.assertIsJsonRpcFailure = function E(x, N) {
                (0, y.assertStruct)(x, o.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", N)
            }, o.isJsonRpcError = function M(x) {
                return (0, t.is)(x, o.JsonRpcErrorStruct)
            }, o.assertIsJsonRpcError = function w(x, N) {
                (0, y.assertStruct)(x, o.JsonRpcErrorStruct, "Invalid JSON-RPC error", N)
            }, o.getJsonRpcIdValidator = function A(x) {
                const {
                    permitEmptyString: N,
                    permitFractions: z,
                    permitNull: W
                } = Object.assign({
                    permitEmptyString: !0,
                    permitFractions: !1,
                    permitNull: !0
                }, x);
                return ne => !!("number" == typeof ne && (z || Number.isInteger(ne)) || "string" == typeof ne && (N || ne.length > 0) || W && null === ne)
            }
        },
        352: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            })
        },
        7464: function($, o, p) {
            "use strict";
            var t = this && this.__importDefault || function(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.createModuleLogger = o.createProjectLogger = void 0;
            const c = (0, t(p(563)).default)("metamask");
            o.createProjectLogger = function d(r) {
                return c.extend(r)
            }, o.createModuleLogger = function i(r, e) {
                return r.extend(e)
            }
        },
        3571: ($, o) => {
            "use strict";
            var g;

            function r(g) {
                return g.charCodeAt(0) <= 127
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.calculateNumberSize = o.calculateStringSize = o.isASCII = o.isPlainObject = o.ESCAPE_CHARACTERS_REGEXP = o.JsonSize = o.hasProperty = o.isObject = o.isNullOrUndefined = o.isNonEmptyArray = void 0, o.isNonEmptyArray = function p(g) {
                return Array.isArray(g) && g.length > 0
            }, o.isNullOrUndefined = function t(g) {
                return null == g
            }, o.isObject = function y(g) {
                return !!g && "object" == typeof g && !Array.isArray(g)
            }, o.hasProperty = (g, l) => Object.hasOwnProperty.call(g, l), (g = o.JsonSize || (o.JsonSize = {}))[g.Null = 4] = "Null", g[g.Comma = 1] = "Comma", g[g.Wrapper = 1] = "Wrapper", g[g.True = 4] = "True", g[g.False = 5] = "False", g[g.Quote = 1] = "Quote", g[g.Colon = 1] = "Colon", g[g.Date = 24] = "Date", o.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu, o.isPlainObject = function i(g) {
                if ("object" != typeof g || null === g) return !1;
                try {
                    let l = g;
                    for (; null !== Object.getPrototypeOf(l);) l = Object.getPrototypeOf(l);
                    return Object.getPrototypeOf(g) === l
                } catch {
                    return !1
                }
            }, o.isASCII = r, o.calculateStringSize = function e(g) {
                var l;
                return g.split("").reduce((s, n) => r(n) ? s + 1 : s + 2, 0) + (null !== (l = g.match(o.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== l ? l : []).length
            }, o.calculateNumberSize = function a(g) {
                return g.toString().length
            }
        },
        6885: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.hexToBigInt = o.hexToNumber = o.bigIntToHex = o.numberToHex = void 0;
            const t = p(3689),
                y = p(1506);
            o.numberToHex = e => ((0, t.assert)("number" == typeof e, "Value must be a number."), (0, t.assert)(e >= 0, "Value must be a non-negative number."), (0, t.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, y.add0x)(e.toString(16))), o.bigIntToHex = e => ((0, t.assert)("bigint" == typeof e, "Value must be a bigint."), (0, t.assert)(e >= 0, "Value must be a non-negative bigint."), (0, y.add0x)(e.toString(16))), o.hexToNumber = e => {
                (0, y.assertIsHexString)(e);
                const a = parseInt(e, 16);
                return (0, t.assert)(Number.isSafeInteger(a), "Value is not a safe integer. Use `hexToBigInt` instead."), a
            }, o.hexToBigInt = e => ((0, y.assertIsHexString)(e), BigInt((0, y.add0x)(e)))
        },
        5127: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            })
        },
        9246: ($, o) => {
            "use strict";
            var i;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.timeSince = o.inMilliseconds = o.Duration = void 0, (i = o.Duration || (o.Duration = {}))[i.Millisecond = 1] = "Millisecond", i[i.Second = 1e3] = "Second", i[i.Minute = 6e4] = "Minute", i[i.Hour = 36e5] = "Hour", i[i.Day = 864e5] = "Day", i[i.Week = 6048e5] = "Week", i[i.Year = 31536e6] = "Year";
            const y = (i, r) => {
                if (!(i => Number.isInteger(i) && i >= 0)(i)) throw new Error(`"${r}" must be a non-negative integer. Received: "${i}".`)
            };
            o.inMilliseconds = function c(i, r) {
                return y(i, "count"), i * r
            }, o.timeSince = function d(i) {
                return y(i, "timestamp"), Date.now() - i
            }
        },
        1655: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            })
        },
        9383: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.satisfiesVersionRange = o.gtRange = o.gtVersion = o.assertIsSemVerRange = o.assertIsSemVerVersion = o.isValidSemVerRange = o.isValidSemVerVersion = o.VersionRangeStruct = o.VersionStruct = void 0;
            const t = p(424),
                y = p(54),
                c = p(3689);
            o.VersionStruct = (0, y.refine)((0, y.string)(), "Version", v => null !== (0, t.valid)(v) || `Expected SemVer version, got "${v}"`), o.VersionRangeStruct = (0, y.refine)((0, y.string)(), "Version range", v => null !== (0, t.validRange)(v) || `Expected SemVer range, got "${v}"`), o.isValidSemVerVersion = function d(v) {
                return (0, y.is)(v, o.VersionStruct)
            }, o.isValidSemVerRange = function i(v) {
                return (0, y.is)(v, o.VersionRangeStruct)
            }, o.assertIsSemVerVersion = function r(v) {
                (0, c.assertStruct)(v, o.VersionStruct)
            }, o.assertIsSemVerRange = function e(v) {
                (0, c.assertStruct)(v, o.VersionRangeStruct)
            }, o.gtVersion = function a(v, s) {
                return (0, t.gt)(v, s)
            }, o.gtRange = function g(v, s) {
                return (0, t.gtr)(v, s)
            }, o.satisfiesVersionRange = function l(v, s) {
                return (0, t.satisfies)(v, s, {
                    includePrerelease: !0
                })
            }
        },
        4248: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var t = p(7582),
                y = p(8883),
                c = function() {
                    function d() {
                        this._semaphore = new y.default(1)
                    }
                    return d.prototype.acquire = function() {
                        return t.__awaiter(this, void 0, void 0, function() {
                            return t.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this._semaphore.acquire()];
                                    case 1:
                                        return [2, e.sent()[1]]
                                }
                            })
                        })
                    }, d.prototype.runExclusive = function(i) {
                        return this._semaphore.runExclusive(function() {
                            return i()
                        })
                    }, d.prototype.isLocked = function() {
                        return this._semaphore.isLocked()
                    }, d.prototype.release = function() {
                        this._semaphore.release()
                    }, d
                }();
            o.default = c
        },
        8883: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var t = p(7582),
                y = function() {
                    function c(d) {
                        if (this._maxConcurrency = d, this._queue = [], d <= 0) throw new Error("semaphore must be initialized to a positive value");
                        this._value = d
                    }
                    return c.prototype.acquire = function() {
                        var d = this,
                            i = this.isLocked(),
                            r = new Promise(function(e) {
                                return d._queue.push(e)
                            });
                        return i || this._dispatch(), r
                    }, c.prototype.runExclusive = function(d) {
                        return t.__awaiter(this, void 0, void 0, function() {
                            var i, r, e;
                            return t.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.acquire()];
                                    case 1:
                                        i = a.sent(), r = i[0], e = i[1], a.label = 2;
                                    case 2:
                                        return a.trys.push([2, , 4, 5]), [4, d(r)];
                                    case 3:
                                        return [2, a.sent()];
                                    case 4:
                                        return e(), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, c.prototype.isLocked = function() {
                        return this._value <= 0
                    }, c.prototype.release = function() {
                        if (this._maxConcurrency > 1) throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
                        if (this._currentReleaser) {
                            var d = this._currentReleaser;
                            this._currentReleaser = void 0, d()
                        }
                    }, c.prototype._dispatch = function() {
                        var d = this,
                            i = this._queue.shift();
                        if (i) {
                            var r = !1;
                            this._currentReleaser = function() {
                                r || (r = !0, d._value++, d._dispatch())
                            }, i([this._value--, this._currentReleaser])
                        }
                    }, c
                }();
            o.default = y
        },
        3290: ($, o, p) => {
            "use strict";
            o.WU = void 0;
            var y = p(4248);
            Object.defineProperty(o, "WU", {
                enumerable: !0,
                get: function() {
                    return y.default
                }
            });
            p(8883), p(2292)
        },
        2292: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.withTimeout = void 0;
            var t = p(7582);
            o.withTimeout = function y(c, d, i) {
                var r = this;
                return void 0 === i && (i = new Error("timeout")), {
                    acquire: function() {
                        return new Promise(function(e, a) {
                            return t.__awaiter(r, void 0, void 0, function() {
                                var g, l;
                                return t.__generator(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return g = !1, setTimeout(function() {
                                                g = !0, a(i)
                                            }, d), [4, c.acquire()];
                                        case 1:
                                            return l = s.sent(), g ? (Array.isArray(l) ? l[1] : l)() : e(l), [2]
                                    }
                                })
                            })
                        })
                    },
                    runExclusive: function(e) {
                        return t.__awaiter(this, void 0, void 0, function() {
                            var a, g;
                            return t.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        a = function() {}, l.label = 1;
                                    case 1:
                                        return l.trys.push([1, , 7, 8]), [4, this.acquire()];
                                    case 2:
                                        return g = l.sent(), Array.isArray(g) ? (a = g[1], [4, e(g[0])]) : [3, 4];
                                    case 3:
                                        return [2, l.sent()];
                                    case 4:
                                        return a = g, [4, e()];
                                    case 5:
                                        return [2, l.sent()];
                                    case 6:
                                        return [3, 8];
                                    case 7:
                                        return a(), [7];
                                    case 8:
                                        return [2]
                                }
                            })
                        })
                    },
                    release: function() {
                        c.release()
                    },
                    isLocked: function() {
                        return c.isLocked()
                    }
                }
            }
        },
        9919: ($, o) => {
            "use strict";
            o.byteLength = function e(n) {
                var u = r(n),
                    _ = u[1];
                return 3 * (u[0] + _) / 4 - _
            }, o.toByteArray = function g(n) {
                var u, x, m = r(n),
                    _ = m[0],
                    E = m[1],
                    M = new y(function a(n, u, m) {
                        return 3 * (u + m) / 4 - m
                    }(0, _, E)),
                    w = 0,
                    A = E > 0 ? _ - 4 : _;
                for (x = 0; x < A; x += 4) u = t[n.charCodeAt(x)] << 18 | t[n.charCodeAt(x + 1)] << 12 | t[n.charCodeAt(x + 2)] << 6 | t[n.charCodeAt(x + 3)], M[w++] = u >> 16 & 255, M[w++] = u >> 8 & 255, M[w++] = 255 & u;
                return 2 === E && (u = t[n.charCodeAt(x)] << 2 | t[n.charCodeAt(x + 1)] >> 4, M[w++] = 255 & u), 1 === E && (u = t[n.charCodeAt(x)] << 10 | t[n.charCodeAt(x + 1)] << 4 | t[n.charCodeAt(x + 2)] >> 2, M[w++] = u >> 8 & 255, M[w++] = 255 & u), M
            }, o.fromByteArray = function s(n) {
                for (var u, m = n.length, _ = m % 3, E = [], M = 16383, w = 0, A = m - _; w < A; w += M) E.push(v(n, w, w + M > A ? A : w + M));
                return 1 === _ ? E.push(p[(u = n[m - 1]) >> 2] + p[u << 4 & 63] + "==") : 2 === _ && E.push(p[(u = (n[m - 2] << 8) + n[m - 1]) >> 10] + p[u >> 4 & 63] + p[u << 2 & 63] + "="), E.join("")
            };
            for (var p = [], t = [], y = typeof Uint8Array < "u" ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = 0; d < 64; ++d) p[d] = c[d], t[c.charCodeAt(d)] = d;

            function r(n) {
                var u = n.length;
                if (u % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var m = n.indexOf("=");
                return -1 === m && (m = u), [m, m === u ? 0 : 4 - m % 4]
            }

            function l(n) {
                return p[n >> 18 & 63] + p[n >> 12 & 63] + p[n >> 6 & 63] + p[63 & n]
            }

            function v(n, u, m) {
                for (var E = [], M = u; M < m; M += 3) E.push(l((n[M] << 16 & 16711680) + (n[M + 1] << 8 & 65280) + (255 & n[M + 2])));
                return E.join("")
            }
            t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63
        },
        2662: function($, o, p) {
            ! function(t, y) {
                "use strict";

                function c(D, h) {
                    if (!D) throw new Error(h || "Assertion failed")
                }

                function d(D, h) {
                    D.super_ = h;
                    var C = function() {};
                    C.prototype = h.prototype, D.prototype = new C, D.prototype.constructor = D
                }

                function i(D, h, C) {
                    if (i.isBN(D)) return D;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== D && (("le" === h || "be" === h) && (C = h, h = 10), this._init(D || 0, h || 10, C || "be"))
                }
                var r;
                "object" == typeof t ? t.exports = i : y.BN = i, i.BN = i, i.wordSize = 26;
                try {
                    r = typeof window < "u" && typeof window.Buffer < "u" ? window.Buffer : p(6601).Buffer
                } catch {}

                function e(D, h) {
                    var C = D.charCodeAt(h);
                    return C >= 48 && C <= 57 ? C - 48 : C >= 65 && C <= 70 ? C - 55 : C >= 97 && C <= 102 ? C - 87 : void c(!1, "Invalid character in " + D)
                }

                function a(D, h, C) {
                    var I = e(D, C);
                    return C - 1 >= h && (I |= e(D, C - 1) << 4), I
                }

                function g(D, h, C, I) {
                    for (var T = 0, k = 0, O = Math.min(D.length, C), U = h; U < O; U++) {
                        var P = D.charCodeAt(U) - 48;
                        T *= I, k = P >= 49 ? P - 49 + 10 : P >= 17 ? P - 17 + 10 : P, c(P >= 0 && k < I, "Invalid character"), T += k
                    }
                    return T
                }

                function l(D, h) {
                    D.words = h.words, D.length = h.length, D.negative = h.negative, D.red = h.red
                }
                if (i.isBN = function(h) {
                        return h instanceof i || null !== h && "object" == typeof h && h.constructor.wordSize === i.wordSize && Array.isArray(h.words)
                    }, i.max = function(h, C) {
                        return h.cmp(C) > 0 ? h : C
                    }, i.min = function(h, C) {
                        return h.cmp(C) < 0 ? h : C
                    }, i.prototype._init = function(h, C, I) {
                        if ("number" == typeof h) return this._initNumber(h, C, I);
                        if ("object" == typeof h) return this._initArray(h, C, I);
                        "hex" === C && (C = 16), c(C === (0 | C) && C >= 2 && C <= 36);
                        var T = 0;
                        "-" === (h = h.toString().replace(/\s+/g, ""))[0] && (T++, this.negative = 1), T < h.length && (16 === C ? this._parseHex(h, T, I) : (this._parseBase(h, C, T), "le" === I && this._initArray(this.toArray(), C, I)))
                    }, i.prototype._initNumber = function(h, C, I) {
                        h < 0 && (this.negative = 1, h = -h), h < 67108864 ? (this.words = [67108863 & h], this.length = 1) : h < 4503599627370496 ? (this.words = [67108863 & h, h / 67108864 & 67108863], this.length = 2) : (c(h < 9007199254740992), this.words = [67108863 & h, h / 67108864 & 67108863, 1], this.length = 3), "le" === I && this._initArray(this.toArray(), C, I)
                    }, i.prototype._initArray = function(h, C, I) {
                        if (c("number" == typeof h.length), h.length <= 0) return this.words = [0], this.length = 1, this;
                        this.length = Math.ceil(h.length / 3), this.words = new Array(this.length);
                        for (var T = 0; T < this.length; T++) this.words[T] = 0;
                        var k, O, U = 0;
                        if ("be" === I)
                            for (T = h.length - 1, k = 0; T >= 0; T -= 3) this.words[k] |= (O = h[T] | h[T - 1] << 8 | h[T - 2] << 16) << U & 67108863, this.words[k + 1] = O >>> 26 - U & 67108863, (U += 24) >= 26 && (U -= 26, k++);
                        else if ("le" === I)
                            for (T = 0, k = 0; T < h.length; T += 3) this.words[k] |= (O = h[T] | h[T + 1] << 8 | h[T + 2] << 16) << U & 67108863, this.words[k + 1] = O >>> 26 - U & 67108863, (U += 24) >= 26 && (U -= 26, k++);
                        return this._strip()
                    }, i.prototype._parseHex = function(h, C, I) {
                        this.length = Math.ceil((h.length - C) / 6), this.words = new Array(this.length);
                        for (var T = 0; T < this.length; T++) this.words[T] = 0;
                        var U, k = 0,
                            O = 0;
                        if ("be" === I)
                            for (T = h.length - 1; T >= C; T -= 2) U = a(h, C, T) << k, this.words[O] |= 67108863 & U, k >= 18 ? (k -= 18, this.words[O += 1] |= U >>> 26) : k += 8;
                        else
                            for (T = (h.length - C) % 2 == 0 ? C + 1 : C; T < h.length; T += 2) U = a(h, C, T) << k, this.words[O] |= 67108863 & U, k >= 18 ? (k -= 18, this.words[O += 1] |= U >>> 26) : k += 8;
                        this._strip()
                    }, i.prototype._parseBase = function(h, C, I) {
                        this.words = [0], this.length = 1;
                        for (var T = 0, k = 1; k <= 67108863; k *= C) T++;
                        T--, k = k / C | 0;
                        for (var O = h.length - I, U = O % T, P = Math.min(O, O - U) + I, S = 0, j = I; j < P; j += T) S = g(h, j, j + T, C), this.imuln(k), this.words[0] + S < 67108864 ? this.words[0] += S : this._iaddn(S);
                        if (0 !== U) {
                            var ae = 1;
                            for (S = g(h, j, h.length, C), j = 0; j < U; j++) ae *= C;
                            this.imuln(ae), this.words[0] + S < 67108864 ? this.words[0] += S : this._iaddn(S)
                        }
                        this._strip()
                    }, i.prototype.copy = function(h) {
                        h.words = new Array(this.length);
                        for (var C = 0; C < this.length; C++) h.words[C] = this.words[C];
                        h.length = this.length, h.negative = this.negative, h.red = this.red
                    }, i.prototype._move = function(h) {
                        l(h, this)
                    }, i.prototype.clone = function() {
                        var h = new i(null);
                        return this.copy(h), h
                    }, i.prototype._expand = function(h) {
                        for (; this.length < h;) this.words[this.length++] = 0;
                        return this
                    }, i.prototype._strip = function() {
                        for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                        return this._normSign()
                    }, i.prototype._normSign = function() {
                        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                    }, typeof Symbol < "u" && "function" == typeof Symbol.for) try {
                    i.prototype[Symbol.for("nodejs.util.inspect.custom")] = v
                } catch {
                    i.prototype.inspect = v
                } else i.prototype.inspect = v;

                function v() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                }
                var s = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    n = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    u = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function E(D, h, C) {
                    C.negative = h.negative ^ D.negative;
                    var I = D.length + h.length | 0;
                    C.length = I, I = I - 1 | 0;
                    var T = 0 | D.words[0],
                        k = 0 | h.words[0],
                        O = T * k,
                        P = O / 67108864 | 0;
                    C.words[0] = 67108863 & O;
                    for (var S = 1; S < I; S++) {
                        for (var j = P >>> 26, ae = 67108863 & P, oe = Math.min(S, h.length - 1), ce = Math.max(0, S - D.length + 1); ce <= oe; ce++) j += (O = (T = 0 | D.words[S - ce | 0]) * (k = 0 | h.words[ce]) + ae) / 67108864 | 0, ae = 67108863 & O;
                        C.words[S] = 0 | ae, P = 0 | j
                    }
                    return 0 !== P ? C.words[S] = 0 | P : C.length--, C._strip()
                }
                i.prototype.toString = function(h, C) {
                    var I;
                    if (C = 0 | C || 1, 16 === (h = h || 10) || "hex" === h) {
                        I = "";
                        for (var T = 0, k = 0, O = 0; O < this.length; O++) {
                            var U = this.words[O],
                                P = (16777215 & (U << T | k)).toString(16);
                            k = U >>> 24 - T & 16777215, (T += 2) >= 26 && (T -= 26, O--), I = 0 !== k || O !== this.length - 1 ? s[6 - P.length] + P + I : P + I
                        }
                        for (0 !== k && (I = k.toString(16) + I); I.length % C != 0;) I = "0" + I;
                        return 0 !== this.negative && (I = "-" + I), I
                    }
                    if (h === (0 | h) && h >= 2 && h <= 36) {
                        var S = n[h],
                            j = u[h];
                        I = "";
                        var ae = this.clone();
                        for (ae.negative = 0; !ae.isZero();) {
                            var oe = ae.modrn(j).toString(h);
                            I = (ae = ae.idivn(j)).isZero() ? oe + I : s[S - oe.length] + oe + I
                        }
                        for (this.isZero() && (I = "0" + I); I.length % C != 0;) I = "0" + I;
                        return 0 !== this.negative && (I = "-" + I), I
                    }
                    c(!1, "Base should be between 2 and 36")
                }, i.prototype.toNumber = function() {
                    var h = this.words[0];
                    return 2 === this.length ? h += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? h += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && c(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -h : h
                }, i.prototype.toJSON = function() {
                    return this.toString(16, 2)
                }, r && (i.prototype.toBuffer = function(h, C) {
                    return this.toArrayLike(r, h, C)
                }), i.prototype.toArray = function(h, C) {
                    return this.toArrayLike(Array, h, C)
                }, i.prototype.toArrayLike = function(h, C, I) {
                    this._strip();
                    var T = this.byteLength(),
                        k = I || Math.max(1, T);
                    c(T <= k, "byte array longer than desired length"), c(k > 0, "Requested array length <= 0");
                    var O = function(h, C) {
                        return h.allocUnsafe ? h.allocUnsafe(C) : new h(C)
                    }(h, k);
                    return this["_toArrayLike" + ("le" === C ? "LE" : "BE")](O, T), O
                }, i.prototype._toArrayLikeLE = function(h, C) {
                    for (var I = 0, T = 0, k = 0, O = 0; k < this.length; k++) {
                        var U = this.words[k] << O | T;
                        h[I++] = 255 & U, I < h.length && (h[I++] = U >> 8 & 255), I < h.length && (h[I++] = U >> 16 & 255), 6 === O ? (I < h.length && (h[I++] = U >> 24 & 255), T = 0, O = 0) : (T = U >>> 24, O += 2)
                    }
                    if (I < h.length)
                        for (h[I++] = T; I < h.length;) h[I++] = 0
                }, i.prototype._toArrayLikeBE = function(h, C) {
                    for (var I = h.length - 1, T = 0, k = 0, O = 0; k < this.length; k++) {
                        var U = this.words[k] << O | T;
                        h[I--] = 255 & U, I >= 0 && (h[I--] = U >> 8 & 255), I >= 0 && (h[I--] = U >> 16 & 255), 6 === O ? (I >= 0 && (h[I--] = U >> 24 & 255), T = 0, O = 0) : (T = U >>> 24, O += 2)
                    }
                    if (I >= 0)
                        for (h[I--] = T; I >= 0;) h[I--] = 0
                }, i.prototype._countBits = Math.clz32 ? function(h) {
                    return 32 - Math.clz32(h)
                } : function(h) {
                    var C = h,
                        I = 0;
                    return C >= 4096 && (I += 13, C >>>= 13), C >= 64 && (I += 7, C >>>= 7), C >= 8 && (I += 4, C >>>= 4), C >= 2 && (I += 2, C >>>= 2), I + C
                }, i.prototype._zeroBits = function(h) {
                    if (0 === h) return 26;
                    var C = h,
                        I = 0;
                    return 8191 & C || (I += 13, C >>>= 13), 127 & C || (I += 7, C >>>= 7), 15 & C || (I += 4, C >>>= 4), 3 & C || (I += 2, C >>>= 2), 1 & C || I++, I
                }, i.prototype.bitLength = function() {
                    var C = this._countBits(this.words[this.length - 1]);
                    return 26 * (this.length - 1) + C
                }, i.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var h = 0, C = 0; C < this.length; C++) {
                        var I = this._zeroBits(this.words[C]);
                        if (h += I, 26 !== I) break
                    }
                    return h
                }, i.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, i.prototype.toTwos = function(h) {
                    return 0 !== this.negative ? this.abs().inotn(h).iaddn(1) : this.clone()
                }, i.prototype.fromTwos = function(h) {
                    return this.testn(h - 1) ? this.notn(h).iaddn(1).ineg() : this.clone()
                }, i.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, i.prototype.neg = function() {
                    return this.clone().ineg()
                }, i.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, i.prototype.iuor = function(h) {
                    for (; this.length < h.length;) this.words[this.length++] = 0;
                    for (var C = 0; C < h.length; C++) this.words[C] = this.words[C] | h.words[C];
                    return this._strip()
                }, i.prototype.ior = function(h) {
                    return c(0 == (this.negative | h.negative)), this.iuor(h)
                }, i.prototype.or = function(h) {
                    return this.length > h.length ? this.clone().ior(h) : h.clone().ior(this)
                }, i.prototype.uor = function(h) {
                    return this.length > h.length ? this.clone().iuor(h) : h.clone().iuor(this)
                }, i.prototype.iuand = function(h) {
                    var C;
                    C = this.length > h.length ? h : this;
                    for (var I = 0; I < C.length; I++) this.words[I] = this.words[I] & h.words[I];
                    return this.length = C.length, this._strip()
                }, i.prototype.iand = function(h) {
                    return c(0 == (this.negative | h.negative)), this.iuand(h)
                }, i.prototype.and = function(h) {
                    return this.length > h.length ? this.clone().iand(h) : h.clone().iand(this)
                }, i.prototype.uand = function(h) {
                    return this.length > h.length ? this.clone().iuand(h) : h.clone().iuand(this)
                }, i.prototype.iuxor = function(h) {
                    var C, I;
                    this.length > h.length ? (C = this, I = h) : (C = h, I = this);
                    for (var T = 0; T < I.length; T++) this.words[T] = C.words[T] ^ I.words[T];
                    if (this !== C)
                        for (; T < C.length; T++) this.words[T] = C.words[T];
                    return this.length = C.length, this._strip()
                }, i.prototype.ixor = function(h) {
                    return c(0 == (this.negative | h.negative)), this.iuxor(h)
                }, i.prototype.xor = function(h) {
                    return this.length > h.length ? this.clone().ixor(h) : h.clone().ixor(this)
                }, i.prototype.uxor = function(h) {
                    return this.length > h.length ? this.clone().iuxor(h) : h.clone().iuxor(this)
                }, i.prototype.inotn = function(h) {
                    c("number" == typeof h && h >= 0);
                    var C = 0 | Math.ceil(h / 26),
                        I = h % 26;
                    this._expand(C), I > 0 && C--;
                    for (var T = 0; T < C; T++) this.words[T] = 67108863 & ~this.words[T];
                    return I > 0 && (this.words[T] = ~this.words[T] & 67108863 >> 26 - I), this._strip()
                }, i.prototype.notn = function(h) {
                    return this.clone().inotn(h)
                }, i.prototype.setn = function(h, C) {
                    c("number" == typeof h && h >= 0);
                    var I = h / 26 | 0,
                        T = h % 26;
                    return this._expand(I + 1), this.words[I] = C ? this.words[I] | 1 << T : this.words[I] & ~(1 << T), this._strip()
                }, i.prototype.iadd = function(h) {
                    var C, I, T;
                    if (0 !== this.negative && 0 === h.negative) return this.negative = 0, C = this.isub(h), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== h.negative) return h.negative = 0, C = this.isub(h), h.negative = 1, C._normSign();
                    this.length > h.length ? (I = this, T = h) : (I = h, T = this);
                    for (var k = 0, O = 0; O < T.length; O++) this.words[O] = 67108863 & (C = (0 | I.words[O]) + (0 | T.words[O]) + k), k = C >>> 26;
                    for (; 0 !== k && O < I.length; O++) this.words[O] = 67108863 & (C = (0 | I.words[O]) + k), k = C >>> 26;
                    if (this.length = I.length, 0 !== k) this.words[this.length] = k, this.length++;
                    else if (I !== this)
                        for (; O < I.length; O++) this.words[O] = I.words[O];
                    return this
                }, i.prototype.add = function(h) {
                    var C;
                    return 0 !== h.negative && 0 === this.negative ? (h.negative = 0, C = this.sub(h), h.negative ^= 1, C) : 0 === h.negative && 0 !== this.negative ? (this.negative = 0, C = h.sub(this), this.negative = 1, C) : this.length > h.length ? this.clone().iadd(h) : h.clone().iadd(this)
                }, i.prototype.isub = function(h) {
                    if (0 !== h.negative) {
                        h.negative = 0;
                        var C = this.iadd(h);
                        return h.negative = 1, C._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(h), this.negative = 1, this._normSign();
                    var T, k, I = this.cmp(h);
                    if (0 === I) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    I > 0 ? (T = this, k = h) : (T = h, k = this);
                    for (var O = 0, U = 0; U < k.length; U++) O = (C = (0 | T.words[U]) - (0 | k.words[U]) + O) >> 26, this.words[U] = 67108863 & C;
                    for (; 0 !== O && U < T.length; U++) O = (C = (0 | T.words[U]) + O) >> 26, this.words[U] = 67108863 & C;
                    if (0 === O && U < T.length && T !== this)
                        for (; U < T.length; U++) this.words[U] = T.words[U];
                    return this.length = Math.max(this.length, U), T !== this && (this.negative = 1), this._strip()
                }, i.prototype.sub = function(h) {
                    return this.clone().isub(h)
                };
                var M = function(h, C, I) {
                    var P, S, j, T = h.words,
                        k = C.words,
                        O = I.words,
                        U = 0,
                        ae = 0 | T[0],
                        oe = 8191 & ae,
                        ce = ae >>> 13,
                        Y = 0 | T[1],
                        Q = 8191 & Y,
                        H = Y >>> 13,
                        V = 0 | T[2],
                        X = 8191 & V,
                        L = V >>> 13,
                        B = 0 | T[3],
                        Z = 8191 & B,
                        re = B >>> 13,
                        de = 0 | T[4],
                        he = 8191 & de,
                        ue = de >>> 13,
                        we = 0 | T[5],
                        ie = 8191 & we,
                        ge = we >>> 13,
                        me = 0 | T[6],
                        ve = 8191 & me,
                        G = me >>> 13,
                        q = 0 | T[7],
                        R = 8191 & q,
                        f = q >>> 13,
                        b = 0 | T[8],
                        F = 8191 & b,
                        J = b >>> 13,
                        ee = 0 | T[9],
                        te = 8191 & ee,
                        fe = ee >>> 13,
                        _e = 0 | k[0],
                        ye = 8191 & _e,
                        be = _e >>> 13,
                        Ee = 0 | k[1],
                        Se = 8191 & Ee,
                        Re = Ee >>> 13,
                        tt = 0 | k[2],
                        Me = 8191 & tt,
                        Ce = tt >>> 13,
                        rt = 0 | k[3],
                        Ie = 8191 & rt,
                        xe = rt >>> 13,
                        nt = 0 | k[4],
                        Ae = 8191 & nt,
                        ke = nt >>> 13,
                        it = 0 | k[5],
                        Te = 8191 & it,
                        Ne = it >>> 13,
                        st = 0 | k[6],
                        Le = 8191 & st,
                        Be = st >>> 13,
                        ot = 0 | k[7],
                        Pe = 8191 & ot,
                        Oe = ot >>> 13,
                        at = 0 | k[8],
                        Fe = 8191 & at,
                        De = at >>> 13,
                        ct = 0 | k[9],
                        je = 8191 & ct,
                        Ue = ct >>> 13;
                    I.negative = h.negative ^ C.negative, I.length = 19;
                    var He = (U + (P = Math.imul(oe, ye)) | 0) + ((8191 & (S = (S = Math.imul(oe, be)) + Math.imul(ce, ye) | 0)) << 13) | 0;
                    U = ((j = Math.imul(ce, be)) + (S >>> 13) | 0) + (He >>> 26) | 0, He &= 67108863, P = Math.imul(Q, ye), S = (S = Math.imul(Q, be)) + Math.imul(H, ye) | 0, j = Math.imul(H, be);
                    var $e = (U + (P = P + Math.imul(oe, Se) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, Re) | 0) + Math.imul(ce, Se) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, Re) | 0) + (S >>> 13) | 0) + ($e >>> 26) | 0, $e &= 67108863, P = Math.imul(X, ye), S = (S = Math.imul(X, be)) + Math.imul(L, ye) | 0, j = Math.imul(L, be), P = P + Math.imul(Q, Se) | 0, S = (S = S + Math.imul(Q, Re) | 0) + Math.imul(H, Se) | 0, j = j + Math.imul(H, Re) | 0;
                    var We = (U + (P = P + Math.imul(oe, Me) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, Ce) | 0) + Math.imul(ce, Me) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, Ce) | 0) + (S >>> 13) | 0) + (We >>> 26) | 0, We &= 67108863, P = Math.imul(Z, ye), S = (S = Math.imul(Z, be)) + Math.imul(re, ye) | 0, j = Math.imul(re, be), P = P + Math.imul(X, Se) | 0, S = (S = S + Math.imul(X, Re) | 0) + Math.imul(L, Se) | 0, j = j + Math.imul(L, Re) | 0, P = P + Math.imul(Q, Me) | 0, S = (S = S + Math.imul(Q, Ce) | 0) + Math.imul(H, Me) | 0, j = j + Math.imul(H, Ce) | 0;
                    var Ve = (U + (P = P + Math.imul(oe, Ie) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, xe) | 0) + Math.imul(ce, Ie) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, xe) | 0) + (S >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, P = Math.imul(he, ye), S = (S = Math.imul(he, be)) + Math.imul(ue, ye) | 0, j = Math.imul(ue, be), P = P + Math.imul(Z, Se) | 0, S = (S = S + Math.imul(Z, Re) | 0) + Math.imul(re, Se) | 0, j = j + Math.imul(re, Re) | 0, P = P + Math.imul(X, Me) | 0, S = (S = S + Math.imul(X, Ce) | 0) + Math.imul(L, Me) | 0, j = j + Math.imul(L, Ce) | 0, P = P + Math.imul(Q, Ie) | 0, S = (S = S + Math.imul(Q, xe) | 0) + Math.imul(H, Ie) | 0, j = j + Math.imul(H, xe) | 0;
                    var ze = (U + (P = P + Math.imul(oe, Ae) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, ke) | 0) + Math.imul(ce, Ae) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, ke) | 0) + (S >>> 13) | 0) + (ze >>> 26) | 0, ze &= 67108863, P = Math.imul(ie, ye), S = (S = Math.imul(ie, be)) + Math.imul(ge, ye) | 0, j = Math.imul(ge, be), P = P + Math.imul(he, Se) | 0, S = (S = S + Math.imul(he, Re) | 0) + Math.imul(ue, Se) | 0, j = j + Math.imul(ue, Re) | 0, P = P + Math.imul(Z, Me) | 0, S = (S = S + Math.imul(Z, Ce) | 0) + Math.imul(re, Me) | 0, j = j + Math.imul(re, Ce) | 0, P = P + Math.imul(X, Ie) | 0, S = (S = S + Math.imul(X, xe) | 0) + Math.imul(L, Ie) | 0, j = j + Math.imul(L, xe) | 0, P = P + Math.imul(Q, Ae) | 0, S = (S = S + Math.imul(Q, ke) | 0) + Math.imul(H, Ae) | 0, j = j + Math.imul(H, ke) | 0;
                    var Ge = (U + (P = P + Math.imul(oe, Te) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, Ne) | 0) + Math.imul(ce, Te) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, Ne) | 0) + (S >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, P = Math.imul(ve, ye), S = (S = Math.imul(ve, be)) + Math.imul(G, ye) | 0, j = Math.imul(G, be), P = P + Math.imul(ie, Se) | 0, S = (S = S + Math.imul(ie, Re) | 0) + Math.imul(ge, Se) | 0, j = j + Math.imul(ge, Re) | 0, P = P + Math.imul(he, Me) | 0, S = (S = S + Math.imul(he, Ce) | 0) + Math.imul(ue, Me) | 0, j = j + Math.imul(ue, Ce) | 0, P = P + Math.imul(Z, Ie) | 0, S = (S = S + Math.imul(Z, xe) | 0) + Math.imul(re, Ie) | 0, j = j + Math.imul(re, xe) | 0, P = P + Math.imul(X, Ae) | 0, S = (S = S + Math.imul(X, ke) | 0) + Math.imul(L, Ae) | 0, j = j + Math.imul(L, ke) | 0, P = P + Math.imul(Q, Te) | 0, S = (S = S + Math.imul(Q, Ne) | 0) + Math.imul(H, Te) | 0, j = j + Math.imul(H, Ne) | 0;
                    var Je = (U + (P = P + Math.imul(oe, Le) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, Be) | 0) + Math.imul(ce, Le) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, Be) | 0) + (S >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, P = Math.imul(R, ye), S = (S = Math.imul(R, be)) + Math.imul(f, ye) | 0, j = Math.imul(f, be), P = P + Math.imul(ve, Se) | 0, S = (S = S + Math.imul(ve, Re) | 0) + Math.imul(G, Se) | 0, j = j + Math.imul(G, Re) | 0, P = P + Math.imul(ie, Me) | 0, S = (S = S + Math.imul(ie, Ce) | 0) + Math.imul(ge, Me) | 0, j = j + Math.imul(ge, Ce) | 0, P = P + Math.imul(he, Ie) | 0, S = (S = S + Math.imul(he, xe) | 0) + Math.imul(ue, Ie) | 0, j = j + Math.imul(ue, xe) | 0, P = P + Math.imul(Z, Ae) | 0, S = (S = S + Math.imul(Z, ke) | 0) + Math.imul(re, Ae) | 0, j = j + Math.imul(re, ke) | 0, P = P + Math.imul(X, Te) | 0, S = (S = S + Math.imul(X, Ne) | 0) + Math.imul(L, Te) | 0, j = j + Math.imul(L, Ne) | 0, P = P + Math.imul(Q, Le) | 0, S = (S = S + Math.imul(Q, Be) | 0) + Math.imul(H, Le) | 0, j = j + Math.imul(H, Be) | 0;
                    var Ze = (U + (P = P + Math.imul(oe, Pe) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, Oe) | 0) + Math.imul(ce, Pe) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, Oe) | 0) + (S >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, P = Math.imul(F, ye), S = (S = Math.imul(F, be)) + Math.imul(J, ye) | 0, j = Math.imul(J, be), P = P + Math.imul(R, Se) | 0, S = (S = S + Math.imul(R, Re) | 0) + Math.imul(f, Se) | 0, j = j + Math.imul(f, Re) | 0, P = P + Math.imul(ve, Me) | 0, S = (S = S + Math.imul(ve, Ce) | 0) + Math.imul(G, Me) | 0, j = j + Math.imul(G, Ce) | 0, P = P + Math.imul(ie, Ie) | 0, S = (S = S + Math.imul(ie, xe) | 0) + Math.imul(ge, Ie) | 0, j = j + Math.imul(ge, xe) | 0, P = P + Math.imul(he, Ae) | 0, S = (S = S + Math.imul(he, ke) | 0) + Math.imul(ue, Ae) | 0, j = j + Math.imul(ue, ke) | 0, P = P + Math.imul(Z, Te) | 0, S = (S = S + Math.imul(Z, Ne) | 0) + Math.imul(re, Te) | 0, j = j + Math.imul(re, Ne) | 0, P = P + Math.imul(X, Le) | 0, S = (S = S + Math.imul(X, Be) | 0) + Math.imul(L, Le) | 0, j = j + Math.imul(L, Be) | 0, P = P + Math.imul(Q, Pe) | 0, S = (S = S + Math.imul(Q, Oe) | 0) + Math.imul(H, Pe) | 0, j = j + Math.imul(H, Oe) | 0;
                    var Ke = (U + (P = P + Math.imul(oe, Fe) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, De) | 0) + Math.imul(ce, Fe) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, De) | 0) + (S >>> 13) | 0) + (Ke >>> 26) | 0, Ke &= 67108863, P = Math.imul(te, ye), S = (S = Math.imul(te, be)) + Math.imul(fe, ye) | 0, j = Math.imul(fe, be), P = P + Math.imul(F, Se) | 0, S = (S = S + Math.imul(F, Re) | 0) + Math.imul(J, Se) | 0, j = j + Math.imul(J, Re) | 0, P = P + Math.imul(R, Me) | 0, S = (S = S + Math.imul(R, Ce) | 0) + Math.imul(f, Me) | 0, j = j + Math.imul(f, Ce) | 0, P = P + Math.imul(ve, Ie) | 0, S = (S = S + Math.imul(ve, xe) | 0) + Math.imul(G, Ie) | 0, j = j + Math.imul(G, xe) | 0, P = P + Math.imul(ie, Ae) | 0, S = (S = S + Math.imul(ie, ke) | 0) + Math.imul(ge, Ae) | 0, j = j + Math.imul(ge, ke) | 0, P = P + Math.imul(he, Te) | 0, S = (S = S + Math.imul(he, Ne) | 0) + Math.imul(ue, Te) | 0, j = j + Math.imul(ue, Ne) | 0, P = P + Math.imul(Z, Le) | 0, S = (S = S + Math.imul(Z, Be) | 0) + Math.imul(re, Le) | 0, j = j + Math.imul(re, Be) | 0, P = P + Math.imul(X, Pe) | 0, S = (S = S + Math.imul(X, Oe) | 0) + Math.imul(L, Pe) | 0, j = j + Math.imul(L, Oe) | 0, P = P + Math.imul(Q, Fe) | 0, S = (S = S + Math.imul(Q, De) | 0) + Math.imul(H, Fe) | 0, j = j + Math.imul(H, De) | 0;
                    var Ye = (U + (P = P + Math.imul(oe, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(oe, Ue) | 0) + Math.imul(ce, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ce, Ue) | 0) + (S >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, P = Math.imul(te, Se), S = (S = Math.imul(te, Re)) + Math.imul(fe, Se) | 0, j = Math.imul(fe, Re), P = P + Math.imul(F, Me) | 0, S = (S = S + Math.imul(F, Ce) | 0) + Math.imul(J, Me) | 0, j = j + Math.imul(J, Ce) | 0, P = P + Math.imul(R, Ie) | 0, S = (S = S + Math.imul(R, xe) | 0) + Math.imul(f, Ie) | 0, j = j + Math.imul(f, xe) | 0, P = P + Math.imul(ve, Ae) | 0, S = (S = S + Math.imul(ve, ke) | 0) + Math.imul(G, Ae) | 0, j = j + Math.imul(G, ke) | 0, P = P + Math.imul(ie, Te) | 0, S = (S = S + Math.imul(ie, Ne) | 0) + Math.imul(ge, Te) | 0, j = j + Math.imul(ge, Ne) | 0, P = P + Math.imul(he, Le) | 0, S = (S = S + Math.imul(he, Be) | 0) + Math.imul(ue, Le) | 0, j = j + Math.imul(ue, Be) | 0, P = P + Math.imul(Z, Pe) | 0, S = (S = S + Math.imul(Z, Oe) | 0) + Math.imul(re, Pe) | 0, j = j + Math.imul(re, Oe) | 0, P = P + Math.imul(X, Fe) | 0, S = (S = S + Math.imul(X, De) | 0) + Math.imul(L, Fe) | 0, j = j + Math.imul(L, De) | 0;
                    var Qe = (U + (P = P + Math.imul(Q, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Q, Ue) | 0) + Math.imul(H, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(H, Ue) | 0) + (S >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, P = Math.imul(te, Me), S = (S = Math.imul(te, Ce)) + Math.imul(fe, Me) | 0, j = Math.imul(fe, Ce), P = P + Math.imul(F, Ie) | 0, S = (S = S + Math.imul(F, xe) | 0) + Math.imul(J, Ie) | 0, j = j + Math.imul(J, xe) | 0, P = P + Math.imul(R, Ae) | 0, S = (S = S + Math.imul(R, ke) | 0) + Math.imul(f, Ae) | 0, j = j + Math.imul(f, ke) | 0, P = P + Math.imul(ve, Te) | 0, S = (S = S + Math.imul(ve, Ne) | 0) + Math.imul(G, Te) | 0, j = j + Math.imul(G, Ne) | 0, P = P + Math.imul(ie, Le) | 0, S = (S = S + Math.imul(ie, Be) | 0) + Math.imul(ge, Le) | 0, j = j + Math.imul(ge, Be) | 0, P = P + Math.imul(he, Pe) | 0, S = (S = S + Math.imul(he, Oe) | 0) + Math.imul(ue, Pe) | 0, j = j + Math.imul(ue, Oe) | 0, P = P + Math.imul(Z, Fe) | 0, S = (S = S + Math.imul(Z, De) | 0) + Math.imul(re, Fe) | 0, j = j + Math.imul(re, De) | 0;
                    var Xe = (U + (P = P + Math.imul(X, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(X, Ue) | 0) + Math.imul(L, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(L, Ue) | 0) + (S >>> 13) | 0) + (Xe >>> 26) | 0, Xe &= 67108863, P = Math.imul(te, Ie), S = (S = Math.imul(te, xe)) + Math.imul(fe, Ie) | 0, j = Math.imul(fe, xe), P = P + Math.imul(F, Ae) | 0, S = (S = S + Math.imul(F, ke) | 0) + Math.imul(J, Ae) | 0, j = j + Math.imul(J, ke) | 0, P = P + Math.imul(R, Te) | 0, S = (S = S + Math.imul(R, Ne) | 0) + Math.imul(f, Te) | 0, j = j + Math.imul(f, Ne) | 0, P = P + Math.imul(ve, Le) | 0, S = (S = S + Math.imul(ve, Be) | 0) + Math.imul(G, Le) | 0, j = j + Math.imul(G, Be) | 0, P = P + Math.imul(ie, Pe) | 0, S = (S = S + Math.imul(ie, Oe) | 0) + Math.imul(ge, Pe) | 0, j = j + Math.imul(ge, Oe) | 0, P = P + Math.imul(he, Fe) | 0, S = (S = S + Math.imul(he, De) | 0) + Math.imul(ue, Fe) | 0, j = j + Math.imul(ue, De) | 0;
                    var qe = (U + (P = P + Math.imul(Z, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(Z, Ue) | 0) + Math.imul(re, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(re, Ue) | 0) + (S >>> 13) | 0) + (qe >>> 26) | 0, qe &= 67108863, P = Math.imul(te, Ae), S = (S = Math.imul(te, ke)) + Math.imul(fe, Ae) | 0, j = Math.imul(fe, ke), P = P + Math.imul(F, Te) | 0, S = (S = S + Math.imul(F, Ne) | 0) + Math.imul(J, Te) | 0, j = j + Math.imul(J, Ne) | 0, P = P + Math.imul(R, Le) | 0, S = (S = S + Math.imul(R, Be) | 0) + Math.imul(f, Le) | 0, j = j + Math.imul(f, Be) | 0, P = P + Math.imul(ve, Pe) | 0, S = (S = S + Math.imul(ve, Oe) | 0) + Math.imul(G, Pe) | 0, j = j + Math.imul(G, Oe) | 0, P = P + Math.imul(ie, Fe) | 0, S = (S = S + Math.imul(ie, De) | 0) + Math.imul(ge, Fe) | 0, j = j + Math.imul(ge, De) | 0;
                    var et = (U + (P = P + Math.imul(he, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(he, Ue) | 0) + Math.imul(ue, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ue, Ue) | 0) + (S >>> 13) | 0) + (et >>> 26) | 0, et &= 67108863, P = Math.imul(te, Te), S = (S = Math.imul(te, Ne)) + Math.imul(fe, Te) | 0, j = Math.imul(fe, Ne), P = P + Math.imul(F, Le) | 0, S = (S = S + Math.imul(F, Be) | 0) + Math.imul(J, Le) | 0, j = j + Math.imul(J, Be) | 0, P = P + Math.imul(R, Pe) | 0, S = (S = S + Math.imul(R, Oe) | 0) + Math.imul(f, Pe) | 0, j = j + Math.imul(f, Oe) | 0, P = P + Math.imul(ve, Fe) | 0, S = (S = S + Math.imul(ve, De) | 0) + Math.imul(G, Fe) | 0, j = j + Math.imul(G, De) | 0;
                    var ut = (U + (P = P + Math.imul(ie, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(ie, Ue) | 0) + Math.imul(ge, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(ge, Ue) | 0) + (S >>> 13) | 0) + (ut >>> 26) | 0, ut &= 67108863, P = Math.imul(te, Le), S = (S = Math.imul(te, Be)) + Math.imul(fe, Le) | 0, j = Math.imul(fe, Be), P = P + Math.imul(F, Pe) | 0, S = (S = S + Math.imul(F, Oe) | 0) + Math.imul(J, Pe) | 0, j = j + Math.imul(J, Oe) | 0, P = P + Math.imul(R, Fe) | 0, S = (S = S + Math.imul(R, De) | 0) + Math.imul(f, Fe) | 0, j = j + Math.imul(f, De) | 0;
                    var lt = (U + (P = P + Math.imul(ve, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(ve, Ue) | 0) + Math.imul(G, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(G, Ue) | 0) + (S >>> 13) | 0) + (lt >>> 26) | 0, lt &= 67108863, P = Math.imul(te, Pe), S = (S = Math.imul(te, Oe)) + Math.imul(fe, Pe) | 0, j = Math.imul(fe, Oe), P = P + Math.imul(F, Fe) | 0, S = (S = S + Math.imul(F, De) | 0) + Math.imul(J, Fe) | 0, j = j + Math.imul(J, De) | 0;
                    var ht = (U + (P = P + Math.imul(R, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(R, Ue) | 0) + Math.imul(f, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(f, Ue) | 0) + (S >>> 13) | 0) + (ht >>> 26) | 0, ht &= 67108863, P = Math.imul(te, Fe), S = (S = Math.imul(te, De)) + Math.imul(fe, Fe) | 0, j = Math.imul(fe, De);
                    var dt = (U + (P = P + Math.imul(F, je) | 0) | 0) + ((8191 & (S = (S = S + Math.imul(F, Ue) | 0) + Math.imul(J, je) | 0)) << 13) | 0;
                    U = ((j = j + Math.imul(J, Ue) | 0) + (S >>> 13) | 0) + (dt >>> 26) | 0, dt &= 67108863;
                    var ft = (U + (P = Math.imul(te, je)) | 0) + ((8191 & (S = (S = Math.imul(te, Ue)) + Math.imul(fe, je) | 0)) << 13) | 0;
                    return U = ((j = Math.imul(fe, Ue)) + (S >>> 13) | 0) + (ft >>> 26) | 0, ft &= 67108863, O[0] = He, O[1] = $e, O[2] = We, O[3] = Ve, O[4] = ze, O[5] = Ge, O[6] = Je, O[7] = Ze, O[8] = Ke, O[9] = Ye, O[10] = Qe, O[11] = Xe, O[12] = qe, O[13] = et, O[14] = ut, O[15] = lt, O[16] = ht, O[17] = dt, O[18] = ft, 0 !== U && (O[19] = U, I.length++), I
                };

                function w(D, h, C) {
                    C.negative = h.negative ^ D.negative, C.length = D.length + h.length;
                    for (var I = 0, T = 0, k = 0; k < C.length - 1; k++) {
                        var O = T;
                        T = 0;
                        for (var U = 67108863 & I, P = Math.min(k, h.length - 1), S = Math.max(0, k - D.length + 1); S <= P; S++) {
                            var ce = (0 | D.words[k - S]) * (0 | h.words[S]),
                                Y = 67108863 & ce;
                            U = 67108863 & (Y = Y + U | 0), T += (O = (O = O + (ce / 67108864 | 0) | 0) + (Y >>> 26) | 0) >>> 26, O &= 67108863
                        }
                        C.words[k] = U, I = O, O = T
                    }
                    return 0 !== I ? C.words[k] = I : C.length--, C._strip()
                }

                function A(D, h, C) {
                    return w(D, h, C)
                }

                function x(D, h) {
                    this.x = D, this.y = h
                }
                Math.imul || (M = E), i.prototype.mulTo = function(h, C) {
                    var T = this.length + h.length;
                    return 10 === this.length && 10 === h.length ? M(this, h, C) : T < 63 ? E(this, h, C) : T < 1024 ? w(this, h, C) : A(this, h, C)
                }, x.prototype.makeRBT = function(h) {
                    for (var C = new Array(h), I = i.prototype._countBits(h) - 1, T = 0; T < h; T++) C[T] = this.revBin(T, I, h);
                    return C
                }, x.prototype.revBin = function(h, C, I) {
                    if (0 === h || h === I - 1) return h;
                    for (var T = 0, k = 0; k < C; k++) T |= (1 & h) << C - k - 1, h >>= 1;
                    return T
                }, x.prototype.permute = function(h, C, I, T, k, O) {
                    for (var U = 0; U < O; U++) T[U] = C[h[U]], k[U] = I[h[U]]
                }, x.prototype.transform = function(h, C, I, T, k, O) {
                    this.permute(O, h, C, I, T, k);
                    for (var U = 1; U < k; U <<= 1)
                        for (var P = U << 1, S = Math.cos(2 * Math.PI / P), j = Math.sin(2 * Math.PI / P), ae = 0; ae < k; ae += P)
                            for (var oe = S, ce = j, Y = 0; Y < U; Y++) {
                                var Q = I[ae + Y],
                                    H = T[ae + Y],
                                    V = I[ae + Y + U],
                                    X = T[ae + Y + U],
                                    L = oe * V - ce * X;
                                X = oe * X + ce * V, I[ae + Y] = Q + (V = L), T[ae + Y] = H + X, I[ae + Y + U] = Q - V, T[ae + Y + U] = H - X, Y !== P && (L = S * oe - j * ce, ce = S * ce + j * oe, oe = L)
                            }
                }, x.prototype.guessLen13b = function(h, C) {
                    var I = 1 | Math.max(C, h),
                        T = 1 & I,
                        k = 0;
                    for (I = I / 2 | 0; I; I >>>= 1) k++;
                    return 1 << k + 1 + T
                }, x.prototype.conjugate = function(h, C, I) {
                    if (!(I <= 1))
                        for (var T = 0; T < I / 2; T++) {
                            var k = h[T];
                            h[T] = h[I - T - 1], h[I - T - 1] = k, k = C[T], C[T] = -C[I - T - 1], C[I - T - 1] = -k
                        }
                }, x.prototype.normalize13b = function(h, C) {
                    for (var I = 0, T = 0; T < C / 2; T++) {
                        var k = 8192 * Math.round(h[2 * T + 1] / C) + Math.round(h[2 * T] / C) + I;
                        h[T] = 67108863 & k, I = k < 67108864 ? 0 : k / 67108864 | 0
                    }
                    return h
                }, x.prototype.convert13b = function(h, C, I, T) {
                    for (var k = 0, O = 0; O < C; O++) I[2 * O] = 8191 & (k += 0 | h[O]), I[2 * O + 1] = 8191 & (k >>>= 13), k >>>= 13;
                    for (O = 2 * C; O < T; ++O) I[O] = 0;
                    c(0 === k), c(0 == (-8192 & k))
                }, x.prototype.stub = function(h) {
                    for (var C = new Array(h), I = 0; I < h; I++) C[I] = 0;
                    return C
                }, x.prototype.mulp = function(h, C, I) {
                    var T = 2 * this.guessLen13b(h.length, C.length),
                        k = this.makeRBT(T),
                        O = this.stub(T),
                        U = new Array(T),
                        P = new Array(T),
                        S = new Array(T),
                        j = new Array(T),
                        ae = new Array(T),
                        oe = new Array(T),
                        ce = I.words;
                    ce.length = T, this.convert13b(h.words, h.length, U, T), this.convert13b(C.words, C.length, j, T), this.transform(U, O, P, S, T, k), this.transform(j, O, ae, oe, T, k);
                    for (var Y = 0; Y < T; Y++) {
                        var Q = P[Y] * ae[Y] - S[Y] * oe[Y];
                        S[Y] = P[Y] * oe[Y] + S[Y] * ae[Y], P[Y] = Q
                    }
                    return this.conjugate(P, S, T), this.transform(P, S, ce, O, T, k), this.conjugate(ce, O, T), this.normalize13b(ce, T), I.negative = h.negative ^ C.negative, I.length = h.length + C.length, I._strip()
                }, i.prototype.mul = function(h) {
                    var C = new i(null);
                    return C.words = new Array(this.length + h.length), this.mulTo(h, C)
                }, i.prototype.mulf = function(h) {
                    var C = new i(null);
                    return C.words = new Array(this.length + h.length), A(this, h, C)
                }, i.prototype.imul = function(h) {
                    return this.clone().mulTo(h, this)
                }, i.prototype.imuln = function(h) {
                    var C = h < 0;
                    C && (h = -h), c("number" == typeof h), c(h < 67108864);
                    for (var I = 0, T = 0; T < this.length; T++) {
                        var k = (0 | this.words[T]) * h,
                            O = (67108863 & k) + (67108863 & I);
                        I >>= 26, I += k / 67108864 | 0, I += O >>> 26, this.words[T] = 67108863 & O
                    }
                    return 0 !== I && (this.words[T] = I, this.length++), C ? this.ineg() : this
                }, i.prototype.muln = function(h) {
                    return this.clone().imuln(h)
                }, i.prototype.sqr = function() {
                    return this.mul(this)
                }, i.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, i.prototype.pow = function(h) {
                    var C = function _(D) {
                        for (var h = new Array(D.bitLength()), C = 0; C < h.length; C++) h[C] = D.words[C / 26 | 0] >>> C % 26 & 1;
                        return h
                    }(h);
                    if (0 === C.length) return new i(1);
                    for (var I = this, T = 0; T < C.length && 0 === C[T]; T++, I = I.sqr());
                    if (++T < C.length)
                        for (var k = I.sqr(); T < C.length; T++, k = k.sqr()) 0 !== C[T] && (I = I.mul(k));
                    return I
                }, i.prototype.iushln = function(h) {
                    c("number" == typeof h && h >= 0);
                    var k, C = h % 26,
                        I = (h - C) / 26,
                        T = 67108863 >>> 26 - C << 26 - C;
                    if (0 !== C) {
                        var O = 0;
                        for (k = 0; k < this.length; k++) {
                            var U = this.words[k] & T;
                            this.words[k] = (0 | this.words[k]) - U << C | O, O = U >>> 26 - C
                        }
                        O && (this.words[k] = O, this.length++)
                    }
                    if (0 !== I) {
                        for (k = this.length - 1; k >= 0; k--) this.words[k + I] = this.words[k];
                        for (k = 0; k < I; k++) this.words[k] = 0;
                        this.length += I
                    }
                    return this._strip()
                }, i.prototype.ishln = function(h) {
                    return c(0 === this.negative), this.iushln(h)
                }, i.prototype.iushrn = function(h, C, I) {
                    var T;
                    c("number" == typeof h && h >= 0), T = C ? (C - C % 26) / 26 : 0;
                    var k = h % 26,
                        O = Math.min((h - k) / 26, this.length),
                        U = 67108863 ^ 67108863 >>> k << k,
                        P = I;
                    if (T -= O, T = Math.max(0, T), P) {
                        for (var S = 0; S < O; S++) P.words[S] = this.words[S];
                        P.length = O
                    }
                    if (0 !== O)
                        if (this.length > O)
                            for (this.length -= O, S = 0; S < this.length; S++) this.words[S] = this.words[S + O];
                        else this.words[0] = 0, this.length = 1;
                    var j = 0;
                    for (S = this.length - 1; S >= 0 && (0 !== j || S >= T); S--) {
                        var ae = 0 | this.words[S];
                        this.words[S] = j << 26 - k | ae >>> k, j = ae & U
                    }
                    return P && 0 !== j && (P.words[P.length++] = j), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip()
                }, i.prototype.ishrn = function(h, C, I) {
                    return c(0 === this.negative), this.iushrn(h, C, I)
                }, i.prototype.shln = function(h) {
                    return this.clone().ishln(h)
                }, i.prototype.ushln = function(h) {
                    return this.clone().iushln(h)
                }, i.prototype.shrn = function(h) {
                    return this.clone().ishrn(h)
                }, i.prototype.ushrn = function(h) {
                    return this.clone().iushrn(h)
                }, i.prototype.testn = function(h) {
                    c("number" == typeof h && h >= 0);
                    var C = h % 26,
                        I = (h - C) / 26;
                    return !(this.length <= I || !(this.words[I] & 1 << C))
                }, i.prototype.imaskn = function(h) {
                    c("number" == typeof h && h >= 0);
                    var C = h % 26,
                        I = (h - C) / 26;
                    return c(0 === this.negative, "imaskn works only with positive numbers"), this.length <= I ? this : (0 !== C && I++, this.length = Math.min(I, this.length), 0 !== C && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> C << C), this._strip())
                }, i.prototype.maskn = function(h) {
                    return this.clone().imaskn(h)
                }, i.prototype.iaddn = function(h) {
                    return c("number" == typeof h), c(h < 67108864), h < 0 ? this.isubn(-h) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) <= h ? (this.words[0] = h - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(h), this.negative = 1, this) : this._iaddn(h)
                }, i.prototype._iaddn = function(h) {
                    this.words[0] += h;
                    for (var C = 0; C < this.length && this.words[C] >= 67108864; C++) this.words[C] -= 67108864, C === this.length - 1 ? this.words[C + 1] = 1 : this.words[C + 1]++;
                    return this.length = Math.max(this.length, C + 1), this
                }, i.prototype.isubn = function(h) {
                    if (c("number" == typeof h), c(h < 67108864), h < 0) return this.iaddn(-h);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(h), this.negative = 1, this;
                    if (this.words[0] -= h, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var C = 0; C < this.length && this.words[C] < 0; C++) this.words[C] += 67108864, this.words[C + 1] -= 1;
                    return this._strip()
                }, i.prototype.addn = function(h) {
                    return this.clone().iaddn(h)
                }, i.prototype.subn = function(h) {
                    return this.clone().isubn(h)
                }, i.prototype.iabs = function() {
                    return this.negative = 0, this
                }, i.prototype.abs = function() {
                    return this.clone().iabs()
                }, i.prototype._ishlnsubmul = function(h, C, I) {
                    var k;
                    this._expand(h.length + I);
                    var O, U = 0;
                    for (k = 0; k < h.length; k++) {
                        O = (0 | this.words[k + I]) + U;
                        var P = (0 | h.words[k]) * C;
                        U = ((O -= 67108863 & P) >> 26) - (P / 67108864 | 0), this.words[k + I] = 67108863 & O
                    }
                    for (; k < this.length - I; k++) U = (O = (0 | this.words[k + I]) + U) >> 26, this.words[k + I] = 67108863 & O;
                    if (0 === U) return this._strip();
                    for (c(-1 === U), U = 0, k = 0; k < this.length; k++) U = (O = -(0 | this.words[k]) + U) >> 26, this.words[k] = 67108863 & O;
                    return this.negative = 1, this._strip()
                }, i.prototype._wordDiv = function(h, C) {
                    var I, T = this.clone(),
                        k = h,
                        O = 0 | k.words[k.length - 1];
                    0 != (I = 26 - this._countBits(O)) && (k = k.ushln(I), T.iushln(I), O = 0 | k.words[k.length - 1]);
                    var S, P = T.length - k.length;
                    if ("mod" !== C) {
                        (S = new i(null)).length = P + 1, S.words = new Array(S.length);
                        for (var j = 0; j < S.length; j++) S.words[j] = 0
                    }
                    var ae = T.clone()._ishlnsubmul(k, 1, P);
                    0 === ae.negative && (T = ae, S && (S.words[P] = 1));
                    for (var oe = P - 1; oe >= 0; oe--) {
                        var ce = 67108864 * (0 | T.words[k.length + oe]) + (0 | T.words[k.length + oe - 1]);
                        for (ce = Math.min(ce / O | 0, 67108863), T._ishlnsubmul(k, ce, oe); 0 !== T.negative;) ce--, T.negative = 0, T._ishlnsubmul(k, 1, oe), T.isZero() || (T.negative ^= 1);
                        S && (S.words[oe] = ce)
                    }
                    return S && S._strip(), T._strip(), "div" !== C && 0 !== I && T.iushrn(I), {
                        div: S || null,
                        mod: T
                    }
                }, i.prototype.divmod = function(h, C, I) {
                    return c(!h.isZero()), this.isZero() ? {
                        div: new i(0),
                        mod: new i(0)
                    } : 0 !== this.negative && 0 === h.negative ? (O = this.neg().divmod(h, C), "mod" !== C && (T = O.div.neg()), "div" !== C && (k = O.mod.neg(), I && 0 !== k.negative && k.iadd(h)), {
                        div: T,
                        mod: k
                    }) : 0 === this.negative && 0 !== h.negative ? (O = this.divmod(h.neg(), C), "mod" !== C && (T = O.div.neg()), {
                        div: T,
                        mod: O.mod
                    }) : this.negative & h.negative ? (O = this.neg().divmod(h.neg(), C), "div" !== C && (k = O.mod.neg(), I && 0 !== k.negative && k.isub(h)), {
                        div: O.div,
                        mod: k
                    }) : h.length > this.length || this.cmp(h) < 0 ? {
                        div: new i(0),
                        mod: this
                    } : 1 === h.length ? "div" === C ? {
                        div: this.divn(h.words[0]),
                        mod: null
                    } : "mod" === C ? {
                        div: null,
                        mod: new i(this.modrn(h.words[0]))
                    } : {
                        div: this.divn(h.words[0]),
                        mod: new i(this.modrn(h.words[0]))
                    } : this._wordDiv(h, C);
                    var T, k, O
                }, i.prototype.div = function(h) {
                    return this.divmod(h, "div", !1).div
                }, i.prototype.mod = function(h) {
                    return this.divmod(h, "mod", !1).mod
                }, i.prototype.umod = function(h) {
                    return this.divmod(h, "mod", !0).mod
                }, i.prototype.divRound = function(h) {
                    var C = this.divmod(h);
                    if (C.mod.isZero()) return C.div;
                    var I = 0 !== C.div.negative ? C.mod.isub(h) : C.mod,
                        T = h.ushrn(1),
                        k = h.andln(1),
                        O = I.cmp(T);
                    return O < 0 || 1 === k && 0 === O ? C.div : 0 !== C.div.negative ? C.div.isubn(1) : C.div.iaddn(1)
                }, i.prototype.modrn = function(h) {
                    var C = h < 0;
                    C && (h = -h), c(h <= 67108863);
                    for (var I = (1 << 26) % h, T = 0, k = this.length - 1; k >= 0; k--) T = (I * T + (0 | this.words[k])) % h;
                    return C ? -T : T
                }, i.prototype.modn = function(h) {
                    return this.modrn(h)
                }, i.prototype.idivn = function(h) {
                    var C = h < 0;
                    C && (h = -h), c(h <= 67108863);
                    for (var I = 0, T = this.length - 1; T >= 0; T--) {
                        var k = (0 | this.words[T]) + 67108864 * I;
                        this.words[T] = k / h | 0, I = k % h
                    }
                    return this._strip(), C ? this.ineg() : this
                }, i.prototype.divn = function(h) {
                    return this.clone().idivn(h)
                }, i.prototype.egcd = function(h) {
                    c(0 === h.negative), c(!h.isZero());
                    var C = this,
                        I = h.clone();
                    C = 0 !== C.negative ? C.umod(h) : C.clone();
                    for (var T = new i(1), k = new i(0), O = new i(0), U = new i(1), P = 0; C.isEven() && I.isEven();) C.iushrn(1), I.iushrn(1), ++P;
                    for (var S = I.clone(), j = C.clone(); !C.isZero();) {
                        for (var ae = 0, oe = 1; !(C.words[0] & oe) && ae < 26; ++ae, oe <<= 1);
                        if (ae > 0)
                            for (C.iushrn(ae); ae-- > 0;)(T.isOdd() || k.isOdd()) && (T.iadd(S), k.isub(j)), T.iushrn(1), k.iushrn(1);
                        for (var ce = 0, Y = 1; !(I.words[0] & Y) && ce < 26; ++ce, Y <<= 1);
                        if (ce > 0)
                            for (I.iushrn(ce); ce-- > 0;)(O.isOdd() || U.isOdd()) && (O.iadd(S), U.isub(j)), O.iushrn(1), U.iushrn(1);
                        C.cmp(I) >= 0 ? (C.isub(I), T.isub(O), k.isub(U)) : (I.isub(C), O.isub(T), U.isub(k))
                    }
                    return {
                        a: O,
                        b: U,
                        gcd: I.iushln(P)
                    }
                }, i.prototype._invmp = function(h) {
                    c(0 === h.negative), c(!h.isZero());
                    var ae, C = this,
                        I = h.clone();
                    C = 0 !== C.negative ? C.umod(h) : C.clone();
                    for (var T = new i(1), k = new i(0), O = I.clone(); C.cmpn(1) > 0 && I.cmpn(1) > 0;) {
                        for (var U = 0, P = 1; !(C.words[0] & P) && U < 26; ++U, P <<= 1);
                        if (U > 0)
                            for (C.iushrn(U); U-- > 0;) T.isOdd() && T.iadd(O), T.iushrn(1);
                        for (var S = 0, j = 1; !(I.words[0] & j) && S < 26; ++S, j <<= 1);
                        if (S > 0)
                            for (I.iushrn(S); S-- > 0;) k.isOdd() && k.iadd(O), k.iushrn(1);
                        C.cmp(I) >= 0 ? (C.isub(I), T.isub(k)) : (I.isub(C), k.isub(T))
                    }
                    return (ae = 0 === C.cmpn(1) ? T : k).cmpn(0) < 0 && ae.iadd(h), ae
                }, i.prototype.gcd = function(h) {
                    if (this.isZero()) return h.abs();
                    if (h.isZero()) return this.abs();
                    var C = this.clone(),
                        I = h.clone();
                    C.negative = 0, I.negative = 0;
                    for (var T = 0; C.isEven() && I.isEven(); T++) C.iushrn(1), I.iushrn(1);
                    for (;;) {
                        for (; C.isEven();) C.iushrn(1);
                        for (; I.isEven();) I.iushrn(1);
                        var k = C.cmp(I);
                        if (k < 0) {
                            var O = C;
                            C = I, I = O
                        } else if (0 === k || 0 === I.cmpn(1)) break;
                        C.isub(I)
                    }
                    return I.iushln(T)
                }, i.prototype.invm = function(h) {
                    return this.egcd(h).a.umod(h)
                }, i.prototype.isEven = function() {
                    return 0 == (1 & this.words[0])
                }, i.prototype.isOdd = function() {
                    return 1 == (1 & this.words[0])
                }, i.prototype.andln = function(h) {
                    return this.words[0] & h
                }, i.prototype.bincn = function(h) {
                    c("number" == typeof h);
                    var C = h % 26,
                        I = (h - C) / 26,
                        T = 1 << C;
                    if (this.length <= I) return this._expand(I + 1), this.words[I] |= T, this;
                    for (var k = T, O = I; 0 !== k && O < this.length; O++) {
                        var U = 0 | this.words[O];
                        k = (U += k) >>> 26, this.words[O] = U &= 67108863
                    }
                    return 0 !== k && (this.words[O] = k, this.length++), this
                }, i.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, i.prototype.cmpn = function(h) {
                    var I, C = h < 0;
                    if (0 !== this.negative && !C) return -1;
                    if (0 === this.negative && C) return 1;
                    if (this._strip(), this.length > 1) I = 1;
                    else {
                        C && (h = -h), c(h <= 67108863, "Number is too big");
                        var T = 0 | this.words[0];
                        I = T === h ? 0 : T < h ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -I : I
                }, i.prototype.cmp = function(h) {
                    if (0 !== this.negative && 0 === h.negative) return -1;
                    if (0 === this.negative && 0 !== h.negative) return 1;
                    var C = this.ucmp(h);
                    return 0 !== this.negative ? 0 | -C : C
                }, i.prototype.ucmp = function(h) {
                    if (this.length > h.length) return 1;
                    if (this.length < h.length) return -1;
                    for (var C = 0, I = this.length - 1; I >= 0; I--) {
                        var T = 0 | this.words[I],
                            k = 0 | h.words[I];
                        if (T !== k) {
                            T < k ? C = -1 : T > k && (C = 1);
                            break
                        }
                    }
                    return C
                }, i.prototype.gtn = function(h) {
                    return 1 === this.cmpn(h)
                }, i.prototype.gt = function(h) {
                    return 1 === this.cmp(h)
                }, i.prototype.gten = function(h) {
                    return this.cmpn(h) >= 0
                }, i.prototype.gte = function(h) {
                    return this.cmp(h) >= 0
                }, i.prototype.ltn = function(h) {
                    return -1 === this.cmpn(h)
                }, i.prototype.lt = function(h) {
                    return -1 === this.cmp(h)
                }, i.prototype.lten = function(h) {
                    return this.cmpn(h) <= 0
                }, i.prototype.lte = function(h) {
                    return this.cmp(h) <= 0
                }, i.prototype.eqn = function(h) {
                    return 0 === this.cmpn(h)
                }, i.prototype.eq = function(h) {
                    return 0 === this.cmp(h)
                }, i.red = function(h) {
                    return new le(h)
                }, i.prototype.toRed = function(h) {
                    return c(!this.red, "Already a number in reduction context"), c(0 === this.negative, "red works only with positives"), h.convertTo(this)._forceRed(h)
                }, i.prototype.fromRed = function() {
                    return c(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, i.prototype._forceRed = function(h) {
                    return this.red = h, this
                }, i.prototype.forceRed = function(h) {
                    return c(!this.red, "Already a number in reduction context"), this._forceRed(h)
                }, i.prototype.redAdd = function(h) {
                    return c(this.red, "redAdd works only with red numbers"), this.red.add(this, h)
                }, i.prototype.redIAdd = function(h) {
                    return c(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, h)
                }, i.prototype.redSub = function(h) {
                    return c(this.red, "redSub works only with red numbers"), this.red.sub(this, h)
                }, i.prototype.redISub = function(h) {
                    return c(this.red, "redISub works only with red numbers"), this.red.isub(this, h)
                }, i.prototype.redShl = function(h) {
                    return c(this.red, "redShl works only with red numbers"), this.red.shl(this, h)
                }, i.prototype.redMul = function(h) {
                    return c(this.red, "redMul works only with red numbers"), this.red._verify2(this, h), this.red.mul(this, h)
                }, i.prototype.redIMul = function(h) {
                    return c(this.red, "redMul works only with red numbers"), this.red._verify2(this, h), this.red.imul(this, h)
                }, i.prototype.redSqr = function() {
                    return c(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, i.prototype.redISqr = function() {
                    return c(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, i.prototype.redSqrt = function() {
                    return c(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, i.prototype.redInvm = function() {
                    return c(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, i.prototype.redNeg = function() {
                    return c(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, i.prototype.redPow = function(h) {
                    return c(this.red && !h.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, h)
                };
                var N = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function z(D, h) {
                    this.name = D, this.p = new i(h, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function W() {
                    z.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function K() {
                    z.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function ne() {
                    z.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function se() {
                    z.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function le(D) {
                    if ("string" == typeof D) {
                        var h = i._prime(D);
                        this.m = h.p, this.prime = h
                    } else c(D.gtn(1), "modulus must be greater than 1"), this.m = D, this.prime = null
                }

                function pe(D) {
                    le.call(this, D), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                z.prototype._tmp = function() {
                    var h = new i(null);
                    return h.words = new Array(Math.ceil(this.n / 13)), h
                }, z.prototype.ireduce = function(h) {
                    var I, C = h;
                    do {
                        this.split(C, this.tmp), I = (C = (C = this.imulK(C)).iadd(this.tmp)).bitLength()
                    } while (I > this.n);
                    var T = I < this.n ? -1 : C.ucmp(this.p);
                    return 0 === T ? (C.words[0] = 0, C.length = 1) : T > 0 ? C.isub(this.p) : void 0 !== C.strip ? C.strip() : C._strip(), C
                }, z.prototype.split = function(h, C) {
                    h.iushrn(this.n, 0, C)
                }, z.prototype.imulK = function(h) {
                    return h.imul(this.k)
                }, d(W, z), W.prototype.split = function(h, C) {
                    for (var I = 4194303, T = Math.min(h.length, 9), k = 0; k < T; k++) C.words[k] = h.words[k];
                    if (C.length = T, h.length <= 9) return h.words[0] = 0, void(h.length = 1);
                    var O = h.words[9];
                    for (C.words[C.length++] = O & I, k = 10; k < h.length; k++) {
                        var U = 0 | h.words[k];
                        h.words[k - 10] = (U & I) << 4 | O >>> 22, O = U
                    }
                    h.words[k - 10] = O >>>= 22, h.length -= 0 === O && h.length > 10 ? 10 : 9
                }, W.prototype.imulK = function(h) {
                    h.words[h.length] = 0, h.words[h.length + 1] = 0, h.length += 2;
                    for (var C = 0, I = 0; I < h.length; I++) {
                        var T = 0 | h.words[I];
                        h.words[I] = 67108863 & (C += 977 * T), C = 64 * T + (C / 67108864 | 0)
                    }
                    return 0 === h.words[h.length - 1] && (h.length--, 0 === h.words[h.length - 1] && h.length--), h
                }, d(K, z), d(ne, z), d(se, z), se.prototype.imulK = function(h) {
                    for (var C = 0, I = 0; I < h.length; I++) {
                        var T = 19 * (0 | h.words[I]) + C,
                            k = 67108863 & T;
                        T >>>= 26, h.words[I] = k, C = T
                    }
                    return 0 !== C && (h.words[h.length++] = C), h
                }, i._prime = function(h) {
                    if (N[h]) return N[h];
                    var C;
                    if ("k256" === h) C = new W;
                    else if ("p224" === h) C = new K;
                    else if ("p192" === h) C = new ne;
                    else {
                        if ("p25519" !== h) throw new Error("Unknown prime " + h);
                        C = new se
                    }
                    return N[h] = C, C
                }, le.prototype._verify1 = function(h) {
                    c(0 === h.negative, "red works only with positives"), c(h.red, "red works only with red numbers")
                }, le.prototype._verify2 = function(h, C) {
                    c(0 == (h.negative | C.negative), "red works only with positives"), c(h.red && h.red === C.red, "red works only with red numbers")
                }, le.prototype.imod = function(h) {
                    return this.prime ? this.prime.ireduce(h)._forceRed(this) : (l(h, h.umod(this.m)._forceRed(this)), h)
                }, le.prototype.neg = function(h) {
                    return h.isZero() ? h.clone() : this.m.sub(h)._forceRed(this)
                }, le.prototype.add = function(h, C) {
                    this._verify2(h, C);
                    var I = h.add(C);
                    return I.cmp(this.m) >= 0 && I.isub(this.m), I._forceRed(this)
                }, le.prototype.iadd = function(h, C) {
                    this._verify2(h, C);
                    var I = h.iadd(C);
                    return I.cmp(this.m) >= 0 && I.isub(this.m), I
                }, le.prototype.sub = function(h, C) {
                    this._verify2(h, C);
                    var I = h.sub(C);
                    return I.cmpn(0) < 0 && I.iadd(this.m), I._forceRed(this)
                }, le.prototype.isub = function(h, C) {
                    this._verify2(h, C);
                    var I = h.isub(C);
                    return I.cmpn(0) < 0 && I.iadd(this.m), I
                }, le.prototype.shl = function(h, C) {
                    return this._verify1(h), this.imod(h.ushln(C))
                }, le.prototype.imul = function(h, C) {
                    return this._verify2(h, C), this.imod(h.imul(C))
                }, le.prototype.mul = function(h, C) {
                    return this._verify2(h, C), this.imod(h.mul(C))
                }, le.prototype.isqr = function(h) {
                    return this.imul(h, h.clone())
                }, le.prototype.sqr = function(h) {
                    return this.mul(h, h)
                }, le.prototype.sqrt = function(h) {
                    if (h.isZero()) return h.clone();
                    var C = this.m.andln(3);
                    if (c(C % 2 == 1), 3 === C) {
                        var I = this.m.add(new i(1)).iushrn(2);
                        return this.pow(h, I)
                    }
                    for (var T = this.m.subn(1), k = 0; !T.isZero() && 0 === T.andln(1);) k++, T.iushrn(1);
                    c(!T.isZero());
                    var O = new i(1).toRed(this),
                        U = O.redNeg(),
                        P = this.m.subn(1).iushrn(1),
                        S = this.m.bitLength();
                    for (S = new i(2 * S * S).toRed(this); 0 !== this.pow(S, P).cmp(U);) S.redIAdd(U);
                    for (var j = this.pow(S, T), ae = this.pow(h, T.addn(1).iushrn(1)), oe = this.pow(h, T), ce = k; 0 !== oe.cmp(O);) {
                        for (var Y = oe, Q = 0; 0 !== Y.cmp(O); Q++) Y = Y.redSqr();
                        c(Q < ce);
                        var H = this.pow(j, new i(1).iushln(ce - Q - 1));
                        ae = ae.redMul(H), j = H.redSqr(), oe = oe.redMul(j), ce = Q
                    }
                    return ae
                }, le.prototype.invm = function(h) {
                    var C = h._invmp(this.m);
                    return 0 !== C.negative ? (C.negative = 0, this.imod(C).redNeg()) : this.imod(C)
                }, le.prototype.pow = function(h, C) {
                    if (C.isZero()) return new i(1).toRed(this);
                    if (0 === C.cmpn(1)) return h.clone();
                    var T = new Array(16);
                    T[0] = new i(1).toRed(this), T[1] = h;
                    for (var k = 2; k < T.length; k++) T[k] = this.mul(T[k - 1], h);
                    var O = T[0],
                        U = 0,
                        P = 0,
                        S = C.bitLength() % 26;
                    for (0 === S && (S = 26), k = C.length - 1; k >= 0; k--) {
                        for (var j = C.words[k], ae = S - 1; ae >= 0; ae--) {
                            var oe = j >> ae & 1;
                            O !== T[0] && (O = this.sqr(O)), 0 !== oe || 0 !== U ? (U <<= 1, U |= oe, (4 == ++P || 0 === k && 0 === ae) && (O = this.mul(O, T[U]), P = 0, U = 0)) : P = 0
                        }
                        S = 26
                    }
                    return O
                }, le.prototype.convertTo = function(h) {
                    var C = h.umod(this.m);
                    return C === h ? C.clone() : C
                }, le.prototype.convertFrom = function(h) {
                    var C = h.clone();
                    return C.red = null, C
                }, i.mont = function(h) {
                    return new pe(h)
                }, d(pe, le), pe.prototype.convertTo = function(h) {
                    return this.imod(h.ushln(this.shift))
                }, pe.prototype.convertFrom = function(h) {
                    var C = this.imod(h.mul(this.rinv));
                    return C.red = null, C
                }, pe.prototype.imul = function(h, C) {
                    if (h.isZero() || C.isZero()) return h.words[0] = 0, h.length = 1, h;
                    var I = h.imul(C),
                        T = I.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        k = I.isub(T).iushrn(this.shift),
                        O = k;
                    return k.cmp(this.m) >= 0 ? O = k.isub(this.m) : k.cmpn(0) < 0 && (O = k.iadd(this.m)), O._forceRed(this)
                }, pe.prototype.mul = function(h, C) {
                    if (h.isZero() || C.isZero()) return new i(0)._forceRed(this);
                    var I = h.mul(C),
                        T = I.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        k = I.isub(T).iushrn(this.shift),
                        O = k;
                    return k.cmp(this.m) >= 0 ? O = k.isub(this.m) : k.cmpn(0) < 0 && (O = k.iadd(this.m)), O._forceRed(this)
                }, pe.prototype.invm = function(h) {
                    return this.imod(h._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }($ = p.nmd($), this)
        },
        9007: ($, o, p) => {
            "use strict";
            const t = p(9919),
                y = p(2601),
                c = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            o.Buffer = e, o.SlowBuffer = function M(R) {
                return +R != R && (R = 0), e.alloc(+R)
            }, o.INSPECT_MAX_BYTES = 50;
            const d = 2147483647;

            function r(R) {
                if (R > d) throw new RangeError('The value "' + R + '" is invalid for option "size"');
                const f = new Uint8Array(R);
                return Object.setPrototypeOf(f, e.prototype), f
            }

            function e(R, f, b) {
                if ("number" == typeof R) {
                    if ("string" == typeof f) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return v(R)
                }
                return a(R, f, b)
            }

            function a(R, f, b) {
                if ("string" == typeof R) return function s(R, f) {
                    if (("string" != typeof f || "" === f) && (f = "utf8"), !e.isEncoding(f)) throw new TypeError("Unknown encoding: " + f);
                    const b = 0 | w(R, f);
                    let F = r(b);
                    const J = F.write(R, f);
                    return J !== b && (F = F.slice(0, J)), F
                }(R, f);
                if (ArrayBuffer.isView(R)) return function u(R) {
                    if (ge(R, Uint8Array)) {
                        const f = new Uint8Array(R);
                        return m(f.buffer, f.byteOffset, f.byteLength)
                    }
                    return n(R)
                }(R);
                if (null == R) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof R);
                if (ge(R, ArrayBuffer) || R && ge(R.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ge(R, SharedArrayBuffer) || R && ge(R.buffer, SharedArrayBuffer))) return m(R, f, b);
                if ("number" == typeof R) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const F = R.valueOf && R.valueOf();
                if (null != F && F !== R) return e.from(F, f, b);
                const J = function _(R) {
                    if (e.isBuffer(R)) {
                        const f = 0 | E(R.length),
                            b = r(f);
                        return 0 === b.length || R.copy(b, 0, 0, f), b
                    }
                    return void 0 !== R.length ? "number" != typeof R.length || me(R.length) ? r(0) : n(R) : "Buffer" === R.type && Array.isArray(R.data) ? n(R.data) : void 0
                }(R);
                if (J) return J;
                if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof R[Symbol.toPrimitive]) return e.from(R[Symbol.toPrimitive]("string"), f, b);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof R)
            }

            function g(R) {
                if ("number" != typeof R) throw new TypeError('"size" argument must be of type number');
                if (R < 0) throw new RangeError('The value "' + R + '" is invalid for option "size"')
            }

            function v(R) {
                return g(R), r(R < 0 ? 0 : 0 | E(R))
            }

            function n(R) {
                const f = R.length < 0 ? 0 : 0 | E(R.length),
                    b = r(f);
                for (let F = 0; F < f; F += 1) b[F] = 255 & R[F];
                return b
            }

            function m(R, f, b) {
                if (f < 0 || R.byteLength < f) throw new RangeError('"offset" is outside of buffer bounds');
                if (R.byteLength < f + (b || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let F;
                return F = void 0 === f && void 0 === b ? new Uint8Array(R) : void 0 === b ? new Uint8Array(R, f) : new Uint8Array(R, f, b), Object.setPrototypeOf(F, e.prototype), F
            }

            function E(R) {
                if (R >= d) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + d.toString(16) + " bytes");
                return 0 | R
            }

            function w(R, f) {
                if (e.isBuffer(R)) return R.length;
                if (ArrayBuffer.isView(R) || ge(R, ArrayBuffer)) return R.byteLength;
                if ("string" != typeof R) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof R);
                const b = R.length,
                    F = arguments.length > 2 && !0 === arguments[2];
                if (!F && 0 === b) return 0;
                let J = !1;
                for (;;) switch (f) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return b;
                    case "utf8":
                    case "utf-8":
                        return de(R).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * b;
                    case "hex":
                        return b >>> 1;
                    case "base64":
                        return we(R).length;
                    default:
                        if (J) return F ? -1 : de(R).length;
                        f = ("" + f).toLowerCase(), J = !0
                }
            }

            function A(R, f, b) {
                let F = !1;
                if ((void 0 === f || f < 0) && (f = 0), f > this.length || ((void 0 === b || b > this.length) && (b = this.length), b <= 0) || (b >>>= 0) <= (f >>>= 0)) return "";
                for (R || (R = "utf8");;) switch (R) {
                    case "hex":
                        return k(this, f, b);
                    case "utf8":
                    case "utf-8":
                        return D(this, f, b);
                    case "ascii":
                        return I(this, f, b);
                    case "latin1":
                    case "binary":
                        return T(this, f, b);
                    case "base64":
                        return pe(this, f, b);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return O(this, f, b);
                    default:
                        if (F) throw new TypeError("Unknown encoding: " + R);
                        R = (R + "").toLowerCase(), F = !0
                }
            }

            function x(R, f, b) {
                const F = R[f];
                R[f] = R[b], R[b] = F
            }

            function N(R, f, b, F, J) {
                if (0 === R.length) return -1;
                if ("string" == typeof b ? (F = b, b = 0) : b > 2147483647 ? b = 2147483647 : b < -2147483648 && (b = -2147483648), me(b = +b) && (b = J ? 0 : R.length - 1), b < 0 && (b = R.length + b), b >= R.length) {
                    if (J) return -1;
                    b = R.length - 1
                } else if (b < 0) {
                    if (!J) return -1;
                    b = 0
                }
                if ("string" == typeof f && (f = e.from(f, F)), e.isBuffer(f)) return 0 === f.length ? -1 : z(R, f, b, F, J);
                if ("number" == typeof f) return f &= 255, "function" == typeof Uint8Array.prototype.indexOf ? J ? Uint8Array.prototype.indexOf.call(R, f, b) : Uint8Array.prototype.lastIndexOf.call(R, f, b) : z(R, [f], b, F, J);
                throw new TypeError("val must be string, number or Buffer")
            }

            function z(R, f, b, F, J) {
                let ye, ee = 1,
                    te = R.length,
                    fe = f.length;
                if (void 0 !== F && ("ucs2" === (F = String(F).toLowerCase()) || "ucs-2" === F || "utf16le" === F || "utf-16le" === F)) {
                    if (R.length < 2 || f.length < 2) return -1;
                    ee = 2, te /= 2, fe /= 2, b /= 2
                }

                function _e(be, Ee) {
                    return 1 === ee ? be[Ee] : be.readUInt16BE(Ee * ee)
                }
                if (J) {
                    let be = -1;
                    for (ye = b; ye < te; ye++)
                        if (_e(R, ye) === _e(f, -1 === be ? 0 : ye - be)) {
                            if (-1 === be && (be = ye), ye - be + 1 === fe) return be * ee
                        } else -1 !== be && (ye -= ye - be), be = -1
                } else
                    for (b + fe > te && (b = te - fe), ye = b; ye >= 0; ye--) {
                        let be = !0;
                        for (let Ee = 0; Ee < fe; Ee++)
                            if (_e(R, ye + Ee) !== _e(f, Ee)) {
                                be = !1;
                                break
                            }
                        if (be) return ye
                    }
                return -1
            }

            function W(R, f, b, F) {
                b = Number(b) || 0;
                const J = R.length - b;
                F ? (F = Number(F)) > J && (F = J) : F = J;
                const ee = f.length;
                let te;
                for (F > ee / 2 && (F = ee / 2), te = 0; te < F; ++te) {
                    const fe = parseInt(f.substr(2 * te, 2), 16);
                    if (me(fe)) return te;
                    R[b + te] = fe
                }
                return te
            }

            function K(R, f, b, F) {
                return ie(de(f, R.length - b), R, b, F)
            }

            function ne(R, f, b, F) {
                return ie(function he(R) {
                    const f = [];
                    for (let b = 0; b < R.length; ++b) f.push(255 & R.charCodeAt(b));
                    return f
                }(f), R, b, F)
            }

            function se(R, f, b, F) {
                return ie(we(f), R, b, F)
            }

            function le(R, f, b, F) {
                return ie(function ue(R, f) {
                    let b, F, J;
                    const ee = [];
                    for (let te = 0; te < R.length && !((f -= 2) < 0); ++te) b = R.charCodeAt(te), F = b >> 8, J = b % 256, ee.push(J), ee.push(F);
                    return ee
                }(f, R.length - b), R, b, F)
            }

            function pe(R, f, b) {
                return t.fromByteArray(0 === f && b === R.length ? R : R.slice(f, b))
            }

            function D(R, f, b) {
                b = Math.min(R.length, b);
                const F = [];
                let J = f;
                for (; J < b;) {
                    const ee = R[J];
                    let te = null,
                        fe = ee > 239 ? 4 : ee > 223 ? 3 : ee > 191 ? 2 : 1;
                    if (J + fe <= b) {
                        let _e, ye, be, Ee;
                        switch (fe) {
                            case 1:
                                ee < 128 && (te = ee);
                                break;
                            case 2:
                                _e = R[J + 1], 128 == (192 & _e) && (Ee = (31 & ee) << 6 | 63 & _e, Ee > 127 && (te = Ee));
                                break;
                            case 3:
                                _e = R[J + 1], ye = R[J + 2], 128 == (192 & _e) && 128 == (192 & ye) && (Ee = (15 & ee) << 12 | (63 & _e) << 6 | 63 & ye, Ee > 2047 && (Ee < 55296 || Ee > 57343) && (te = Ee));
                                break;
                            case 4:
                                _e = R[J + 1], ye = R[J + 2], be = R[J + 3], 128 == (192 & _e) && 128 == (192 & ye) && 128 == (192 & be) && (Ee = (15 & ee) << 18 | (63 & _e) << 12 | (63 & ye) << 6 | 63 & be, Ee > 65535 && Ee < 1114112 && (te = Ee))
                        }
                    }
                    null === te ? (te = 65533, fe = 1) : te > 65535 && (te -= 65536, F.push(te >>> 10 & 1023 | 55296), te = 56320 | 1023 & te), F.push(te), J += fe
                }
                return function C(R) {
                    const f = R.length;
                    if (f <= h) return String.fromCharCode.apply(String, R);
                    let b = "",
                        F = 0;
                    for (; F < f;) b += String.fromCharCode.apply(String, R.slice(F, F += h));
                    return b
                }(F)
            }
            o.kMaxLength = d, !(e.TYPED_ARRAY_SUPPORT = function i() {
                try {
                    const R = new Uint8Array(1),
                        f = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(R, f), 42 === R.foo()
                } catch {
                    return !1
                }
            }()) && typeof console < "u" && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(e.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (e.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(e.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (e.isBuffer(this)) return this.byteOffset
                }
            }), e.poolSize = 8192, e.from = function(R, f, b) {
                return a(R, f, b)
            }, Object.setPrototypeOf(e.prototype, Uint8Array.prototype), Object.setPrototypeOf(e, Uint8Array), e.alloc = function(R, f, b) {
                return function l(R, f, b) {
                    return g(R), R <= 0 ? r(R) : void 0 !== f ? "string" == typeof b ? r(R).fill(f, b) : r(R).fill(f) : r(R)
                }(R, f, b)
            }, e.allocUnsafe = function(R) {
                return v(R)
            }, e.allocUnsafeSlow = function(R) {
                return v(R)
            }, e.isBuffer = function(f) {
                return null != f && !0 === f._isBuffer && f !== e.prototype
            }, e.compare = function(f, b) {
                if (ge(f, Uint8Array) && (f = e.from(f, f.offset, f.byteLength)), ge(b, Uint8Array) && (b = e.from(b, b.offset, b.byteLength)), !e.isBuffer(f) || !e.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (f === b) return 0;
                let F = f.length,
                    J = b.length;
                for (let ee = 0, te = Math.min(F, J); ee < te; ++ee)
                    if (f[ee] !== b[ee]) {
                        F = f[ee], J = b[ee];
                        break
                    }
                return F < J ? -1 : J < F ? 1 : 0
            }, e.isEncoding = function(f) {
                switch (String(f).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, e.concat = function(f, b) {
                if (!Array.isArray(f)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === f.length) return e.alloc(0);
                let F;
                if (void 0 === b)
                    for (b = 0, F = 0; F < f.length; ++F) b += f[F].length;
                const J = e.allocUnsafe(b);
                let ee = 0;
                for (F = 0; F < f.length; ++F) {
                    let te = f[F];
                    if (ge(te, Uint8Array)) ee + te.length > J.length ? (e.isBuffer(te) || (te = e.from(te)), te.copy(J, ee)) : Uint8Array.prototype.set.call(J, te, ee);
                    else {
                        if (!e.isBuffer(te)) throw new TypeError('"list" argument must be an Array of Buffers');
                        te.copy(J, ee)
                    }
                    ee += te.length
                }
                return J
            }, e.byteLength = w, e.prototype._isBuffer = !0, e.prototype.swap16 = function() {
                const f = this.length;
                if (f % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let b = 0; b < f; b += 2) x(this, b, b + 1);
                return this
            }, e.prototype.swap32 = function() {
                const f = this.length;
                if (f % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let b = 0; b < f; b += 4) x(this, b, b + 3), x(this, b + 1, b + 2);
                return this
            }, e.prototype.swap64 = function() {
                const f = this.length;
                if (f % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let b = 0; b < f; b += 8) x(this, b, b + 7), x(this, b + 1, b + 6), x(this, b + 2, b + 5), x(this, b + 3, b + 4);
                return this
            }, e.prototype.toLocaleString = e.prototype.toString = function() {
                const f = this.length;
                return 0 === f ? "" : 0 === arguments.length ? D(this, 0, f) : A.apply(this, arguments)
            }, e.prototype.equals = function(f) {
                if (!e.isBuffer(f)) throw new TypeError("Argument must be a Buffer");
                return this === f || 0 === e.compare(this, f)
            }, e.prototype.inspect = function() {
                let f = "";
                const b = o.INSPECT_MAX_BYTES;
                return f = this.toString("hex", 0, b).replace(/(.{2})/g, "$1 ").trim(), this.length > b && (f += " ... "), "<Buffer " + f + ">"
            }, c && (e.prototype[c] = e.prototype.inspect), e.prototype.compare = function(f, b, F, J, ee) {
                if (ge(f, Uint8Array) && (f = e.from(f, f.offset, f.byteLength)), !e.isBuffer(f)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f);
                if (void 0 === b && (b = 0), void 0 === F && (F = f ? f.length : 0), void 0 === J && (J = 0), void 0 === ee && (ee = this.length), b < 0 || F > f.length || J < 0 || ee > this.length) throw new RangeError("out of range index");
                if (J >= ee && b >= F) return 0;
                if (J >= ee) return -1;
                if (b >= F) return 1;
                if (this === f) return 0;
                let te = (ee >>>= 0) - (J >>>= 0),
                    fe = (F >>>= 0) - (b >>>= 0);
                const _e = Math.min(te, fe),
                    ye = this.slice(J, ee),
                    be = f.slice(b, F);
                for (let Ee = 0; Ee < _e; ++Ee)
                    if (ye[Ee] !== be[Ee]) {
                        te = ye[Ee], fe = be[Ee];
                        break
                    }
                return te < fe ? -1 : fe < te ? 1 : 0
            }, e.prototype.includes = function(f, b, F) {
                return -1 !== this.indexOf(f, b, F)
            }, e.prototype.indexOf = function(f, b, F) {
                return N(this, f, b, F, !0)
            }, e.prototype.lastIndexOf = function(f, b, F) {
                return N(this, f, b, F, !1)
            }, e.prototype.write = function(f, b, F, J) {
                if (void 0 === b) J = "utf8", F = this.length, b = 0;
                else if (void 0 === F && "string" == typeof b) J = b, F = this.length, b = 0;
                else {
                    if (!isFinite(b)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    b >>>= 0, isFinite(F) ? (F >>>= 0, void 0 === J && (J = "utf8")) : (J = F, F = void 0)
                }
                const ee = this.length - b;
                if ((void 0 === F || F > ee) && (F = ee), f.length > 0 && (F < 0 || b < 0) || b > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                J || (J = "utf8");
                let te = !1;
                for (;;) switch (J) {
                    case "hex":
                        return W(this, f, b, F);
                    case "utf8":
                    case "utf-8":
                        return K(this, f, b, F);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return ne(this, f, b, F);
                    case "base64":
                        return se(this, f, b, F);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return le(this, f, b, F);
                    default:
                        if (te) throw new TypeError("Unknown encoding: " + J);
                        J = ("" + J).toLowerCase(), te = !0
                }
            }, e.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            const h = 4096;

            function I(R, f, b) {
                let F = "";
                b = Math.min(R.length, b);
                for (let J = f; J < b; ++J) F += String.fromCharCode(127 & R[J]);
                return F
            }

            function T(R, f, b) {
                let F = "";
                b = Math.min(R.length, b);
                for (let J = f; J < b; ++J) F += String.fromCharCode(R[J]);
                return F
            }

            function k(R, f, b) {
                const F = R.length;
                (!f || f < 0) && (f = 0), (!b || b < 0 || b > F) && (b = F);
                let J = "";
                for (let ee = f; ee < b; ++ee) J += ve[R[ee]];
                return J
            }

            function O(R, f, b) {
                const F = R.slice(f, b);
                let J = "";
                for (let ee = 0; ee < F.length - 1; ee += 2) J += String.fromCharCode(F[ee] + 256 * F[ee + 1]);
                return J
            }

            function U(R, f, b) {
                if (R % 1 != 0 || R < 0) throw new RangeError("offset is not uint");
                if (R + f > b) throw new RangeError("Trying to access beyond buffer length")
            }

            function P(R, f, b, F, J, ee) {
                if (!e.isBuffer(R)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (f > J || f < ee) throw new RangeError('"value" argument is out of bounds');
                if (b + F > R.length) throw new RangeError("Index out of range")
            }

            function S(R, f, b, F, J) {
                X(f, F, J, R, b, 7);
                let ee = Number(f & BigInt(4294967295));
                R[b++] = ee, ee >>= 8, R[b++] = ee, ee >>= 8, R[b++] = ee, ee >>= 8, R[b++] = ee;
                let te = Number(f >> BigInt(32) & BigInt(4294967295));
                return R[b++] = te, te >>= 8, R[b++] = te, te >>= 8, R[b++] = te, te >>= 8, R[b++] = te, b
            }

            function j(R, f, b, F, J) {
                X(f, F, J, R, b, 7);
                let ee = Number(f & BigInt(4294967295));
                R[b + 7] = ee, ee >>= 8, R[b + 6] = ee, ee >>= 8, R[b + 5] = ee, ee >>= 8, R[b + 4] = ee;
                let te = Number(f >> BigInt(32) & BigInt(4294967295));
                return R[b + 3] = te, te >>= 8, R[b + 2] = te, te >>= 8, R[b + 1] = te, te >>= 8, R[b] = te, b + 8
            }

            function ae(R, f, b, F, J, ee) {
                if (b + F > R.length) throw new RangeError("Index out of range");
                if (b < 0) throw new RangeError("Index out of range")
            }

            function oe(R, f, b, F, J) {
                return f = +f, b >>>= 0, J || ae(R, 0, b, 4), y.write(R, f, b, F, 23, 4), b + 4
            }

            function ce(R, f, b, F, J) {
                return f = +f, b >>>= 0, J || ae(R, 0, b, 8), y.write(R, f, b, F, 52, 8), b + 8
            }
            e.prototype.slice = function(f, b) {
                const F = this.length;
                (f = ~~f) < 0 ? (f += F) < 0 && (f = 0) : f > F && (f = F), (b = void 0 === b ? F : ~~b) < 0 ? (b += F) < 0 && (b = 0) : b > F && (b = F), b < f && (b = f);
                const J = this.subarray(f, b);
                return Object.setPrototypeOf(J, e.prototype), J
            }, e.prototype.readUintLE = e.prototype.readUIntLE = function(f, b, F) {
                f >>>= 0, b >>>= 0, F || U(f, b, this.length);
                let J = this[f],
                    ee = 1,
                    te = 0;
                for (; ++te < b && (ee *= 256);) J += this[f + te] * ee;
                return J
            }, e.prototype.readUintBE = e.prototype.readUIntBE = function(f, b, F) {
                f >>>= 0, b >>>= 0, F || U(f, b, this.length);
                let J = this[f + --b],
                    ee = 1;
                for (; b > 0 && (ee *= 256);) J += this[f + --b] * ee;
                return J
            }, e.prototype.readUint8 = e.prototype.readUInt8 = function(f, b) {
                return f >>>= 0, b || U(f, 1, this.length), this[f]
            }, e.prototype.readUint16LE = e.prototype.readUInt16LE = function(f, b) {
                return f >>>= 0, b || U(f, 2, this.length), this[f] | this[f + 1] << 8
            }, e.prototype.readUint16BE = e.prototype.readUInt16BE = function(f, b) {
                return f >>>= 0, b || U(f, 2, this.length), this[f] << 8 | this[f + 1]
            }, e.prototype.readUint32LE = e.prototype.readUInt32LE = function(f, b) {
                return f >>>= 0, b || U(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + 16777216 * this[f + 3]
            }, e.prototype.readUint32BE = e.prototype.readUInt32BE = function(f, b) {
                return f >>>= 0, b || U(f, 4, this.length), 16777216 * this[f] + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3])
            }, e.prototype.readBigUInt64LE = G(function(f) {
                L(f >>>= 0, "offset");
                const b = this[f],
                    F = this[f + 7];
                (void 0 === b || void 0 === F) && B(f, this.length - 8);
                const J = b + 256 * this[++f] + 65536 * this[++f] + this[++f] * 2 ** 24,
                    ee = this[++f] + 256 * this[++f] + 65536 * this[++f] + F * 2 ** 24;
                return BigInt(J) + (BigInt(ee) << BigInt(32))
            }), e.prototype.readBigUInt64BE = G(function(f) {
                L(f >>>= 0, "offset");
                const b = this[f],
                    F = this[f + 7];
                (void 0 === b || void 0 === F) && B(f, this.length - 8);
                const J = b * 2 ** 24 + 65536 * this[++f] + 256 * this[++f] + this[++f],
                    ee = this[++f] * 2 ** 24 + 65536 * this[++f] + 256 * this[++f] + F;
                return (BigInt(J) << BigInt(32)) + BigInt(ee)
            }), e.prototype.readIntLE = function(f, b, F) {
                f >>>= 0, b >>>= 0, F || U(f, b, this.length);
                let J = this[f],
                    ee = 1,
                    te = 0;
                for (; ++te < b && (ee *= 256);) J += this[f + te] * ee;
                return ee *= 128, J >= ee && (J -= Math.pow(2, 8 * b)), J
            }, e.prototype.readIntBE = function(f, b, F) {
                f >>>= 0, b >>>= 0, F || U(f, b, this.length);
                let J = b,
                    ee = 1,
                    te = this[f + --J];
                for (; J > 0 && (ee *= 256);) te += this[f + --J] * ee;
                return ee *= 128, te >= ee && (te -= Math.pow(2, 8 * b)), te
            }, e.prototype.readInt8 = function(f, b) {
                return f >>>= 0, b || U(f, 1, this.length), 128 & this[f] ? -1 * (255 - this[f] + 1) : this[f]
            }, e.prototype.readInt16LE = function(f, b) {
                f >>>= 0, b || U(f, 2, this.length);
                const F = this[f] | this[f + 1] << 8;
                return 32768 & F ? 4294901760 | F : F
            }, e.prototype.readInt16BE = function(f, b) {
                f >>>= 0, b || U(f, 2, this.length);
                const F = this[f + 1] | this[f] << 8;
                return 32768 & F ? 4294901760 | F : F
            }, e.prototype.readInt32LE = function(f, b) {
                return f >>>= 0, b || U(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24
            }, e.prototype.readInt32BE = function(f, b) {
                return f >>>= 0, b || U(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]
            }, e.prototype.readBigInt64LE = G(function(f) {
                L(f >>>= 0, "offset");
                const b = this[f],
                    F = this[f + 7];
                return (void 0 === b || void 0 === F) && B(f, this.length - 8), (BigInt(this[f + 4] + 256 * this[f + 5] + 65536 * this[f + 6] + (F << 24)) << BigInt(32)) + BigInt(b + 256 * this[++f] + 65536 * this[++f] + this[++f] * 2 ** 24)
            }), e.prototype.readBigInt64BE = G(function(f) {
                L(f >>>= 0, "offset");
                const b = this[f],
                    F = this[f + 7];
                (void 0 === b || void 0 === F) && B(f, this.length - 8);
                const J = (b << 24) + 65536 * this[++f] + 256 * this[++f] + this[++f];
                return (BigInt(J) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + 65536 * this[++f] + 256 * this[++f] + F)
            }), e.prototype.readFloatLE = function(f, b) {
                return f >>>= 0, b || U(f, 4, this.length), y.read(this, f, !0, 23, 4)
            }, e.prototype.readFloatBE = function(f, b) {
                return f >>>= 0, b || U(f, 4, this.length), y.read(this, f, !1, 23, 4)
            }, e.prototype.readDoubleLE = function(f, b) {
                return f >>>= 0, b || U(f, 8, this.length), y.read(this, f, !0, 52, 8)
            }, e.prototype.readDoubleBE = function(f, b) {
                return f >>>= 0, b || U(f, 8, this.length), y.read(this, f, !1, 52, 8)
            }, e.prototype.writeUintLE = e.prototype.writeUIntLE = function(f, b, F, J) {
                f = +f, b >>>= 0, F >>>= 0, J || P(this, f, b, F, Math.pow(2, 8 * F) - 1, 0);
                let ee = 1,
                    te = 0;
                for (this[b] = 255 & f; ++te < F && (ee *= 256);) this[b + te] = f / ee & 255;
                return b + F
            }, e.prototype.writeUintBE = e.prototype.writeUIntBE = function(f, b, F, J) {
                f = +f, b >>>= 0, F >>>= 0, J || P(this, f, b, F, Math.pow(2, 8 * F) - 1, 0);
                let ee = F - 1,
                    te = 1;
                for (this[b + ee] = 255 & f; --ee >= 0 && (te *= 256);) this[b + ee] = f / te & 255;
                return b + F
            }, e.prototype.writeUint8 = e.prototype.writeUInt8 = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 1, 255, 0), this[b] = 255 & f, b + 1
            }, e.prototype.writeUint16LE = e.prototype.writeUInt16LE = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 2, 65535, 0), this[b] = 255 & f, this[b + 1] = f >>> 8, b + 2
            }, e.prototype.writeUint16BE = e.prototype.writeUInt16BE = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 2, 65535, 0), this[b] = f >>> 8, this[b + 1] = 255 & f, b + 2
            }, e.prototype.writeUint32LE = e.prototype.writeUInt32LE = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 4, 4294967295, 0), this[b + 3] = f >>> 24, this[b + 2] = f >>> 16, this[b + 1] = f >>> 8, this[b] = 255 & f, b + 4
            }, e.prototype.writeUint32BE = e.prototype.writeUInt32BE = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 4, 4294967295, 0), this[b] = f >>> 24, this[b + 1] = f >>> 16, this[b + 2] = f >>> 8, this[b + 3] = 255 & f, b + 4
            }, e.prototype.writeBigUInt64LE = G(function(f, b = 0) {
                return S(this, f, b, BigInt(0), BigInt("0xffffffffffffffff"))
            }), e.prototype.writeBigUInt64BE = G(function(f, b = 0) {
                return j(this, f, b, BigInt(0), BigInt("0xffffffffffffffff"))
            }), e.prototype.writeIntLE = function(f, b, F, J) {
                if (f = +f, b >>>= 0, !J) {
                    const _e = Math.pow(2, 8 * F - 1);
                    P(this, f, b, F, _e - 1, -_e)
                }
                let ee = 0,
                    te = 1,
                    fe = 0;
                for (this[b] = 255 & f; ++ee < F && (te *= 256);) f < 0 && 0 === fe && 0 !== this[b + ee - 1] && (fe = 1), this[b + ee] = (f / te >> 0) - fe & 255;
                return b + F
            }, e.prototype.writeIntBE = function(f, b, F, J) {
                if (f = +f, b >>>= 0, !J) {
                    const _e = Math.pow(2, 8 * F - 1);
                    P(this, f, b, F, _e - 1, -_e)
                }
                let ee = F - 1,
                    te = 1,
                    fe = 0;
                for (this[b + ee] = 255 & f; --ee >= 0 && (te *= 256);) f < 0 && 0 === fe && 0 !== this[b + ee + 1] && (fe = 1), this[b + ee] = (f / te >> 0) - fe & 255;
                return b + F
            }, e.prototype.writeInt8 = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[b] = 255 & f, b + 1
            }, e.prototype.writeInt16LE = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 2, 32767, -32768), this[b] = 255 & f, this[b + 1] = f >>> 8, b + 2
            }, e.prototype.writeInt16BE = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 2, 32767, -32768), this[b] = f >>> 8, this[b + 1] = 255 & f, b + 2
            }, e.prototype.writeInt32LE = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 4, 2147483647, -2147483648), this[b] = 255 & f, this[b + 1] = f >>> 8, this[b + 2] = f >>> 16, this[b + 3] = f >>> 24, b + 4
            }, e.prototype.writeInt32BE = function(f, b, F) {
                return f = +f, b >>>= 0, F || P(this, f, b, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[b] = f >>> 24, this[b + 1] = f >>> 16, this[b + 2] = f >>> 8, this[b + 3] = 255 & f, b + 4
            }, e.prototype.writeBigInt64LE = G(function(f, b = 0) {
                return S(this, f, b, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), e.prototype.writeBigInt64BE = G(function(f, b = 0) {
                return j(this, f, b, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), e.prototype.writeFloatLE = function(f, b, F) {
                return oe(this, f, b, !0, F)
            }, e.prototype.writeFloatBE = function(f, b, F) {
                return oe(this, f, b, !1, F)
            }, e.prototype.writeDoubleLE = function(f, b, F) {
                return ce(this, f, b, !0, F)
            }, e.prototype.writeDoubleBE = function(f, b, F) {
                return ce(this, f, b, !1, F)
            }, e.prototype.copy = function(f, b, F, J) {
                if (!e.isBuffer(f)) throw new TypeError("argument should be a Buffer");
                if (F || (F = 0), !J && 0 !== J && (J = this.length), b >= f.length && (b = f.length), b || (b = 0), J > 0 && J < F && (J = F), J === F || 0 === f.length || 0 === this.length) return 0;
                if (b < 0) throw new RangeError("targetStart out of bounds");
                if (F < 0 || F >= this.length) throw new RangeError("Index out of range");
                if (J < 0) throw new RangeError("sourceEnd out of bounds");
                J > this.length && (J = this.length), f.length - b < J - F && (J = f.length - b + F);
                const ee = J - F;
                return this === f && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(b, F, J) : Uint8Array.prototype.set.call(f, this.subarray(F, J), b), ee
            }, e.prototype.fill = function(f, b, F, J) {
                if ("string" == typeof f) {
                    if ("string" == typeof b ? (J = b, b = 0, F = this.length) : "string" == typeof F && (J = F, F = this.length), void 0 !== J && "string" != typeof J) throw new TypeError("encoding must be a string");
                    if ("string" == typeof J && !e.isEncoding(J)) throw new TypeError("Unknown encoding: " + J);
                    if (1 === f.length) {
                        const te = f.charCodeAt(0);
                        ("utf8" === J && te < 128 || "latin1" === J) && (f = te)
                    }
                } else "number" == typeof f ? f &= 255 : "boolean" == typeof f && (f = Number(f));
                if (b < 0 || this.length < b || this.length < F) throw new RangeError("Out of range index");
                if (F <= b) return this;
                let ee;
                if (b >>>= 0, F = void 0 === F ? this.length : F >>> 0, f || (f = 0), "number" == typeof f)
                    for (ee = b; ee < F; ++ee) this[ee] = f;
                else {
                    const te = e.isBuffer(f) ? f : e.from(f, J),
                        fe = te.length;
                    if (0 === fe) throw new TypeError('The value "' + f + '" is invalid for argument "value"');
                    for (ee = 0; ee < F - b; ++ee) this[ee + b] = te[ee % fe]
                }
                return this
            };
            const Y = {};

            function Q(R, f, b) {
                Y[R] = class extends b {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: f.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${R}]`, delete this.name
                    }
                    get code() {
                        return R
                    }
                    set code(J) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: J,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${R}]: ${this.message}`
                    }
                }
            }

            function H(R) {
                let f = "",
                    b = R.length;
                const F = "-" === R[0] ? 1 : 0;
                for (; b >= F + 4; b -= 3) f = `_${R.slice(b-3,b)}${f}`;
                return `${R.slice(0,b)}${f}`
            }

            function X(R, f, b, F, J, ee) {
                if (R > b || R < f) {
                    const te = "bigint" == typeof f ? "n" : "";
                    let fe;
                    throw fe = ee > 3 ? 0 === f || f === BigInt(0) ? `>= 0${te} and < 2${te} ** ${8*(ee+1)}${te}` : `>= -(2${te} ** ${8*(ee+1)-1}${te}) and < 2 ** ${8*(ee+1)-1}${te}` : `>= ${f}${te} and <= ${b}${te}`, new Y.ERR_OUT_OF_RANGE("value", fe, R)
                }! function V(R, f, b) {
                    L(f, "offset"), (void 0 === R[f] || void 0 === R[f + b]) && B(f, R.length - (b + 1))
                }(F, J, ee)
            }

            function L(R, f) {
                if ("number" != typeof R) throw new Y.ERR_INVALID_ARG_TYPE(f, "number", R)
            }

            function B(R, f, b) {
                throw Math.floor(R) !== R ? (L(R, b), new Y.ERR_OUT_OF_RANGE(b || "offset", "an integer", R)) : f < 0 ? new Y.ERR_BUFFER_OUT_OF_BOUNDS : new Y.ERR_OUT_OF_RANGE(b || "offset", `>= ${b?1:0} and <= ${f}`, R)
            }
            Q("ERR_BUFFER_OUT_OF_BOUNDS", function(R) {
                return R ? `${R} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), Q("ERR_INVALID_ARG_TYPE", function(R, f) {
                return `The "${R}" argument must be of type number. Received type ${typeof f}`
            }, TypeError), Q("ERR_OUT_OF_RANGE", function(R, f, b) {
                let F = `The value of "${R}" is out of range.`,
                    J = b;
                return Number.isInteger(b) && Math.abs(b) > 2 ** 32 ? J = H(String(b)) : "bigint" == typeof b && (J = String(b), (b > BigInt(2) ** BigInt(32) || b < -(BigInt(2) ** BigInt(32))) && (J = H(J)), J += "n"), F += ` It must be ${f}. Received ${J}`, F
            }, RangeError);
            const Z = /[^+/0-9A-Za-z-_]/g;

            function de(R, f) {
                let b;
                f = f || 1 / 0;
                const F = R.length;
                let J = null;
                const ee = [];
                for (let te = 0; te < F; ++te) {
                    if (b = R.charCodeAt(te), b > 55295 && b < 57344) {
                        if (!J) {
                            if (b > 56319) {
                                (f -= 3) > -1 && ee.push(239, 191, 189);
                                continue
                            }
                            if (te + 1 === F) {
                                (f -= 3) > -1 && ee.push(239, 191, 189);
                                continue
                            }
                            J = b;
                            continue
                        }
                        if (b < 56320) {
                            (f -= 3) > -1 && ee.push(239, 191, 189), J = b;
                            continue
                        }
                        b = 65536 + (J - 55296 << 10 | b - 56320)
                    } else J && (f -= 3) > -1 && ee.push(239, 191, 189);
                    if (J = null, b < 128) {
                        if ((f -= 1) < 0) break;
                        ee.push(b)
                    } else if (b < 2048) {
                        if ((f -= 2) < 0) break;
                        ee.push(b >> 6 | 192, 63 & b | 128)
                    } else if (b < 65536) {
                        if ((f -= 3) < 0) break;
                        ee.push(b >> 12 | 224, b >> 6 & 63 | 128, 63 & b | 128)
                    } else {
                        if (!(b < 1114112)) throw new Error("Invalid code point");
                        if ((f -= 4) < 0) break;
                        ee.push(b >> 18 | 240, b >> 12 & 63 | 128, b >> 6 & 63 | 128, 63 & b | 128)
                    }
                }
                return ee
            }

            function we(R) {
                return t.toByteArray(function re(R) {
                    if ((R = (R = R.split("=")[0]).trim().replace(Z, "")).length < 2) return "";
                    for (; R.length % 4 != 0;) R += "=";
                    return R
                }(R))
            }

            function ie(R, f, b, F) {
                let J;
                for (J = 0; J < F && !(J + b >= f.length || J >= R.length); ++J) f[J + b] = R[J];
                return J
            }

            function ge(R, f) {
                return R instanceof f || null != R && null != R.constructor && null != R.constructor.name && R.constructor.name === f.name
            }

            function me(R) {
                return R != R
            }
            const ve = function() {
                const R = "0123456789abcdef",
                    f = new Array(256);
                for (let b = 0; b < 16; ++b) {
                    const F = 16 * b;
                    for (let J = 0; J < 16; ++J) f[F + J] = R[b] + R[J]
                }
                return f
            }();

            function G(R) {
                return typeof BigInt > "u" ? q : R
            }

            function q() {
                throw new Error("BigInt not supported")
            }
        },
        6915: ($, o, p) => {
            "use strict";

            function t(d) {
                var i, r, e = "";
                if ("string" == typeof d || "number" == typeof d) e += d;
                else if ("object" == typeof d)
                    if (Array.isArray(d))
                        for (i = 0; i < d.length; i++) d[i] && (r = t(d[i])) && (e && (e += " "), e += r);
                    else
                        for (i in d) d[i] && (e && (e += " "), e += i);
                return e
            }

            function y() {
                for (var d, i, r = 0, e = ""; r < arguments.length;)(d = arguments[r++]) && (i = t(d)) && (e && (e += " "), e += i);
                return e
            }
            p.r(o), p.d(o, {
                clsx: () => y,
                default: () => c
            });
            const c = y
        },
        563: ($, o, p) => {
            o.formatArgs = function y(e) {
                if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + $.exports.humanize(this.diff), !this.useColors) return;
                const a = "color: " + this.color;
                e.splice(1, 0, a, "color: inherit");
                let g = 0,
                    l = 0;
                e[0].replace(/%[a-zA-Z%]/g, v => {
                    "%%" !== v && (g++, "%c" === v && (l = g))
                }), e.splice(l, 0, a)
            }, o.save = function c(e) {
                try {
                    e ? o.storage.setItem("debug", e) : o.storage.removeItem("debug")
                } catch {}
            }, o.load = function d() {
                let e;
                try {
                    e = o.storage.getItem("debug")
                } catch {}
                return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e
            }, o.useColors = function t() {
                if (typeof window < "u" && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                let e;
                return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, o.storage = function i() {
                try {
                    return localStorage
                } catch {}
            }(), o.destroy = (() => {
                let e = !1;
                return () => {
                    e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }
            })(), o.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], o.log = console.debug || console.log || (() => {}), $.exports = p(6018)(o);
            const {
                formatters: r
            } = $.exports;
            r.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (a) {
                    return "[UnexpectedJSONParseError]: " + a.message
                }
            }
        },
        6018: ($, o, p) => {
            $.exports = function t(y) {
                function d(s) {
                    let n, m, _, u = null;

                    function E(...M) {
                        if (!E.enabled) return;
                        const w = E,
                            A = Number(new Date);
                        w.diff = A - (n || A), w.prev = n, w.curr = A, n = A, M[0] = d.coerce(M[0]), "string" != typeof M[0] && M.unshift("%O");
                        let N = 0;
                        M[0] = M[0].replace(/%([a-zA-Z%])/g, (W, K) => {
                            if ("%%" === W) return "%";
                            N++;
                            const ne = d.formatters[K];
                            return "function" == typeof ne && (W = ne.call(w, M[N]), M.splice(N, 1), N--), W
                        }), d.formatArgs.call(w, M), (w.log || d.log).apply(w, M)
                    }
                    return E.namespace = s, E.useColors = d.useColors(), E.color = d.selectColor(s), E.extend = i, E.destroy = d.destroy, Object.defineProperty(E, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== u ? u : (m !== d.namespaces && (m = d.namespaces, _ = d.enabled(s)), _),
                        set: M => {
                            u = M
                        }
                    }), "function" == typeof d.init && d.init(E), E
                }

                function i(s, n) {
                    const u = d(this.namespace + (typeof n > "u" ? ":" : n) + s);
                    return u.log = this.log, u
                }

                function g(s) {
                    return s.toString().substring(2, s.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return d.debug = d, d.default = d, d.coerce = function l(s) {
                    return s instanceof Error ? s.stack || s.message : s
                }, d.disable = function e() {
                    const s = [...d.names.map(g), ...d.skips.map(g).map(n => "-" + n)].join(",");
                    return d.enable(""), s
                }, d.enable = function r(s) {
                    let n;
                    d.save(s), d.namespaces = s, d.names = [], d.skips = [];
                    const u = ("string" == typeof s ? s : "").split(/[\s,]+/),
                        m = u.length;
                    for (n = 0; n < m; n++) u[n] && ("-" === (s = u[n].replace(/\*/g, ".*?"))[0] ? d.skips.push(new RegExp("^" + s.slice(1) + "$")) : d.names.push(new RegExp("^" + s + "$")))
                }, d.enabled = function a(s) {
                    if ("*" === s[s.length - 1]) return !0;
                    let n, u;
                    for (n = 0, u = d.skips.length; n < u; n++)
                        if (d.skips[n].test(s)) return !1;
                    for (n = 0, u = d.names.length; n < u; n++)
                        if (d.names[n].test(s)) return !0;
                    return !1
                }, d.humanize = p(7253), d.destroy = function v() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(y).forEach(s => {
                    d[s] = y[s]
                }), d.names = [], d.skips = [], d.formatters = {}, d.selectColor = function c(s) {
                    let n = 0;
                    for (let u = 0; u < s.length; u++) n = (n << 5) - n + s.charCodeAt(u), n |= 0;
                    return d.colors[Math.abs(n) % d.colors.length]
                }, d.enable(d.load()), d
            }
        },
        7167: function($, o, p) {
            "use strict";
            var t = p(7156).default,
                y = this && this.__importDefault || function(g) {
                    return g && g.__esModule ? g : {
                        default: g
                    }
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.BaseBlockTracker = void 0;
            const c = y(p(2753)),
                i = (g, l) => g + l,
                r = ["sync", "latest"];

            function a(g) {
                return Number.parseInt(g, 16)
            }
            o.BaseBlockTracker = class e extends c.default {
                constructor(l) {
                    super(), this._blockResetDuration = l.blockResetDuration || 2e4, this._usePastBlocks = l.usePastBlocks || !1, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents()
                }
                destroy() {
                    var l = () => super.removeAllListeners,
                        v = this;
                    return t(function*() {
                        v._cancelBlockResetTimeout(), yield v._maybeEnd(), l().call(v)
                    })()
                }
                isRunning() {
                    return this._isRunning
                }
                getCurrentBlock() {
                    return this._currentBlock
                }
                getLatestBlock() {
                    var l = this;
                    return t(function*() {
                        return l._currentBlock ? l._currentBlock : yield new Promise(s => l.once("latest", s))
                    })()
                }
                removeAllListeners(l) {
                    return l ? super.removeAllListeners(l) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this
                }
                _setupInternalEvents() {
                    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener)
                }
                _onNewListener(l) {
                    r.includes(l) && this._maybeStart()
                }
                _onRemoveListener() {
                    this._getBlockTrackerEventCount() > 0 || this._maybeEnd()
                }
                _maybeStart() {
                    var l = this;
                    return t(function*() {
                        l._isRunning || (l._isRunning = !0, l._cancelBlockResetTimeout(), yield l._start(), l.emit("_started"))
                    })()
                }
                _maybeEnd() {
                    var l = this;
                    return t(function*() {
                        l._isRunning && (l._isRunning = !1, l._setupBlockResetTimeout(), yield l._end(), l.emit("_ended"))
                    })()
                }
                _getBlockTrackerEventCount() {
                    return r.map(l => this.listenerCount(l)).reduce(i)
                }
                _shouldUseNewBlock(l) {
                    const v = this._currentBlock;
                    if (!v) return !0;
                    const s = a(l),
                        n = a(v);
                    return this._usePastBlocks && s < n || s > n
                }
                _newPotentialLatest(l) {
                    this._shouldUseNewBlock(l) && this._setCurrentBlock(l)
                }
                _setCurrentBlock(l) {
                    const v = this._currentBlock;
                    this._currentBlock = l, this.emit("latest", l), this.emit("sync", {
                        oldBlock: v,
                        newBlock: l
                    })
                }
                _setupBlockResetTimeout() {
                    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref()
                }
                _cancelBlockResetTimeout() {
                    this._blockResetTimeout && clearTimeout(this._blockResetTimeout)
                }
                _resetCurrentBlock() {
                    this._currentBlock = null
                }
            }
        },
        6270: function($, o, p) {
            "use strict";
            var t = p(7156).default,
                y = this && this.__importDefault || function(s) {
                    return s && s.__esModule ? s : {
                        default: s
                    }
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.PollingBlockTracker = void 0;
            const c = y(p(519)),
                d = y(p(4107)),
                i = p(7167),
                r = p(7157),
                e = (0, r.createModuleLogger)(r.projectLogger, "polling-block-tracker"),
                a = (0, c.default)();

            function v(s, n) {
                return new Promise(u => {
                    const m = setTimeout(u, s);
                    m.unref && n && m.unref()
                })
            }
            o.PollingBlockTracker = class l extends i.BaseBlockTracker {
                constructor(n = {}) {
                    var u;
                    if (!n.provider) throw new Error("PollingBlockTracker - no provider specified.");
                    super(Object.assign(Object.assign({}, n), {
                        blockResetDuration: null !== (u = n.blockResetDuration) && void 0 !== u ? u : n.pollingInterval
                    })), this._provider = n.provider, this._pollingInterval = n.pollingInterval || 2e4, this._retryTimeout = n.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = void 0 === n.keepEventLoopActive || n.keepEventLoopActive, this._setSkipCacheFlag = n.setSkipCacheFlag || !1
                }
                checkForLatestBlock() {
                    var n = this;
                    return t(function*() {
                        return yield n._updateLatestBlock(), yield n.getLatestBlock()
                    })()
                }
                _start() {
                    var n = this;
                    return t(function*() {
                        n._synchronize()
                    })()
                }
                _end() {
                    return t(function*() {})()
                }
                _synchronize() {
                    var n = this;
                    return t(function*() {
                        for (var u; n._isRunning;) try {
                            yield n._updateLatestBlock();
                            const m = v(n._pollingInterval, !n._keepEventLoopActive);
                            n.emit("_waitingForNextIteration"), yield m
                        } catch (m) {
                            const _ = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${null!==(u=m.stack)&&void 0!==u?u:m}`);
                            try {
                                n.emit("error", _)
                            } catch {
                                console.error(_)
                            }
                            const E = v(n._retryTimeout, !n._keepEventLoopActive);
                            n.emit("_waitingForNextIteration"), yield E
                        }
                    })()
                }
                _updateLatestBlock() {
                    var n = this;
                    return t(function*() {
                        const u = yield n._fetchLatestBlock();
                        n._newPotentialLatest(u)
                    })()
                }
                _fetchLatestBlock() {
                    var n = this;
                    return t(function*() {
                        const u = {
                            jsonrpc: "2.0",
                            id: a(),
                            method: "eth_blockNumber",
                            params: []
                        };
                        n._setSkipCacheFlag && (u.skipCache = !0), e("Making request", u);
                        const m = yield(0, d.default)(_ => n._provider.sendAsync(u, _))();
                        if (e("Got response", m), m.error) throw new Error(`PollingBlockTracker - encountered error fetching block:\n${m.error.message}`);
                        return m.result
                    })()
                }
            }
        },
        2271: function($, o, p) {
            "use strict";
            var t = p(7156).default,
                y = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.SubscribeBlockTracker = void 0;
            const c = y(p(519)),
                d = p(7167),
                i = (0, c.default)();
            o.SubscribeBlockTracker = class r extends d.BaseBlockTracker {
                constructor(a = {}) {
                    if (!a.provider) throw new Error("SubscribeBlockTracker - no provider specified.");
                    super(a), this._provider = a.provider, this._subscriptionId = null
                }
                checkForLatestBlock() {
                    var a = this;
                    return t(function*() {
                        return yield a.getLatestBlock()
                    })()
                }
                _start() {
                    var a = this;
                    return t(function*() {
                        if (null == a._subscriptionId) try {
                            const g = yield a._call("eth_blockNumber");
                            a._subscriptionId = yield a._call("eth_subscribe", "newHeads"), a._provider.on("data", a._handleSubData.bind(a)), a._newPotentialLatest(g)
                        } catch (g) {
                            a.emit("error", g)
                        }
                    })()
                }
                _end() {
                    var a = this;
                    return t(function*() {
                        if (null != a._subscriptionId) try {
                            yield a._call("eth_unsubscribe", a._subscriptionId), a._subscriptionId = null
                        } catch (g) {
                            a.emit("error", g)
                        }
                    })()
                }
                _call(a, ...g) {
                    return new Promise((l, v) => {
                        this._provider.sendAsync({
                            id: i(),
                            method: a,
                            params: g,
                            jsonrpc: "2.0"
                        }, (s, n) => {
                            s ? v(s) : l(n.result)
                        })
                    })
                }
                _handleSubData(a, g) {
                    var l;
                    "eth_subscription" === g.method && (null === (l = g.params) || void 0 === l ? void 0 : l.subscription) === this._subscriptionId && this._newPotentialLatest(g.params.result.number)
                }
            }
        },
        1496: function($, o, p) {
            "use strict";
            var t = this && this.__createBinding || (Object.create ? function(c, d, i, r) {
                    void 0 === r && (r = i), Object.defineProperty(c, r, {
                        enumerable: !0,
                        get: function() {
                            return d[i]
                        }
                    })
                } : function(c, d, i, r) {
                    void 0 === r && (r = i), c[r] = d[i]
                }),
                y = this && this.__exportStar || function(c, d) {
                    for (var i in c) "default" !== i && !Object.prototype.hasOwnProperty.call(d, i) && t(d, c, i)
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), y(p(6270), o), y(p(2271), o)
        },
        7157: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.createModuleLogger = o.projectLogger = void 0;
            const t = p(7184);
            Object.defineProperty(o, "createModuleLogger", {
                enumerable: !0,
                get: function() {
                    return t.createModuleLogger
                }
            }), o.projectLogger = (0, t.createProjectLogger)("eth-block-tracker")
        },
        4224: ($, o, p) => {
            var t = p(7156).default;
            const y = p(40);
            $.exports = class c extends y {
                constructor() {
                    super(), this.allResults = []
                }
                update() {
                    return t(function*() {
                        throw new Error("BaseFilterWithHistory - no update method specified")
                    })()
                }
                addResults(i) {
                    this.allResults = this.allResults.concat(i), super.addResults(i)
                }
                addInitialResults(i) {
                    this.allResults = this.allResults.concat(i), super.addInitialResults(i)
                }
                getAllResults() {
                    return this.allResults
                }
            }
        },
        40: ($, o, p) => {
            var t = p(7156).default;
            const y = p(2753).default;
            $.exports = class c extends y {
                constructor() {
                    super(), this.updates = []
                }
                initialize() {
                    return t(function*() {})()
                }
                update() {
                    return t(function*() {
                        throw new Error("BaseFilter - no update method specified")
                    })()
                }
                addResults(i) {
                    this.updates = this.updates.concat(i), i.forEach(r => this.emit("update", r))
                }
                addInitialResults(i) {}
                getChangesAndClear() {
                    const i = this.updates;
                    return this.updates = [], i
                }
            }
        },
        880: ($, o, p) => {
            var t = p(7156).default;
            const y = p(40),
                c = p(2341),
                {
                    incrementHexInt: d
                } = p(1086);
            $.exports = class i extends y {
                constructor({
                    provider: e
                }) {
                    super(), this.type = "block", this.provider = e
                }
                update({
                    oldBlock: e,
                    newBlock: a
                }) {
                    var g = this;
                    return t(function*() {
                        const l = a,
                            v = d(e),
                            n = (yield c({
                                provider: g.provider,
                                fromBlock: v,
                                toBlock: l
                            })).map(u => u.hash);
                        g.addResults(n)
                    })()
                }
            }
        },
        2341: ($, o, p) => {
            var t = p(7156).default;

            function c() {
                return c = t(function*({
                    provider: l,
                    fromBlock: v,
                    toBlock: s
                }) {
                    v || (v = s);
                    const n = d(v),
                        m = d(s) - n + 1,
                        _ = Array(m).fill().map((M, w) => n + w).map(r);
                    let E = yield Promise.all(_.map(M => function a(l, v, s) {
                        return g.apply(this, arguments)
                    }(l, "eth_getBlockByNumber", [M, !1])));
                    return E = E.filter(M => null !== M), E
                }), c.apply(this, arguments)
            }

            function d(l) {
                return null == l ? l : Number.parseInt(l, 16)
            }

            function r(l) {
                return null == l ? l : "0x" + l.toString(16)
            }

            function e(l, v) {
                return new Promise((s, n) => {
                    l.sendAsync(v, (u, m) => {
                        u ? n(u) : m.error ? n(m.error) : m.result ? s(m.result) : n(new Error("Result was empty"))
                    })
                })
            }

            function g() {
                return (g = t(function*(l, v, s) {
                    for (let n = 0; n < 3; n++) try {
                        return yield e(l, {
                            id: 1,
                            jsonrpc: "2.0",
                            method: v,
                            params: s
                        })
                    } catch (u) {
                        console.error(`provider.sendAsync failed: ${u.stack||u.message||u}`)
                    }
                    return null
                })).apply(this, arguments)
            }
            $.exports = function y(l) {
                return c.apply(this, arguments)
            }
        },
        1086: $ => {
            function t(g) {
                return g.sort((l, v) => "latest" === l || "earliest" === v ? 1 : "latest" === v || "earliest" === l ? -1 : d(l) - d(v))
            }

            function d(g) {
                return null == g ? g : Number.parseInt(g, 16)
            }

            function r(g) {
                if (null == g) return g;
                let l = g.toString(16);
                return l.length % 2 && (l = "0" + l), "0x" + l
            }

            function a() {
                return Math.floor(16 * Math.random()).toString(16)
            }
            $.exports = {
                minBlockRef: function o(...g) {
                    return t(g)[0]
                },
                maxBlockRef: function p(...g) {
                    const l = t(g);
                    return l[l.length - 1]
                },
                sortBlockRefs: t,
                bnToHex: function y(g) {
                    return "0x" + g.toString(16)
                },
                blockRefIsNumber: function c(g) {
                    return g && !["earliest", "latest", "pending"].includes(g)
                },
                hexToInt: d,
                incrementHexInt: function i(g) {
                    return null == g ? g : r(d(g) + 1)
                },
                intToHex: r,
                unsafeRandomBytes: function e(g) {
                    let l = "0x";
                    for (let v = 0; v < g; v++) l += a(), l += a();
                    return l
                }
            }
        },
        6255: ($, o, p) => {
            var t = p(7156).default;
            const y = p(3290).WU,
                {
                    createAsyncMiddleware: c,
                    createScaffoldMiddleware: d
                } = p(9244),
                i = p(4969),
                r = p(880),
                e = p(5785),
                {
                    intToHex: a,
                    hexToInt: g
                } = p(1086);

            function v(m) {
                return s(t(function*(..._) {
                    const E = yield m(..._);
                    return a(E.id)
                }))
            }

            function s(m) {
                return c(function() {
                    var _ = t(function*(E, M) {
                        const w = yield m.apply(null, E.params);
                        M.result = w
                    });
                    return function(E, M) {
                        return _.apply(this, arguments)
                    }
                }())
            }

            function u(m, _) {
                const E = [];
                for (let M in m) E.push(m[M]);
                return E
            }
            $.exports = function l({
                blockTracker: m,
                provider: _
            }) {
                let E = 0,
                    M = {};
                const w = new y,
                    A = function n({
                        mutex: m
                    }) {
                        return _ => function() {
                            var E = t(function*(M, w, A, x) {
                                (yield m.acquire())(), _(M, w, A, x)
                            });
                            return function(M, w, A, x) {
                                return E.apply(this, arguments)
                            }
                        }()
                    }({
                        mutex: w
                    }),
                    x = d({
                        eth_newFilter: A(v(z)),
                        eth_newBlockFilter: A(v(K)),
                        eth_newPendingTransactionFilter: A(v(se)),
                        eth_uninstallFilter: A(s(I)),
                        eth_getFilterChanges: A(s(pe)),
                        eth_getFilterLogs: A(s(h))
                    }),
                    N = function() {
                        var oe = t(function*({
                            oldBlock: ce,
                            newBlock: Y
                        }) {
                            if (0 === M.length) return;
                            const Q = yield w.acquire();
                            try {
                                yield Promise.all(u(M).map(function() {
                                    var H = t(function*(V) {
                                        try {
                                            yield V.update({
                                                oldBlock: ce,
                                                newBlock: Y
                                            })
                                        } catch (X) {
                                            console.error(X)
                                        }
                                    });
                                    return function(V) {
                                        return H.apply(this, arguments)
                                    }
                                }()))
                            } catch (H) {
                                console.error(H)
                            }
                            Q()
                        });
                        return function(Y) {
                            return oe.apply(this, arguments)
                        }
                    }();
                return x.newLogFilter = z, x.newBlockFilter = K, x.newPendingTransactionFilter = se, x.uninstallFilter = I, x.getFilterChanges = pe, x.getFilterLogs = h, x.destroy = () => {
                    ! function S() {
                        j.apply(this, arguments)
                    }()
                }, x;

                function z(oe) {
                    return W.apply(this, arguments)
                }

                function W() {
                    return (W = t(function*(oe) {
                        const ce = new i({
                            provider: _,
                            params: oe
                        });
                        return yield k(ce), ce
                    })).apply(this, arguments)
                }

                function K() {
                    return ne.apply(this, arguments)
                }

                function ne() {
                    return (ne = t(function*() {
                        const oe = new r({
                            provider: _
                        });
                        return yield k(oe), oe
                    })).apply(this, arguments)
                }

                function se() {
                    return le.apply(this, arguments)
                }

                function le() {
                    return (le = t(function*() {
                        const oe = new e({
                            provider: _
                        });
                        return yield k(oe), oe
                    })).apply(this, arguments)
                }

                function pe(oe) {
                    return D.apply(this, arguments)
                }

                function D() {
                    return (D = t(function*(oe) {
                        const ce = g(oe),
                            Y = M[ce];
                        if (!Y) throw new Error(`No filter for index "${ce}"`);
                        return Y.getChangesAndClear()
                    })).apply(this, arguments)
                }

                function h(oe) {
                    return C.apply(this, arguments)
                }

                function C() {
                    return (C = t(function*(oe) {
                        const ce = g(oe),
                            Y = M[ce];
                        if (!Y) throw new Error(`No filter for index "${ce}"`);
                        let Q = [];
                        return "log" === Y.type && (Q = Y.getAllResults()), Q
                    })).apply(this, arguments)
                }

                function I(oe) {
                    return T.apply(this, arguments)
                }

                function T() {
                    return T = t(function*(oe) {
                        const ce = g(oe),
                            Q = !!M[ce];
                        return Q && (yield function U(oe) {
                            return P.apply(this, arguments)
                        }(ce)), Q
                    }), T.apply(this, arguments)
                }

                function k(oe) {
                    return O.apply(this, arguments)
                }

                function O() {
                    return (O = t(function*(oe) {
                        const ce = u(M).length,
                            Y = yield m.getLatestBlock();
                        return yield oe.initialize({
                            currentBlock: Y
                        }), E++, M[E] = oe, oe.id = E, oe.idHex = a(E), ae({
                            prevFilterCount: ce,
                            newFilterCount: u(M).length
                        }), E
                    })).apply(this, arguments)
                }

                function P() {
                    return (P = t(function*(oe) {
                        const ce = u(M).length;
                        delete M[oe], ae({
                            prevFilterCount: ce,
                            newFilterCount: u(M).length
                        })
                    })).apply(this, arguments)
                }

                function j() {
                    return (j = t(function*() {
                        const oe = u(M).length;
                        M = {}, ae({
                            prevFilterCount: oe,
                            newFilterCount: 0
                        })
                    })).apply(this, arguments)
                }

                function ae({
                    prevFilterCount: oe,
                    newFilterCount: ce
                }) {
                    0 === oe && ce > 0 ? m.on("sync", N) : oe > 0 && 0 === ce && m.removeListener("sync", N)
                }
            }
        },
        4969: ($, o, p) => {
            var t = p(7156).default;
            const y = p(4431),
                c = p(9998),
                d = p(4224),
                {
                    hexToInt: r,
                    incrementHexInt: e,
                    minBlockRef: a,
                    blockRefIsNumber: g
                } = p(1086);
            $.exports = class l extends d {
                constructor({
                    provider: s,
                    params: n
                }) {
                    super(), this.type = "log", this.ethQuery = new y(s), this.params = Object.assign({
                        fromBlock: "latest",
                        toBlock: "latest",
                        address: void 0,
                        topics: []
                    }, n), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map(u => u.toLowerCase()))
                }
                initialize({
                    currentBlock: s
                }) {
                    var n = this;
                    return t(function*() {
                        let u = n.params.fromBlock;
                        ["latest", "pending"].includes(u) && (u = s), "earliest" === u && (u = "0x0"), n.params.fromBlock = u;
                        const m = a(n.params.toBlock, s),
                            _ = Object.assign({}, n.params, {
                                toBlock: m
                            }),
                            E = yield n._fetchLogs(_);
                        n.addInitialResults(E)
                    })()
                }
                update({
                    oldBlock: s,
                    newBlock: n
                }) {
                    var u = this;
                    return t(function*() {
                        const m = n;
                        let _;
                        _ = s ? e(s) : n;
                        const E = Object.assign({}, u.params, {
                                fromBlock: _,
                                toBlock: m
                            }),
                            w = (yield u._fetchLogs(E)).filter(A => u.matchLog(A));
                        u.addResults(w)
                    })()
                }
                _fetchLogs(s) {
                    var n = this;
                    return t(function*() {
                        return yield c(m => n.ethQuery.getLogs(s, m))()
                    })()
                }
                matchLog(s) {
                    if (r(this.params.fromBlock) >= r(s.blockNumber) || g(this.params.toBlock) && r(this.params.toBlock) <= r(s.blockNumber)) return !1;
                    const n = s.address && s.address.toLowerCase();
                    return !(this.params.address && n && !this.params.address.includes(n)) && this.params.topics.every((m, _) => {
                        let E = s.topics[_];
                        if (!E) return !1;
                        E = E.toLowerCase();
                        let M = Array.isArray(m) ? m : [m];
                        return !!M.includes(null) || (M = M.map(x => x.toLowerCase()), M.includes(E))
                    })
                }
            }
        },
        9998: $ => {
            "use strict";
            const o = (t, y, c, d) => function(...i) {
                    return new(0, y.promiseModule)((e, a) => {
                        i.push(y.multiArgs ? (...l) => {
                            y.errorFirst ? l[0] ? a(l) : (l.shift(), e(l)) : e(l)
                        } : y.errorFirst ? (l, v) => {
                            l ? a(l) : e(v)
                        } : e), Reflect.apply(t, this === c ? d : this, i)
                    })
                },
                p = new WeakMap;
            $.exports = (t, y) => {
                y = {
                    exclude: [/.+(?:Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise,
                    ...y
                };
                const c = typeof t;
                if (null === t || "object" !== c && "function" !== c) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null===t?"null":c}\``);
                const i = new WeakMap,
                    r = new Proxy(t, {
                        apply(e, a, g) {
                            const l = i.get(e);
                            if (l) return Reflect.apply(l, a, g);
                            const v = y.excludeMain ? e : o(e, y, r, e);
                            return i.set(e, v), Reflect.apply(v, a, g)
                        },
                        get(e, a) {
                            const g = e[a];
                            if (!((e, a) => {
                                    let g = p.get(e);
                                    if (g || (g = {}, p.set(e, g)), a in g) return g[a];
                                    const l = m => "string" == typeof m || "symbol" == typeof a ? a === m : m.test(a),
                                        v = Reflect.getOwnPropertyDescriptor(e, a),
                                        s = void 0 === v || v.writable || v.configurable,
                                        u = (y.include ? y.include.some(l) : !y.exclude.some(l)) && s;
                                    return g[a] = u, u
                                })(e, a) || g === Function.prototype[a]) return g;
                            const l = i.get(g);
                            if (l) return l;
                            if ("function" == typeof g) {
                                const v = o(g, y, r, e);
                                return i.set(g, v), v
                            }
                            return g
                        }
                    });
                return r
            }
        },
        4035: ($, o, p) => {
            var t = p(7156).default;
            const y = p(2753).default,
                {
                    createAsyncMiddleware: c,
                    createScaffoldMiddleware: d
                } = p(9244),
                i = p(6255),
                {
                    unsafeRandomBytes: r,
                    incrementHexInt: e
                } = p(1086),
                a = p(2341);

            function l(v) {
                return null == v ? null : {
                    hash: v.hash,
                    parentHash: v.parentHash,
                    sha3Uncles: v.sha3Uncles,
                    miner: v.miner,
                    stateRoot: v.stateRoot,
                    transactionsRoot: v.transactionsRoot,
                    receiptsRoot: v.receiptsRoot,
                    logsBloom: v.logsBloom,
                    difficulty: v.difficulty,
                    number: v.number,
                    gasLimit: v.gasLimit,
                    gasUsed: v.gasUsed,
                    nonce: v.nonce,
                    mixHash: v.mixHash,
                    timestamp: v.timestamp,
                    extraData: v.extraData
                }
            }
            $.exports = function g({
                blockTracker: v,
                provider: s
            }) {
                const n = {},
                    u = i({
                        blockTracker: v,
                        provider: s
                    });
                let m = !1;
                const _ = new y,
                    E = d({
                        eth_subscribe: c(function M(W, K) {
                            return w.apply(this, arguments)
                        }),
                        eth_unsubscribe: c(function A(W, K) {
                            return x.apply(this, arguments)
                        })
                    });
                return E.destroy = function z() {
                    _.removeAllListeners();
                    for (const W in n) n[W].destroy(), delete n[W];
                    m = !0
                }, {
                    events: _,
                    middleware: E
                };

                function w() {
                    return w = t(function*(W, K) {
                        if (m) throw new Error("SubscriptionManager - attempting to use after destroying");
                        const ne = W.params[0],
                            se = r(16);
                        let le;
                        switch (ne) {
                            case "newHeads":
                                le = function pe({
                                    subId: h
                                }) {
                                    const C = {
                                        type: ne,
                                        destroy: (I = t(function*() {
                                            v.removeListener("sync", C.update)
                                        }), function() {
                                            return I.apply(this, arguments)
                                        }),
                                        update: function() {
                                            var I = t(function*({
                                                oldBlock: T,
                                                newBlock: k
                                            }) {
                                                const O = k,
                                                    U = e(T);
                                                (yield a({
                                                    provider: s,
                                                    fromBlock: U,
                                                    toBlock: O
                                                })).map(l).filter(j => null !== j).forEach(j => {
                                                    N(h, j)
                                                })
                                            });
                                            return function(k) {
                                                return I.apply(this, arguments)
                                            }
                                        }()
                                    };
                                    var I;
                                    return v.on("sync", C.update), C
                                }({
                                    subId: se
                                });
                                break;
                            case "logs":
                                const h = W.params[1];
                                le = function D({
                                    subId: h,
                                    filter: C
                                }) {
                                    return C.on("update", T => N(h, T)), {
                                        type: ne,
                                        destroy: (T = t(function*() {
                                            return yield u.uninstallFilter(C.idHex)
                                        }), function() {
                                            return T.apply(this, arguments)
                                        })
                                    };
                                    var T
                                }({
                                    subId: se,
                                    filter: yield u.newLogFilter(h)
                                });
                                break;
                            default:
                                throw new Error(`SubscriptionManager - unsupported subscription type "${ne}"`)
                        }
                        return n[se] = le, void(K.result = se)
                    }), w.apply(this, arguments)
                }

                function x() {
                    return (x = t(function*(W, K) {
                        if (m) throw new Error("SubscriptionManager - attempting to use after destroying");
                        const ne = W.params[0],
                            se = n[ne];
                        se ? (delete n[ne], yield se.destroy(), K.result = !0) : K.result = !1
                    })).apply(this, arguments)
                }

                function N(W, K) {
                    _.emit("notification", {
                        jsonrpc: "2.0",
                        method: "eth_subscription",
                        params: {
                            subscription: W,
                            result: K
                        }
                    })
                }
            }
        },
        5785: ($, o, p) => {
            var t = p(7156).default;
            const y = p(40),
                c = p(2341),
                {
                    incrementHexInt: d
                } = p(1086);
            $.exports = class i extends y {
                constructor({
                    provider: e
                }) {
                    super(), this.type = "tx", this.provider = e
                }
                update({
                    oldBlock: e
                }) {
                    var a = this;
                    return t(function*() {
                        const g = e,
                            l = d(e),
                            v = yield c({
                                provider: a.provider,
                                fromBlock: l,
                                toBlock: g
                            }), s = [];
                        for (const n of v) s.push(...n.transactions);
                        a.addResults(s)
                    })()
                }
            }
        },
        4431: ($, o, p) => {
            const t = p(498),
                y = p(519)();

            function c(e) {
                this.currentProvider = e
            }

            function d(e) {
                return function() {
                    var g = [].slice.call(arguments),
                        l = g.pop();
                    this.sendAsync({
                        method: e,
                        params: g
                    }, l)
                }
            }

            function i(e, a) {
                return function() {
                    var l = [].slice.call(arguments),
                        v = l.pop();
                    l.length < e && l.push("latest"), this.sendAsync({
                        method: a,
                        params: l
                    }, v)
                }
            }
            $.exports = c, c.prototype.getBalance = i(2, "eth_getBalance"), c.prototype.getCode = i(2, "eth_getCode"), c.prototype.getTransactionCount = i(2, "eth_getTransactionCount"), c.prototype.getStorageAt = i(3, "eth_getStorageAt"), c.prototype.call = i(2, "eth_call"), c.prototype.protocolVersion = d("eth_protocolVersion"), c.prototype.syncing = d("eth_syncing"), c.prototype.coinbase = d("eth_coinbase"), c.prototype.mining = d("eth_mining"), c.prototype.hashrate = d("eth_hashrate"), c.prototype.gasPrice = d("eth_gasPrice"), c.prototype.accounts = d("eth_accounts"), c.prototype.blockNumber = d("eth_blockNumber"), c.prototype.getBlockTransactionCountByHash = d("eth_getBlockTransactionCountByHash"), c.prototype.getBlockTransactionCountByNumber = d("eth_getBlockTransactionCountByNumber"), c.prototype.getUncleCountByBlockHash = d("eth_getUncleCountByBlockHash"), c.prototype.getUncleCountByBlockNumber = d("eth_getUncleCountByBlockNumber"), c.prototype.sign = d("eth_sign"), c.prototype.sendTransaction = d("eth_sendTransaction"), c.prototype.sendRawTransaction = d("eth_sendRawTransaction"), c.prototype.estimateGas = d("eth_estimateGas"), c.prototype.getBlockByHash = d("eth_getBlockByHash"), c.prototype.getBlockByNumber = d("eth_getBlockByNumber"), c.prototype.getTransactionByHash = d("eth_getTransactionByHash"), c.prototype.getTransactionByBlockHashAndIndex = d("eth_getTransactionByBlockHashAndIndex"), c.prototype.getTransactionByBlockNumberAndIndex = d("eth_getTransactionByBlockNumberAndIndex"), c.prototype.getTransactionReceipt = d("eth_getTransactionReceipt"), c.prototype.getUncleByBlockHashAndIndex = d("eth_getUncleByBlockHashAndIndex"), c.prototype.getUncleByBlockNumberAndIndex = d("eth_getUncleByBlockNumberAndIndex"), c.prototype.getCompilers = d("eth_getCompilers"), c.prototype.compileLLL = d("eth_compileLLL"), c.prototype.compileSolidity = d("eth_compileSolidity"), c.prototype.compileSerpent = d("eth_compileSerpent"), c.prototype.newFilter = d("eth_newFilter"), c.prototype.newBlockFilter = d("eth_newBlockFilter"), c.prototype.newPendingTransactionFilter = d("eth_newPendingTransactionFilter"), c.prototype.uninstallFilter = d("eth_uninstallFilter"), c.prototype.getFilterChanges = d("eth_getFilterChanges"), c.prototype.getFilterLogs = d("eth_getFilterLogs"), c.prototype.getLogs = d("eth_getLogs"), c.prototype.getWork = d("eth_getWork"), c.prototype.submitWork = d("eth_submitWork"), c.prototype.submitHashrate = d("eth_submitHashrate"), c.prototype.sendAsync = function(e, a) {
                this.currentProvider.sendAsync(function r(e) {
                    return t({
                        id: y(),
                        jsonrpc: "2.0",
                        params: []
                    }, e)
                }(e), function(l, v) {
                    if (!l && v.error && (l = new Error("EthQuery - RPC Error - " + v.error.message)), l) return a(l);
                    a(null, v.result)
                })
            }
        },
        117: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.EthereumProviderError = o.EthereumRpcError = void 0;
            const t = p(8701);
            class y extends Error {
                constructor(e, a, g) {
                    if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
                    if (!a || "string" != typeof a) throw new Error('"message" must be a nonempty string.');
                    super(a), this.code = e, void 0 !== g && (this.data = g)
                }
                serialize() {
                    const e = {
                        code: this.code,
                        message: this.message
                    };
                    return void 0 !== this.data && (e.data = this.data), this.stack && (e.stack = this.stack), e
                }
                toString() {
                    return t.default(this.serialize(), i, 2)
                }
            }

            function i(r, e) {
                if ("[Circular]" !== e) return e
            }
            o.EthereumRpcError = y, o.EthereumProviderError = class c extends y {
                constructor(e, a, g) {
                    if (! function d(r) {
                            return Number.isInteger(r) && r >= 1e3 && r <= 4999
                        }(e)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, a, g)
                }
            }
        },
        3661: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.errorValues = o.errorCodes = void 0, o.errorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901
                }
            }, o.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                }
            }
        },
        7296: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ethErrors = void 0;
            const t = p(117),
                y = p(5114),
                c = p(3661);

            function d(e, a) {
                const [g, l] = r(a);
                return new t.EthereumRpcError(e, g || y.getMessageFromCode(e), l)
            }

            function i(e, a) {
                const [g, l] = r(a);
                return new t.EthereumProviderError(e, g || y.getMessageFromCode(e), l)
            }

            function r(e) {
                if (e) {
                    if ("string" == typeof e) return [e];
                    if ("object" == typeof e && !Array.isArray(e)) {
                        const {
                            message: a,
                            data: g
                        } = e;
                        if (a && "string" != typeof a) throw new Error("Must specify string message.");
                        return [a || void 0, g]
                    }
                }
                return []
            }
            o.ethErrors = {
                rpc: {
                    parse: e => d(c.errorCodes.rpc.parse, e),
                    invalidRequest: e => d(c.errorCodes.rpc.invalidRequest, e),
                    invalidParams: e => d(c.errorCodes.rpc.invalidParams, e),
                    methodNotFound: e => d(c.errorCodes.rpc.methodNotFound, e),
                    internal: e => d(c.errorCodes.rpc.internal, e),
                    server: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
                        const {
                            code: a
                        } = e;
                        if (!Number.isInteger(a) || a > -32005 || a < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return d(a, e)
                    },
                    invalidInput: e => d(c.errorCodes.rpc.invalidInput, e),
                    resourceNotFound: e => d(c.errorCodes.rpc.resourceNotFound, e),
                    resourceUnavailable: e => d(c.errorCodes.rpc.resourceUnavailable, e),
                    transactionRejected: e => d(c.errorCodes.rpc.transactionRejected, e),
                    methodNotSupported: e => d(c.errorCodes.rpc.methodNotSupported, e),
                    limitExceeded: e => d(c.errorCodes.rpc.limitExceeded, e)
                },
                provider: {
                    userRejectedRequest: e => i(c.errorCodes.provider.userRejectedRequest, e),
                    unauthorized: e => i(c.errorCodes.provider.unauthorized, e),
                    unsupportedMethod: e => i(c.errorCodes.provider.unsupportedMethod, e),
                    disconnected: e => i(c.errorCodes.provider.disconnected, e),
                    chainDisconnected: e => i(c.errorCodes.provider.chainDisconnected, e),
                    custom: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
                        const {
                            code: a,
                            message: g,
                            data: l
                        } = e;
                        if (!g || "string" != typeof g) throw new Error('"message" must be a nonempty string');
                        return new t.EthereumProviderError(a, g, l)
                    }
                }
            }
        },
        664: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.getMessageFromCode = o.serializeError = o.EthereumProviderError = o.EthereumRpcError = o.ethErrors = o.errorCodes = void 0;
            const t = p(117);
            Object.defineProperty(o, "EthereumRpcError", {
                enumerable: !0,
                get: function() {
                    return t.EthereumRpcError
                }
            }), Object.defineProperty(o, "EthereumProviderError", {
                enumerable: !0,
                get: function() {
                    return t.EthereumProviderError
                }
            });
            const y = p(5114);
            Object.defineProperty(o, "serializeError", {
                enumerable: !0,
                get: function() {
                    return y.serializeError
                }
            }), Object.defineProperty(o, "getMessageFromCode", {
                enumerable: !0,
                get: function() {
                    return y.getMessageFromCode
                }
            });
            const c = p(7296);
            Object.defineProperty(o, "ethErrors", {
                enumerable: !0,
                get: function() {
                    return c.ethErrors
                }
            });
            const d = p(3661);
            Object.defineProperty(o, "errorCodes", {
                enumerable: !0,
                get: function() {
                    return d.errorCodes
                }
            })
        },
        5114: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.serializeError = o.isValidCode = o.getMessageFromCode = o.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            const t = p(3661),
                y = p(117),
                c = t.errorCodes.rpc.internal,
                i = {
                    code: c,
                    message: r(c)
                };

            function r(s, n = "Unspecified error message. This is a bug, please report it.") {
                if (Number.isInteger(s)) {
                    const u = s.toString();
                    if (v(t.errorValues, u)) return t.errorValues[u].message;
                    if (g(s)) return o.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return n
            }

            function e(s) {
                if (!Number.isInteger(s)) return !1;
                const n = s.toString();
                return !(!t.errorValues[n] && !g(s))
            }

            function g(s) {
                return s >= -32099 && s <= -32e3
            }

            function l(s) {
                return s && "object" == typeof s && !Array.isArray(s) ? Object.assign({}, s) : s
            }

            function v(s, n) {
                return Object.prototype.hasOwnProperty.call(s, n)
            }
            o.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", o.getMessageFromCode = r, o.isValidCode = e, o.serializeError = function a(s, {
                fallbackError: n = i,
                shouldIncludeStack: u = !1
            } = {}) {
                var m, _;
                if (!n || !Number.isInteger(n.code) || "string" != typeof n.message) throw new Error("Must provide fallback error with integer number code and string message.");
                if (s instanceof y.EthereumRpcError) return s.serialize();
                const E = {};
                if (s && "object" == typeof s && !Array.isArray(s) && v(s, "code") && e(s.code)) {
                    const w = s;
                    E.code = w.code, w.message && "string" == typeof w.message ? (E.message = w.message, v(w, "data") && (E.data = w.data)) : (E.message = r(E.code), E.data = {
                        originalError: l(s)
                    })
                } else {
                    E.code = n.code;
                    const w = null === (m = s) || void 0 === m ? void 0 : m.message;
                    E.message = w && "string" == typeof w ? w : n.message, E.data = {
                        originalError: l(s)
                    }
                }
                const M = null === (_ = s) || void 0 === _ ? void 0 : _.stack;
                return u && s && M && "string" == typeof M && (E.stack = M), E
            }
        },
        8701: $ => {
            $.exports = d, d.default = d, d.stable = a, d.stableStringify = a;
            var o = "[...]",
                p = "[Circular]",
                t = [],
                y = [];

            function c() {
                return {
                    depthLimit: Number.MAX_SAFE_INTEGER,
                    edgesLimit: Number.MAX_SAFE_INTEGER
                }
            }

            function d(v, s, n, u) {
                var m;
                typeof u > "u" && (u = c()), r(v, "", 0, [], void 0, 0, u);
                try {
                    m = 0 === y.length ? JSON.stringify(v, s, n) : JSON.stringify(v, l(s), n)
                } catch {
                    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
                } finally {
                    for (; 0 !== t.length;) {
                        var _ = t.pop();
                        4 === _.length ? Object.defineProperty(_[0], _[1], _[3]) : _[0][_[1]] = _[2]
                    }
                }
                return m
            }

            function i(v, s, n, u) {
                var m = Object.getOwnPropertyDescriptor(u, n);
                void 0 !== m.get ? m.configurable ? (Object.defineProperty(u, n, {
                    value: v
                }), t.push([u, n, s, m])) : y.push([s, n, v]) : (u[n] = v, t.push([u, n, s]))
            }

            function r(v, s, n, u, m, _, E) {
                var M;
                if (_ += 1, "object" == typeof v && null !== v) {
                    for (M = 0; M < u.length; M++)
                        if (u[M] === v) return void i(p, v, s, m);
                    if (typeof E.depthLimit < "u" && _ > E.depthLimit) return void i(o, v, s, m);
                    if (typeof E.edgesLimit < "u" && n + 1 > E.edgesLimit) return void i(o, v, s, m);
                    if (u.push(v), Array.isArray(v))
                        for (M = 0; M < v.length; M++) r(v[M], M, M, u, v, _, E);
                    else {
                        var w = Object.keys(v);
                        for (M = 0; M < w.length; M++) {
                            var A = w[M];
                            r(v[A], A, M, u, v, _, E)
                        }
                    }
                    u.pop()
                }
            }

            function e(v, s) {
                return v < s ? -1 : v > s ? 1 : 0
            }

            function a(v, s, n, u) {
                typeof u > "u" && (u = c());
                var _, m = g(v, "", 0, [], void 0, 0, u) || v;
                try {
                    _ = 0 === y.length ? JSON.stringify(m, s, n) : JSON.stringify(m, l(s), n)
                } catch {
                    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
                } finally {
                    for (; 0 !== t.length;) {
                        var E = t.pop();
                        4 === E.length ? Object.defineProperty(E[0], E[1], E[3]) : E[0][E[1]] = E[2]
                    }
                }
                return _
            }

            function g(v, s, n, u, m, _, E) {
                var M;
                if (_ += 1, "object" == typeof v && null !== v) {
                    for (M = 0; M < u.length; M++)
                        if (u[M] === v) return void i(p, v, s, m);
                    try {
                        if ("function" == typeof v.toJSON) return
                    } catch {
                        return
                    }
                    if (typeof E.depthLimit < "u" && _ > E.depthLimit) return void i(o, v, s, m);
                    if (typeof E.edgesLimit < "u" && n + 1 > E.edgesLimit) return void i(o, v, s, m);
                    if (u.push(v), Array.isArray(v))
                        for (M = 0; M < v.length; M++) g(v[M], M, M, u, v, _, E);
                    else {
                        var w = {},
                            A = Object.keys(v).sort(e);
                        for (M = 0; M < A.length; M++) {
                            var x = A[M];
                            g(v[x], x, M, u, v, _, E), w[x] = v[x]
                        }
                        if (!(typeof m < "u")) return w;
                        t.push([m, s, v]), m[s] = w
                    }
                    u.pop()
                }
            }

            function l(v) {
                return v = typeof v < "u" ? v : function(s, n) {
                        return n
                    },
                    function(s, n) {
                        if (y.length > 0)
                            for (var u = 0; u < y.length; u++) {
                                var m = y[u];
                                if (m[1] === s && m[0] === n) {
                                    n = m[2], y.splice(u, 1);
                                    break
                                }
                            }
                        return v.call(this, s, n)
                    }
            }
        },
        2601: ($, o) => {
            o.read = function(p, t, y, c, d) {
                var i, r, e = 8 * d - c - 1,
                    a = (1 << e) - 1,
                    g = a >> 1,
                    l = -7,
                    v = y ? d - 1 : 0,
                    s = y ? -1 : 1,
                    n = p[t + v];
                for (v += s, i = n & (1 << -l) - 1, n >>= -l, l += e; l > 0; i = 256 * i + p[t + v], v += s, l -= 8);
                for (r = i & (1 << -l) - 1, i >>= -l, l += c; l > 0; r = 256 * r + p[t + v], v += s, l -= 8);
                if (0 === i) i = 1 - g;
                else {
                    if (i === a) return r ? NaN : 1 / 0 * (n ? -1 : 1);
                    r += Math.pow(2, c), i -= g
                }
                return (n ? -1 : 1) * r * Math.pow(2, i - c)
            }, o.write = function(p, t, y, c, d, i) {
                var r, e, a, g = 8 * i - d - 1,
                    l = (1 << g) - 1,
                    v = l >> 1,
                    s = 23 === d ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    n = c ? 0 : i - 1,
                    u = c ? 1 : -1,
                    m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (e = isNaN(t) ? 1 : 0, r = l) : (r = Math.floor(Math.log(t) / Math.LN2), t * (a = Math.pow(2, -r)) < 1 && (r--, a *= 2), (t += r + v >= 1 ? s / a : s * Math.pow(2, 1 - v)) * a >= 2 && (r++, a /= 2), r + v >= l ? (e = 0, r = l) : r + v >= 1 ? (e = (t * a - 1) * Math.pow(2, d), r += v) : (e = t * Math.pow(2, v - 1) * Math.pow(2, d), r = 0)); d >= 8; p[y + n] = 255 & e, n += u, e /= 256, d -= 8);
                for (r = r << d | e, g += d; g > 0; p[y + n] = 255 & r, n += u, r /= 256, g -= 8);
                p[y + n - u] |= 128 * m
            }
        },
        6698: $ => {
            $.exports = "function" == typeof Object.create ? function(p, t) {
                t && (p.super_ = t, p.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: p,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : function(p, t) {
                if (t) {
                    p.super_ = t;
                    var y = function() {};
                    y.prototype = t.prototype, p.prototype = new y, p.prototype.constructor = p
                }
            }
        },
        5887: function($, o, p) {
            "use strict";
            var t = p(7156).default,
                y = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.JsonRpcEngine = void 0;
            const c = y(p(2135)),
                d = p(664);
            class i extends c.default {
                constructor() {
                    super(), this._middleware = []
                }
                push(a) {
                    this._middleware.push(a)
                }
                handle(a, g) {
                    if (g && "function" != typeof g) throw new Error('"callback" must be a function if provided.');
                    return Array.isArray(a) ? g ? this._handleBatch(a, g) : this._handleBatch(a) : g ? this._handle(a, g) : this._promiseHandle(a)
                }
                asMiddleware() {
                    var a = this;
                    return function() {
                        var g = t(function*(l, v, s, n) {
                            try {
                                const [u, m, _] = yield i._runAllMiddleware(l, v, a._middleware);
                                return m ? (yield i._runReturnHandlers(_), n(u)) : s(function() {
                                    var E = t(function*(M) {
                                        try {
                                            yield i._runReturnHandlers(_)
                                        } catch (w) {
                                            return M(w)
                                        }
                                        return M()
                                    });
                                    return function(M) {
                                        return E.apply(this, arguments)
                                    }
                                }())
                            } catch (u) {
                                return n(u)
                            }
                        });
                        return function(l, v, s, n) {
                            return g.apply(this, arguments)
                        }
                    }()
                }
                _handleBatch(a, g) {
                    var l = this;
                    return t(function*() {
                        try {
                            const v = yield Promise.all(a.map(l._promiseHandle.bind(l)));
                            return g ? g(null, v) : v
                        } catch (v) {
                            if (g) return g(v);
                            throw v
                        }
                    })()
                }
                _promiseHandle(a) {
                    return new Promise(g => {
                        this._handle(a, (l, v) => {
                            g(v)
                        })
                    })
                }
                _handle(a, g) {
                    var l = this;
                    return t(function*() {
                        if (!a || Array.isArray(a) || "object" != typeof a) {
                            const u = new d.EthereumRpcError(d.errorCodes.rpc.invalidRequest, "Requests must be plain objects. Received: " + typeof a, {
                                request: a
                            });
                            return g(u, {
                                id: void 0,
                                jsonrpc: "2.0",
                                error: u
                            })
                        }
                        if ("string" != typeof a.method) {
                            const u = new d.EthereumRpcError(d.errorCodes.rpc.invalidRequest, "Must specify a string method. Received: " + typeof a.method, {
                                request: a
                            });
                            return g(u, {
                                id: a.id,
                                jsonrpc: "2.0",
                                error: u
                            })
                        }
                        const v = Object.assign({}, a),
                            s = {
                                id: v.id,
                                jsonrpc: v.jsonrpc
                            };
                        let n = null;
                        try {
                            yield l._processRequest(v, s)
                        } catch (u) {
                            n = u
                        }
                        return n && (delete s.result, s.error || (s.error = d.serializeError(n))), g(n, s)
                    })()
                }
                _processRequest(a, g) {
                    var l = this;
                    return t(function*() {
                        const [v, s, n] = yield i._runAllMiddleware(a, g, l._middleware);
                        if (i._checkForCompletion(a, g, s), yield i._runReturnHandlers(n), v) throw v
                    })()
                }
                static _runAllMiddleware(a, g, l) {
                    return t(function*() {
                        const v = [];
                        let s = null,
                            n = !1;
                        for (const u of l)
                            if ([s, n] = yield i._runMiddleware(a, g, u, v), n) break;
                        return [s, n, v.reverse()]
                    })()
                }
                static _runMiddleware(a, g, l, v) {
                    return new Promise(s => {
                        const n = m => {
                                const _ = m || g.error;
                                _ && (g.error = d.serializeError(_)), s([_, !0])
                            },
                            u = m => {
                                g.error ? n(g.error) : (m && ("function" != typeof m && n(new d.EthereumRpcError(d.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof m}" for request:\n${r(a)}`, {
                                    request: a
                                })), v.push(m)), s([null, !1]))
                            };
                        try {
                            l(a, g, u, n)
                        } catch (m) {
                            n(m)
                        }
                    })
                }
                static _runReturnHandlers(a) {
                    return t(function*() {
                        for (const g of a) yield new Promise((l, v) => {
                            g(s => s ? v(s) : l())
                        })
                    })()
                }
                static _checkForCompletion(a, g, l) {
                    if (!("result" in g) && !("error" in g)) throw new d.EthereumRpcError(d.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${r(a)}`, {
                        request: a
                    });
                    if (!l) throw new d.EthereumRpcError(d.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${r(a)}`, {
                        request: a
                    })
                }
            }

            function r(e) {
                return JSON.stringify(e, null, 2)
            }
            o.JsonRpcEngine = i
        },
        4527: ($, o, p) => {
            "use strict";
            var t = p(7156).default;
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.createAsyncMiddleware = void 0, o.createAsyncMiddleware = function y(c) {
                return function() {
                    var d = t(function*(i, r, e, a) {
                        let g;
                        const l = new Promise(u => {
                            g = u
                        });
                        let v = null,
                            s = !1;
                        const n = function() {
                            var u = t(function*() {
                                s = !0, e(m => {
                                    v = m, g()
                                }), yield l
                            });
                            return function() {
                                return u.apply(this, arguments)
                            }
                        }();
                        try {
                            yield c(i, r, n), s ? (yield l, v(null)) : a(null)
                        } catch (u) {
                            v ? v(u) : a(u)
                        }
                    });
                    return function(i, r, e, a) {
                        return d.apply(this, arguments)
                    }
                }()
            }
        },
        128: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.createScaffoldMiddleware = void 0, o.createScaffoldMiddleware = function p(t) {
                return (y, c, d, i) => {
                    const r = t[y.method];
                    return void 0 === r ? d() : "function" == typeof r ? r(y, c, d, i) : (c.result = r, i())
                }
            }
        },
        5802: ($, o) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.getUniqueId = void 0;
            const p = 4294967295;
            let t = Math.floor(Math.random() * p);
            o.getUniqueId = function y() {
                return t = (t + 1) % p, t
            }
        },
        5608: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.createIdRemapMiddleware = void 0;
            const t = p(5802);
            o.createIdRemapMiddleware = function y() {
                return (c, d, i, r) => {
                    const e = c.id,
                        a = t.getUniqueId();
                    c.id = a, d.id = a, i(g => {
                        c.id = e, d.id = e, g()
                    })
                }
            }
        },
        9244: function($, o, p) {
            "use strict";
            var t = this && this.__createBinding || (Object.create ? function(c, d, i, r) {
                    void 0 === r && (r = i), Object.defineProperty(c, r, {
                        enumerable: !0,
                        get: function() {
                            return d[i]
                        }
                    })
                } : function(c, d, i, r) {
                    void 0 === r && (r = i), c[r] = d[i]
                }),
                y = this && this.__exportStar || function(c, d) {
                    for (var i in c) "default" !== i && !Object.prototype.hasOwnProperty.call(d, i) && t(d, c, i)
                };
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), y(p(5608), o), y(p(4527), o), y(p(128), o), y(p(5802), o), y(p(5887), o), y(p(4606), o)
        },
        4606: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.mergeMiddleware = void 0;
            const t = p(5887);
            o.mergeMiddleware = function y(c) {
                const d = new t.JsonRpcEngine;
                return c.forEach(i => d.push(i)), d.asMiddleware()
            }
        },
        2135: ($, o, p) => {
            "use strict";
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            const t = p(2016);

            function y(i, r, e) {
                try {
                    Reflect.apply(i, r, e)
                } catch (a) {
                    setTimeout(() => {
                        throw a
                    })
                }
            }
            o.default = class d extends t.EventEmitter {
                emit(r, ...e) {
                    let a = "error" === r;
                    const g = this._events;
                    if (void 0 !== g) a = a && void 0 === g.error;
                    else if (!a) return !1;
                    if (a) {
                        let v;
                        if (e.length > 0 && ([v] = e), v instanceof Error) throw v;
                        const s = new Error("Unhandled error." + (v ? ` (${v.message})` : ""));
                        throw s.context = v, s
                    }
                    const l = g[r];
                    if (void 0 === l) return !1;
                    if ("function" == typeof l) y(l, this, e);
                    else {
                        const v = l.length,
                            s = function c(i) {
                                const r = i.length,
                                    e = new Array(r);
                                for (let a = 0; a < r; a += 1) e[a] = i[a];
                                return e
                            }(l);
                        for (let n = 0; n < v; n += 1) y(s[n], this, e)
                    }
                    return !0
                }
            }
        },
        519: $ => {
            $.exports = function o(p) {
                var t = (p = p || {}).max || Number.MAX_SAFE_INTEGER,
                    y = typeof p.start < "u" ? p.start : Math.floor(Math.random() * t);
                return function() {
                    return y %= t, y++
                }
            }
        },
        568: ($, o, p) => {
            $.exports = p(8554)(p(6322))
        },
        8554: ($, o, p) => {
            const t = p(773),
                y = p(7256);
            $.exports = function(c) {
                const d = t(c),
                    i = y(c);
                return function(r, e) {
                    switch ("string" == typeof r ? r.toLowerCase() : r) {
                        case "keccak224":
                            return new d(1152, 448, null, 224, e);
                        case "keccak256":
                            return new d(1088, 512, null, 256, e);
                        case "keccak384":
                            return new d(832, 768, null, 384, e);
                        case "keccak512":
                            return new d(576, 1024, null, 512, e);
                        case "sha3-224":
                            return new d(1152, 448, 6, 224, e);
                        case "sha3-256":
                            return new d(1088, 512, 6, 256, e);
                        case "sha3-384":
                            return new d(832, 768, 6, 384, e);
                        case "sha3-512":
                            return new d(576, 1024, 6, 512, e);
                        case "shake128":
                            return new i(1344, 256, 31, e);
                        case "shake256":
                            return new i(1088, 512, 31, e);
                        default:
                            throw new Error("Invald algorithm: " + r)
                    }
                }
            }
        },
        773: ($, o, p) => {
            const {
                Transform: t
            } = p(6745);
            $.exports = y => class pt extends t {
                constructor(d, i, r, e, a) {
                    super(a), this._rate = d, this._capacity = i, this._delimitedSuffix = r, this._hashBitLength = e, this._options = a, this._state = new y, this._state.initialize(d, i), this._finalized = !1
                }
                _transform(d, i, r) {
                    let e = null;
                    try {
                        this.update(d, i)
                    } catch (a) {
                        e = a
                    }
                    r(e)
                }
                _flush(d) {
                    let i = null;
                    try {
                        this.push(this.digest())
                    } catch (r) {
                        i = r
                    }
                    d(i)
                }
                update(d, i) {
                    if (!Buffer.isBuffer(d) && "string" != typeof d) throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized) throw new Error("Digest already called");
                    return Buffer.isBuffer(d) || (d = Buffer.from(d, i)), this._state.absorb(d), this
                }
                digest(d) {
                    if (this._finalized) throw new Error("Digest already called");
                    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                    let i = this._state.squeeze(this._hashBitLength / 8);
                    return void 0 !== d && (i = i.toString(d)), this._resetState(), i
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity), this
                }
                _clone() {
                    const d = new pt(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
                    return this._state.copy(d._state), d._finalized = this._finalized, d
                }
            }
        },
        7256: ($, o, p) => {
            const {
                Transform: t
            } = p(6745);
            $.exports = y => class gt extends t {
                constructor(d, i, r, e) {
                    super(e), this._rate = d, this._capacity = i, this._delimitedSuffix = r, this._options = e, this._state = new y, this._state.initialize(d, i), this._finalized = !1
                }
                _transform(d, i, r) {
                    let e = null;
                    try {
                        this.update(d, i)
                    } catch (a) {
                        e = a
                    }
                    r(e)
                }
                _flush() {}
                _read(d) {
                    this.push(this.squeeze(d))
                }
                update(d, i) {
                    if (!Buffer.isBuffer(d) && "string" != typeof d) throw new TypeError("Data must be a string or a buffer");
                    if (this._finalized) throw new Error("Squeeze already called");
                    return Buffer.isBuffer(d) || (d = Buffer.from(d, i)), this._state.absorb(d), this
                }
                squeeze(d, i) {
                    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
                    let r = this._state.squeeze(d);
                    return void 0 !== i && (r = r.toString(i)), r
                }
                _resetState() {
                    return this._state.initialize(this._rate, this._capacity), this
                }
                _clone() {
                    const d = new gt(this._rate, this._capacity, this._delimitedSuffix, this._options);
                    return this._state.copy(d._state), d._finalized = this._finalized, d
                }
            }
        },
        8363: ($, o) => {
            const p = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
            o.p1600 = function(t) {
                for (let y = 0; y < 24; ++y) {
                    const c = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40],
                        d = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41],
                        i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42],
                        r = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43],
                        e = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44],
                        a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45],
                        g = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46],
                        l = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47],
                        v = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48],
                        s = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
                    let n = v ^ (i << 1 | r >>> 31),
                        u = s ^ (r << 1 | i >>> 31);
                    const m = t[0] ^ n,
                        _ = t[1] ^ u,
                        E = t[10] ^ n,
                        M = t[11] ^ u,
                        w = t[20] ^ n,
                        A = t[21] ^ u,
                        x = t[30] ^ n,
                        N = t[31] ^ u,
                        z = t[40] ^ n,
                        W = t[41] ^ u;
                    n = c ^ (e << 1 | a >>> 31), u = d ^ (a << 1 | e >>> 31);
                    const K = t[2] ^ n,
                        ne = t[3] ^ u,
                        se = t[12] ^ n,
                        le = t[13] ^ u,
                        pe = t[22] ^ n,
                        D = t[23] ^ u,
                        h = t[32] ^ n,
                        C = t[33] ^ u,
                        I = t[42] ^ n,
                        T = t[43] ^ u;
                    n = i ^ (g << 1 | l >>> 31), u = r ^ (l << 1 | g >>> 31);
                    const k = t[4] ^ n,
                        O = t[5] ^ u,
                        U = t[14] ^ n,
                        P = t[15] ^ u,
                        S = t[24] ^ n,
                        j = t[25] ^ u,
                        ae = t[34] ^ n,
                        oe = t[35] ^ u,
                        ce = t[44] ^ n,
                        Y = t[45] ^ u;
                    n = e ^ (v << 1 | s >>> 31), u = a ^ (s << 1 | v >>> 31);
                    const Q = t[6] ^ n,
                        H = t[7] ^ u,
                        V = t[16] ^ n,
                        X = t[17] ^ u,
                        L = t[26] ^ n,
                        B = t[27] ^ u,
                        Z = t[36] ^ n,
                        re = t[37] ^ u,
                        de = t[46] ^ n,
                        he = t[47] ^ u;
                    n = g ^ (c << 1 | d >>> 31), u = l ^ (d << 1 | c >>> 31);
                    const ue = t[8] ^ n,
                        we = t[9] ^ u,
                        ie = t[18] ^ n,
                        ge = t[19] ^ u,
                        me = t[28] ^ n,
                        ve = t[29] ^ u,
                        G = t[38] ^ n,
                        q = t[39] ^ u,
                        R = t[48] ^ n,
                        f = t[49] ^ u,
                        b = m,
                        F = _,
                        J = M << 4 | E >>> 28,
                        ee = E << 4 | M >>> 28,
                        te = w << 3 | A >>> 29,
                        fe = A << 3 | w >>> 29,
                        _e = N << 9 | x >>> 23,
                        ye = x << 9 | N >>> 23,
                        be = z << 18 | W >>> 14,
                        Ee = W << 18 | z >>> 14,
                        Se = K << 1 | ne >>> 31,
                        Re = ne << 1 | K >>> 31,
                        tt = le << 12 | se >>> 20,
                        Me = se << 12 | le >>> 20,
                        Ce = pe << 10 | D >>> 22,
                        rt = D << 10 | pe >>> 22,
                        Ie = C << 13 | h >>> 19,
                        xe = h << 13 | C >>> 19,
                        nt = I << 2 | T >>> 30,
                        Ae = T << 2 | I >>> 30,
                        ke = O << 30 | k >>> 2,
                        it = k << 30 | O >>> 2,
                        Te = U << 6 | P >>> 26,
                        Ne = P << 6 | U >>> 26,
                        st = j << 11 | S >>> 21,
                        Le = S << 11 | j >>> 21,
                        Be = ae << 15 | oe >>> 17,
                        ot = oe << 15 | ae >>> 17,
                        Pe = Y << 29 | ce >>> 3,
                        Oe = ce << 29 | Y >>> 3,
                        at = Q << 28 | H >>> 4,
                        Fe = H << 28 | Q >>> 4,
                        De = X << 23 | V >>> 9,
                        ct = V << 23 | X >>> 9,
                        je = L << 25 | B >>> 7,
                        Ue = B << 25 | L >>> 7,
                        He = Z << 21 | re >>> 11,
                        $e = re << 21 | Z >>> 11,
                        We = he << 24 | de >>> 8,
                        Ve = de << 24 | he >>> 8,
                        ze = ue << 27 | we >>> 5,
                        Ge = we << 27 | ue >>> 5,
                        Je = ie << 20 | ge >>> 12,
                        Ze = ge << 20 | ie >>> 12,
                        Ke = ve << 7 | me >>> 25,
                        Ye = me << 7 | ve >>> 25,
                        Qe = G << 8 | q >>> 24,
                        Xe = q << 8 | G >>> 24,
                        qe = R << 14 | f >>> 18,
                        et = f << 14 | R >>> 18;
                    t[0] = b ^ ~tt & st, t[1] = F ^ ~Me & Le, t[10] = at ^ ~Je & te, t[11] = Fe ^ ~Ze & fe, t[20] = Se ^ ~Te & je, t[21] = Re ^ ~Ne & Ue, t[30] = ze ^ ~J & Ce, t[31] = Ge ^ ~ee & rt, t[40] = ke ^ ~De & Ke, t[41] = it ^ ~ct & Ye, t[2] = tt ^ ~st & He, t[3] = Me ^ ~Le & $e, t[12] = Je ^ ~te & Ie, t[13] = Ze ^ ~fe & xe, t[22] = Te ^ ~je & Qe, t[23] = Ne ^ ~Ue & Xe, t[32] = J ^ ~Ce & Be, t[33] = ee ^ ~rt & ot, t[42] = De ^ ~Ke & _e, t[43] = ct ^ ~Ye & ye, t[4] = st ^ ~He & qe, t[5] = Le ^ ~$e & et, t[14] = te ^ ~Ie & Pe, t[15] = fe ^ ~xe & Oe, t[24] = je ^ ~Qe & be, t[25] = Ue ^ ~Xe & Ee, t[34] = Ce ^ ~Be & We, t[35] = rt ^ ~ot & Ve, t[44] = Ke ^ ~_e & nt, t[45] = Ye ^ ~ye & Ae, t[6] = He ^ ~qe & b, t[7] = $e ^ ~et & F, t[16] = Ie ^ ~Pe & at, t[17] = xe ^ ~Oe & Fe, t[26] = Qe ^ ~be & Se, t[27] = Xe ^ ~Ee & Re, t[36] = Be ^ ~We & ze, t[37] = ot ^ ~Ve & Ge, t[46] = _e ^ ~nt & ke, t[47] = ye ^ ~Ae & it, t[8] = qe ^ ~b & tt, t[9] = et ^ ~F & Me, t[18] = Pe ^ ~at & Je, t[19] = Oe ^ ~Fe & Ze, t[28] = be ^ ~Se & Te, t[29] = Ee ^ ~Re & Ne, t[38] = We ^ ~ze & J, t[39] = Ve ^ ~Ge & ee, t[48] = nt ^ ~ke & De, t[49] = Ae ^ ~it & ct, t[0] ^= p[2 * y], t[1] ^= p[2 * y + 1]
                }
            }
        },
        6322: ($, o, p) => {
            const t = p(8363);

            function y() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
            }
            y.prototype.initialize = function(c, d) {
                for (let i = 0; i < 50; ++i) this.state[i] = 0;
                this.blockSize = c / 8, this.count = 0, this.squeezing = !1
            }, y.prototype.absorb = function(c) {
                for (let d = 0; d < c.length; ++d) this.state[~~(this.count / 4)] ^= c[d] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (t.p1600(this.state), this.count = 0)
            }, y.prototype.absorbLastFewBits = function(c) {
                this.state[~~(this.count / 4)] ^= c << this.count % 4 * 8, 128 & c && this.count === this.blockSize - 1 && t.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, t.p1600(this.state), this.count = 0, this.squeezing = !0
            }, y.prototype.squeeze = function(c) {
                this.squeezing || this.absorbLastFewBits(1);
                const d = Buffer.alloc(c);
                for (let i = 0; i < c; ++i) d[i] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (t.p1600(this.state), this.count = 0);
                return d
            }, y.prototype.copy = function(c) {
                for (let d = 0; d < 50; ++d) c.state[d] = this.state[d];
                c.blockSize = this.blockSize, c.count = this.count, c.squeezing = this.squeezing
            }, $.exports = y
        },
        7253: $ => {
            var o = 1e3,
                p = 60 * o,
                t = 60 * p,
                y = 24 * t;

            function a(g, l, v, s) {
                var n = l >= 1.5 * v;
                return Math.round(g / v) + " " + s + (n ? "s" : "")
            }
            $.exports = function(g, l) {
                l = l || {};
                var v = typeof g;
                if ("string" === v && g.length > 0) return function i(g) {
                    if (!((g = String(g)).length > 100)) {
                        var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(g);
                        if (l) {
                            var v = parseFloat(l[1]);
                            switch ((l[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * v;
                                case "weeks":
                                case "week":
                                case "w":
                                    return 6048e5 * v;
                                case "days":
                                case "day":
                                case "d":
                                    return v * y;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return v * t;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return v * p;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return v * o;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return v;
                                default:
                                    return
                            }
                        }
                    }
                }(g);
                if ("number" === v && isFinite(g)) return l.long ? function e(g) {
                    var l = Math.abs(g);
                    return l >= y ? a(g, l, y, "day") : l >= t ? a(g, l, t, "hour") : l >= p ? a(g, l, p, "minute") : l >= o ? a(g, l, o, "second") : g + " ms"
                }(g) : function r(g) {
                    var l = Math.abs(g);
                    return l >= y ? Math.round(g / y) + "d" : l >= t ? Math.round(g / t) + "h" : l >= p ? Math.round(g / p) + "m" : l >= o ? Math.round(g / o) + "s" : g + "ms"
                }(g);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(g))
            }
        },
        4107: $ => {
            "use strict";
            const o = (p, t) => function() {
                const y = t.promiseModule,
                    c = new Array(arguments.length);
                for (let d = 0; d < arguments.length; d++) c[d] = arguments[d];
                return new y((d, i) => {
                    c.push(t.errorFirst ? function(r, e) {
                        if (t.multiArgs) {
                            const a = new Array(arguments.length - 1);
                            for (let g = 1; g < arguments.length; g++) a[g - 1] = arguments[g];
                            r ? (a.unshift(r), i(a)) : d(a)
                        } else r ? i(r) : d(e)
                    } : function(r) {
                        if (t.multiArgs) {
                            const e = new Array(arguments.length - 1);
                            for (let a = 0; a < arguments.length; a++) e[a] = arguments[a];
                            d(e)
                        } else d(r)
                    }), p.apply(this, c)
                })
            };
            $.exports = (p, t) => {
                t = Object.assign({
                    exclude: [/.+(Sync|Stream)$/],
                    errorFirst: !0,
                    promiseModule: Promise
                }, t);
                const y = d => {
                    const i = r => "string" == typeof r ? d === r : r.test(d);
                    return t.include ? t.include.some(i) : !t.exclude.some(i)
                };
                let c;
                c = "function" == typeof p ? function() {
                    return t.excludeMain ? p.apply(this, arguments) : o(p, t).apply(this, arguments)
                } : Object.create(Object.getPrototypeOf(p));
                for (const d in p) {
                    const i = p[d];
                    c[d] = "function" == typeof i && y(d) ? o(i, t) : i
                }
                return c
            }
        },
        4354: ($, o, p) => {
            "use strict";
            p.r(o), p.d(o, {
                Component: () => z,
                Fragment: () => N,
                cloneElement: () => Y,
                createContext: () => Q,
                createElement: () => w,
                createRef: () => x,
                h: () => w,
                hydrate: () => ce,
                isValidElement: () => d,
                options: () => y,
                render: () => oe,
                toChildArray: () => h
            });
            var t, y, c, d, i, r, e, a, g, l, v, s, n = {},
                u = [],
                m = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                _ = Array.isArray;

            function E(H, V) {
                for (var X in V) H[X] = V[X];
                return H
            }

            function M(H) {
                var V = H.parentNode;
                V && V.removeChild(H)
            }

            function w(H, V, X) {
                var L, B, Z, re = {};
                for (Z in V) "key" == Z ? L = V[Z] : "ref" == Z ? B = V[Z] : re[Z] = V[Z];
                if (arguments.length > 2 && (re.children = arguments.length > 3 ? t.call(arguments, 2) : X), "function" == typeof H && null != H.defaultProps)
                    for (Z in H.defaultProps) void 0 === re[Z] && (re[Z] = H.defaultProps[Z]);
                return A(H, re, L, B, null)
            }

            function A(H, V, X, L, B) {
                var Z = {
                    type: H,
                    props: V,
                    key: X,
                    ref: L,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: B ? ? ++c,
                    __i: -1,
                    __u: 0
                };
                return null == B && null != y.vnode && y.vnode(Z), Z
            }

            function x() {
                return {
                    current: null
                }
            }

            function N(H) {
                return H.children
            }

            function z(H, V) {
                this.props = H, this.context = V
            }

            function W(H, V) {
                if (null == V) return H.__ ? W(H.__, H.__i + 1) : null;
                for (var X; V < H.__k.length; V++)
                    if (null != (X = H.__k[V]) && null != X.__e) return X.__e;
                return "function" == typeof H.type ? W(H) : null
            }

            function K(H) {
                var V, X;
                if (null != (H = H.__) && null != H.__c) {
                    for (H.__e = H.__c.base = null, V = 0; V < H.__k.length; V++)
                        if (null != (X = H.__k[V]) && null != X.__e) {
                            H.__e = H.__c.base = X.__e;
                            break
                        }
                    return K(H)
                }
            }

            function ne(H) {
                (!H.__d && (H.__d = !0) && i.push(H) && !se.__r++ || r !== y.debounceRendering) && ((r = y.debounceRendering) || e)(se)
            }

            function se() {
                var H, V, X, L, B, Z, re, de;
                for (i.sort(a); H = i.shift();) H.__d && (V = i.length, L = void 0, Z = (B = (X = H).__v).__e, re = [], de = [], X.__P && ((L = E({}, B)).__v = B.__v + 1, y.vnode && y.vnode(L), O(X.__P, L, B, X.__n, X.__P.namespaceURI, 32 & B.__u ? [Z] : null, re, Z ? ? W(B), !!(32 & B.__u), de), L.__v = B.__v, L.__.__k[L.__i] = L, U(re, L, de), L.__e != Z && K(L)), i.length > V && i.sort(a));
                se.__r = 0
            }

            function le(H, V, X, L, B, Z, re, de, he, ue, we) {
                var ie, ge, me, ve, G, q = L && L.__k || u,
                    R = V.length;
                for (X.__d = he, function pe(H, V, X) {
                        var L, B, Z, re, de, he = V.length,
                            ue = X.length,
                            we = ue,
                            ie = 0;
                        for (H.__k = [], L = 0; L < he; L++) re = L + ie, null != (B = H.__k[L] = null == (B = V[L]) || "boolean" == typeof B || "function" == typeof B ? null : "string" == typeof B || "number" == typeof B || "bigint" == typeof B || B.constructor == String ? A(null, B, null, null, null) : _(B) ? A(N, {
                            children: B
                        }, null, null, null) : void 0 === B.constructor && B.__b > 0 ? A(B.type, B.props, B.key, B.ref ? B.ref : null, B.__v) : B) ? (B.__ = H, B.__b = H.__b + 1, de = C(B, X, re, we), B.__i = de, Z = null, -1 !== de && (we--, (Z = X[de]) && (Z.__u |= 131072)), null == Z || null === Z.__v ? (-1 == de && ie--, "function" != typeof B.type && (B.__u |= 65536)) : de !== re && (de == re - 1 ? ie-- : de == re + 1 ? ie++ : de > re ? we > he - re ? ie += de - re : ie-- : de < re && (de == re - ie ? ie -= de - re : ie++), de !== L + ie && (B.__u |= 65536))) : (Z = X[re]) && null == Z.key && Z.__e && !(131072 & Z.__u) && (Z.__e == H.__d && (H.__d = W(Z)), j(Z, Z, !1), X[re] = null, we--);
                        if (we)
                            for (L = 0; L < ue; L++) null != (Z = X[L]) && !(131072 & Z.__u) && (Z.__e == H.__d && (H.__d = W(Z)), j(Z, Z))
                    }(X, V, q), he = X.__d, ie = 0; ie < R; ie++) null != (me = X.__k[ie]) && "boolean" != typeof me && "function" != typeof me && (ge = -1 === me.__i ? n : q[me.__i] || n, me.__i = ie, O(H, me, ge, B, Z, re, de, he, ue, we), ve = me.__e, me.ref && ge.ref != me.ref && (ge.ref && S(ge.ref, null, me), we.push(me.ref, me.__c || ve, me)), null == G && null != ve && (G = ve), 65536 & me.__u || ge.__k === me.__k ? he = D(me, he, H) : "function" == typeof me.type && void 0 !== me.__d ? he = me.__d : ve && (he = ve.nextSibling), me.__d = void 0, me.__u &= -196609);
                X.__d = he, X.__e = G
            }

            function D(H, V, X) {
                var L, B;
                if ("function" == typeof H.type) {
                    for (L = H.__k, B = 0; L && B < L.length; B++) L[B] && (L[B].__ = H, V = D(L[B], V, X));
                    return V
                }
                H.__e != V && (V && H.type && !X.contains(V) && (V = W(H)), X.insertBefore(H.__e, V || null), V = H.__e);
                do {
                    V = V && V.nextSibling
                } while (null != V && 8 === V.nodeType);
                return V
            }

            function h(H, V) {
                return V = V || [], null == H || "boolean" == typeof H || (_(H) ? H.some(function(X) {
                    h(X, V)
                }) : V.push(H)), V
            }

            function C(H, V, X, L) {
                var B = H.key,
                    Z = H.type,
                    re = X - 1,
                    de = X + 1,
                    he = V[X];
                if (null === he || he && B == he.key && Z === he.type && !(131072 & he.__u)) return X;
                if (L > (null == he || 131072 & he.__u ? 0 : 1))
                    for (; re >= 0 || de < V.length;) {
                        if (re >= 0) {
                            if ((he = V[re]) && !(131072 & he.__u) && B == he.key && Z === he.type) return re;
                            re--
                        }
                        if (de < V.length) {
                            if ((he = V[de]) && !(131072 & he.__u) && B == he.key && Z === he.type) return de;
                            de++
                        }
                    }
                return -1
            }

            function I(H, V, X) {
                "-" === V[0] ? H.setProperty(V, X ? ? "") : H[V] = null == X ? "" : "number" != typeof X || m.test(V) ? X : X + "px"
            }

            function T(H, V, X, L, B) {
                var Z;
                e: if ("style" === V)
                    if ("string" == typeof X) H.style.cssText = X;
                    else {
                        if ("string" == typeof L && (H.style.cssText = L = ""), L)
                            for (V in L) X && V in X || I(H.style, V, "");
                        if (X)
                            for (V in X) L && X[V] === L[V] || I(H.style, V, X[V])
                    }
                else if ("o" === V[0] && "n" === V[1]) Z = V !== (V = V.replace(/(PointerCapture)$|Capture$/i, "$1")), V = V.toLowerCase() in H || "onFocusOut" === V || "onFocusIn" === V ? V.toLowerCase().slice(2) : V.slice(2), H.l || (H.l = {}), H.l[V + Z] = X, X ? L ? X.u = L.u : (X.u = g, H.addEventListener(V, Z ? v : l, Z)) : H.removeEventListener(V, Z ? v : l, Z);
                else {
                    if ("http://www.w3.org/2000/svg" == B) V = V.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != V && "height" != V && "href" != V && "list" != V && "form" != V && "tabIndex" != V && "download" != V && "rowSpan" != V && "colSpan" != V && "role" != V && "popover" != V && V in H) try {
                        H[V] = X ? ? "";
                        break e
                    } catch {}
                    "function" == typeof X || (null == X || !1 === X && "-" !== V[4] ? H.removeAttribute(V) : H.setAttribute(V, "popover" == V && 1 == X ? "" : X))
                }
            }

            function k(H) {
                return function(V) {
                    if (this.l) {
                        var X = this.l[V.type + H];
                        if (null == V.t) V.t = g++;
                        else if (V.t < X.u) return;
                        return X(y.event ? y.event(V) : V)
                    }
                }
            }

            function O(H, V, X, L, B, Z, re, de, he, ue) {
                var we, ie, ge, me, ve, G, q, R, f, b, F, J, ee, te, fe, _e, ye = V.type;
                if (void 0 !== V.constructor) return null;
                128 & X.__u && (he = !!(32 & X.__u), Z = [de = V.__e = X.__e]), (we = y.__b) && we(V);
                e: if ("function" == typeof ye) try {
                    if (R = V.props, f = "prototype" in ye && ye.prototype.render, b = (we = ye.contextType) && L[we.__c], F = we ? b ? b.props.value : we.__ : L, X.__c ? q = (ie = V.__c = X.__c).__ = ie.__E : (f ? V.__c = ie = new ye(R, F) : (V.__c = ie = new z(R, F), ie.constructor = ye, ie.render = ae), b && b.sub(ie), ie.props = R, ie.state || (ie.state = {}), ie.context = F, ie.__n = L, ge = ie.__d = !0, ie.__h = [], ie._sb = []), f && null == ie.__s && (ie.__s = ie.state), f && null != ye.getDerivedStateFromProps && (ie.__s == ie.state && (ie.__s = E({}, ie.__s)), E(ie.__s, ye.getDerivedStateFromProps(R, ie.__s))), me = ie.props, ve = ie.state, ie.__v = V, ge) f && null == ye.getDerivedStateFromProps && null != ie.componentWillMount && ie.componentWillMount(), f && null != ie.componentDidMount && ie.__h.push(ie.componentDidMount);
                    else {
                        if (f && null == ye.getDerivedStateFromProps && R !== me && null != ie.componentWillReceiveProps && ie.componentWillReceiveProps(R, F), !ie.__e && (null != ie.shouldComponentUpdate && !1 === ie.shouldComponentUpdate(R, ie.__s, F) || V.__v === X.__v)) {
                            for (V.__v !== X.__v && (ie.props = R, ie.state = ie.__s, ie.__d = !1), V.__e = X.__e, V.__k = X.__k, V.__k.forEach(function(be) {
                                    be && (be.__ = V)
                                }), J = 0; J < ie._sb.length; J++) ie.__h.push(ie._sb[J]);
                            ie._sb = [], ie.__h.length && re.push(ie);
                            break e
                        }
                        null != ie.componentWillUpdate && ie.componentWillUpdate(R, ie.__s, F), f && null != ie.componentDidUpdate && ie.__h.push(function() {
                            ie.componentDidUpdate(me, ve, G)
                        })
                    }
                    if (ie.context = F, ie.props = R, ie.__P = H, ie.__e = !1, ee = y.__r, te = 0, f) {
                        for (ie.state = ie.__s, ie.__d = !1, ee && ee(V), we = ie.render(ie.props, ie.state, ie.context), fe = 0; fe < ie._sb.length; fe++) ie.__h.push(ie._sb[fe]);
                        ie._sb = []
                    } else
                        do {
                            ie.__d = !1, ee && ee(V), we = ie.render(ie.props, ie.state, ie.context), ie.state = ie.__s
                        } while (ie.__d && ++te < 25);
                    ie.state = ie.__s, null != ie.getChildContext && (L = E(E({}, L), ie.getChildContext())), f && !ge && null != ie.getSnapshotBeforeUpdate && (G = ie.getSnapshotBeforeUpdate(me, ve)), le(H, _(_e = null != we && we.type === N && null == we.key ? we.props.children : we) ? _e : [_e], V, X, L, B, Z, re, de, he, ue), ie.base = V.__e, V.__u &= -161, ie.__h.length && re.push(ie), q && (ie.__E = ie.__ = null)
                } catch (be) {
                    if (V.__v = null, he || null != Z) {
                        for (V.__u |= he ? 160 : 32; de && 8 === de.nodeType && de.nextSibling;) de = de.nextSibling;
                        Z[Z.indexOf(de)] = null, V.__e = de
                    } else V.__e = X.__e, V.__k = X.__k;
                    y.__e(be, V, X)
                } else null == Z && V.__v === X.__v ? (V.__k = X.__k, V.__e = X.__e) : V.__e = function P(H, V, X, L, B, Z, re, de, he) {
                    var ue, we, ie, ge, me, ve, G, q = X.props,
                        R = V.props,
                        f = V.type;
                    if ("svg" === f ? B = "http://www.w3.org/2000/svg" : "math" === f ? B = "http://www.w3.org/1998/Math/MathML" : B || (B = "http://www.w3.org/1999/xhtml"), null != Z)
                        for (ue = 0; ue < Z.length; ue++)
                            if ((me = Z[ue]) && "setAttribute" in me == !!f && (f ? me.localName === f : 3 === me.nodeType)) {
                                H = me, Z[ue] = null;
                                break
                            }
                    if (null == H) {
                        if (null === f) return document.createTextNode(R);
                        H = document.createElementNS(B, f, R.is && R), Z = null, de = !1
                    }
                    if (null === f) q === R || de && H.data === R || (H.data = R);
                    else {
                        if (Z = Z && t.call(H.childNodes), q = X.props || n, !de && null != Z)
                            for (q = {}, ue = 0; ue < H.attributes.length; ue++) q[(me = H.attributes[ue]).name] = me.value;
                        for (ue in q)
                            if (me = q[ue], "children" != ue)
                                if ("dangerouslySetInnerHTML" == ue) ie = me;
                                else if ("key" !== ue && !(ue in R)) {
                            if ("value" == ue && "defaultValue" in R || "checked" == ue && "defaultChecked" in R) continue;
                            T(H, ue, null, me, B)
                        }
                        for (ue in R) me = R[ue], "children" == ue ? ge = me : "dangerouslySetInnerHTML" == ue ? we = me : "value" == ue ? ve = me : "checked" == ue ? G = me : "key" === ue || de && "function" != typeof me || q[ue] === me || T(H, ue, me, q[ue], B);
                        if (we) de || ie && (we.__html === ie.__html || we.__html === H.innerHTML) || (H.innerHTML = we.__html), V.__k = [];
                        else if (ie && (H.innerHTML = ""), le(H, _(ge) ? ge : [ge], V, X, L, "foreignObject" === f ? "http://www.w3.org/1999/xhtml" : B, Z, re, Z ? Z[0] : X.__k && W(X, 0), de, he), null != Z)
                            for (ue = Z.length; ue--;) null != Z[ue] && M(Z[ue]);
                        de || (ue = "value", void 0 !== ve && (ve !== H[ue] || "progress" === f && !ve || "option" === f && ve !== q[ue]) && T(H, ue, ve, q[ue], B), ue = "checked", void 0 !== G && G !== H[ue] && T(H, ue, G, q[ue], B))
                    }
                    return H
                }(X.__e, V, X, L, B, Z, re, he, ue);
                (we = y.diffed) && we(V)
            }

            function U(H, V, X) {
                V.__d = void 0;
                for (var L = 0; L < X.length; L++) S(X[L], X[++L], X[++L]);
                y.__c && y.__c(V, H), H.some(function(B) {
                    try {
                        H = B.__h, B.__h = [], H.some(function(Z) {
                            Z.call(B)
                        })
                    } catch (Z) {
                        y.__e(Z, B.__v)
                    }
                })
            }

            function S(H, V, X) {
                try {
                    if ("function" == typeof H) {
                        var L = "function" == typeof H.__u;
                        L && H.__u(), L && null == V || (H.__u = H(V))
                    } else H.current = V
                } catch (B) {
                    y.__e(B, X)
                }
            }

            function j(H, V, X) {
                var L, B;
                if (y.unmount && y.unmount(H), (L = H.ref) && (L.current && L.current !== H.__e || S(L, null, V)), null != (L = H.__c)) {
                    if (L.componentWillUnmount) try {
                        L.componentWillUnmount()
                    } catch (Z) {
                        y.__e(Z, V)
                    }
                    L.base = L.__P = null
                }
                if (L = H.__k)
                    for (B = 0; B < L.length; B++) L[B] && j(L[B], V, X || "function" != typeof H.type);
                X || null == H.__e || M(H.__e), H.__c = H.__ = H.__e = H.__d = void 0
            }

            function ae(H, V, X) {
                return this.constructor(H, X)
            }

            function oe(H, V, X) {
                var L, B, Z, re;
                y.__ && y.__(H, V), B = (L = "function" == typeof X) ? null : X && X.__k || V.__k, Z = [], re = [], O(V, H = (!L && X || V).__k = w(N, null, [H]), B || n, n, V.namespaceURI, !L && X ? [X] : B ? null : V.firstChild ? t.call(V.childNodes) : null, Z, !L && X ? X : B ? B.__e : V.firstChild, L, re), U(Z, H, re)
            }

            function ce(H, V) {
                oe(H, V, ce)
            }

            function Y(H, V, X) {
                var L, B, Z, re, de = E({}, H.props);
                for (Z in H.type && H.type.defaultProps && (re = H.type.defaultProps), V) "key" == Z ? L = V[Z] : "ref" == Z ? B = V[Z] : de[Z] = void 0 === V[Z] && void 0 !== re ? re[Z] : V[Z];
                return arguments.length > 2 && (de.children = arguments.length > 3 ? t.call(arguments, 2) : X), A(H.type, de, L || H.key, B || H.ref, null)
            }

            function Q(H, V) {
                var X = {
                    __c: V = "__cC" + s++,
                    __: H,
                    Consumer: function(L, B) {
                        return L.children(B)
                    },
                    Provider: function(L) {
                        var B, Z;
                        return this.getChildContext || (B = [], (Z = {})[V] = this, this.getChildContext = function() {
                            return Z
                        }, this.componentWillUnmount = function() {
                            B = null
                        }, this.shouldComponentUpdate = function(re) {
                            this.props.value !== re.value && B.some(function(de) {
                                de.__e = !0, ne(de)
                            })
                        }, this.sub = function(re) {
                            B.push(re);
                            var de = re.componentWillUnmount;
                            re.componentWillUnmount = function() {
                                B && B.splice(B.indexOf(re), 1), de && de.call(re)
                            }
                        }), L.children
                    }
                };
                return X.Provider.__ = X.Consumer.contextType = X
            }
            t = u.slice, y = {
                __e: function(H, V, X, L) {
                    for (var B, Z, re; V = V.__;)
                        if ((B = V.__c) && !B.__) try {
                            if ((Z = B.constructor) && null != Z.getDerivedStateFromError && (B.setState(Z.getDerivedStateFromError(H)), re = B.__d), null != B.componentDidCatch && (B.componentDidCatch(H, L || {}), re = B.__d), re) return B.__E = B
                        } catch (de) {
                            H = de
                        }
                    throw H
                }
            }, c = 0, d = function(H) {
                return null != H && null == H.constructor
            }, z.prototype.setState = function(H, V) {
                var X;
                X = null != this.__s && this.__s !== this.state ? this.__s : this.__s = E({}, this.state), "function" == typeof H && (H = H(E({}, X), this.props)), H && E(X, H), null != H && this.__v && (V && this._sb.push(V), ne(this))
            }, z.prototype.forceUpdate = function(H) {
                this.__v && (this.__e = !0, H && this.__h.push(H), ne(this))
            }, z.prototype.render = N, i = [], e = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, a = function(H, V) {
                return H.__v.__b - V.__v.__b
            }, se.__r = 0, g = 0, l = k(!1), v = k(!0), s = 0
        },
        491: ($, o, p) => {
            "use strict";
            p.r(o), p.d(o, {
                useCallback: () => z,
                useContext: () => W,
                useDebugValue: () => K,
                useEffect: () => M,
                useErrorBoundary: () => ne,
                useId: () => se,
                useImperativeHandle: () => x,
                useLayoutEffect: () => w,
                useMemo: () => N,
                useReducer: () => E,
                useRef: () => A,
                useState: () => _
            });
            var y, c, d, i, t = p(4354),
                r = 0,
                e = [],
                a = t.options,
                g = a.__b,
                l = a.__r,
                v = a.diffed,
                s = a.__c,
                n = a.unmount,
                u = a.__;

            function m(k, O) {
                a.__h && a.__h(c, k, r || O), r = 0;
                var U = c.__H || (c.__H = {
                    __: [],
                    __h: []
                });
                return k >= U.__.length && U.__.push({}), U.__[k]
            }

            function _(k) {
                return r = 1, E(T, k)
            }

            function E(k, O, U) {
                var P = m(y++, 2);
                if (P.t = k, !P.__c && (P.__ = [U ? U(O) : T(void 0, O), function(oe) {
                        var ce = P.__N ? P.__N[0] : P.__[0],
                            Y = P.t(ce, oe);
                        ce !== Y && (P.__N = [Y, P.__[1]], P.__c.setState({}))
                    }], P.__c = c, !c.u)) {
                    var S = function(oe, ce, Y) {
                        if (!P.__c.__H) return !0;
                        var Q = P.__c.__H.__.filter(function(V) {
                            return !!V.__c
                        });
                        if (Q.every(function(V) {
                                return !V.__N
                            })) return !j || j.call(this, oe, ce, Y);
                        var H = !1;
                        return Q.forEach(function(V) {
                            if (V.__N) {
                                var X = V.__[0];
                                V.__ = V.__N, V.__N = void 0, X !== V.__[0] && (H = !0)
                            }
                        }), !(!H && P.__c.props === oe) && (!j || j.call(this, oe, ce, Y))
                    };
                    c.u = !0;
                    var j = c.shouldComponentUpdate,
                        ae = c.componentWillUpdate;
                    c.componentWillUpdate = function(oe, ce, Y) {
                        if (this.__e) {
                            var Q = j;
                            j = void 0, S(oe, ce, Y), j = Q
                        }
                        ae && ae.call(this, oe, ce, Y)
                    }, c.shouldComponentUpdate = S
                }
                return P.__N || P.__
            }

            function M(k, O) {
                var U = m(y++, 3);
                !a.__s && I(U.__H, O) && (U.__ = k, U.i = O, c.__H.__h.push(U))
            }

            function w(k, O) {
                var U = m(y++, 4);
                !a.__s && I(U.__H, O) && (U.__ = k, U.i = O, c.__h.push(U))
            }

            function A(k) {
                return r = 5, N(function() {
                    return {
                        current: k
                    }
                }, [])
            }

            function x(k, O, U) {
                r = 6, w(function() {
                    return "function" == typeof k ? (k(O()), function() {
                        return k(null)
                    }) : k ? (k.current = O(), function() {
                        return k.current = null
                    }) : void 0
                }, null == U ? U : U.concat(k))
            }

            function N(k, O) {
                var U = m(y++, 7);
                return I(U.__H, O) && (U.__ = k(), U.__H = O, U.__h = k), U.__
            }

            function z(k, O) {
                return r = 8, N(function() {
                    return k
                }, O)
            }

            function W(k) {
                var O = c.context[k.__c],
                    U = m(y++, 9);
                return U.c = k, O ? (null == U.__ && (U.__ = !0, O.sub(c)), O.props.value) : k.__
            }

            function K(k, O) {
                a.useDebugValue && a.useDebugValue(O ? O(k) : k)
            }

            function ne(k) {
                var O = m(y++, 10),
                    U = _();
                return O.__ = k, c.componentDidCatch || (c.componentDidCatch = function(P, S) {
                    O.__ && O.__(P, S), U[1](P)
                }), [U[0], function() {
                    U[1](void 0)
                }]
            }

            function se() {
                var k = m(y++, 11);
                if (!k.__) {
                    for (var O = c.__v; null !== O && !O.__m && null !== O.__;) O = O.__;
                    var U = O.__m || (O.__m = [0, 0]);
                    k.__ = "P" + U[0] + "-" + U[1]++
                }
                return k.__
            }

            function le() {
                for (var k; k = e.shift();)
                    if (k.__P && k.__H) try {
                        k.__H.__h.forEach(h), k.__H.__h.forEach(C), k.__H.__h = []
                    } catch (O) {
                        k.__H.__h = [], a.__e(O, k.__v)
                    }
            }
            a.__b = function(k) {
                c = null, g && g(k)
            }, a.__ = function(k, O) {
                k && O.__k && O.__k.__m && (k.__m = O.__k.__m), u && u(k, O)
            }, a.__r = function(k) {
                l && l(k), y = 0;
                var O = (c = k.__c).__H;
                O && (d === c ? (O.__h = [], c.__h = [], O.__.forEach(function(U) {
                    U.__N && (U.__ = U.__N), U.i = U.__N = void 0
                })) : (O.__h.forEach(h), O.__h.forEach(C), O.__h = [], y = 0)), d = c
            }, a.diffed = function(k) {
                v && v(k);
                var O = k.__c;
                O && O.__H && (O.__H.__h.length && (1 !== e.push(O) && i === a.requestAnimationFrame || ((i = a.requestAnimationFrame) || D)(le)), O.__H.__.forEach(function(U) {
                    U.i && (U.__H = U.i), U.i = void 0
                })), d = c = null
            }, a.__c = function(k, O) {
                O.some(function(U) {
                    try {
                        U.__h.forEach(h), U.__h = U.__h.filter(function(P) {
                            return !P.__ || C(P)
                        })
                    } catch (P) {
                        O.some(function(S) {
                            S.__h && (S.__h = [])
                        }), O = [], a.__e(P, U.__v)
                    }
                }), s && s(k, O)
            }, a.unmount = function(k) {
                n && n(k);
                var O, U = k.__c;
                U && U.__H && (U.__H.__.forEach(function(P) {
                    try {
                        h(P)
                    } catch (S) {
                        O = S
                    }
                }), U.__H = void 0, O && a.__e(O, U.__v))
            };
            var pe = "function" == typeof requestAnimationFrame;

            function D(k) {
                var O, U = function() {
                        clearTimeout(P), pe && cancelAnimationFrame(O), setTimeout(k)
                    },
                    P = setTimeout(U, 100);
                pe && (O = requestAnimationFrame(U))
            }

            function h(k) {
                var O = c,
                    U = k.__c;
                "function" == typeof U && (k.__c = void 0, U()), c = O
            }

            function C(k) {
                var O = c;
                k.__c = k.__(), c = O
            }

            function I(k, O) {
                return !k || k.length !== O.length || O.some(function(U, P) {
                    return U !== k[P]
                })
            }

            function T(k, O) {
                return "function" == typeof O ? O(k) : O
            }
        },
        7218: $ => {
            "use strict";
            var p = {};

            function t(r, e, a) {
                a || (a = Error);
                var l = function(v) {
                    function s(n, u, m) {
                        return v.call(this, function g(v, s, n) {
                            return "string" == typeof e ? e : e(v, s, n)
                        }(n, u, m)) || this
                    }
                    return function o(r, e) {
                        r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.__proto__ = e
                    }(s, v), s
                }(a);
                l.prototype.name = a.name, l.prototype.code = r, p[r] = l
            }

            function y(r, e) {
                if (Array.isArray(r)) {
                    var a = r.length;
                    return r = r.map(function(g) {
                        return String(g)
                    }), a > 2 ? "one of ".concat(e, " ").concat(r.slice(0, a - 1).join(", "), ", or ") + r[a - 1] : 2 === a ? "one of ".concat(e, " ").concat(r[0], " or ").concat(r[1]) : "of ".concat(e, " ").concat(r[0])
                }
                return "of ".concat(e, " ").concat(String(r))
            }
            t("ERR_INVALID_OPT_VALUE", function(r, e) {
                return 'The value "' + e + '" is invalid for option "' + r + '"'
            }, TypeError), t("ERR_INVALID_ARG_TYPE", function(r, e, a) {
                var g, l;
                if ("string" == typeof e && function c(r, e, a) {
                        return r.substr(!a || a < 0 ? 0 : +a, e.length) === e
                    }(e, "not ") ? (g = "must not be", e = e.replace(/^not /, "")) : g = "must be", function d(r, e, a) {
                        return (void 0 === a || a > r.length) && (a = r.length), r.substring(a - e.length, a) === e
                    }(r, " argument")) l = "The ".concat(r, " ").concat(g, " ").concat(y(e, "type"));
                else {
                    var v = function i(r, e, a) {
                        return "number" != typeof a && (a = 0), !(a + e.length > r.length) && -1 !== r.indexOf(e, a)
                    }(r, ".") ? "property" : "argument";
                    l = 'The "'.concat(r, '" ').concat(v, " ").concat(g, " ").concat(y(e, "type"))
                }
                return l + ". Received type ".concat(typeof a)
            }, TypeError), t("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), t("ERR_METHOD_NOT_IMPLEMENTED", function(r) {
                return "The " + r + " method is not implemented"
            }), t("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), t("ERR_STREAM_DESTROYED", function(r) {
                return "Cannot call " + r + " after a stream was destroyed"
            }), t("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), t("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), t("ERR_STREAM_WRITE_AFTER_END", "write after end"), t("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), t("ERR_UNKNOWN_ENCODING", function(r) {
                return "Unknown encoding: " + r
            }, TypeError), t("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), $.exports.q = p
        },
        247: ($, o, p) => {
            "use strict";
            var t = Object.keys || function(l) {
                var v = [];
                for (var s in l) v.push(s);
                return v
            };
            $.exports = e;
            var y = p(309),
                c = p(6563);
            p(6698)(e, y);
            for (var d = t(c.prototype), i = 0; i < d.length; i++) {
                var r = d[i];
                e.prototype[r] || (e.prototype[r] = c.prototype[r])
            }

            function e(l) {
                if (!(this instanceof e)) return new e(l);
                y.call(this, l), c.call(this, l), this.allowHalfOpen = !0, l && (!1 === l.readable && (this.readable = !1), !1 === l.writable && (this.writable = !1), !1 === l.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", a)))
            }

            function a() {
                this._writableState.ended || process.nextTick(g, this)
            }

            function g(l) {
                l.end()
            }
            Object.defineProperty(e.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(e.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(e.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(e.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(v) {
                    void 0 === this._readableState || void 0 === this._writableState || (this._readableState.destroyed = v, this._writableState.destroyed = v)
                }
            })
        },
        5096: ($, o, p) => {
            "use strict";
            $.exports = y;
            var t = p(6307);

            function y(c) {
                if (!(this instanceof y)) return new y(c);
                t.call(this, c)
            }
            p(6698)(y, t), y.prototype._transform = function(c, d, i) {
                i(null, c)
            }
        },
        309: ($, o, p) => {
            "use strict";
            var t;
            $.exports = se, se.ReadableState = ne, p(2016);
            var l, c = function(B, Z) {
                    return B.listeners(Z).length
                },
                d = p(8240),
                i = p(9007).Buffer,
                r = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {},
                g = p(4616);
            l = g && g.debuglog ? g.debuglog("stream") : function() {};
            var A, x, N, v = p(2960),
                s = p(5601),
                u = p(8782).getHighWaterMark,
                m = p(7218).q,
                _ = m.ERR_INVALID_ARG_TYPE,
                E = m.ERR_STREAM_PUSH_AFTER_EOF,
                M = m.ERR_METHOD_NOT_IMPLEMENTED,
                w = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            p(6698)(se, d);
            var z = s.errorOrDestroy,
                W = ["error", "close", "destroy", "pause", "resume"];

            function ne(L, B, Z) {
                t = t || p(247), "boolean" != typeof Z && (Z = B instanceof t), this.objectMode = !!(L = L || {}).objectMode, Z && (this.objectMode = this.objectMode || !!L.readableObjectMode), this.highWaterMark = u(this, L, "readableHighWaterMark", Z), this.buffer = new v, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== L.emitClose, this.autoDestroy = !!L.autoDestroy, this.destroyed = !1, this.defaultEncoding = L.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, L.encoding && (A || (A = p(2024).s), this.decoder = new A(L.encoding), this.encoding = L.encoding)
            }

            function se(L) {
                if (t = t || p(247), !(this instanceof se)) return new se(L);
                this._readableState = new ne(L, this, this instanceof t), this.readable = !0, L && ("function" == typeof L.read && (this._read = L.read), "function" == typeof L.destroy && (this._destroy = L.destroy)), d.call(this)
            }

            function le(L, B, Z, re, de) {
                l("readableAddChunk", B);
                var ue, he = L._readableState;
                if (null === B) he.reading = !1,
                    function T(L, B) {
                        if (l("onEofChunk"), !B.ended) {
                            if (B.decoder) {
                                var Z = B.decoder.end();
                                Z && Z.length && (B.buffer.push(Z), B.length += B.objectMode ? 1 : Z.length)
                            }
                            B.ended = !0, B.sync ? k(L) : (B.needReadable = !1, B.emittedReadable || (B.emittedReadable = !0, O(L)))
                        }
                    }(L, he);
                else if (de || (ue = function D(L, B) {
                        var Z;
                        return ! function a(L) {
                            return i.isBuffer(L) || L instanceof r
                        }(B) && "string" != typeof B && void 0 !== B && !L.objectMode && (Z = new _("chunk", ["string", "Buffer", "Uint8Array"], B)), Z
                    }(he, B)), ue) z(L, ue);
                else if (he.objectMode || B && B.length > 0)
                    if ("string" != typeof B && !he.objectMode && Object.getPrototypeOf(B) !== i.prototype && (B = function e(L) {
                            return i.from(L)
                        }(B)), re) he.endEmitted ? z(L, new w) : pe(L, he, B, !0);
                    else if (he.ended) z(L, new E);
                else {
                    if (he.destroyed) return !1;
                    he.reading = !1, he.decoder && !Z ? (B = he.decoder.write(B), he.objectMode || 0 !== B.length ? pe(L, he, B, !1) : U(L, he)) : pe(L, he, B, !1)
                } else re || (he.reading = !1, U(L, he));
                return !he.ended && (he.length < he.highWaterMark || 0 === he.length)
            }

            function pe(L, B, Z, re) {
                B.flowing && 0 === B.length && !B.sync ? (B.awaitDrain = 0, L.emit("data", Z)) : (B.length += B.objectMode ? 1 : Z.length, re ? B.buffer.unshift(Z) : B.buffer.push(Z), B.needReadable && k(L)), U(L, B)
            }
            Object.defineProperty(se.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(B) {
                    this._readableState && (this._readableState.destroyed = B)
                }
            }), se.prototype.destroy = s.destroy, se.prototype._undestroy = s.undestroy, se.prototype._destroy = function(L, B) {
                B(L)
            }, se.prototype.push = function(L, B) {
                var re, Z = this._readableState;
                return Z.objectMode ? re = !0 : "string" == typeof L && ((B = B || Z.defaultEncoding) !== Z.encoding && (L = i.from(L, B), B = ""), re = !0), le(this, L, B, !1, re)
            }, se.prototype.unshift = function(L) {
                return le(this, L, null, !0, !1)
            }, se.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, se.prototype.setEncoding = function(L) {
                A || (A = p(2024).s);
                var B = new A(L);
                this._readableState.decoder = B, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var Z = this._readableState.buffer.head, re = ""; null !== Z;) re += B.write(Z.data), Z = Z.next;
                return this._readableState.buffer.clear(), "" !== re && this._readableState.buffer.push(re), this._readableState.length = re.length, this
            };
            var h = 1073741824;

            function I(L, B) {
                return L <= 0 || 0 === B.length && B.ended ? 0 : B.objectMode ? 1 : L != L ? B.flowing && B.length ? B.buffer.head.data.length : B.length : (L > B.highWaterMark && (B.highWaterMark = function C(L) {
                    return L >= h ? L = h : (L--, L |= L >>> 1, L |= L >>> 2, L |= L >>> 4, L |= L >>> 8, L |= L >>> 16, L++), L
                }(L)), L <= B.length ? L : B.ended ? B.length : (B.needReadable = !0, 0))
            }

            function k(L) {
                var B = L._readableState;
                l("emitReadable", B.needReadable, B.emittedReadable), B.needReadable = !1, B.emittedReadable || (l("emitReadable", B.flowing), B.emittedReadable = !0, process.nextTick(O, L))
            }

            function O(L) {
                var B = L._readableState;
                l("emitReadable_", B.destroyed, B.length, B.ended), !B.destroyed && (B.length || B.ended) && (L.emit("readable"), B.emittedReadable = !1), B.needReadable = !B.flowing && !B.ended && B.length <= B.highWaterMark, Y(L)
            }

            function U(L, B) {
                B.readingMore || (B.readingMore = !0, process.nextTick(P, L, B))
            }

            function P(L, B) {
                for (; !B.reading && !B.ended && (B.length < B.highWaterMark || B.flowing && 0 === B.length);) {
                    var Z = B.length;
                    if (l("maybeReadMore read 0"), L.read(0), Z === B.length) break
                }
                B.readingMore = !1
            }

            function j(L) {
                var B = L._readableState;
                B.readableListening = L.listenerCount("readable") > 0, B.resumeScheduled && !B.paused ? B.flowing = !0 : L.listenerCount("data") > 0 && L.resume()
            }

            function ae(L) {
                l("readable nexttick read 0"), L.read(0)
            }

            function ce(L, B) {
                l("resume", B.reading), B.reading || L.read(0), B.resumeScheduled = !1, L.emit("resume"), Y(L), B.flowing && !B.reading && L.read(0)
            }

            function Y(L) {
                var B = L._readableState;
                for (l("flow", B.flowing); B.flowing && null !== L.read(););
            }

            function Q(L, B) {
                return 0 === B.length ? null : (B.objectMode ? Z = B.buffer.shift() : !L || L >= B.length ? (Z = B.decoder ? B.buffer.join("") : 1 === B.buffer.length ? B.buffer.first() : B.buffer.concat(B.length), B.buffer.clear()) : Z = B.buffer.consume(L, B.decoder), Z);
                var Z
            }

            function H(L) {
                var B = L._readableState;
                l("endReadable", B.endEmitted), B.endEmitted || (B.ended = !0, process.nextTick(V, B, L))
            }

            function V(L, B) {
                if (l("endReadableNT", L.endEmitted, L.length), !L.endEmitted && 0 === L.length && (L.endEmitted = !0, B.readable = !1, B.emit("end"), L.autoDestroy)) {
                    var Z = B._writableState;
                    (!Z || Z.autoDestroy && Z.finished) && B.destroy()
                }
            }

            function X(L, B) {
                for (var Z = 0, re = L.length; Z < re; Z++)
                    if (L[Z] === B) return Z;
                return -1
            }
            se.prototype.read = function(L) {
                l("read", L), L = parseInt(L, 10);
                var B = this._readableState,
                    Z = L;
                if (0 !== L && (B.emittedReadable = !1), 0 === L && B.needReadable && ((0 !== B.highWaterMark ? B.length >= B.highWaterMark : B.length > 0) || B.ended)) return l("read: emitReadable", B.length, B.ended), 0 === B.length && B.ended ? H(this) : k(this), null;
                if (0 === (L = I(L, B)) && B.ended) return 0 === B.length && H(this), null;
                var de, re = B.needReadable;
                return l("need readable", re), (0 === B.length || B.length - L < B.highWaterMark) && l("length less than watermark", re = !0), B.ended || B.reading ? l("reading or ended", re = !1) : re && (l("do read"), B.reading = !0, B.sync = !0, 0 === B.length && (B.needReadable = !0), this._read(B.highWaterMark), B.sync = !1, B.reading || (L = I(Z, B))), null === (de = L > 0 ? Q(L, B) : null) ? (B.needReadable = B.length <= B.highWaterMark, L = 0) : (B.length -= L, B.awaitDrain = 0), 0 === B.length && (B.ended || (B.needReadable = !0), Z !== L && B.ended && H(this)), null !== de && this.emit("data", de), de
            }, se.prototype._read = function(L) {
                z(this, new M("_read()"))
            }, se.prototype.pipe = function(L, B) {
                var Z = this,
                    re = this._readableState;
                switch (re.pipesCount) {
                    case 0:
                        re.pipes = L;
                        break;
                    case 1:
                        re.pipes = [re.pipes, L];
                        break;
                    default:
                        re.pipes.push(L)
                }
                re.pipesCount += 1, l("pipe count=%d opts=%j", re.pipesCount, B);
                var he = B && !1 === B.end || L === process.stdout || L === process.stderr ? f : we;

                function we() {
                    l("onend"), L.end()
                }
                re.endEmitted ? process.nextTick(he) : Z.once("end", he), L.on("unpipe", function ue(b, F) {
                    l("onunpipe"), b === Z && F && !1 === F.hasUnpiped && (F.hasUnpiped = !0, function me() {
                        l("cleanup"), L.removeListener("close", q), L.removeListener("finish", R), L.removeListener("drain", ie), L.removeListener("error", G), L.removeListener("unpipe", ue), Z.removeListener("end", we), Z.removeListener("end", f), Z.removeListener("data", ve), ge = !0, re.awaitDrain && (!L._writableState || L._writableState.needDrain) && ie()
                    }())
                });
                var ie = function S(L) {
                    return function() {
                        var Z = L._readableState;
                        l("pipeOnDrain", Z.awaitDrain), Z.awaitDrain && Z.awaitDrain--, 0 === Z.awaitDrain && c(L, "data") && (Z.flowing = !0, Y(L))
                    }
                }(Z);
                L.on("drain", ie);
                var ge = !1;

                function ve(b) {
                    l("ondata");
                    var F = L.write(b);
                    l("dest.write", F), !1 === F && ((1 === re.pipesCount && re.pipes === L || re.pipesCount > 1 && -1 !== X(re.pipes, L)) && !ge && (l("false write response, pause", re.awaitDrain), re.awaitDrain++), Z.pause())
                }

                function G(b) {
                    l("onerror", b), f(), L.removeListener("error", G), 0 === c(L, "error") && z(L, b)
                }

                function q() {
                    L.removeListener("finish", R), f()
                }

                function R() {
                    l("onfinish"), L.removeListener("close", q), f()
                }

                function f() {
                    l("unpipe"), Z.unpipe(L)
                }
                return Z.on("data", ve),
                    function K(L, B, Z) {
                        if ("function" == typeof L.prependListener) return L.prependListener(B, Z);
                        L._events && L._events[B] ? Array.isArray(L._events[B]) ? L._events[B].unshift(Z) : L._events[B] = [Z, L._events[B]] : L.on(B, Z)
                    }(L, "error", G), L.once("close", q), L.once("finish", R), L.emit("pipe", Z), re.flowing || (l("pipe resume"), Z.resume()), L
            }, se.prototype.unpipe = function(L) {
                var B = this._readableState,
                    Z = {
                        hasUnpiped: !1
                    };
                if (0 === B.pipesCount) return this;
                if (1 === B.pipesCount) return L && L !== B.pipes || (L || (L = B.pipes), B.pipes = null, B.pipesCount = 0, B.flowing = !1, L && L.emit("unpipe", this, Z)), this;
                if (!L) {
                    var re = B.pipes,
                        de = B.pipesCount;
                    B.pipes = null, B.pipesCount = 0, B.flowing = !1;
                    for (var he = 0; he < de; he++) re[he].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var ue = X(B.pipes, L);
                return -1 === ue || (B.pipes.splice(ue, 1), B.pipesCount -= 1, 1 === B.pipesCount && (B.pipes = B.pipes[0]), L.emit("unpipe", this, Z)), this
            }, se.prototype.addListener = se.prototype.on = function(L, B) {
                var Z = d.prototype.on.call(this, L, B),
                    re = this._readableState;
                return "data" === L ? (re.readableListening = this.listenerCount("readable") > 0, !1 !== re.flowing && this.resume()) : "readable" === L && !re.endEmitted && !re.readableListening && (re.readableListening = re.needReadable = !0, re.flowing = !1, re.emittedReadable = !1, l("on readable", re.length, re.reading), re.length ? k(this) : re.reading || process.nextTick(ae, this)), Z
            }, se.prototype.removeListener = function(L, B) {
                var Z = d.prototype.removeListener.call(this, L, B);
                return "readable" === L && process.nextTick(j, this), Z
            }, se.prototype.removeAllListeners = function(L) {
                var B = d.prototype.removeAllListeners.apply(this, arguments);
                return ("readable" === L || void 0 === L) && process.nextTick(j, this), B
            }, se.prototype.resume = function() {
                var L = this._readableState;
                return L.flowing || (l("resume"), L.flowing = !L.readableListening, function oe(L, B) {
                    B.resumeScheduled || (B.resumeScheduled = !0, process.nextTick(ce, L, B))
                }(this, L)), L.paused = !1, this
            }, se.prototype.pause = function() {
                return l("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (l("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, se.prototype.wrap = function(L) {
                var B = this,
                    Z = this._readableState,
                    re = !1;
                for (var de in L.on("end", function() {
                        if (l("wrapped end"), Z.decoder && !Z.ended) {
                            var ue = Z.decoder.end();
                            ue && ue.length && B.push(ue)
                        }
                        B.push(null)
                    }), L.on("data", function(ue) {
                        l("wrapped data"), Z.decoder && (ue = Z.decoder.write(ue)), Z.objectMode && null == ue || !(Z.objectMode || ue && ue.length) || B.push(ue) || (re = !0, L.pause())
                    }), L) void 0 === this[de] && "function" == typeof L[de] && (this[de] = function(we) {
                    return function() {
                        return L[we].apply(L, arguments)
                    }
                }(de));
                for (var he = 0; he < W.length; he++) L.on(W[he], this.emit.bind(this, W[he]));
                return this._read = function(ue) {
                    l("wrapped _read", ue), re && (re = !1, L.resume())
                }, this
            }, "function" == typeof Symbol && (se.prototype[Symbol.asyncIterator] = function() {
                return void 0 === x && (x = p(457)), x(this)
            }), Object.defineProperty(se.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(se.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(se.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(B) {
                    this._readableState && (this._readableState.flowing = B)
                }
            }), se._fromList = Q, Object.defineProperty(se.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (se.from = function(L, B) {
                return void 0 === N && (N = p(3335)), N(se, L, B)
            })
        },
        6307: ($, o, p) => {
            "use strict";
            $.exports = a;
            var t = p(7218).q,
                y = t.ERR_METHOD_NOT_IMPLEMENTED,
                c = t.ERR_MULTIPLE_CALLBACK,
                d = t.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                i = t.ERR_TRANSFORM_WITH_LENGTH_0,
                r = p(247);

            function e(v, s) {
                var n = this._transformState;
                n.transforming = !1;
                var u = n.writecb;
                if (null === u) return this.emit("error", new c);
                n.writechunk = null, n.writecb = null, null != s && this.push(s), u(v);
                var m = this._readableState;
                m.reading = !1, (m.needReadable || m.length < m.highWaterMark) && this._read(m.highWaterMark)
            }

            function a(v) {
                if (!(this instanceof a)) return new a(v);
                r.call(this, v), this._transformState = {
                    afterTransform: e.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, v && ("function" == typeof v.transform && (this._transform = v.transform), "function" == typeof v.flush && (this._flush = v.flush)), this.on("prefinish", g)
            }

            function g() {
                var v = this;
                "function" != typeof this._flush || this._readableState.destroyed ? l(this, null, null) : this._flush(function(s, n) {
                    l(v, s, n)
                })
            }

            function l(v, s, n) {
                if (s) return v.emit("error", s);
                if (null != n && v.push(n), v._writableState.length) throw new i;
                if (v._transformState.transforming) throw new d;
                return v.push(null)
            }
            p(6698)(a, r), a.prototype.push = function(v, s) {
                return this._transformState.needTransform = !1, r.prototype.push.call(this, v, s)
            }, a.prototype._transform = function(v, s, n) {
                n(new y("_transform()"))
            }, a.prototype._write = function(v, s, n) {
                var u = this._transformState;
                if (u.writecb = n, u.writechunk = v, u.writeencoding = s, !u.transforming) {
                    var m = this._readableState;
                    (u.needTransform || m.needReadable || m.length < m.highWaterMark) && this._read(m.highWaterMark)
                }
            }, a.prototype._read = function(v) {
                var s = this._transformState;
                null === s.writechunk || s.transforming ? s.needTransform = !0 : (s.transforming = !0, this._transform(s.writechunk, s.writeencoding, s.afterTransform))
            }, a.prototype._destroy = function(v, s) {
                r.prototype._destroy.call(this, v, function(n) {
                    s(n)
                })
            }
        },
        6563: ($, o, p) => {
            "use strict";

            function y(Y) {
                var Q = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function ce(Y, Q, H) {
                        var V = Y.entry;
                        for (Y.entry = null; V;) {
                            var X = V.callback;
                            Q.pendingcb--, X(H), V = V.next
                        }
                        Q.corkedRequestsFree.next = Y
                    }(Q, Y)
                }
            }
            var c;
            $.exports = ne, ne.WritableState = W;
            var K, d = {
                    deprecate: p(496)
                },
                i = p(8240),
                r = p(9007).Buffer,
                e = (typeof global < "u" ? global : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {},
                l = p(5601),
                s = p(8782).getHighWaterMark,
                n = p(7218).q,
                u = n.ERR_INVALID_ARG_TYPE,
                m = n.ERR_METHOD_NOT_IMPLEMENTED,
                _ = n.ERR_MULTIPLE_CALLBACK,
                E = n.ERR_STREAM_CANNOT_PIPE,
                M = n.ERR_STREAM_DESTROYED,
                w = n.ERR_STREAM_NULL_VALUES,
                A = n.ERR_STREAM_WRITE_AFTER_END,
                x = n.ERR_UNKNOWN_ENCODING,
                N = l.errorOrDestroy;

            function z() {}

            function W(Y, Q, H) {
                c = c || p(247), "boolean" != typeof H && (H = Q instanceof c), this.objectMode = !!(Y = Y || {}).objectMode, H && (this.objectMode = this.objectMode || !!Y.writableObjectMode), this.highWaterMark = s(this, Y, "writableHighWaterMark", H), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1, this.decodeStrings = !(!1 === Y.decodeStrings), this.defaultEncoding = Y.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(X) {
                    ! function T(Y, Q) {
                        var H = Y._writableState,
                            V = H.sync,
                            X = H.writecb;
                        if ("function" != typeof X) throw new _;
                        if (function I(Y) {
                                Y.writing = !1, Y.writecb = null, Y.length -= Y.writelen, Y.writelen = 0
                            }(H), Q) ! function C(Y, Q, H, V, X) {
                            --Q.pendingcb, H ? (process.nextTick(X, V), process.nextTick(ae, Y, Q), Y._writableState.errorEmitted = !0, N(Y, V)) : (X(V), Y._writableState.errorEmitted = !0, N(Y, V), ae(Y, Q))
                        }(Y, H, V, Q, X);
                        else {
                            var L = P(H) || Y.destroyed;
                            !L && !H.corked && !H.bufferProcessing && H.bufferedRequest && U(Y, H), V ? process.nextTick(k, Y, H, L, X) : k(Y, H, L, X)
                        }
                    }(Q, X)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== Y.emitClose, this.autoDestroy = !!Y.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new y(this)
            }

            function ne(Y) {
                var Q = this instanceof(c = c || p(247));
                if (!Q && !K.call(ne, this)) return new ne(Y);
                this._writableState = new W(Y, this, Q), this.writable = !0, Y && ("function" == typeof Y.write && (this._write = Y.write), "function" == typeof Y.writev && (this._writev = Y.writev), "function" == typeof Y.destroy && (this._destroy = Y.destroy), "function" == typeof Y.final && (this._final = Y.final)), i.call(this)
            }

            function h(Y, Q, H, V, X, L, B) {
                Q.writelen = V, Q.writecb = B, Q.writing = !0, Q.sync = !0, Q.destroyed ? Q.onwrite(new M("write")) : H ? Y._writev(X, Q.onwrite) : Y._write(X, L, Q.onwrite), Q.sync = !1
            }

            function k(Y, Q, H, V) {
                H || function O(Y, Q) {
                    0 === Q.length && Q.needDrain && (Q.needDrain = !1, Y.emit("drain"))
                }(Y, Q), Q.pendingcb--, V(), ae(Y, Q)
            }

            function U(Y, Q) {
                Q.bufferProcessing = !0;
                var H = Q.bufferedRequest;
                if (Y._writev && H && H.next) {
                    var X = new Array(Q.bufferedRequestCount),
                        L = Q.corkedRequestsFree;
                    L.entry = H;
                    for (var B = 0, Z = !0; H;) X[B] = H, H.isBuf || (Z = !1), H = H.next, B += 1;
                    X.allBuffers = Z, h(Y, Q, !0, Q.length, X, "", L.finish), Q.pendingcb++, Q.lastBufferedRequest = null, L.next ? (Q.corkedRequestsFree = L.next, L.next = null) : Q.corkedRequestsFree = new y(Q), Q.bufferedRequestCount = 0
                } else {
                    for (; H;) {
                        var re = H.chunk;
                        if (h(Y, Q, !1, Q.objectMode ? 1 : re.length, re, H.encoding, H.callback), H = H.next, Q.bufferedRequestCount--, Q.writing) break
                    }
                    null === H && (Q.lastBufferedRequest = null)
                }
                Q.bufferedRequest = H, Q.bufferProcessing = !1
            }

            function P(Y) {
                return Y.ending && 0 === Y.length && null === Y.bufferedRequest && !Y.finished && !Y.writing
            }

            function S(Y, Q) {
                Y._final(function(H) {
                    Q.pendingcb--, H && N(Y, H), Q.prefinished = !0, Y.emit("prefinish"), ae(Y, Q)
                })
            }

            function ae(Y, Q) {
                var H = P(Q);
                if (H && (function j(Y, Q) {
                        !Q.prefinished && !Q.finalCalled && ("function" != typeof Y._final || Q.destroyed ? (Q.prefinished = !0, Y.emit("prefinish")) : (Q.pendingcb++, Q.finalCalled = !0, process.nextTick(S, Y, Q)))
                    }(Y, Q), 0 === Q.pendingcb && (Q.finished = !0, Y.emit("finish"), Q.autoDestroy))) {
                    var V = Y._readableState;
                    (!V || V.autoDestroy && V.endEmitted) && Y.destroy()
                }
                return H
            }
            p(6698)(ne, i), W.prototype.getBuffer = function() {
                    for (var Q = this.bufferedRequest, H = []; Q;) H.push(Q), Q = Q.next;
                    return H
                },
                function() {
                    try {
                        Object.defineProperty(W.prototype, "buffer", {
                            get: d.deprecate(function() {
                                return this.getBuffer()
                            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (K = Function.prototype[Symbol.hasInstance], Object.defineProperty(ne, Symbol.hasInstance, {
                    value: function(Q) {
                        return !!K.call(this, Q) || this === ne && Q && Q._writableState instanceof W
                    }
                })) : K = function(Q) {
                    return Q instanceof this
                }, ne.prototype.pipe = function() {
                    N(this, new E)
                }, ne.prototype.write = function(Y, Q, H) {
                    var V = this._writableState,
                        X = !1,
                        L = !V.objectMode && function g(Y) {
                            return r.isBuffer(Y) || Y instanceof e
                        }(Y);
                    return L && !r.isBuffer(Y) && (Y = function a(Y) {
                        return r.from(Y)
                    }(Y)), "function" == typeof Q && (H = Q, Q = null), L ? Q = "buffer" : Q || (Q = V.defaultEncoding), "function" != typeof H && (H = z), V.ending ? function se(Y, Q) {
                        var H = new A;
                        N(Y, H), process.nextTick(Q, H)
                    }(this, H) : (L || function le(Y, Q, H, V) {
                        var X;
                        return null === H ? X = new w : "string" != typeof H && !Q.objectMode && (X = new u("chunk", ["string", "Buffer"], H)), !X || (N(Y, X), process.nextTick(V, X), !1)
                    }(this, V, Y, H)) && (V.pendingcb++, X = function D(Y, Q, H, V, X, L) {
                        if (!H) {
                            var B = function pe(Y, Q, H) {
                                return !Y.objectMode && !1 !== Y.decodeStrings && "string" == typeof Q && (Q = r.from(Q, H)), Q
                            }(Q, V, X);
                            V !== B && (H = !0, X = "buffer", V = B)
                        }
                        var Z = Q.objectMode ? 1 : V.length;
                        Q.length += Z;
                        var re = Q.length < Q.highWaterMark;
                        if (re || (Q.needDrain = !0), Q.writing || Q.corked) {
                            var de = Q.lastBufferedRequest;
                            Q.lastBufferedRequest = {
                                chunk: V,
                                encoding: X,
                                isBuf: H,
                                callback: L,
                                next: null
                            }, de ? de.next = Q.lastBufferedRequest : Q.bufferedRequest = Q.lastBufferedRequest, Q.bufferedRequestCount += 1
                        } else h(Y, Q, !1, Z, V, X, L);
                        return re
                    }(this, V, L, Y, Q, H)), X
                }, ne.prototype.cork = function() {
                    this._writableState.corked++
                }, ne.prototype.uncork = function() {
                    var Y = this._writableState;
                    Y.corked && (Y.corked--, !Y.writing && !Y.corked && !Y.bufferProcessing && Y.bufferedRequest && U(this, Y))
                }, ne.prototype.setDefaultEncoding = function(Q) {
                    if ("string" == typeof Q && (Q = Q.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((Q + "").toLowerCase()) > -1)) throw new x(Q);
                    return this._writableState.defaultEncoding = Q, this
                }, Object.defineProperty(ne.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(ne.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), ne.prototype._write = function(Y, Q, H) {
                    H(new m("_write()"))
                }, ne.prototype._writev = null, ne.prototype.end = function(Y, Q, H) {
                    var V = this._writableState;
                    return "function" == typeof Y ? (H = Y, Y = null, Q = null) : "function" == typeof Q && (H = Q, Q = null), null != Y && this.write(Y, Q), V.corked && (V.corked = 1, this.uncork()), V.ending || function oe(Y, Q, H) {
                        Q.ending = !0, ae(Y, Q), H && (Q.finished ? process.nextTick(H) : Y.once("finish", H)), Q.ended = !0, Y.writable = !1
                    }(this, V, H), this
                }, Object.defineProperty(ne.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(ne.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(Q) {
                        this._writableState && (this._writableState.destroyed = Q)
                    }
                }), ne.prototype.destroy = l.destroy, ne.prototype._undestroy = l.undestroy, ne.prototype._destroy = function(Y, Q) {
                    Q(Y)
                }
        },
        457: ($, o, p) => {
            "use strict";
            var t;

            function y(A, x, N) {
                return x = function c(A) {
                    var x = function d(A, x) {
                        if ("object" != typeof A || null === A) return A;
                        var N = A[Symbol.toPrimitive];
                        if (void 0 !== N) {
                            var z = N.call(A, x || "default");
                            if ("object" != typeof z) return z;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === x ? String : Number)(A)
                    }(A, "string");
                    return "symbol" == typeof x ? x : String(x)
                }(x), x in A ? Object.defineProperty(A, x, {
                    value: N,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : A[x] = N, A
            }
            var i = p(4618),
                r = Symbol("lastResolve"),
                e = Symbol("lastReject"),
                a = Symbol("error"),
                g = Symbol("ended"),
                l = Symbol("lastPromise"),
                v = Symbol("handlePromise"),
                s = Symbol("stream");

            function n(A, x) {
                return {
                    value: A,
                    done: x
                }
            }

            function u(A) {
                var x = A[r];
                if (null !== x) {
                    var N = A[s].read();
                    null !== N && (A[l] = null, A[r] = null, A[e] = null, x(n(N, !1)))
                }
            }

            function m(A) {
                process.nextTick(u, A)
            }
            var E = Object.getPrototypeOf(function() {}),
                M = Object.setPrototypeOf((y(t = {
                    get stream() {
                        return this[s]
                    },
                    next: function() {
                        var x = this,
                            N = this[a];
                        if (null !== N) return Promise.reject(N);
                        if (this[g]) return Promise.resolve(n(void 0, !0));
                        if (this[s].destroyed) return new Promise(function(ne, se) {
                            process.nextTick(function() {
                                x[a] ? se(x[a]) : ne(n(void 0, !0))
                            })
                        });
                        var W, z = this[l];
                        if (z) W = new Promise(function _(A, x) {
                            return function(N, z) {
                                A.then(function() {
                                    x[g] ? N(n(void 0, !0)) : x[v](N, z)
                                }, z)
                            }
                        }(z, this));
                        else {
                            var K = this[s].read();
                            if (null !== K) return Promise.resolve(n(K, !1));
                            W = new Promise(this[v])
                        }
                        return this[l] = W, W
                    }
                }, Symbol.asyncIterator, function() {
                    return this
                }), y(t, "return", function() {
                    var x = this;
                    return new Promise(function(N, z) {
                        x[s].destroy(null, function(W) {
                            W ? z(W) : N(n(void 0, !0))
                        })
                    })
                }), t), E);
            $.exports = function(x) {
                var N, z = Object.create(M, (y(N = {}, s, {
                    value: x,
                    writable: !0
                }), y(N, r, {
                    value: null,
                    writable: !0
                }), y(N, e, {
                    value: null,
                    writable: !0
                }), y(N, a, {
                    value: null,
                    writable: !0
                }), y(N, g, {
                    value: x._readableState.endEmitted,
                    writable: !0
                }), y(N, v, {
                    value: function(K, ne) {
                        var se = z[s].read();
                        se ? (z[l] = null, z[r] = null, z[e] = null, K(n(se, !1))) : (z[r] = K, z[e] = ne)
                    },
                    writable: !0
                }), N));
                return z[l] = null, i(x, function(W) {
                    if (W && "ERR_STREAM_PREMATURE_CLOSE" !== W.code) {
                        var K = z[e];
                        return null !== K && (z[l] = null, z[r] = null, z[e] = null, K(W)), void(z[a] = W)
                    }
                    var ne = z[r];
                    null !== ne && (z[l] = null, z[r] = null, z[e] = null, ne(n(void 0, !0))), z[g] = !0
                }), x.on("readable", m.bind(null, z)), z
            }
        },
        2960: ($, o, p) => {
            "use strict";

            function t(m, _) {
                var E = Object.keys(m);
                if (Object.getOwnPropertySymbols) {
                    var M = Object.getOwnPropertySymbols(m);
                    _ && (M = M.filter(function(w) {
                        return Object.getOwnPropertyDescriptor(m, w).enumerable
                    })), E.push.apply(E, M)
                }
                return E
            }

            function y(m) {
                for (var _ = 1; _ < arguments.length; _++) {
                    var E = null != arguments[_] ? arguments[_] : {};
                    _ % 2 ? t(Object(E), !0).forEach(function(M) {
                        c(m, M, E[M])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(m, Object.getOwnPropertyDescriptors(E)) : t(Object(E)).forEach(function(M) {
                        Object.defineProperty(m, M, Object.getOwnPropertyDescriptor(E, M))
                    })
                }
                return m
            }

            function c(m, _, E) {
                return (_ = e(_)) in m ? Object.defineProperty(m, _, {
                    value: E,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : m[_] = E, m
            }

            function i(m, _) {
                for (var E = 0; E < _.length; E++) {
                    var M = _[E];
                    M.enumerable = M.enumerable || !1, M.configurable = !0, "value" in M && (M.writable = !0), Object.defineProperty(m, e(M.key), M)
                }
            }

            function e(m) {
                var _ = function a(m, _) {
                    if ("object" != typeof m || null === m) return m;
                    var E = m[Symbol.toPrimitive];
                    if (void 0 !== E) {
                        var M = E.call(m, _ || "default");
                        if ("object" != typeof M) return M;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === _ ? String : Number)(m)
                }(m, "string");
                return "symbol" == typeof _ ? _ : String(_)
            }
            var l = p(9007).Buffer,
                s = p(2361).inspect,
                n = s && s.custom || "inspect";

            function u(m, _, E) {
                l.prototype.copy.call(m, _, E)
            }
            $.exports = function() {
                function m() {
                    (function d(m, _) {
                        if (!(m instanceof _)) throw new TypeError("Cannot call a class as a function")
                    })(this, m), this.head = null, this.tail = null, this.length = 0
                }
                return function r(m, _, E) {
                    _ && i(m.prototype, _), E && i(m, E), Object.defineProperty(m, "prototype", {
                        writable: !1
                    })
                }(m, [{
                    key: "push",
                    value: function(E) {
                        var M = {
                            data: E,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = M : this.head = M, this.tail = M, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(E) {
                        var M = {
                            data: E,
                            next: this.head
                        };
                        0 === this.length && (this.tail = M), this.head = M, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var E = this.head.data;
                            return this.head = 1 === this.length ? this.tail = null : this.head.next, --this.length, E
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(E) {
                        if (0 === this.length) return "";
                        for (var M = this.head, w = "" + M.data; M = M.next;) w += E + M.data;
                        return w
                    }
                }, {
                    key: "concat",
                    value: function(E) {
                        if (0 === this.length) return l.alloc(0);
                        for (var M = l.allocUnsafe(E >>> 0), w = this.head, A = 0; w;) u(w.data, M, A), A += w.data.length, w = w.next;
                        return M
                    }
                }, {
                    key: "consume",
                    value: function(E, M) {
                        var w;
                        return E < this.head.data.length ? (w = this.head.data.slice(0, E), this.head.data = this.head.data.slice(E)) : w = E === this.head.data.length ? this.shift() : M ? this._getString(E) : this._getBuffer(E), w
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(E) {
                        var M = this.head,
                            w = 1,
                            A = M.data;
                        for (E -= A.length; M = M.next;) {
                            var x = M.data,
                                N = E > x.length ? x.length : E;
                            if (A += N === x.length ? x : x.slice(0, E), 0 == (E -= N)) {
                                N === x.length ? (++w, this.head = M.next ? M.next : this.tail = null) : (this.head = M, M.data = x.slice(N));
                                break
                            }++w
                        }
                        return this.length -= w, A
                    }
                }, {
                    key: "_getBuffer",
                    value: function(E) {
                        var M = l.allocUnsafe(E),
                            w = this.head,
                            A = 1;
                        for (w.data.copy(M), E -= w.data.length; w = w.next;) {
                            var x = w.data,
                                N = E > x.length ? x.length : E;
                            if (x.copy(M, M.length - E, 0, N), 0 == (E -= N)) {
                                N === x.length ? (++A, this.head = w.next ? w.next : this.tail = null) : (this.head = w, w.data = x.slice(N));
                                break
                            }++A
                        }
                        return this.length -= A, M
                    }
                }, {
                    key: n,
                    value: function(E, M) {
                        return s(this, y(y({}, M), {}, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }]), m
            }()
        },
        5601: $ => {
            "use strict";

            function p(i, r) {
                c(i, r), t(i)
            }

            function t(i) {
                i._writableState && !i._writableState.emitClose || i._readableState && !i._readableState.emitClose || i.emit("close")
            }

            function c(i, r) {
                i.emit("error", r)
            }
            $.exports = {
                destroy: function o(i, r) {
                    var e = this;
                    return this._readableState && this._readableState.destroyed || this._writableState && this._writableState.destroyed ? (r ? r(i) : i && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(c, this, i)) : process.nextTick(c, this, i)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(i || null, function(l) {
                        !r && l ? e._writableState ? e._writableState.errorEmitted ? process.nextTick(t, e) : (e._writableState.errorEmitted = !0, process.nextTick(p, e, l)) : process.nextTick(p, e, l) : r ? (process.nextTick(t, e), r(l)) : process.nextTick(t, e)
                    }), this)
                },
                undestroy: function y() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function d(i, r) {
                    var e = i._readableState,
                        a = i._writableState;
                    e && e.autoDestroy || a && a.autoDestroy ? i.destroy(r) : i.emit("error", r)
                }
            }
        },
        4618: ($, o, p) => {
            "use strict";
            var t = p(7218).q.ERR_STREAM_PREMATURE_CLOSE;

            function c() {}
            $.exports = function i(r, e, a) {
                if ("function" == typeof e) return i(r, null, e);
                e || (e = {}), a = function y(r) {
                    var e = !1;
                    return function() {
                        if (!e) {
                            e = !0;
                            for (var a = arguments.length, g = new Array(a), l = 0; l < a; l++) g[l] = arguments[l];
                            r.apply(this, g)
                        }
                    }
                }(a || c);
                var g = e.readable || !1 !== e.readable && r.readable,
                    l = e.writable || !1 !== e.writable && r.writable,
                    v = function() {
                        r.writable || n()
                    },
                    s = r._writableState && r._writableState.finished,
                    n = function() {
                        l = !1, s = !0, g || a.call(r)
                    },
                    u = r._readableState && r._readableState.endEmitted,
                    m = function() {
                        g = !1, u = !0, l || a.call(r)
                    },
                    _ = function(A) {
                        a.call(r, A)
                    },
                    E = function() {
                        var A;
                        return g && !u ? ((!r._readableState || !r._readableState.ended) && (A = new t), a.call(r, A)) : l && !s ? ((!r._writableState || !r._writableState.ended) && (A = new t), a.call(r, A)) : void 0
                    },
                    M = function() {
                        r.req.on("finish", n)
                    };
                return function d(r) {
                        return r.setHeader && "function" == typeof r.abort
                    }(r) ? (r.on("complete", n), r.on("abort", E), r.req ? M() : r.on("request", M)) : l && !r._writableState && (r.on("end", v), r.on("close", v)), r.on("end", m), r.on("finish", n), !1 !== e.error && r.on("error", _), r.on("close", E),
                    function() {
                        r.removeListener("complete", n), r.removeListener("abort", E), r.removeListener("request", M), r.req && r.req.removeListener("finish", n), r.removeListener("end", v), r.removeListener("close", v), r.removeListener("finish", n), r.removeListener("end", m), r.removeListener("error", _), r.removeListener("close", E)
                    }
            }
        },
        3335: $ => {
            $.exports = function() {
                throw new Error("Readable.from is not available in the browser")
            }
        },
        4514: ($, o, p) => {
            "use strict";
            var t, c = p(7218).q,
                d = c.ERR_MISSING_ARGS,
                i = c.ERR_STREAM_DESTROYED;

            function r(n) {
                if (n) throw n
            }

            function g(n) {
                n()
            }

            function l(n, u) {
                return n.pipe(u)
            }
            $.exports = function s() {
                for (var n = arguments.length, u = new Array(n), m = 0; m < n; m++) u[m] = arguments[m];
                var _ = function v(n) {
                    return n.length && "function" == typeof n[n.length - 1] ? n.pop() : r
                }(u);
                if (Array.isArray(u[0]) && (u = u[0]), u.length < 2) throw new d("streams");
                var E, M = u.map(function(w, A) {
                    var x = A < u.length - 1;
                    return function a(n, u, m, _) {
                        _ = function y(n) {
                            var u = !1;
                            return function() {
                                u || (u = !0, n.apply(void 0, arguments))
                            }
                        }(_);
                        var E = !1;
                        n.on("close", function() {
                            E = !0
                        }), void 0 === t && (t = p(4618)), t(n, {
                            readable: u,
                            writable: m
                        }, function(w) {
                            if (w) return _(w);
                            E = !0, _()
                        });
                        var M = !1;
                        return function(w) {
                            if (!E && !M) {
                                if (M = !0, function e(n) {
                                        return n.setHeader && "function" == typeof n.abort
                                    }(n)) return n.abort();
                                if ("function" == typeof n.destroy) return n.destroy();
                                _(w || new i("pipe"))
                            }
                        }
                    }(w, x, A > 0, function(z) {
                        E || (E = z), z && M.forEach(g), !x && (M.forEach(g), _(E))
                    })
                });
                return u.reduce(l)
            }
        },
        8782: ($, o, p) => {
            "use strict";
            var t = p(7218).q.ERR_INVALID_OPT_VALUE;
            $.exports = {
                getHighWaterMark: function c(d, i, r, e) {
                    var a = function y(d, i, r) {
                        return null != d.highWaterMark ? d.highWaterMark : i ? d[r] : null
                    }(i, e, r);
                    if (null != a) {
                        if (!isFinite(a) || Math.floor(a) !== a || a < 0) throw new t(e ? r : "highWaterMark", a);
                        return Math.floor(a)
                    }
                    return d.objectMode ? 16 : 16384
                }
            }
        },
        8240: ($, o, p) => {
            $.exports = p(2016).EventEmitter
        },
        6745: ($, o, p) => {
            (o = $.exports = p(309)).Stream = o, o.Readable = o, o.Writable = p(6563), o.Duplex = p(247), o.Transform = p(6307), o.PassThrough = p(5096), o.finished = p(4618), o.pipeline = p(4514)
        },
        843: ($, o, p) => {
            var t = p(9007),
                y = t.Buffer;

            function c(i, r) {
                for (var e in i) r[e] = i[e]
            }

            function d(i, r, e) {
                return y(i, r, e)
            }
            y.from && y.alloc && y.allocUnsafe && y.allocUnsafeSlow ? $.exports = t : (c(t, o), o.Buffer = d), d.prototype = Object.create(y.prototype), c(y, d), d.from = function(i, r, e) {
                if ("number" == typeof i) throw new TypeError("Argument must not be a number");
                return y(i, r, e)
            }, d.alloc = function(i, r, e) {
                if ("number" != typeof i) throw new TypeError("Argument must be a number");
                var a = y(i);
                return void 0 !== r ? "string" == typeof e ? a.fill(r, e) : a.fill(r) : a.fill(0), a
            }, d.allocUnsafe = function(i) {
                if ("number" != typeof i) throw new TypeError("Argument must be a number");
                return y(i)
            }, d.allocUnsafeSlow = function(i) {
                if ("number" != typeof i) throw new TypeError("Argument must be a number");
                return t.SlowBuffer(i)
            }
        },
        1858: ($, o, p) => {
            const t = Symbol("SemVer ANY");
            class y {
                static get ANY() {
                    return t
                }
                constructor(v, s) {
                    if (s = c(s), v instanceof y) {
                        if (v.loose === !!s.loose) return v;
                        v = v.value
                    }
                    v = v.trim().split(/\s+/).join(" "), e("comparator", v, s), this.options = s, this.loose = !!s.loose, this.parse(v), this.value = this.semver === t ? "" : this.operator + this.semver.version, e("comp", this)
                }
                parse(v) {
                    const n = v.match(this.options.loose ? d[i.COMPARATORLOOSE] : d[i.COMPARATOR]);
                    if (!n) throw new TypeError(`Invalid comparator: ${v}`);
                    this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), this.semver = n[2] ? new a(n[2], this.options.loose) : t
                }
                toString() {
                    return this.value
                }
                test(v) {
                    if (e("Comparator.test", v, this.options.loose), this.semver === t || v === t) return !0;
                    if ("string" == typeof v) try {
                        v = new a(v, this.options)
                    } catch {
                        return !1
                    }
                    return r(v, this.operator, this.semver, this.options)
                }
                intersects(v, s) {
                    if (!(v instanceof y)) throw new TypeError("a Comparator is required");
                    return "" === this.operator ? "" === this.value || new g(v.value, s).test(this.value) : "" === v.operator ? "" === v.value || new g(this.value, s).test(v.semver) : !((s = c(s)).includePrerelease && ("<0.0.0-0" === this.value || "<0.0.0-0" === v.value) || !s.includePrerelease && (this.value.startsWith("<0.0.0") || v.value.startsWith("<0.0.0")) || !(this.operator.startsWith(">") && v.operator.startsWith(">") || this.operator.startsWith("<") && v.operator.startsWith("<") || this.semver.version === v.semver.version && this.operator.includes("=") && v.operator.includes("=") || r(this.semver, "<", v.semver, s) && this.operator.startsWith(">") && v.operator.startsWith("<") || r(this.semver, ">", v.semver, s) && this.operator.startsWith("<") && v.operator.startsWith(">")))
                }
            }
            $.exports = y;
            const c = p(3367),
                {
                    safeRe: d,
                    t: i
                } = p(5808),
                r = p(269),
                e = p(4859),
                a = p(1003),
                g = p(2441)
        },
        2441: ($, o, p) => {
            class t {
                constructor(h, C) {
                    if (C = d(C), h instanceof t) return h.loose === !!C.loose && h.includePrerelease === !!C.includePrerelease ? h : new t(h.raw, C);
                    if (h instanceof i) return this.raw = h.value, this.set = [
                        [h]
                    ], this.format(), this;
                    if (this.options = C, this.loose = !!C.loose, this.includePrerelease = !!C.includePrerelease, this.raw = h.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map(I => this.parseRange(I.trim())).filter(I => I.length), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                    if (this.set.length > 1) {
                        const I = this.set[0];
                        if (this.set = this.set.filter(T => !m(T[0])), 0 === this.set.length) this.set = [I];
                        else if (this.set.length > 1)
                            for (const T of this.set)
                                if (1 === T.length && _(T[0])) {
                                    this.set = [T];
                                    break
                                }
                    }
                    this.format()
                }
                format() {
                    return this.range = this.set.map(h => h.join(" ").trim()).join("||").trim(), this.range
                }
                toString() {
                    return this.range
                }
                parseRange(h) {
                    const I = ((this.options.includePrerelease && n) | (this.options.loose && u)) + ":" + h,
                        T = c.get(I);
                    if (T) return T;
                    const k = this.options.loose;
                    h = h.replace(k ? a[g.HYPHENRANGELOOSE] : a[g.HYPHENRANGE], le(this.options.includePrerelease)), r("hyphen replace", h), h = h.replace(a[g.COMPARATORTRIM], l), r("comparator trim", h), h = h.replace(a[g.TILDETRIM], v), r("tilde trim", h), h = h.replace(a[g.CARETTRIM], s), r("caret trim", h);
                    let U = h.split(" ").map(ae => M(ae, this.options)).join(" ").split(/\s+/).map(ae => se(ae, this.options));
                    k && (U = U.filter(ae => (r("loose invalid filter", ae, this.options), !!ae.match(a[g.COMPARATORLOOSE])))), r("range list", U);
                    const P = new Map,
                        S = U.map(ae => new i(ae, this.options));
                    for (const ae of S) {
                        if (m(ae)) return [ae];
                        P.set(ae.value, ae)
                    }
                    P.size > 1 && P.has("") && P.delete("");
                    const j = [...P.values()];
                    return c.set(I, j), j
                }
                intersects(h, C) {
                    if (!(h instanceof t)) throw new TypeError("a Range is required");
                    return this.set.some(I => E(I, C) && h.set.some(T => E(T, C) && I.every(k => T.every(O => k.intersects(O, C)))))
                }
                test(h) {
                    if (!h) return !1;
                    if ("string" == typeof h) try {
                        h = new e(h, this.options)
                    } catch {
                        return !1
                    }
                    for (let C = 0; C < this.set.length; C++)
                        if (pe(this.set[C], h, this.options)) return !0;
                    return !1
                }
            }
            $.exports = t;
            const c = new(p(3756))({
                    max: 1e3
                }),
                d = p(3367),
                i = p(1858),
                r = p(4859),
                e = p(1003),
                {
                    safeRe: a,
                    t: g,
                    comparatorTrimReplace: l,
                    tildeTrimReplace: v,
                    caretTrimReplace: s
                } = p(5808),
                {
                    FLAG_INCLUDE_PRERELEASE: n,
                    FLAG_LOOSE: u
                } = p(610),
                m = D => "<0.0.0-0" === D.value,
                _ = D => "" === D.value,
                E = (D, h) => {
                    let C = !0;
                    const I = D.slice();
                    let T = I.pop();
                    for (; C && I.length;) C = I.every(k => T.intersects(k, h)), T = I.pop();
                    return C
                },
                M = (D, h) => (r("comp", D, h), D = N(D, h), r("caret", D), D = A(D, h), r("tildes", D), D = W(D, h), r("xrange", D), D = ne(D, h), r("stars", D), D),
                w = D => !D || "x" === D.toLowerCase() || "*" === D,
                A = (D, h) => D.trim().split(/\s+/).map(C => x(C, h)).join(" "),
                x = (D, h) => D.replace(h.loose ? a[g.TILDELOOSE] : a[g.TILDE], (I, T, k, O, U) => {
                    let P;
                    return r("tilde", D, I, T, k, O, U), w(T) ? P = "" : w(k) ? P = `>=${T}.0.0 <${+T+1}.0.0-0` : w(O) ? P = `>=${T}.${k}.0 <${T}.${+k+1}.0-0` : U ? (r("replaceTilde pr", U), P = `>=${T}.${k}.${O}-${U} <${T}.${+k+1}.0-0`) : P = `>=${T}.${k}.${O} <${T}.${+k+1}.0-0`, r("tilde return", P), P
                }),
                N = (D, h) => D.trim().split(/\s+/).map(C => z(C, h)).join(" "),
                z = (D, h) => {
                    r("caret", D, h);
                    const I = h.includePrerelease ? "-0" : "";
                    return D.replace(h.loose ? a[g.CARETLOOSE] : a[g.CARET], (T, k, O, U, P) => {
                        let S;
                        return r("caret", D, T, k, O, U, P), w(k) ? S = "" : w(O) ? S = `>=${k}.0.0${I} <${+k+1}.0.0-0` : w(U) ? S = "0" === k ? `>=${k}.${O}.0${I} <${k}.${+O+1}.0-0` : `>=${k}.${O}.0${I} <${+k+1}.0.0-0` : P ? (r("replaceCaret pr", P), S = "0" === k ? "0" === O ? `>=${k}.${O}.${U}-${P} <${k}.${O}.${+U+1}-0` : `>=${k}.${O}.${U}-${P} <${k}.${+O+1}.0-0` : `>=${k}.${O}.${U}-${P} <${+k+1}.0.0-0`) : (r("no pr"), S = "0" === k ? "0" === O ? `>=${k}.${O}.${U}${I} <${k}.${O}.${+U+1}-0` : `>=${k}.${O}.${U}${I} <${k}.${+O+1}.0-0` : `>=${k}.${O}.${U} <${+k+1}.0.0-0`), r("caret return", S), S
                    })
                },
                W = (D, h) => (r("replaceXRanges", D, h), D.split(/\s+/).map(C => K(C, h)).join(" ")),
                K = (D, h) => (D = D.trim()).replace(h.loose ? a[g.XRANGELOOSE] : a[g.XRANGE], (I, T, k, O, U, P) => {
                    r("xRange", D, I, T, k, O, U, P);
                    const S = w(k),
                        j = S || w(O),
                        ae = j || w(U);
                    return "=" === T && ae && (T = ""), P = h.includePrerelease ? "-0" : "", S ? I = ">" === T || "<" === T ? "<0.0.0-0" : "*" : T && ae ? (j && (O = 0), U = 0, ">" === T ? (T = ">=", j ? (k = +k + 1, O = 0, U = 0) : (O = +O + 1, U = 0)) : "<=" === T && (T = "<", j ? k = +k + 1 : O = +O + 1), "<" === T && (P = "-0"), I = `${T+k}.${O}.${U}${P}`) : j ? I = `>=${k}.0.0${P} <${+k+1}.0.0-0` : ae && (I = `>=${k}.${O}.0${P} <${k}.${+O+1}.0-0`), r("xRange return", I), I
                }),
                ne = (D, h) => (r("replaceStars", D, h), D.trim().replace(a[g.STAR], "")),
                se = (D, h) => (r("replaceGTE0", D, h), D.trim().replace(a[h.includePrerelease ? g.GTE0PRE : g.GTE0], "")),
                le = D => (h, C, I, T, k, O, U, P, S, j, ae, oe, ce) => `${C=w(I)?"":w(T)?`>=${I}.0.0${D?"-0":""}`:w(k)?`>=${I}.${T}.0${D?"-0":""}`:O?`>=${C}`:`>=${C}${D?"-0":""}`} ${P=w(S)?"":w(j)?`<${+S+1}.0.0-0`:w(ae)?`<${S}.${+j+1}.0-0`:oe?`<=${S}.${j}.${ae}-${oe}`:D?`<${S}.${j}.${+ae+1}-0`:`<=${P}`}`.trim(),
                pe = (D, h, C) => {
                    for (let I = 0; I < D.length; I++)
                        if (!D[I].test(h)) return !1;
                    if (h.prerelease.length && !C.includePrerelease) {
                        for (let I = 0; I < D.length; I++)
                            if (r(D[I].semver), D[I].semver !== i.ANY && D[I].semver.prerelease.length > 0) {
                                const T = D[I].semver;
                                if (T.major === h.major && T.minor === h.minor && T.patch === h.patch) return !0
                            }
                        return !1
                    }
                    return !0
                }
        },
        1003: ($, o, p) => {
            const t = p(4859),
                {
                    MAX_LENGTH: y,
                    MAX_SAFE_INTEGER: c
                } = p(610),
                {
                    safeRe: d,
                    t: i
                } = p(5808),
                r = p(3367),
                {
                    compareIdentifiers: e
                } = p(709);
            class a {
                constructor(l, v) {
                    if (v = r(v), l instanceof a) {
                        if (l.loose === !!v.loose && l.includePrerelease === !!v.includePrerelease) return l;
                        l = l.version
                    } else if ("string" != typeof l) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof l}".`);
                    if (l.length > y) throw new TypeError(`version is longer than ${y} characters`);
                    t("SemVer", l, v), this.options = v, this.loose = !!v.loose, this.includePrerelease = !!v.includePrerelease;
                    const s = l.trim().match(v.loose ? d[i.LOOSE] : d[i.FULL]);
                    if (!s) throw new TypeError(`Invalid Version: ${l}`);
                    if (this.raw = l, this.major = +s[1], this.minor = +s[2], this.patch = +s[3], this.major > c || this.major < 0) throw new TypeError("Invalid major version");
                    if (this.minor > c || this.minor < 0) throw new TypeError("Invalid minor version");
                    if (this.patch > c || this.patch < 0) throw new TypeError("Invalid patch version");
                    this.prerelease = s[4] ? s[4].split(".").map(n => {
                        if (/^[0-9]+$/.test(n)) {
                            const u = +n;
                            if (u >= 0 && u < c) return u
                        }
                        return n
                    }) : [], this.build = s[5] ? s[5].split(".") : [], this.format()
                }
                format() {
                    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
                }
                toString() {
                    return this.version
                }
                compare(l) {
                    if (t("SemVer.compare", this.version, this.options, l), !(l instanceof a)) {
                        if ("string" == typeof l && l === this.version) return 0;
                        l = new a(l, this.options)
                    }
                    return l.version === this.version ? 0 : this.compareMain(l) || this.comparePre(l)
                }
                compareMain(l) {
                    return l instanceof a || (l = new a(l, this.options)), e(this.major, l.major) || e(this.minor, l.minor) || e(this.patch, l.patch)
                }
                comparePre(l) {
                    if (l instanceof a || (l = new a(l, this.options)), this.prerelease.length && !l.prerelease.length) return -1;
                    if (!this.prerelease.length && l.prerelease.length) return 1;
                    if (!this.prerelease.length && !l.prerelease.length) return 0;
                    let v = 0;
                    do {
                        const s = this.prerelease[v],
                            n = l.prerelease[v];
                        if (t("prerelease compare", v, s, n), void 0 === s && void 0 === n) return 0;
                        if (void 0 === n) return 1;
                        if (void 0 === s) return -1;
                        if (s !== n) return e(s, n)
                    } while (++v)
                }
                compareBuild(l) {
                    l instanceof a || (l = new a(l, this.options));
                    let v = 0;
                    do {
                        const s = this.build[v],
                            n = l.build[v];
                        if (t("prerelease compare", v, s, n), void 0 === s && void 0 === n) return 0;
                        if (void 0 === n) return 1;
                        if (void 0 === s) return -1;
                        if (s !== n) return e(s, n)
                    } while (++v)
                }
                inc(l, v, s) {
                    switch (l) {
                        case "premajor":
                            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", v, s);
                            break;
                        case "preminor":
                            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", v, s);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0, this.inc("patch", v, s), this.inc("pre", v, s);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", v, s), this.inc("pre", v, s);
                            break;
                        case "major":
                            (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                            break;
                        case "minor":
                            (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, this.prerelease = [];
                            break;
                        case "pre":
                            {
                                const n = Number(s) ? 1 : 0;
                                if (!v && !1 === s) throw new Error("invalid increment argument: identifier is empty");
                                if (0 === this.prerelease.length) this.prerelease = [n];
                                else {
                                    let u = this.prerelease.length;
                                    for (; --u >= 0;) "number" == typeof this.prerelease[u] && (this.prerelease[u]++, u = -2);
                                    if (-1 === u) {
                                        if (v === this.prerelease.join(".") && !1 === s) throw new Error("invalid increment argument: identifier already exists");
                                        this.prerelease.push(n)
                                    }
                                }
                                if (v) {
                                    let u = [v, n];
                                    !1 === s && (u = [v]), 0 === e(this.prerelease[0], v) ? isNaN(this.prerelease[1]) && (this.prerelease = u) : this.prerelease = u
                                }
                                break
                            }
                        default:
                            throw new Error(`invalid increment argument: ${l}`)
                    }
                    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
                }
            }
            $.exports = a
        },
        7521: ($, o, p) => {
            const t = p(9247);
            $.exports = (c, d) => {
                const i = t(c.trim().replace(/^[=v]+/, ""), d);
                return i ? i.version : null
            }
        },
        269: ($, o, p) => {
            const t = p(9196),
                y = p(6780),
                c = p(6691),
                d = p(4302),
                i = p(2473),
                r = p(9776);
            $.exports = (a, g, l, v) => {
                switch (g) {
                    case "===":
                        return "object" == typeof a && (a = a.version), "object" == typeof l && (l = l.version), a === l;
                    case "!==":
                        return "object" == typeof a && (a = a.version), "object" == typeof l && (l = l.version), a !== l;
                    case "":
                    case "=":
                    case "==":
                        return t(a, l, v);
                    case "!=":
                        return y(a, l, v);
                    case ">":
                        return c(a, l, v);
                    case ">=":
                        return d(a, l, v);
                    case "<":
                        return i(a, l, v);
                    case "<=":
                        return r(a, l, v);
                    default:
                        throw new TypeError(`Invalid operator: ${g}`)
                }
            }
        },
        4660: ($, o, p) => {
            const t = p(1003),
                y = p(9247),
                {
                    safeRe: c,
                    t: d
                } = p(5808);
            $.exports = (r, e) => {
                if (r instanceof t) return r;
                if ("number" == typeof r && (r = String(r)), "string" != typeof r) return null;
                let a = null;
                if ((e = e || {}).rtl) {
                    let g;
                    for (;
                        (g = c[d.COERCERTL].exec(r)) && (!a || a.index + a[0].length !== r.length);)(!a || g.index + g[0].length !== a.index + a[0].length) && (a = g), c[d.COERCERTL].lastIndex = g.index + g[1].length + g[2].length;
                    c[d.COERCERTL].lastIndex = -1
                } else a = r.match(c[d.COERCE]);
                return null === a ? null : y(`${a[2]}.${a[3]||"0"}.${a[4]||"0"}`, e)
            }
        },
        1239: ($, o, p) => {
            const t = p(1003);
            $.exports = (c, d, i) => {
                const r = new t(c, i),
                    e = new t(d, i);
                return r.compare(e) || r.compareBuild(e)
            }
        },
        6999: ($, o, p) => {
            const t = p(2214);
            $.exports = (c, d) => t(c, d, !0)
        },
        2214: ($, o, p) => {
            const t = p(1003);
            $.exports = (c, d, i) => new t(c, i).compare(new t(d, i))
        },
        1183: ($, o, p) => {
            const t = p(9247);
            $.exports = (c, d) => {
                const i = t(c, null, !0),
                    r = t(d, null, !0),
                    e = i.compare(r);
                if (0 === e) return null;
                const a = e > 0,
                    g = a ? i : r,
                    l = a ? r : i,
                    v = !!g.prerelease.length;
                if (l.prerelease.length && !v) return l.patch || l.minor ? g.patch ? "patch" : g.minor ? "minor" : "major" : "major";
                const n = v ? "pre" : "";
                return i.major !== r.major ? n + "major" : i.minor !== r.minor ? n + "minor" : i.patch !== r.patch ? n + "patch" : "prerelease"
            }
        },
        9196: ($, o, p) => {
            const t = p(2214);
            $.exports = (c, d, i) => 0 === t(c, d, i)
        },
        6691: ($, o, p) => {
            const t = p(2214);
            $.exports = (c, d, i) => t(c, d, i) > 0
        },
        4302: ($, o, p) => {
            const t = p(2214);
            $.exports = (c, d, i) => t(c, d, i) >= 0
        },
        6939: ($, o, p) => {
            const t = p(1003);
            $.exports = (c, d, i, r, e) => {
                "string" == typeof i && (e = r, r = i, i = void 0);
                try {
                    return new t(c instanceof t ? c.version : c, i).inc(d, r, e).version
                } catch {
                    return null
                }
            }
        },
        2473: ($, o, p) => {
            const t = p(2214);
            $.exports = (c, d, i) => t(c, d, i) < 0
        },
        9776: ($, o, p) => {
            const t = p(2214);
            $.exports = (c, d, i) => t(c, d, i) <= 0
        },
        2136: ($, o, p) => {
            const t = p(1003);
            $.exports = (c, d) => new t(c, d).major
        },
        7662: ($, o, p) => {
            const t = p(1003);
            $.exports = (c, d) => new t(c, d).minor
        },
        6780: ($, o, p) => {
            const t = p(2214);
            $.exports = (c, d, i) => 0 !== t(c, d, i)
        },
        9247: ($, o, p) => {
            const t = p(1003);
            $.exports = (c, d, i = !1) => {
                if (c instanceof t) return c;
                try {
                    return new t(c, d)
                } catch (r) {
                    if (!i) return null;
                    throw r
                }
            }
        },
        6884: ($, o, p) => {
            const t = p(1003);
            $.exports = (c, d) => new t(c, d).patch
        },
        8635: ($, o, p) => {
            const t = p(9247);
            $.exports = (c, d) => {
                const i = t(c, d);
                return i && i.prerelease.length ? i.prerelease : null
            }
        },
        640: ($, o, p) => {
            const t = p(2214);
            $.exports = (c, d, i) => t(d, c, i)
        },
        5876: ($, o, p) => {
            const t = p(1239);
            $.exports = (c, d) => c.sort((i, r) => t(r, i, d))
        },
        7100: ($, o, p) => {
            const t = p(2441);
            $.exports = (c, d, i) => {
                try {
                    d = new t(d, i)
                } catch {
                    return !1
                }
                return d.test(c)
            }
        },
        4194: ($, o, p) => {
            const t = p(1239);
            $.exports = (c, d) => c.sort((i, r) => t(i, r, d))
        },
        7676: ($, o, p) => {
            const t = p(9247);
            $.exports = (c, d) => {
                const i = t(c, d);
                return i ? i.version : null
            }
        },
        424: ($, o, p) => {
            const t = p(5808),
                y = p(610),
                c = p(1003),
                d = p(709),
                i = p(9247),
                r = p(7676),
                e = p(7521),
                a = p(6939),
                g = p(1183),
                l = p(2136),
                v = p(7662),
                s = p(6884),
                n = p(8635),
                u = p(2214),
                m = p(640),
                _ = p(6999),
                E = p(1239),
                M = p(4194),
                w = p(5876),
                A = p(6691),
                x = p(2473),
                N = p(9196),
                z = p(6780),
                W = p(4302),
                K = p(9776),
                ne = p(269),
                se = p(4660),
                le = p(1858),
                pe = p(2441),
                D = p(7100),
                h = p(1250),
                C = p(2755),
                I = p(1639),
                T = p(4816),
                k = p(2321),
                O = p(7416),
                U = p(562),
                P = p(3013),
                S = p(4006),
                j = p(2326),
                ae = p(1538);
            $.exports = {
                parse: i,
                valid: r,
                clean: e,
                inc: a,
                diff: g,
                major: l,
                minor: v,
                patch: s,
                prerelease: n,
                compare: u,
                rcompare: m,
                compareLoose: _,
                compareBuild: E,
                sort: M,
                rsort: w,
                gt: A,
                lt: x,
                eq: N,
                neq: z,
                gte: W,
                lte: K,
                cmp: ne,
                coerce: se,
                Comparator: le,
                Range: pe,
                satisfies: D,
                toComparators: h,
                maxSatisfying: C,
                minSatisfying: I,
                minVersion: T,
                validRange: k,
                outside: O,
                gtr: U,
                ltr: P,
                intersects: S,
                simplifyRange: j,
                subset: ae,
                SemVer: c,
                re: t.re,
                src: t.src,
                tokens: t.t,
                SEMVER_SPEC_VERSION: y.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: y.RELEASE_TYPES,
                compareIdentifiers: d.compareIdentifiers,
                rcompareIdentifiers: d.rcompareIdentifiers
            }
        },
        610: $ => {
            $.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
                RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
                SEMVER_SPEC_VERSION: "2.0.0",
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            }
        },
        4859: $ => {
            const o = "object" == typeof process && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...p) => console.error("SEMVER", ...p) : () => {};
            $.exports = o
        },
        709: $ => {
            const o = /^[0-9]+$/,
                p = (y, c) => {
                    const d = o.test(y),
                        i = o.test(c);
                    return d && i && (y = +y, c = +c), y === c ? 0 : d && !i ? -1 : i && !d ? 1 : y < c ? -1 : 1
                };
            $.exports = {
                compareIdentifiers: p,
                rcompareIdentifiers: (y, c) => p(c, y)
            }
        },
        3367: $ => {
            const o = Object.freeze({
                    loose: !0
                }),
                p = Object.freeze({});
            $.exports = y => y ? "object" != typeof y ? o : y : p
        },
        5808: ($, o, p) => {
            const {
                MAX_SAFE_COMPONENT_LENGTH: t,
                MAX_SAFE_BUILD_LENGTH: y,
                MAX_LENGTH: c
            } = p(610), d = p(4859), i = (o = $.exports = {}).re = [], r = o.safeRe = [], e = o.src = [], a = o.t = {};
            let g = 0;
            const l = "[a-zA-Z0-9-]",
                v = [
                    ["\\s", 1],
                    ["\\d", c],
                    [l, y]
                ],
                n = (u, m, _) => {
                    const E = (u => {
                            for (const [m, _] of v) u = u.split(`${m}*`).join(`${m}{0,${_}}`).split(`${m}+`).join(`${m}{1,${_}}`);
                            return u
                        })(m),
                        M = g++;
                    d(u, M, m), a[u] = M, e[M] = m, i[M] = new RegExp(m, _ ? "g" : void 0), r[M] = new RegExp(E, _ ? "g" : void 0)
                };
            n("NUMERICIDENTIFIER", "0|[1-9]\\d*"), n("NUMERICIDENTIFIERLOOSE", "\\d+"), n("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${l}*`), n("MAINVERSION", `(${e[a.NUMERICIDENTIFIER]})\\.(${e[a.NUMERICIDENTIFIER]})\\.(${e[a.NUMERICIDENTIFIER]})`), n("MAINVERSIONLOOSE", `(${e[a.NUMERICIDENTIFIERLOOSE]})\\.(${e[a.NUMERICIDENTIFIERLOOSE]})\\.(${e[a.NUMERICIDENTIFIERLOOSE]})`), n("PRERELEASEIDENTIFIER", `(?:${e[a.NUMERICIDENTIFIER]}|${e[a.NONNUMERICIDENTIFIER]})`), n("PRERELEASEIDENTIFIERLOOSE", `(?:${e[a.NUMERICIDENTIFIERLOOSE]}|${e[a.NONNUMERICIDENTIFIER]})`), n("PRERELEASE", `(?:-(${e[a.PRERELEASEIDENTIFIER]}(?:\\.${e[a.PRERELEASEIDENTIFIER]})*))`), n("PRERELEASELOOSE", `(?:-?(${e[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[a.PRERELEASEIDENTIFIERLOOSE]})*))`), n("BUILDIDENTIFIER", `${l}+`), n("BUILD", `(?:\\+(${e[a.BUILDIDENTIFIER]}(?:\\.${e[a.BUILDIDENTIFIER]})*))`), n("FULLPLAIN", `v?${e[a.MAINVERSION]}${e[a.PRERELEASE]}?${e[a.BUILD]}?`), n("FULL", `^${e[a.FULLPLAIN]}$`), n("LOOSEPLAIN", `[v=\\s]*${e[a.MAINVERSIONLOOSE]}${e[a.PRERELEASELOOSE]}?${e[a.BUILD]}?`), n("LOOSE", `^${e[a.LOOSEPLAIN]}$`), n("GTLT", "((?:<|>)?=?)"), n("XRANGEIDENTIFIERLOOSE", `${e[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), n("XRANGEIDENTIFIER", `${e[a.NUMERICIDENTIFIER]}|x|X|\\*`), n("XRANGEPLAIN", `[v=\\s]*(${e[a.XRANGEIDENTIFIER]})(?:\\.(${e[a.XRANGEIDENTIFIER]})(?:\\.(${e[a.XRANGEIDENTIFIER]})(?:${e[a.PRERELEASE]})?${e[a.BUILD]}?)?)?`), n("XRANGEPLAINLOOSE", `[v=\\s]*(${e[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[a.XRANGEIDENTIFIERLOOSE]})(?:${e[a.PRERELEASELOOSE]})?${e[a.BUILD]}?)?)?`), n("XRANGE", `^${e[a.GTLT]}\\s*${e[a.XRANGEPLAIN]}$`), n("XRANGELOOSE", `^${e[a.GTLT]}\\s*${e[a.XRANGEPLAINLOOSE]}$`), n("COERCE", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`), n("COERCERTL", e[a.COERCE], !0), n("LONETILDE", "(?:~>?)"), n("TILDETRIM", `(\\s*)${e[a.LONETILDE]}\\s+`, !0), o.tildeTrimReplace = "$1~", n("TILDE", `^${e[a.LONETILDE]}${e[a.XRANGEPLAIN]}$`), n("TILDELOOSE", `^${e[a.LONETILDE]}${e[a.XRANGEPLAINLOOSE]}$`), n("LONECARET", "(?:\\^)"), n("CARETTRIM", `(\\s*)${e[a.LONECARET]}\\s+`, !0), o.caretTrimReplace = "$1^", n("CARET", `^${e[a.LONECARET]}${e[a.XRANGEPLAIN]}$`), n("CARETLOOSE", `^${e[a.LONECARET]}${e[a.XRANGEPLAINLOOSE]}$`), n("COMPARATORLOOSE", `^${e[a.GTLT]}\\s*(${e[a.LOOSEPLAIN]})$|^$`), n("COMPARATOR", `^${e[a.GTLT]}\\s*(${e[a.FULLPLAIN]})$|^$`), n("COMPARATORTRIM", `(\\s*)${e[a.GTLT]}\\s*(${e[a.LOOSEPLAIN]}|${e[a.XRANGEPLAIN]})`, !0), o.comparatorTrimReplace = "$1$2$3", n("HYPHENRANGE", `^\\s*(${e[a.XRANGEPLAIN]})\\s+-\\s+(${e[a.XRANGEPLAIN]})\\s*$`), n("HYPHENRANGELOOSE", `^\\s*(${e[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[a.XRANGEPLAINLOOSE]})\\s*$`), n("STAR", "(<|>)?=?\\s*\\*"), n("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), n("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
        },
        3756: ($, o, p) => {
            "use strict";
            const t = p(6952),
                y = Symbol("max"),
                c = Symbol("length"),
                d = Symbol("lengthCalculator"),
                i = Symbol("allowStale"),
                r = Symbol("maxAge"),
                e = Symbol("dispose"),
                a = Symbol("noDisposeOnSet"),
                g = Symbol("lruList"),
                l = Symbol("cache"),
                v = Symbol("updateAgeOnGet"),
                s = () => 1,
                u = (A, x, N) => {
                    const z = A[l].get(x);
                    if (z) {
                        const W = z.value;
                        if (m(A, W)) {
                            if (E(A, z), !A[i]) return
                        } else N && (A[v] && (z.value.now = Date.now()), A[g].unshiftNode(z));
                        return W.value
                    }
                },
                m = (A, x) => {
                    if (!x || !x.maxAge && !A[r]) return !1;
                    const N = Date.now() - x.now;
                    return x.maxAge ? N > x.maxAge : A[r] && N > A[r]
                },
                _ = A => {
                    if (A[c] > A[y])
                        for (let x = A[g].tail; A[c] > A[y] && null !== x;) {
                            const N = x.prev;
                            E(A, x), x = N
                        }
                },
                E = (A, x) => {
                    if (x) {
                        const N = x.value;
                        A[e] && A[e](N.key, N.value), A[c] -= N.length, A[l].delete(N.key), A[g].removeNode(x)
                    }
                };
            class M {
                constructor(x, N, z, W, K) {
                    this.key = x, this.value = N, this.length = z, this.now = W, this.maxAge = K || 0
                }
            }
            const w = (A, x, N, z) => {
                let W = N.value;
                m(A, W) && (E(A, N), A[i] || (W = void 0)), W && x.call(z, W.value, W.key, A)
            };
            $.exports = class n {
                constructor(x) {
                    if ("number" == typeof x && (x = {
                            max: x
                        }), x || (x = {}), x.max && ("number" != typeof x.max || x.max < 0)) throw new TypeError("max must be a non-negative number");
                    this[y] = x.max || 1 / 0;
                    const z = x.length || s;
                    if (this[d] = "function" != typeof z ? s : z, this[i] = x.stale || !1, x.maxAge && "number" != typeof x.maxAge) throw new TypeError("maxAge must be a number");
                    this[r] = x.maxAge || 0, this[e] = x.dispose, this[a] = x.noDisposeOnSet || !1, this[v] = x.updateAgeOnGet || !1, this.reset()
                }
                set max(x) {
                    if ("number" != typeof x || x < 0) throw new TypeError("max must be a non-negative number");
                    this[y] = x || 1 / 0, _(this)
                }
                get max() {
                    return this[y]
                }
                set allowStale(x) {
                    this[i] = !!x
                }
                get allowStale() {
                    return this[i]
                }
                set maxAge(x) {
                    if ("number" != typeof x) throw new TypeError("maxAge must be a non-negative number");
                    this[r] = x, _(this)
                }
                get maxAge() {
                    return this[r]
                }
                set lengthCalculator(x) {
                    "function" != typeof x && (x = s), x !== this[d] && (this[d] = x, this[c] = 0, this[g].forEach(N => {
                        N.length = this[d](N.value, N.key), this[c] += N.length
                    })), _(this)
                }
                get lengthCalculator() {
                    return this[d]
                }
                get length() {
                    return this[c]
                }
                get itemCount() {
                    return this[g].length
                }
                rforEach(x, N) {
                    N = N || this;
                    for (let z = this[g].tail; null !== z;) {
                        const W = z.prev;
                        w(this, x, z, N), z = W
                    }
                }
                forEach(x, N) {
                    N = N || this;
                    for (let z = this[g].head; null !== z;) {
                        const W = z.next;
                        w(this, x, z, N), z = W
                    }
                }
                keys() {
                    return this[g].toArray().map(x => x.key)
                }
                values() {
                    return this[g].toArray().map(x => x.value)
                }
                reset() {
                    this[e] && this[g] && this[g].length && this[g].forEach(x => this[e](x.key, x.value)), this[l] = new Map, this[g] = new t, this[c] = 0
                }
                dump() {
                    return this[g].map(x => !m(this, x) && {
                        k: x.key,
                        v: x.value,
                        e: x.now + (x.maxAge || 0)
                    }).toArray().filter(x => x)
                }
                dumpLru() {
                    return this[g]
                }
                set(x, N, z) {
                    if ((z = z || this[r]) && "number" != typeof z) throw new TypeError("maxAge must be a number");
                    const W = z ? Date.now() : 0,
                        K = this[d](N, x);
                    if (this[l].has(x)) {
                        if (K > this[y]) return E(this, this[l].get(x)), !1;
                        const le = this[l].get(x).value;
                        return this[e] && (this[a] || this[e](x, le.value)), le.now = W, le.maxAge = z, le.value = N, this[c] += K - le.length, le.length = K, this.get(x), _(this), !0
                    }
                    const ne = new M(x, N, K, W, z);
                    return ne.length > this[y] ? (this[e] && this[e](x, N), !1) : (this[c] += ne.length, this[g].unshift(ne), this[l].set(x, this[g].head), _(this), !0)
                }
                has(x) {
                    if (!this[l].has(x)) return !1;
                    const N = this[l].get(x).value;
                    return !m(this, N)
                }
                get(x) {
                    return u(this, x, !0)
                }
                peek(x) {
                    return u(this, x, !1)
                }
                pop() {
                    const x = this[g].tail;
                    return x ? (E(this, x), x.value) : null
                }
                del(x) {
                    E(this, this[l].get(x))
                }
                load(x) {
                    this.reset();
                    const N = Date.now();
                    for (let z = x.length - 1; z >= 0; z--) {
                        const W = x[z],
                            K = W.e || 0;
                        if (0 === K) this.set(W.k, W.v);
                        else {
                            const ne = K - N;
                            ne > 0 && this.set(W.k, W.v, ne)
                        }
                    }
                }
                prune() {
                    this[l].forEach((x, N) => u(this, N, !1))
                }
            }
        },
        32: $ => {
            "use strict";
            $.exports = function(o) {
                o.prototype[Symbol.iterator] = function*() {
                    for (let p = this.head; p; p = p.next) yield p.value
                }
            }
        },
        6952: ($, o, p) => {
            "use strict";

            function t(r) {
                var e = this;
                if (e instanceof t || (e = new t), e.tail = null, e.head = null, e.length = 0, r && "function" == typeof r.forEach) r.forEach(function(l) {
                    e.push(l)
                });
                else if (arguments.length > 0)
                    for (var a = 0, g = arguments.length; a < g; a++) e.push(arguments[a]);
                return e
            }

            function y(r, e, a) {
                var g = e === r.head ? new i(a, null, e, r) : new i(a, e, e.next, r);
                return null === g.next && (r.tail = g), null === g.prev && (r.head = g), r.length++, g
            }

            function c(r, e) {
                r.tail = new i(e, r.tail, null, r), r.head || (r.head = r.tail), r.length++
            }

            function d(r, e) {
                r.head = new i(e, null, r.head, r), r.tail || (r.tail = r.head), r.length++
            }

            function i(r, e, a, g) {
                if (!(this instanceof i)) return new i(r, e, a, g);
                this.list = g, this.value = r, e ? (e.next = this, this.prev = e) : this.prev = null, a ? (a.prev = this, this.next = a) : this.next = null
            }
            $.exports = t, t.Node = i, t.create = t, t.prototype.removeNode = function(r) {
                if (r.list !== this) throw new Error("removing node which does not belong to this list");
                var e = r.next,
                    a = r.prev;
                return e && (e.prev = a), a && (a.next = e), r === this.head && (this.head = e), r === this.tail && (this.tail = a), r.list.length--, r.next = null, r.prev = null, r.list = null, e
            }, t.prototype.unshiftNode = function(r) {
                if (r !== this.head) {
                    r.list && r.list.removeNode(r);
                    var e = this.head;
                    r.list = this, r.next = e, e && (e.prev = r), this.head = r, this.tail || (this.tail = r), this.length++
                }
            }, t.prototype.pushNode = function(r) {
                if (r !== this.tail) {
                    r.list && r.list.removeNode(r);
                    var e = this.tail;
                    r.list = this, r.prev = e, e && (e.next = r), this.tail = r, this.head || (this.head = r), this.length++
                }
            }, t.prototype.push = function() {
                for (var r = 0, e = arguments.length; r < e; r++) c(this, arguments[r]);
                return this.length
            }, t.prototype.unshift = function() {
                for (var r = 0, e = arguments.length; r < e; r++) d(this, arguments[r]);
                return this.length
            }, t.prototype.pop = function() {
                if (this.tail) {
                    var r = this.tail.value;
                    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, r
                }
            }, t.prototype.shift = function() {
                if (this.head) {
                    var r = this.head.value;
                    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, r
                }
            }, t.prototype.forEach = function(r, e) {
                e = e || this;
                for (var a = this.head, g = 0; null !== a; g++) r.call(e, a.value, g, this), a = a.next
            }, t.prototype.forEachReverse = function(r, e) {
                e = e || this;
                for (var a = this.tail, g = this.length - 1; null !== a; g--) r.call(e, a.value, g, this), a = a.prev
            }, t.prototype.get = function(r) {
                for (var e = 0, a = this.head; null !== a && e < r; e++) a = a.next;
                if (e === r && null !== a) return a.value
            }, t.prototype.getReverse = function(r) {
                for (var e = 0, a = this.tail; null !== a && e < r; e++) a = a.prev;
                if (e === r && null !== a) return a.value
            }, t.prototype.map = function(r, e) {
                e = e || this;
                for (var a = new t, g = this.head; null !== g;) a.push(r.call(e, g.value, this)), g = g.next;
                return a
            }, t.prototype.mapReverse = function(r, e) {
                e = e || this;
                for (var a = new t, g = this.tail; null !== g;) a.push(r.call(e, g.value, this)), g = g.prev;
                return a
            }, t.prototype.reduce = function(r, e) {
                var a, g = this.head;
                if (arguments.length > 1) a = e;
                else {
                    if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
                    g = this.head.next, a = this.head.value
                }
                for (var l = 0; null !== g; l++) a = r(a, g.value, l), g = g.next;
                return a
            }, t.prototype.reduceReverse = function(r, e) {
                var a, g = this.tail;
                if (arguments.length > 1) a = e;
                else {
                    if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
                    g = this.tail.prev, a = this.tail.value
                }
                for (var l = this.length - 1; null !== g; l--) a = r(a, g.value, l), g = g.prev;
                return a
            }, t.prototype.toArray = function() {
                for (var r = new Array(this.length), e = 0, a = this.head; null !== a; e++) r[e] = a.value, a = a.next;
                return r
            }, t.prototype.toArrayReverse = function() {
                for (var r = new Array(this.length), e = 0, a = this.tail; null !== a; e++) r[e] = a.value, a = a.prev;
                return r
            }, t.prototype.slice = function(r, e) {
                (e = e || this.length) < 0 && (e += this.length), (r = r || 0) < 0 && (r += this.length);
                var a = new t;
                if (e < r || e < 0) return a;
                r < 0 && (r = 0), e > this.length && (e = this.length);
                for (var g = 0, l = this.head; null !== l && g < r; g++) l = l.next;
                for (; null !== l && g < e; g++, l = l.next) a.push(l.value);
                return a
            }, t.prototype.sliceReverse = function(r, e) {
                (e = e || this.length) < 0 && (e += this.length), (r = r || 0) < 0 && (r += this.length);
                var a = new t;
                if (e < r || e < 0) return a;
                r < 0 && (r = 0), e > this.length && (e = this.length);
                for (var g = this.length, l = this.tail; null !== l && g > e; g--) l = l.prev;
                for (; null !== l && g > r; g--, l = l.prev) a.push(l.value);
                return a
            }, t.prototype.splice = function(r, e, ...a) {
                r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
                for (var g = 0, l = this.head; null !== l && g < r; g++) l = l.next;
                var v = [];
                for (g = 0; l && g < e; g++) v.push(l.value), l = this.removeNode(l);
                for (null === l && (l = this.tail), l !== this.head && l !== this.tail && (l = l.prev), g = 0; g < a.length; g++) l = y(this, l, a[g]);
                return v
            }, t.prototype.reverse = function() {
                for (var r = this.head, e = this.tail, a = r; null !== a; a = a.prev) {
                    var g = a.prev;
                    a.prev = a.next, a.next = g
                }
                return this.head = e, this.tail = r, this
            };
            try {
                p(32)(t)
            } catch {}
        },
        562: ($, o, p) => {
            const t = p(7416);
            $.exports = (c, d, i) => t(c, d, ">", i)
        },
        4006: ($, o, p) => {
            const t = p(2441);
            $.exports = (c, d, i) => (c = new t(c, i), d = new t(d, i), c.intersects(d, i))
        },
        3013: ($, o, p) => {
            const t = p(7416);
            $.exports = (c, d, i) => t(c, d, "<", i)
        },
        2755: ($, o, p) => {
            const t = p(1003),
                y = p(2441);
            $.exports = (d, i, r) => {
                let e = null,
                    a = null,
                    g = null;
                try {
                    g = new y(i, r)
                } catch {
                    return null
                }
                return d.forEach(l => {
                    g.test(l) && (!e || -1 === a.compare(l)) && (e = l, a = new t(e, r))
                }), e
            }
        },
        1639: ($, o, p) => {
            const t = p(1003),
                y = p(2441);
            $.exports = (d, i, r) => {
                let e = null,
                    a = null,
                    g = null;
                try {
                    g = new y(i, r)
                } catch {
                    return null
                }
                return d.forEach(l => {
                    g.test(l) && (!e || 1 === a.compare(l)) && (e = l, a = new t(e, r))
                }), e
            }
        },
        4816: ($, o, p) => {
            const t = p(1003),
                y = p(2441),
                c = p(6691);
            $.exports = (i, r) => {
                i = new y(i, r);
                let e = new t("0.0.0");
                if (i.test(e) || (e = new t("0.0.0-0"), i.test(e))) return e;
                e = null;
                for (let a = 0; a < i.set.length; ++a) {
                    let l = null;
                    i.set[a].forEach(v => {
                        const s = new t(v.semver.version);
                        switch (v.operator) {
                            case ">":
                                0 === s.prerelease.length ? s.patch++ : s.prerelease.push(0), s.raw = s.format();
                            case "":
                            case ">=":
                                (!l || c(s, l)) && (l = s);
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw new Error(`Unexpected operation: ${v.operator}`)
                        }
                    }), l && (!e || c(e, l)) && (e = l)
                }
                return e && i.test(e) ? e : null
            }
        },
        7416: ($, o, p) => {
            const t = p(1003),
                y = p(1858),
                {
                    ANY: c
                } = y,
                d = p(2441),
                i = p(7100),
                r = p(6691),
                e = p(2473),
                a = p(9776),
                g = p(4302);
            $.exports = (v, s, n, u) => {
                let m, _, E, M, w;
                switch (v = new t(v, u), s = new d(s, u), n) {
                    case ">":
                        m = r, _ = a, E = e, M = ">", w = ">=";
                        break;
                    case "<":
                        m = e, _ = g, E = r, M = "<", w = "<=";
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"')
                }
                if (i(v, s, u)) return !1;
                for (let A = 0; A < s.set.length; ++A) {
                    let N = null,
                        z = null;
                    if (s.set[A].forEach(W => {
                            W.semver === c && (W = new y(">=0.0.0")), N = N || W, z = z || W, m(W.semver, N.semver, u) ? N = W : E(W.semver, z.semver, u) && (z = W)
                        }), N.operator === M || N.operator === w || (!z.operator || z.operator === M) && _(v, z.semver)) return !1;
                    if (z.operator === w && E(v, z.semver)) return !1
                }
                return !0
            }
        },
        2326: ($, o, p) => {
            const t = p(7100),
                y = p(2214);
            $.exports = (c, d, i) => {
                const r = [];
                let e = null,
                    a = null;
                const g = c.sort((n, u) => y(n, u, i));
                for (const n of g) t(n, d, i) ? (a = n, e || (e = n)) : (a && r.push([e, a]), a = null, e = null);
                e && r.push([e, null]);
                const l = [];
                for (const [n, u] of r) l.push(n === u ? n : u || n !== g[0] ? u ? n === g[0] ? `<=${u}` : `${n} - ${u}` : `>=${n}` : "*");
                const v = l.join(" || "),
                    s = "string" == typeof d.raw ? d.raw : String(d);
                return v.length < s.length ? v : d
            }
        },
        1538: ($, o, p) => {
            const t = p(2441),
                y = p(1858),
                {
                    ANY: c
                } = y,
                d = p(7100),
                i = p(2214),
                e = [new y(">=0.0.0-0")],
                a = [new y(">=0.0.0")],
                g = (s, n, u) => {
                    if (s === n) return !0;
                    if (1 === s.length && s[0].semver === c) {
                        if (1 === n.length && n[0].semver === c) return !0;
                        s = u.includePrerelease ? e : a
                    }
                    if (1 === n.length && n[0].semver === c) {
                        if (u.includePrerelease) return !0;
                        n = a
                    }
                    const m = new Set;
                    let _, E, M;
                    for (const K of s) ">" === K.operator || ">=" === K.operator ? _ = l(_, K, u) : "<" === K.operator || "<=" === K.operator ? E = v(E, K, u) : m.add(K.semver);
                    if (m.size > 1) return null;
                    if (_ && E) {
                        if (M = i(_.semver, E.semver, u), M > 0) return null;
                        if (0 === M && (">=" !== _.operator || "<=" !== E.operator)) return null
                    }
                    for (const K of m) {
                        if (_ && !d(K, String(_), u) || E && !d(K, String(E), u)) return null;
                        for (const ne of n)
                            if (!d(K, String(ne), u)) return !1;
                        return !0
                    }
                    let w, A, x, N, z = !(!E || u.includePrerelease || !E.semver.prerelease.length) && E.semver,
                        W = !(!_ || u.includePrerelease || !_.semver.prerelease.length) && _.semver;
                    z && 1 === z.prerelease.length && "<" === E.operator && 0 === z.prerelease[0] && (z = !1);
                    for (const K of n) {
                        if (N = N || ">" === K.operator || ">=" === K.operator, x = x || "<" === K.operator || "<=" === K.operator, _)
                            if (W && K.semver.prerelease && K.semver.prerelease.length && K.semver.major === W.major && K.semver.minor === W.minor && K.semver.patch === W.patch && (W = !1), ">" === K.operator || ">=" === K.operator) {
                                if (w = l(_, K, u), w === K && w !== _) return !1
                            } else if (">=" === _.operator && !d(_.semver, String(K), u)) return !1;
                        if (E)
                            if (z && K.semver.prerelease && K.semver.prerelease.length && K.semver.major === z.major && K.semver.minor === z.minor && K.semver.patch === z.patch && (z = !1), "<" === K.operator || "<=" === K.operator) {
                                if (A = v(E, K, u), A === K && A !== E) return !1
                            } else if ("<=" === E.operator && !d(E.semver, String(K), u)) return !1;
                        if (!K.operator && (E || _) && 0 !== M) return !1
                    }
                    return !(_ && x && !E && 0 !== M || E && N && !_ && 0 !== M || W || z)
                },
                l = (s, n, u) => {
                    if (!s) return n;
                    const m = i(s.semver, n.semver, u);
                    return m > 0 ? s : m < 0 || ">" === n.operator && ">=" === s.operator ? n : s
                },
                v = (s, n, u) => {
                    if (!s) return n;
                    const m = i(s.semver, n.semver, u);
                    return m < 0 ? s : m > 0 || "<" === n.operator && "<=" === s.operator ? n : s
                };
            $.exports = (s, n, u = {}) => {
                if (s === n) return !0;
                s = new t(s, u), n = new t(n, u);
                let m = !1;
                e: for (const _ of s.set) {
                    for (const E of n.set) {
                        const M = g(_, E, u);
                        if (m = m || null !== M, M) continue e
                    }
                    if (m) return !1
                }
                return !0
            }
        },
        1250: ($, o, p) => {
            const t = p(2441);
            $.exports = (c, d) => new t(c, d).set.map(i => i.map(r => r.value).join(" ").trim().split(" "))
        },
        2321: ($, o, p) => {
            const t = p(2441);
            $.exports = (c, d) => {
                try {
                    return new t(c, d).range || "*"
                } catch {
                    return null
                }
            }
        },
        3581: ($, o, p) => {
            var t = p(843).Buffer;

            function y(c, d) {
                this._block = t.alloc(c), this._finalSize = d, this._blockSize = c, this._len = 0
            }
            y.prototype.update = function(c, d) {
                "string" == typeof c && (c = t.from(c, d = d || "utf8"));
                for (var i = this._block, r = this._blockSize, e = c.length, a = this._len, g = 0; g < e;) {
                    for (var l = a % r, v = Math.min(e - g, r - l), s = 0; s < v; s++) i[l + s] = c[g + s];
                    g += v, (a += v) % r == 0 && this._update(i)
                }
                return this._len += e, this
            }, y.prototype.digest = function(c) {
                var d = this._len % this._blockSize;
                this._block[d] = 128, this._block.fill(0, d + 1), d >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var i = 8 * this._len;
                if (i <= 4294967295) this._block.writeUInt32BE(i, this._blockSize - 4);
                else {
                    var r = (4294967295 & i) >>> 0;
                    this._block.writeUInt32BE((i - r) / 4294967296, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4)
                }
                this._update(this._block);
                var a = this._hash();
                return c ? a.toString(c) : a
            }, y.prototype._update = function() {
                throw new Error("_update must be implemented by subclass")
            }, $.exports = y
        },
        7965: ($, o, p) => {
            var t = $.exports = function(c) {
                c = c.toLowerCase();
                var d = t[c];
                if (!d) throw new Error(c + " is not supported (we accept pull requests)");
                return new d
            };
            t.sha = p(7915), t.sha1 = p(1229), t.sha224 = p(2959), t.sha256 = p(450), t.sha384 = p(1723), t.sha512 = p(7914)
        },
        7915: ($, o, p) => {
            var t = p(6698),
                y = p(3581),
                c = p(843).Buffer,
                d = [1518500249, 1859775393, -1894007588, -899497514],
                i = new Array(80);

            function r() {
                this.init(), this._w = i, y.call(this, 64, 56)
            }

            function e(l) {
                return l << 5 | l >>> 27
            }

            function a(l) {
                return l << 30 | l >>> 2
            }

            function g(l, v, s, n) {
                return 0 === l ? v & s | ~v & n : 2 === l ? v & s | v & n | s & n : v ^ s ^ n
            }
            t(r, y), r.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, r.prototype._update = function(l) {
                for (var v = this._w, s = 0 | this._a, n = 0 | this._b, u = 0 | this._c, m = 0 | this._d, _ = 0 | this._e, E = 0; E < 16; ++E) v[E] = l.readInt32BE(4 * E);
                for (; E < 80; ++E) v[E] = v[E - 3] ^ v[E - 8] ^ v[E - 14] ^ v[E - 16];
                for (var M = 0; M < 80; ++M) {
                    var w = ~~(M / 20),
                        A = e(s) + g(w, n, u, m) + _ + v[M] + d[w] | 0;
                    _ = m, m = u, u = a(n), n = s, s = A
                }
                this._a = s + this._a | 0, this._b = n + this._b | 0, this._c = u + this._c | 0, this._d = m + this._d | 0, this._e = _ + this._e | 0
            }, r.prototype._hash = function() {
                var l = c.allocUnsafe(20);
                return l.writeInt32BE(0 | this._a, 0), l.writeInt32BE(0 | this._b, 4), l.writeInt32BE(0 | this._c, 8), l.writeInt32BE(0 | this._d, 12), l.writeInt32BE(0 | this._e, 16), l
            }, $.exports = r
        },
        1229: ($, o, p) => {
            var t = p(6698),
                y = p(3581),
                c = p(843).Buffer,
                d = [1518500249, 1859775393, -1894007588, -899497514],
                i = new Array(80);

            function r() {
                this.init(), this._w = i, y.call(this, 64, 56)
            }

            function e(v) {
                return v << 1 | v >>> 31
            }

            function a(v) {
                return v << 5 | v >>> 27
            }

            function g(v) {
                return v << 30 | v >>> 2
            }

            function l(v, s, n, u) {
                return 0 === v ? s & n | ~s & u : 2 === v ? s & n | s & u | n & u : s ^ n ^ u
            }
            t(r, y), r.prototype.init = function() {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, r.prototype._update = function(v) {
                for (var s = this._w, n = 0 | this._a, u = 0 | this._b, m = 0 | this._c, _ = 0 | this._d, E = 0 | this._e, M = 0; M < 16; ++M) s[M] = v.readInt32BE(4 * M);
                for (; M < 80; ++M) s[M] = e(s[M - 3] ^ s[M - 8] ^ s[M - 14] ^ s[M - 16]);
                for (var w = 0; w < 80; ++w) {
                    var A = ~~(w / 20),
                        x = a(n) + l(A, u, m, _) + E + s[w] + d[A] | 0;
                    E = _, _ = m, m = g(u), u = n, n = x
                }
                this._a = n + this._a | 0, this._b = u + this._b | 0, this._c = m + this._c | 0, this._d = _ + this._d | 0, this._e = E + this._e | 0
            }, r.prototype._hash = function() {
                var v = c.allocUnsafe(20);
                return v.writeInt32BE(0 | this._a, 0), v.writeInt32BE(0 | this._b, 4), v.writeInt32BE(0 | this._c, 8), v.writeInt32BE(0 | this._d, 12), v.writeInt32BE(0 | this._e, 16), v
            }, $.exports = r
        },
        2959: ($, o, p) => {
            var t = p(6698),
                y = p(450),
                c = p(3581),
                d = p(843).Buffer,
                i = new Array(64);

            function r() {
                this.init(), this._w = i, c.call(this, 64, 56)
            }
            t(r, y), r.prototype.init = function() {
                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
            }, r.prototype._hash = function() {
                var e = d.allocUnsafe(28);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
            }, $.exports = r
        },
        450: ($, o, p) => {
            var t = p(6698),
                y = p(3581),
                c = p(843).Buffer,
                d = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                i = new Array(64);

            function r() {
                this.init(), this._w = i, y.call(this, 64, 56)
            }

            function e(n, u, m) {
                return m ^ n & (u ^ m)
            }

            function a(n, u, m) {
                return n & u | m & (n | u)
            }

            function g(n) {
                return (n >>> 2 | n << 30) ^ (n >>> 13 | n << 19) ^ (n >>> 22 | n << 10)
            }

            function l(n) {
                return (n >>> 6 | n << 26) ^ (n >>> 11 | n << 21) ^ (n >>> 25 | n << 7)
            }

            function v(n) {
                return (n >>> 7 | n << 25) ^ (n >>> 18 | n << 14) ^ n >>> 3
            }

            function s(n) {
                return (n >>> 17 | n << 15) ^ (n >>> 19 | n << 13) ^ n >>> 10
            }
            t(r, y), r.prototype.init = function() {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            }, r.prototype._update = function(n) {
                for (var u = this._w, m = 0 | this._a, _ = 0 | this._b, E = 0 | this._c, M = 0 | this._d, w = 0 | this._e, A = 0 | this._f, x = 0 | this._g, N = 0 | this._h, z = 0; z < 16; ++z) u[z] = n.readInt32BE(4 * z);
                for (; z < 64; ++z) u[z] = s(u[z - 2]) + u[z - 7] + v(u[z - 15]) + u[z - 16] | 0;
                for (var W = 0; W < 64; ++W) {
                    var K = N + l(w) + e(w, A, x) + d[W] + u[W] | 0,
                        ne = g(m) + a(m, _, E) | 0;
                    N = x, x = A, A = w, w = M + K | 0, M = E, E = _, _ = m, m = K + ne | 0
                }
                this._a = m + this._a | 0, this._b = _ + this._b | 0, this._c = E + this._c | 0, this._d = M + this._d | 0, this._e = w + this._e | 0, this._f = A + this._f | 0, this._g = x + this._g | 0, this._h = N + this._h | 0
            }, r.prototype._hash = function() {
                var n = c.allocUnsafe(32);
                return n.writeInt32BE(this._a, 0), n.writeInt32BE(this._b, 4), n.writeInt32BE(this._c, 8), n.writeInt32BE(this._d, 12), n.writeInt32BE(this._e, 16), n.writeInt32BE(this._f, 20), n.writeInt32BE(this._g, 24), n.writeInt32BE(this._h, 28), n
            }, $.exports = r
        },
        1723: ($, o, p) => {
            var t = p(6698),
                y = p(7914),
                c = p(3581),
                d = p(843).Buffer,
                i = new Array(160);

            function r() {
                this.init(), this._w = i, c.call(this, 128, 112)
            }
            t(r, y), r.prototype.init = function() {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, r.prototype._hash = function() {
                var e = d.allocUnsafe(48);

                function a(g, l, v) {
                    e.writeInt32BE(g, v), e.writeInt32BE(l, v + 4)
                }
                return a(this._ah, this._al, 0), a(this._bh, this._bl, 8), a(this._ch, this._cl, 16), a(this._dh, this._dl, 24), a(this._eh, this._el, 32), a(this._fh, this._fl, 40), e
            }, $.exports = r
        },
        7914: ($, o, p) => {
            var t = p(6698),
                y = p(3581),
                c = p(843).Buffer,
                d = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                i = new Array(160);

            function r() {
                this.init(), this._w = i, y.call(this, 128, 112)
            }

            function e(_, E, M) {
                return M ^ _ & (E ^ M)
            }

            function a(_, E, M) {
                return _ & E | M & (_ | E)
            }

            function g(_, E) {
                return (_ >>> 28 | E << 4) ^ (E >>> 2 | _ << 30) ^ (E >>> 7 | _ << 25)
            }

            function l(_, E) {
                return (_ >>> 14 | E << 18) ^ (_ >>> 18 | E << 14) ^ (E >>> 9 | _ << 23)
            }

            function v(_, E) {
                return (_ >>> 1 | E << 31) ^ (_ >>> 8 | E << 24) ^ _ >>> 7
            }

            function s(_, E) {
                return (_ >>> 1 | E << 31) ^ (_ >>> 8 | E << 24) ^ (_ >>> 7 | E << 25)
            }

            function n(_, E) {
                return (_ >>> 19 | E << 13) ^ (E >>> 29 | _ << 3) ^ _ >>> 6
            }

            function u(_, E) {
                return (_ >>> 19 | E << 13) ^ (E >>> 29 | _ << 3) ^ (_ >>> 6 | E << 26)
            }

            function m(_, E) {
                return _ >>> 0 < E >>> 0 ? 1 : 0
            }
            t(r, y), r.prototype.init = function() {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            }, r.prototype._update = function(_) {
                for (var E = this._w, M = 0 | this._ah, w = 0 | this._bh, A = 0 | this._ch, x = 0 | this._dh, N = 0 | this._eh, z = 0 | this._fh, W = 0 | this._gh, K = 0 | this._hh, ne = 0 | this._al, se = 0 | this._bl, le = 0 | this._cl, pe = 0 | this._dl, D = 0 | this._el, h = 0 | this._fl, C = 0 | this._gl, I = 0 | this._hl, T = 0; T < 32; T += 2) E[T] = _.readInt32BE(4 * T), E[T + 1] = _.readInt32BE(4 * T + 4);
                for (; T < 160; T += 2) {
                    var k = E[T - 30],
                        O = E[T - 30 + 1],
                        U = v(k, O),
                        P = s(O, k),
                        S = n(k = E[T - 4], O = E[T - 4 + 1]),
                        j = u(O, k),
                        ce = E[T - 32],
                        Y = E[T - 32 + 1],
                        Q = P + E[T - 14 + 1] | 0,
                        H = U + E[T - 14] + m(Q, P) | 0;
                    H = (H = H + S + m(Q = Q + j | 0, j) | 0) + ce + m(Q = Q + Y | 0, Y) | 0, E[T] = H, E[T + 1] = Q
                }
                for (var V = 0; V < 160; V += 2) {
                    H = E[V], Q = E[V + 1];
                    var X = a(M, w, A),
                        L = a(ne, se, le),
                        B = g(M, ne),
                        Z = g(ne, M),
                        re = l(N, D),
                        de = l(D, N),
                        he = d[V],
                        ue = d[V + 1],
                        we = e(N, z, W),
                        ie = e(D, h, C),
                        ge = I + de | 0,
                        me = K + re + m(ge, I) | 0;
                    me = (me = (me = me + we + m(ge = ge + ie | 0, ie) | 0) + he + m(ge = ge + ue | 0, ue) | 0) + H + m(ge = ge + Q | 0, Q) | 0;
                    var ve = Z + L | 0,
                        G = B + X + m(ve, Z) | 0;
                    K = W, I = C, W = z, C = h, z = N, h = D, N = x + me + m(D = pe + ge | 0, pe) | 0, x = A, pe = le, A = w, le = se, w = M, se = ne, M = me + G + m(ne = ge + ve | 0, ge) | 0
                }
                this._al = this._al + ne | 0, this._bl = this._bl + se | 0, this._cl = this._cl + le | 0, this._dl = this._dl + pe | 0, this._el = this._el + D | 0, this._fl = this._fl + h | 0, this._gl = this._gl + C | 0, this._hl = this._hl + I | 0, this._ah = this._ah + M + m(this._al, ne) | 0, this._bh = this._bh + w + m(this._bl, se) | 0, this._ch = this._ch + A + m(this._cl, le) | 0, this._dh = this._dh + x + m(this._dl, pe) | 0, this._eh = this._eh + N + m(this._el, D) | 0, this._fh = this._fh + z + m(this._fl, h) | 0, this._gh = this._gh + W + m(this._gl, C) | 0, this._hh = this._hh + K + m(this._hl, I) | 0
            }, r.prototype._hash = function() {
                var _ = c.allocUnsafe(64);

                function E(M, w, A) {
                    _.writeInt32BE(M, A), _.writeInt32BE(w, A + 4)
                }
                return E(this._ah, this._al, 0), E(this._bh, this._bl, 8), E(this._ch, this._cl, 16), E(this._dh, this._dl, 24), E(this._eh, this._el, 32), E(this._fh, this._fl, 40), E(this._gh, this._gl, 48), E(this._hh, this._hl, 56), _
            }, $.exports = r
        },
        2024: ($, o, p) => {
            "use strict";
            var t = p(843).Buffer,
                y = t.isEncoding || function(M) {
                    switch ((M = "" + M) && M.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function i(M) {
                var w;
                switch (this.encoding = function d(M) {
                    var w = function c(M) {
                        if (!M) return "utf8";
                        for (var w;;) switch (M) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return M;
                            default:
                                if (w) return;
                                M = ("" + M).toLowerCase(), w = !0
                        }
                    }(M);
                    if ("string" != typeof w && (t.isEncoding === y || !y(M))) throw new Error("Unknown encoding: " + M);
                    return w || M
                }(M), this.encoding) {
                    case "utf16le":
                        this.text = s, this.end = n, w = 4;
                        break;
                    case "utf8":
                        this.fillLast = g, w = 4;
                        break;
                    case "base64":
                        this.text = u, this.end = m, w = 3;
                        break;
                    default:
                        return this.write = _, void(this.end = E)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t.allocUnsafe(w)
            }

            function r(M) {
                return M <= 127 ? 0 : M >> 5 == 6 ? 2 : M >> 4 == 14 ? 3 : M >> 3 == 30 ? 4 : M >> 6 == 2 ? -1 : -2
            }

            function g(M) {
                var w = this.lastTotal - this.lastNeed,
                    A = function a(M, w, A) {
                        if (128 != (192 & w[0])) return M.lastNeed = 0, "\ufffd";
                        if (M.lastNeed > 1 && w.length > 1) {
                            if (128 != (192 & w[1])) return M.lastNeed = 1, "\ufffd";
                            if (M.lastNeed > 2 && w.length > 2 && 128 != (192 & w[2])) return M.lastNeed = 2, "\ufffd"
                        }
                    }(this, M);
                return void 0 !== A ? A : this.lastNeed <= M.length ? (M.copy(this.lastChar, w, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (M.copy(this.lastChar, w, 0, M.length), void(this.lastNeed -= M.length))
            }

            function s(M, w) {
                if ((M.length - w) % 2 == 0) {
                    var A = M.toString("utf16le", w);
                    if (A) {
                        var x = A.charCodeAt(A.length - 1);
                        if (x >= 55296 && x <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = M[M.length - 2], this.lastChar[1] = M[M.length - 1], A.slice(0, -1)
                    }
                    return A
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = M[M.length - 1], M.toString("utf16le", w, M.length - 1)
            }

            function n(M) {
                var w = M && M.length ? this.write(M) : "";
                return this.lastNeed ? w + this.lastChar.toString("utf16le", 0, this.lastTotal - this.lastNeed) : w
            }

            function u(M, w) {
                var A = (M.length - w) % 3;
                return 0 === A ? M.toString("base64", w) : (this.lastNeed = 3 - A, this.lastTotal = 3, 1 === A ? this.lastChar[0] = M[M.length - 1] : (this.lastChar[0] = M[M.length - 2], this.lastChar[1] = M[M.length - 1]), M.toString("base64", w, M.length - A))
            }

            function m(M) {
                var w = M && M.length ? this.write(M) : "";
                return this.lastNeed ? w + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : w
            }

            function _(M) {
                return M.toString(this.encoding)
            }

            function E(M) {
                return M && M.length ? this.write(M) : ""
            }
            o.s = i, i.prototype.write = function(M) {
                if (0 === M.length) return "";
                var w, A;
                if (this.lastNeed) {
                    if (void 0 === (w = this.fillLast(M))) return "";
                    A = this.lastNeed, this.lastNeed = 0
                } else A = 0;
                return A < M.length ? w ? w + this.text(M, A) : this.text(M, A) : w || ""
            }, i.prototype.end = function v(M) {
                var w = M && M.length ? this.write(M) : "";
                return this.lastNeed ? w + "\ufffd" : w
            }, i.prototype.text = function l(M, w) {
                var A = function e(M, w, A) {
                    var x = w.length - 1;
                    if (x < A) return 0;
                    var N = r(w[x]);
                    return N >= 0 ? (N > 0 && (M.lastNeed = N - 1), N) : --x < A || -2 === N ? 0 : (N = r(w[x])) >= 0 ? (N > 0 && (M.lastNeed = N - 2), N) : --x < A || -2 === N ? 0 : (N = r(w[x])) >= 0 ? (N > 0 && (2 === N ? N = 0 : M.lastNeed = N - 3), N) : 0
                }(this, M, w);
                if (!this.lastNeed) return M.toString("utf8", w);
                this.lastTotal = A;
                var x = M.length - (A - this.lastNeed);
                return M.copy(this.lastChar, 0, x), M.toString("utf8", w, x)
            }, i.prototype.fillLast = function(M) {
                if (this.lastNeed <= M.length) return M.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                M.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, M.length), this.lastNeed -= M.length
            }
        },
        496: $ => {
            function p(t) {
                try {
                    if (!global.localStorage) return !1
                } catch {
                    return !1
                }
                var y = global.localStorage[t];
                return null != y && "true" === String(y).toLowerCase()
            }
            $.exports = function o(t, y) {
                if (p("noDeprecation")) return t;
                var c = !1;
                return function d() {
                    if (!c) {
                        if (p("throwDeprecation")) throw new Error(y);
                        p("traceDeprecation") ? console.trace(y) : console.warn(y), c = !0
                    }
                    return t.apply(this, arguments)
                }
            }
        },
        498: $ => {
            $.exports = function p() {
                for (var t = {}, y = 0; y < arguments.length; y++) {
                    var c = arguments[y];
                    for (var d in c) o.call(c, d) && (t[d] = c[d])
                }
                return t
            };
            var o = Object.prototype.hasOwnProperty
        },
        6601: () => {},
        2361: () => {},
        4616: () => {},
        7156: $ => {
            function o(t, y, c, d, i, r, e) {
                try {
                    var a = t[r](e),
                        g = a.value
                } catch (l) {
                    return void c(l)
                }
                a.done ? y(g) : Promise.resolve(g).then(d, i)
            }
            $.exports = function p(t) {
                return function() {
                    var y = this,
                        c = arguments;
                    return new Promise(function(d, i) {
                        var r = t.apply(y, c);

                        function e(g) {
                            o(r, d, i, e, a, "next", g)
                        }

                        function a(g) {
                            o(r, d, i, e, a, "throw", g)
                        }
                        e(void 0)
                    })
                }
            }, $.exports.__esModule = !0, $.exports.default = $.exports
        },
        54: ($, o, p) => {
            "use strict";
            p.r(o), p.d(o, {
                Struct: () => l,
                StructError: () => t,
                any: () => K,
                array: () => ne,
                assert: () => v,
                assign: () => _,
                bigint: () => se,
                boolean: () => le,
                coerce: () => B,
                create: () => s,
                date: () => pe,
                defaulted: () => Z,
                define: () => E,
                deprecated: () => M,
                dynamic: () => w,
                empty: () => de,
                enums: () => D,
                func: () => h,
                instance: () => C,
                integer: () => I,
                intersection: () => T,
                is: () => u,
                lazy: () => A,
                literal: () => k,
                map: () => O,
                mask: () => n,
                max: () => ue,
                min: () => we,
                never: () => U,
                nonempty: () => ie,
                nullable: () => P,
                number: () => S,
                object: () => j,
                omit: () => x,
                optional: () => ae,
                partial: () => N,
                pattern: () => ge,
                pick: () => z,
                record: () => oe,
                refine: () => ve,
                regexp: () => ce,
                set: () => Y,
                size: () => me,
                string: () => Q,
                struct: () => W,
                trimmed: () => re,
                tuple: () => H,
                type: () => V,
                union: () => X,
                unknown: () => L,
                validate: () => m
            });
            class t extends TypeError {
                constructor(q, R) {
                    let f;
                    const {
                        message: b,
                        explanation: F,
                        ...J
                    } = q, {
                        path: ee
                    } = q, te = 0 === ee.length ? b : `At path: ${ee.join(".")} -- ${b}`;
                    super(F ? ? te), null != F && (this.cause = te), Object.assign(this, J), this.name = this.constructor.name, this.failures = () => f ? ? (f = [q, ...R()])
                }
            }

            function c(G) {
                return "object" == typeof G && null != G
            }

            function d(G) {
                if ("[object Object]" !== Object.prototype.toString.call(G)) return !1;
                const q = Object.getPrototypeOf(G);
                return null === q || q === Object.prototype
            }

            function i(G) {
                return "symbol" == typeof G ? G.toString() : "string" == typeof G ? JSON.stringify(G) : `${G}`
            }

            function e(G, q, R, f) {
                if (!0 === G) return;
                !1 === G ? G = {} : "string" == typeof G && (G = {
                    message: G
                });
                const {
                    path: b,
                    branch: F
                } = q, {
                    type: J
                } = R, {
                    refinement: ee,
                    message: te = `Expected a value of type \`${J}\`${ee?` with refinement \`${ee}\``:""}, but received: \`${i(f)}\``
                } = G;
                return {
                    value: f,
                    type: J,
                    refinement: ee,
                    key: b[b.length - 1],
                    path: b,
                    branch: F,
                    ...G,
                    message: te
                }
            }

            function* a(G, q, R, f) {
                (function y(G) {
                    return c(G) && "function" == typeof G[Symbol.iterator]
                })(G) || (G = [G]);
                for (const b of G) {
                    const F = e(b, q, R, f);
                    F && (yield F)
                }
            }

            function* g(G, q, R = {}) {
                const {
                    path: f = [],
                    branch: b = [G],
                    coerce: F = !1,
                    mask: J = !1
                } = R, ee = {
                    path: f,
                    branch: b
                };
                if (F && (G = q.coercer(G, ee), J && "type" !== q.type && c(q.schema) && c(G) && !Array.isArray(G)))
                    for (const fe in G) void 0 === q.schema[fe] && delete G[fe];
                let te = "valid";
                for (const fe of q.validator(G, ee)) fe.explanation = R.message, te = "not_valid", yield [fe, void 0];
                for (let [fe, _e, ye] of q.entries(G, ee)) {
                    const be = g(_e, ye, {
                        path: void 0 === fe ? f : [...f, fe],
                        branch: void 0 === fe ? b : [...b, _e],
                        coerce: F,
                        mask: J,
                        message: R.message
                    });
                    for (const Ee of be) Ee[0] ? (te = null != Ee[0].refinement ? "not_refined" : "not_valid", yield [Ee[0], void 0]) : F && (_e = Ee[1], void 0 === fe ? G = _e : G instanceof Map ? G.set(fe, _e) : G instanceof Set ? G.add(_e) : c(G) && (void 0 !== _e || fe in G) && (G[fe] = _e))
                }
                if ("not_valid" !== te)
                    for (const fe of q.refiner(G, ee)) fe.explanation = R.message, te = "not_refined", yield [fe, void 0];
                "valid" === te && (yield [void 0, G])
            }
            class l {
                constructor(q) {
                    const {
                        type: R,
                        schema: f,
                        validator: b,
                        refiner: F,
                        coercer: J = (te => te),
                        entries: ee = function*() {}
                    } = q;
                    this.type = R, this.schema = f, this.entries = ee, this.coercer = J, this.validator = b ? (te, fe) => a(b(te, fe), fe, this, te) : () => [], this.refiner = F ? (te, fe) => a(F(te, fe), fe, this, te) : () => []
                }
                assert(q, R) {
                    return v(q, this, R)
                }
                create(q, R) {
                    return s(q, this, R)
                }
                is(q) {
                    return u(q, this)
                }
                mask(q, R) {
                    return n(q, this, R)
                }
                validate(q, R = {}) {
                    return m(q, this, R)
                }
            }

            function v(G, q, R) {
                const f = m(G, q, {
                    message: R
                });
                if (f[0]) throw f[0]
            }

            function s(G, q, R) {
                const f = m(G, q, {
                    coerce: !0,
                    message: R
                });
                if (f[0]) throw f[0];
                return f[1]
            }

            function n(G, q, R) {
                const f = m(G, q, {
                    coerce: !0,
                    mask: !0,
                    message: R
                });
                if (f[0]) throw f[0];
                return f[1]
            }

            function u(G, q) {
                return !m(G, q)[0]
            }

            function m(G, q, R = {}) {
                const f = g(G, q, R),
                    b = function r(G) {
                        const {
                            done: q,
                            value: R
                        } = G.next();
                        return q ? void 0 : R
                    }(f);
                return b[0] ? [new t(b[0], function*() {
                    for (const J of f) J[0] && (yield J[0])
                }), void 0] : [void 0, b[1]]
            }

            function _(...G) {
                const q = "type" === G[0].type,
                    R = G.map(b => b.schema),
                    f = Object.assign({}, ...R);
                return q ? V(f) : j(f)
            }

            function E(G, q) {
                return new l({
                    type: G,
                    schema: null,
                    validator: q
                })
            }

            function M(G, q) {
                return new l({ ...G,
                    refiner: (R, f) => void 0 === R || G.refiner(R, f),
                    validator: (R, f) => void 0 === R || (q(R, f), G.validator(R, f))
                })
            }

            function w(G) {
                return new l({
                    type: "dynamic",
                    schema: null,
                    * entries(q, R) {
                        yield* G(q, R).entries(q, R)
                    },
                    validator: (q, R) => G(q, R).validator(q, R),
                    coercer: (q, R) => G(q, R).coercer(q, R),
                    refiner: (q, R) => G(q, R).refiner(q, R)
                })
            }

            function A(G) {
                let q;
                return new l({
                    type: "lazy",
                    schema: null,
                    * entries(R, f) {
                        q ? ? (q = G()), yield* q.entries(R, f)
                    },
                    validator: (R, f) => (q ? ? (q = G()), q.validator(R, f)),
                    coercer: (R, f) => (q ? ? (q = G()), q.coercer(R, f)),
                    refiner: (R, f) => (q ? ? (q = G()), q.refiner(R, f))
                })
            }

            function x(G, q) {
                const {
                    schema: R
                } = G, f = { ...R
                };
                for (const b of q) delete f[b];
                return "type" === G.type ? V(f) : j(f)
            }

            function N(G) {
                const q = G instanceof l,
                    R = q ? { ...G.schema
                    } : { ...G
                    };
                for (const f in R) R[f] = ae(R[f]);
                return q && "type" === G.type ? V(R) : j(R)
            }

            function z(G, q) {
                const {
                    schema: R
                } = G, f = {};
                for (const b of q) f[b] = R[b];
                return "type" === G.type ? V(f) : j(f)
            }

            function W(G, q) {
                return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), E(G, q)
            }

            function K() {
                return E("any", () => !0)
            }

            function ne(G) {
                return new l({
                    type: "array",
                    schema: G,
                    * entries(q) {
                        if (G && Array.isArray(q))
                            for (const [R, f] of q.entries()) yield [R, f, G]
                    },
                    coercer: q => Array.isArray(q) ? q.slice() : q,
                    validator: q => Array.isArray(q) || `Expected an array value, but received: ${i(q)}`
                })
            }

            function se() {
                return E("bigint", G => "bigint" == typeof G)
            }

            function le() {
                return E("boolean", G => "boolean" == typeof G)
            }

            function pe() {
                return E("date", G => G instanceof Date && !isNaN(G.getTime()) || `Expected a valid \`Date\` object, but received: ${i(G)}`)
            }

            function D(G) {
                const q = {},
                    R = G.map(f => i(f)).join();
                for (const f of G) q[f] = f;
                return new l({
                    type: "enums",
                    schema: q,
                    validator: f => G.includes(f) || `Expected one of \`${R}\`, but received: ${i(f)}`
                })
            }

            function h() {
                return E("func", G => "function" == typeof G || `Expected a function, but received: ${i(G)}`)
            }

            function C(G) {
                return E("instance", q => q instanceof G || `Expected a \`${G.name}\` instance, but received: ${i(q)}`)
            }

            function I() {
                return E("integer", G => "number" == typeof G && !isNaN(G) && Number.isInteger(G) || `Expected an integer, but received: ${i(G)}`)
            }

            function T(G) {
                return new l({
                    type: "intersection",
                    schema: null,
                    * entries(q, R) {
                        for (const f of G) yield* f.entries(q, R)
                    },
                    * validator(q, R) {
                        for (const f of G) yield* f.validator(q, R)
                    },
                    * refiner(q, R) {
                        for (const f of G) yield* f.refiner(q, R)
                    }
                })
            }

            function k(G) {
                const q = i(G),
                    R = typeof G;
                return new l({
                    type: "literal",
                    schema: "string" === R || "number" === R || "boolean" === R ? G : null,
                    validator: f => f === G || `Expected the literal \`${q}\`, but received: ${i(f)}`
                })
            }

            function O(G, q) {
                return new l({
                    type: "map",
                    schema: null,
                    * entries(R) {
                        if (G && q && R instanceof Map)
                            for (const [f, b] of R.entries()) yield [f, f, G], yield [f, b, q]
                    },
                    coercer: R => R instanceof Map ? new Map(R) : R,
                    validator: R => R instanceof Map || `Expected a \`Map\` object, but received: ${i(R)}`
                })
            }

            function U() {
                return E("never", () => !1)
            }

            function P(G) {
                return new l({ ...G,
                    validator: (q, R) => null === q || G.validator(q, R),
                    refiner: (q, R) => null === q || G.refiner(q, R)
                })
            }

            function S() {
                return E("number", G => "number" == typeof G && !isNaN(G) || `Expected a number, but received: ${i(G)}`)
            }

            function j(G) {
                const q = G ? Object.keys(G) : [],
                    R = U();
                return new l({
                    type: "object",
                    schema: G || null,
                    * entries(f) {
                        if (G && c(f)) {
                            const b = new Set(Object.keys(f));
                            for (const F of q) b.delete(F), yield [F, f[F], G[F]];
                            for (const F of b) yield [F, f[F], R]
                        }
                    },
                    validator: f => c(f) || `Expected an object, but received: ${i(f)}`,
                    coercer: f => c(f) ? { ...f
                    } : f
                })
            }

            function ae(G) {
                return new l({ ...G,
                    validator: (q, R) => void 0 === q || G.validator(q, R),
                    refiner: (q, R) => void 0 === q || G.refiner(q, R)
                })
            }

            function oe(G, q) {
                return new l({
                    type: "record",
                    schema: null,
                    * entries(R) {
                        if (c(R))
                            for (const f in R) {
                                const b = R[f];
                                yield [f, f, G], yield [f, b, q]
                            }
                    },
                    validator: R => c(R) || `Expected an object, but received: ${i(R)}`
                })
            }

            function ce() {
                return E("regexp", G => G instanceof RegExp)
            }

            function Y(G) {
                return new l({
                    type: "set",
                    schema: null,
                    * entries(q) {
                        if (G && q instanceof Set)
                            for (const R of q) yield [R, R, G]
                    },
                    coercer: q => q instanceof Set ? new Set(q) : q,
                    validator: q => q instanceof Set || `Expected a \`Set\` object, but received: ${i(q)}`
                })
            }

            function Q() {
                return E("string", G => "string" == typeof G || `Expected a string, but received: ${i(G)}`)
            }

            function H(G) {
                const q = U();
                return new l({
                    type: "tuple",
                    schema: null,
                    * entries(R) {
                        if (Array.isArray(R)) {
                            const f = Math.max(G.length, R.length);
                            for (let b = 0; b < f; b++) yield [b, R[b], G[b] || q]
                        }
                    },
                    validator: R => Array.isArray(R) || `Expected an array, but received: ${i(R)}`
                })
            }

            function V(G) {
                const q = Object.keys(G);
                return new l({
                    type: "type",
                    schema: G,
                    * entries(R) {
                        if (c(R))
                            for (const f of q) yield [f, R[f], G[f]]
                    },
                    validator: R => c(R) || `Expected an object, but received: ${i(R)}`,
                    coercer: R => c(R) ? { ...R
                    } : R
                })
            }

            function X(G) {
                const q = G.map(R => R.type).join(" | ");
                return new l({
                    type: "union",
                    schema: null,
                    coercer(R) {
                        for (const f of G) {
                            const [b, F] = f.validate(R, {
                                coerce: !0
                            });
                            if (!b) return F
                        }
                        return R
                    },
                    validator(R, f) {
                        const b = [];
                        for (const F of G) {
                            const [...J] = g(R, F, f), [ee] = J;
                            if (!ee[0]) return [];
                            for (const [te] of J) te && b.push(te)
                        }
                        return [`Expected the value to satisfy a union of \`${q}\`, but received: ${i(R)}`, ...b]
                    }
                })
            }

            function L() {
                return E("unknown", () => !0)
            }

            function B(G, q, R) {
                return new l({ ...G,
                    coercer: (f, b) => u(f, q) ? G.coercer(R(f, b), b) : G.coercer(f, b)
                })
            }

            function Z(G, q, R = {}) {
                return B(G, L(), f => {
                    const b = "function" == typeof q ? q() : q;
                    if (void 0 === f) return b;
                    if (!R.strict && d(f) && d(b)) {
                        const F = { ...f
                        };
                        let J = !1;
                        for (const ee in b) void 0 === F[ee] && (F[ee] = b[ee], J = !0);
                        if (J) return F
                    }
                    return f
                })
            }

            function re(G) {
                return B(G, Q(), q => q.trim())
            }

            function de(G) {
                return ve(G, "empty", q => {
                    const R = he(q);
                    return 0 === R || `Expected an empty ${G.type} but received one with a size of \`${R}\``
                })
            }

            function he(G) {
                return G instanceof Map || G instanceof Set ? G.size : G.length
            }

            function ue(G, q, R = {}) {
                const {
                    exclusive: f
                } = R;
                return ve(G, "max", b => f ? b < q : b <= q || `Expected a ${G.type} less than ${f?"":"or equal to "}${q} but received \`${b}\``)
            }

            function we(G, q, R = {}) {
                const {
                    exclusive: f
                } = R;
                return ve(G, "min", b => f ? b > q : b >= q || `Expected a ${G.type} greater than ${f?"":"or equal to "}${q} but received \`${b}\``)
            }

            function ie(G) {
                return ve(G, "nonempty", q => he(q) > 0 || `Expected a nonempty ${G.type} but received an empty one`)
            }

            function ge(G, q) {
                return ve(G, "pattern", R => q.test(R) || `Expected a ${G.type} matching \`/${q.source}/\` but received "${R}"`)
            }

            function me(G, q, R = q) {
                const f = `Expected a ${G.type}`,
                    b = q === R ? `of \`${q}\`` : `between \`${q}\` and \`${R}\``;
                return ve(G, "size", F => {
                    if ("number" == typeof F || F instanceof Date) return q <= F && F <= R || `${f} ${b} but received \`${F}\``;
                    if (F instanceof Map || F instanceof Set) {
                        const {
                            size: J
                        } = F;
                        return q <= J && J <= R || `${f} with a size ${b} but received one with a size of \`${J}\``
                    } {
                        const {
                            length: J
                        } = F;
                        return q <= J && J <= R || `${f} with a length ${b} but received one with a length of \`${J}\``
                    }
                })
            }

            function ve(G, q, R) {
                return new l({ ...G,
                    * refiner(f, b) {
                        yield* G.refiner(f, b);
                        const J = a(R(f, b), b, G, f);
                        for (const ee of J) yield { ...ee,
                            refinement: q
                        }
                    }
                })
            }
        }
    }
]);