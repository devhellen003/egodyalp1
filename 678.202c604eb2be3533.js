(self.webpackChunkapp_PlayDoge = self.webpackChunkapp_PlayDoge || []).push([
    [678], {
        5972: (Ve, ne, ce) => {
            "use strict";
            ne.Xx = ne._w = ne.aP = ne.KS = ne.jQ = void 0;
            ce(5465);
            const we = ce(6713);
            ce(3403);

            function re(K) {
                const V = new Float64Array(16);
                if (K)
                    for (let $ = 0; $ < K.length; $++) V[$] = K[$];
                return V
            }
            ne.jQ = 64, ne.KS = 64, ne.aP = 32, new Uint8Array(32)[0] = 9;
            const Ne = re(),
                de = re([1]),
                pe = (re([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), re([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                ze = re([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                Ie = re([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
            re([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function fe(K, V) {
                for (let $ = 0; $ < 16; $++) K[$] = 0 | V[$]
            }

            function it(K) {
                let V = 1;
                for (let $ = 0; $ < 16; $++) {
                    let y = K[$] + V + 65535;
                    V = Math.floor(y / 65536), K[$] = y - 65536 * V
                }
                K[0] += V - 1 + 37 * (V - 1)
            }

            function Ke(K, V, $) {
                const y = ~($ - 1);
                for (let L = 0; L < 16; L++) {
                    const Pe = y & (K[L] ^ V[L]);
                    K[L] ^= Pe, V[L] ^= Pe
                }
            }

            function Je(K, V) {
                const $ = re(),
                    y = re();
                for (let L = 0; L < 16; L++) y[L] = V[L];
                it(y), it(y), it(y);
                for (let L = 0; L < 2; L++) {
                    $[0] = y[0] - 65517;
                    for (let De = 1; De < 15; De++) $[De] = y[De] - 65535 - ($[De - 1] >> 16 & 1), $[De - 1] &= 65535;
                    $[15] = y[15] - 32767 - ($[14] >> 16 & 1);
                    const Pe = $[15] >> 16 & 1;
                    $[14] &= 65535, Ke(y, $, 1 - Pe)
                }
                for (let L = 0; L < 16; L++) K[2 * L] = 255 & y[L], K[2 * L + 1] = y[L] >> 8
            }

            function Lt(K) {
                const V = new Uint8Array(32);
                return Je(V, K), 1 & V[0]
            }

            function Qe(K, V, $) {
                for (let y = 0; y < 16; y++) K[y] = V[y] + $[y]
            }

            function k(K, V, $) {
                for (let y = 0; y < 16; y++) K[y] = V[y] - $[y]
            }

            function ue(K, V, $) {
                let y, L, Pe = 0,
                    De = 0,
                    tt = 0,
                    wt = 0,
                    st = 0,
                    ft = 0,
                    Jt = 0,
                    Mt = 0,
                    xt = 0,
                    sr = 0,
                    Ut = 0,
                    Zt = 0,
                    Ot = 0,
                    dt = 0,
                    pt = 0,
                    ht = 0,
                    Ye = 0,
                    Qt = 0,
                    or = 0,
                    gr = 0,
                    lr = 0,
                    fr = 0,
                    Or = 0,
                    Dr = 0,
                    br = 0,
                    yr = 0,
                    Nr = 0,
                    Pn = 0,
                    Kr = 0,
                    an = 0,
                    vn = 0,
                    Rt = $[0],
                    At = $[1],
                    zt = $[2],
                    It = $[3],
                    Yt = $[4],
                    Xt = $[5],
                    er = $[6],
                    Bt = $[7],
                    tr = $[8],
                    Ht = $[9],
                    Tt = $[10],
                    at = $[11],
                    Ct = $[12],
                    Dt = $[13],
                    rr = $[14],
                    nr = $[15];
                y = V[0], Pe += y * Rt, De += y * At, tt += y * zt, wt += y * It, st += y * Yt, ft += y * Xt, Jt += y * er, Mt += y * Bt, xt += y * tr, sr += y * Ht, Ut += y * Tt, Zt += y * at, Ot += y * Ct, dt += y * Dt, pt += y * rr, ht += y * nr, y = V[1], De += y * Rt, tt += y * At, wt += y * zt, st += y * It, ft += y * Yt, Jt += y * Xt, Mt += y * er, xt += y * Bt, sr += y * tr, Ut += y * Ht, Zt += y * Tt, Ot += y * at, dt += y * Ct, pt += y * Dt, ht += y * rr, Ye += y * nr, y = V[2], tt += y * Rt, wt += y * At, st += y * zt, ft += y * It, Jt += y * Yt, Mt += y * Xt, xt += y * er, sr += y * Bt, Ut += y * tr, Zt += y * Ht, Ot += y * Tt, dt += y * at, pt += y * Ct, ht += y * Dt, Ye += y * rr, Qt += y * nr, y = V[3], wt += y * Rt, st += y * At, ft += y * zt, Jt += y * It, Mt += y * Yt, xt += y * Xt, sr += y * er, Ut += y * Bt, Zt += y * tr, Ot += y * Ht, dt += y * Tt, pt += y * at, ht += y * Ct, Ye += y * Dt, Qt += y * rr, or += y * nr, y = V[4], st += y * Rt, ft += y * At, Jt += y * zt, Mt += y * It, xt += y * Yt, sr += y * Xt, Ut += y * er, Zt += y * Bt, Ot += y * tr, dt += y * Ht, pt += y * Tt, ht += y * at, Ye += y * Ct, Qt += y * Dt, or += y * rr, gr += y * nr, y = V[5], ft += y * Rt, Jt += y * At, Mt += y * zt, xt += y * It, sr += y * Yt, Ut += y * Xt, Zt += y * er, Ot += y * Bt, dt += y * tr, pt += y * Ht, ht += y * Tt, Ye += y * at, Qt += y * Ct, or += y * Dt, gr += y * rr, lr += y * nr, y = V[6], Jt += y * Rt, Mt += y * At, xt += y * zt, sr += y * It, Ut += y * Yt, Zt += y * Xt, Ot += y * er, dt += y * Bt, pt += y * tr, ht += y * Ht, Ye += y * Tt, Qt += y * at, or += y * Ct, gr += y * Dt, lr += y * rr, fr += y * nr, y = V[7], Mt += y * Rt, xt += y * At, sr += y * zt, Ut += y * It, Zt += y * Yt, Ot += y * Xt, dt += y * er, pt += y * Bt, ht += y * tr, Ye += y * Ht, Qt += y * Tt, or += y * at, gr += y * Ct, lr += y * Dt, fr += y * rr, Or += y * nr, y = V[8], xt += y * Rt, sr += y * At, Ut += y * zt, Zt += y * It, Ot += y * Yt, dt += y * Xt, pt += y * er, ht += y * Bt, Ye += y * tr, Qt += y * Ht, or += y * Tt, gr += y * at, lr += y * Ct, fr += y * Dt, Or += y * rr, Dr += y * nr, y = V[9], sr += y * Rt, Ut += y * At, Zt += y * zt, Ot += y * It, dt += y * Yt, pt += y * Xt, ht += y * er, Ye += y * Bt, Qt += y * tr, or += y * Ht, gr += y * Tt, lr += y * at, fr += y * Ct, Or += y * Dt, Dr += y * rr, br += y * nr, y = V[10], Ut += y * Rt, Zt += y * At, Ot += y * zt, dt += y * It, pt += y * Yt, ht += y * Xt, Ye += y * er, Qt += y * Bt, or += y * tr, gr += y * Ht, lr += y * Tt, fr += y * at, Or += y * Ct, Dr += y * Dt, br += y * rr, yr += y * nr, y = V[11], Zt += y * Rt, Ot += y * At, dt += y * zt, pt += y * It, ht += y * Yt, Ye += y * Xt, Qt += y * er, or += y * Bt, gr += y * tr, lr += y * Ht, fr += y * Tt, Or += y * at, Dr += y * Ct, br += y * Dt, yr += y * rr, Nr += y * nr, y = V[12], Ot += y * Rt, dt += y * At, pt += y * zt, ht += y * It, Ye += y * Yt, Qt += y * Xt, or += y * er, gr += y * Bt, lr += y * tr, fr += y * Ht, Or += y * Tt, Dr += y * at, br += y * Ct, yr += y * Dt, Nr += y * rr, Pn += y * nr, y = V[13], dt += y * Rt, pt += y * At, ht += y * zt, Ye += y * It, Qt += y * Yt, or += y * Xt, gr += y * er, lr += y * Bt, fr += y * tr, Or += y * Ht, Dr += y * Tt, br += y * at, yr += y * Ct, Nr += y * Dt, Pn += y * rr, Kr += y * nr, y = V[14], pt += y * Rt, ht += y * At, Ye += y * zt, Qt += y * It, or += y * Yt, gr += y * Xt, lr += y * er, fr += y * Bt, Or += y * tr, Dr += y * Ht, br += y * Tt, yr += y * at, Nr += y * Ct, Pn += y * Dt, Kr += y * rr, an += y * nr, y = V[15], ht += y * Rt, Ye += y * At, Qt += y * zt, or += y * It, gr += y * Yt, lr += y * Xt, fr += y * er, Or += y * Bt, Dr += y * tr, br += y * Ht, yr += y * Tt, Nr += y * at, Pn += y * Ct, Kr += y * Dt, an += y * rr, vn += y * nr, Pe += 38 * Ye, De += 38 * Qt, tt += 38 * or, wt += 38 * gr, st += 38 * lr, ft += 38 * fr, Jt += 38 * Or, Mt += 38 * Dr, xt += 38 * br, sr += 38 * yr, Ut += 38 * Nr, Zt += 38 * Pn, Ot += 38 * Kr, dt += 38 * an, pt += 38 * vn, L = 1, y = Pe + L + 65535, L = Math.floor(y / 65536), Pe = y - 65536 * L, y = De + L + 65535, L = Math.floor(y / 65536), De = y - 65536 * L, y = tt + L + 65535, L = Math.floor(y / 65536), tt = y - 65536 * L, y = wt + L + 65535, L = Math.floor(y / 65536), wt = y - 65536 * L, y = st + L + 65535, L = Math.floor(y / 65536), st = y - 65536 * L, y = ft + L + 65535, L = Math.floor(y / 65536), ft = y - 65536 * L, y = Jt + L + 65535, L = Math.floor(y / 65536), Jt = y - 65536 * L, y = Mt + L + 65535, L = Math.floor(y / 65536), Mt = y - 65536 * L, y = xt + L + 65535, L = Math.floor(y / 65536), xt = y - 65536 * L, y = sr + L + 65535, L = Math.floor(y / 65536), sr = y - 65536 * L, y = Ut + L + 65535, L = Math.floor(y / 65536), Ut = y - 65536 * L, y = Zt + L + 65535, L = Math.floor(y / 65536), Zt = y - 65536 * L, y = Ot + L + 65535, L = Math.floor(y / 65536), Ot = y - 65536 * L, y = dt + L + 65535, L = Math.floor(y / 65536), dt = y - 65536 * L, y = pt + L + 65535, L = Math.floor(y / 65536), pt = y - 65536 * L, y = ht + L + 65535, L = Math.floor(y / 65536), ht = y - 65536 * L, Pe += L - 1 + 37 * (L - 1), L = 1, y = Pe + L + 65535, L = Math.floor(y / 65536), Pe = y - 65536 * L, y = De + L + 65535, L = Math.floor(y / 65536), De = y - 65536 * L, y = tt + L + 65535, L = Math.floor(y / 65536), tt = y - 65536 * L, y = wt + L + 65535, L = Math.floor(y / 65536), wt = y - 65536 * L, y = st + L + 65535, L = Math.floor(y / 65536), st = y - 65536 * L, y = ft + L + 65535, L = Math.floor(y / 65536), ft = y - 65536 * L, y = Jt + L + 65535, L = Math.floor(y / 65536), Jt = y - 65536 * L, y = Mt + L + 65535, L = Math.floor(y / 65536), Mt = y - 65536 * L, y = xt + L + 65535, L = Math.floor(y / 65536), xt = y - 65536 * L, y = sr + L + 65535, L = Math.floor(y / 65536), sr = y - 65536 * L, y = Ut + L + 65535, L = Math.floor(y / 65536), Ut = y - 65536 * L, y = Zt + L + 65535, L = Math.floor(y / 65536), Zt = y - 65536 * L, y = Ot + L + 65535, L = Math.floor(y / 65536), Ot = y - 65536 * L, y = dt + L + 65535, L = Math.floor(y / 65536), dt = y - 65536 * L, y = pt + L + 65535, L = Math.floor(y / 65536), pt = y - 65536 * L, y = ht + L + 65535, L = Math.floor(y / 65536), ht = y - 65536 * L, Pe += L - 1 + 37 * (L - 1), K[0] = Pe, K[1] = De, K[2] = tt, K[3] = wt, K[4] = st, K[5] = ft, K[6] = Jt, K[7] = Mt, K[8] = xt, K[9] = sr, K[10] = Ut, K[11] = Zt, K[12] = Ot, K[13] = dt, K[14] = pt, K[15] = ht
            }

            function R(K, V) {
                ue(K, V, V)
            }

            function q(K, V) {
                const $ = re(),
                    y = re(),
                    L = re(),
                    Pe = re(),
                    De = re(),
                    tt = re(),
                    wt = re(),
                    st = re(),
                    ft = re();
                k($, K[1], K[0]), k(ft, V[1], V[0]), ue($, $, ft), Qe(y, K[0], K[1]), Qe(ft, V[0], V[1]), ue(y, y, ft), ue(L, K[3], V[3]), ue(L, L, pe), ue(Pe, K[2], V[2]), Qe(Pe, Pe, Pe), k(De, y, $), k(tt, Pe, L), Qe(wt, Pe, L), Qe(st, y, $), ue(K[0], De, tt), ue(K[1], st, wt), ue(K[2], wt, tt), ue(K[3], De, st)
            }

            function P(K, V, $) {
                for (let y = 0; y < 4; y++) Ke(K[y], V[y], $)
            }

            function b(K, V) {
                const $ = re(),
                    y = re(),
                    L = re();
                (function N(K, V) {
                    const $ = re();
                    let y;
                    for (y = 0; y < 16; y++) $[y] = V[y];
                    for (y = 253; y >= 0; y--) R($, $), 2 !== y && 4 !== y && ue($, $, V);
                    for (y = 0; y < 16; y++) K[y] = $[y]
                })(L, V[2]), ue($, V[0], L), ue(y, V[1], L), Je(K, y), K[31] ^= Lt($) << 7
            }

            function oe(K, V) {
                const $ = [re(), re(), re(), re()];
                fe($[0], ze), fe($[1], Ie), fe($[2], de), ue($[3], ze, Ie),
                    function O(K, V, $) {
                        fe(K[0], Ne), fe(K[1], de), fe(K[2], de), fe(K[3], Ne);
                        for (let y = 255; y >= 0; --y) {
                            const L = $[y / 8 | 0] >> (7 & y) & 1;
                            P(K, V, L), q(V, K), q(K, K), P(K, V, L)
                        }
                    }(K, $, V)
            }
            ne._w = function be(K) {
                if (K.length !== ne.aP) throw new Error(`ed25519: seed must be ${ne.aP} bytes`);
                const V = (0, we.hash)(K);
                V[0] &= 248, V[31] &= 127, V[31] |= 64;
                const $ = new Uint8Array(32),
                    y = [re(), re(), re(), re()];
                oe(y, V), b($, y);
                const L = new Uint8Array(64);
                return L.set(K), L.set($, 32), {
                    publicKey: $,
                    secretKey: L
                }
            };
            const ae = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function W(K, V) {
                let $, y, L, Pe;
                for (y = 63; y >= 32; --y) {
                    for ($ = 0, L = y - 32, Pe = y - 12; L < Pe; ++L) V[L] += $ - 16 * V[y] * ae[L - (y - 32)], $ = Math.floor((V[L] + 128) / 256), V[L] -= 256 * $;
                    V[L] += $, V[y] = 0
                }
                for ($ = 0, L = 0; L < 32; L++) V[L] += $ - (V[31] >> 4) * ae[L], $ = V[L] >> 8, V[L] &= 255;
                for (L = 0; L < 32; L++) V[L] -= $ * ae[L];
                for (y = 0; y < 32; y++) V[y + 1] += V[y] >> 8, K[y] = 255 & V[y]
            }

            function Se(K) {
                const V = new Float64Array(64);
                for (let $ = 0; $ < 64; $++) V[$] = K[$];
                for (let $ = 0; $ < 64; $++) K[$] = 0;
                W(K, V)
            }
            ne.Xx = function Ge(K, V) {
                const $ = new Float64Array(64),
                    y = [re(), re(), re(), re()],
                    L = (0, we.hash)(K.subarray(0, 32));
                L[0] &= 248, L[31] &= 127, L[31] |= 64;
                const Pe = new Uint8Array(64);
                Pe.set(L.subarray(32), 32);
                const De = new we.SHA512;
                De.update(Pe.subarray(32)), De.update(V);
                const tt = De.digest();
                De.clean(), Se(tt), oe(y, tt), b(Pe, y), De.reset(), De.update(Pe.subarray(0, 32)), De.update(K.subarray(32)), De.update(V);
                const wt = De.digest();
                Se(wt);
                for (let st = 0; st < 32; st++) $[st] = tt[st];
                for (let st = 0; st < 32; st++)
                    for (let ft = 0; ft < 32; ft++) $[st + ft] += wt[st] * L[ft];
                return W(Pe.subarray(32), $), Pe
            }
        },
        6713: (Ve, ne, ce) => {
            "use strict";
            Object.defineProperty(ne, "__esModule", {
                value: !0
            });
            var _ = ce(9546),
                ye = ce(3403);
            ne.DIGEST_LENGTH = 64, ne.BLOCK_SIZE = 128;
            var we = function() {
                function Ne() {
                    this.digestLength = ne.DIGEST_LENGTH, this.blockSize = ne.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return Ne.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, Ne.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, Ne.prototype.clean = function() {
                    ye.wipe(this._buffer), ye.wipe(this._tempHi), ye.wipe(this._tempLo), this.reset()
                }, Ne.prototype.update = function(de, he) {
                    if (void 0 === he && (he = de.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
                    var pe = 0;
                    if (this._bytesHashed += he, this._bufferLength > 0) {
                        for (; this._bufferLength < ne.BLOCK_SIZE && he > 0;) this._buffer[this._bufferLength++] = de[pe++], he--;
                        this._bufferLength === this.blockSize && (re(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (he >= this.blockSize && (pe = re(this._tempHi, this._tempLo, this._stateHi, this._stateLo, de, pe, he), he %= this.blockSize); he > 0;) this._buffer[this._bufferLength++] = de[pe++], he--;
                    return this
                }, Ne.prototype.finish = function(de) {
                    if (!this._finished) {
                        var he = this._bytesHashed,
                            pe = this._bufferLength,
                            ze = he / 536870912 | 0,
                            Ie = he << 3,
                            ve = he % 128 < 112 ? 128 : 256;
                        this._buffer[pe] = 128;
                        for (var fe = pe + 1; fe < ve - 8; fe++) this._buffer[fe] = 0;
                        _.writeUint32BE(ze, this._buffer, ve - 8), _.writeUint32BE(Ie, this._buffer, ve - 4), re(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, ve), this._finished = !0
                    }
                    for (fe = 0; fe < this.digestLength / 8; fe++) _.writeUint32BE(this._stateHi[fe], de, 8 * fe), _.writeUint32BE(this._stateLo[fe], de, 8 * fe + 4);
                    return this
                }, Ne.prototype.digest = function() {
                    var de = new Uint8Array(this.digestLength);
                    return this.finish(de), de
                }, Ne.prototype.saveState = function() {
                    if (this._finished) throw new Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, Ne.prototype.restoreState = function(de) {
                    return this._stateHi.set(de.stateHi), this._stateLo.set(de.stateLo), this._bufferLength = de.bufferLength, de.buffer && this._buffer.set(de.buffer), this._bytesHashed = de.bytesHashed, this._finished = !1, this
                }, Ne.prototype.cleanSavedState = function(de) {
                    ye.wipe(de.stateHi), ye.wipe(de.stateLo), de.buffer && ye.wipe(de.buffer), de.bufferLength = 0, de.bytesHashed = 0
                }, Ne
            }();
            ne.SHA512 = we;
            var E = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function re(Ne, de, he, pe, ze, Ie, ve) {
                for (var b, O, oe, be, z, ee, ae, W, fe = he[0], it = he[1], Ke = he[2], Je = he[3], et = he[4], jt = he[5], Lt = he[6], Ft = he[7], Qe = pe[0], k = pe[1], ue = pe[2], R = pe[3], N = pe[4], C = pe[5], q = pe[6], P = pe[7]; ve >= 128;) {
                    for (var Se = 0; Se < 16; Se++) Ne[Se] = _.readUint32BE(ze, Ge = 8 * Se + Ie), de[Se] = _.readUint32BE(ze, Ge + 4);
                    for (Se = 0; Se < 80; Se++) {
                        var y, Jt, $t = it,
                            on = Ke,
                            _t = Je,
                            K = et,
                            V = jt,
                            $ = Lt,
                            Pe = k,
                            De = ue,
                            tt = R,
                            wt = N,
                            st = C,
                            ft = q;
                        if (z = 65535 & (O = P), ee = O >>> 16, ae = 65535 & (b = Ft), W = b >>> 16, z += 65535 & (O = (N >>> 14 | et << 18) ^ (N >>> 18 | et << 14) ^ (et >>> 9 | N << 23)), ee += O >>> 16, ae += 65535 & (b = (et >>> 14 | N << 18) ^ (et >>> 18 | N << 14) ^ (N >>> 9 | et << 23)), W += b >>> 16, z += 65535 & (O = N & C ^ ~N & q), ee += O >>> 16, ae += 65535 & (b = et & jt ^ ~et & Lt), W += b >>> 16, z += 65535 & (O = E[2 * Se + 1]), ee += O >>> 16, ae += 65535 & (b = E[2 * Se]), W += b >>> 16, ee += (O = de[Se % 16]) >>> 16, ae += 65535 & (b = Ne[Se % 16]), W += b >>> 16, ae += (ee += (z += 65535 & O) >>> 16) >>> 16, z = 65535 & (O = be = 65535 & z | ee << 16), ee = O >>> 16, ae = 65535 & (b = oe = 65535 & ae | (W += ae >>> 16) << 16), W = b >>> 16, z += 65535 & (O = (Qe >>> 28 | fe << 4) ^ (fe >>> 2 | Qe << 30) ^ (fe >>> 7 | Qe << 25)), ee += O >>> 16, ae += 65535 & (b = (fe >>> 28 | Qe << 4) ^ (Qe >>> 2 | fe << 30) ^ (Qe >>> 7 | fe << 25)), W += b >>> 16, ee += (O = Qe & k ^ Qe & ue ^ k & ue) >>> 16, ae += 65535 & (b = fe & it ^ fe & Ke ^ it & Ke), W += b >>> 16, y = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, Jt = 65535 & z | ee << 16, z = 65535 & (O = tt), ee = O >>> 16, ae = 65535 & (b = _t), W = b >>> 16, ee += (O = be) >>> 16, ae += 65535 & (b = oe), W += b >>> 16, it = fe, Ke = $t, Je = on, et = _t = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, jt = K, Lt = V, Ft = $, fe = y, k = Qe, ue = Pe, R = De, N = tt = 65535 & z | ee << 16, C = wt, q = st, P = ft, Qe = Jt, Se % 16 == 15)
                            for (var Ge = 0; Ge < 16; Ge++) z = 65535 & (O = de[Ge]), ee = O >>> 16, ae = 65535 & (b = Ne[Ge]), W = b >>> 16, z += 65535 & (O = de[(Ge + 9) % 16]), ee += O >>> 16, ae += 65535 & (b = Ne[(Ge + 9) % 16]), W += b >>> 16, z += 65535 & (O = ((be = de[(Ge + 1) % 16]) >>> 1 | (oe = Ne[(Ge + 1) % 16]) << 31) ^ (be >>> 8 | oe << 24) ^ (be >>> 7 | oe << 25)), ee += O >>> 16, ae += 65535 & (b = (oe >>> 1 | be << 31) ^ (oe >>> 8 | be << 24) ^ oe >>> 7), W += b >>> 16, ee += (O = ((be = de[(Ge + 14) % 16]) >>> 19 | (oe = Ne[(Ge + 14) % 16]) << 13) ^ (oe >>> 29 | be << 3) ^ (be >>> 6 | oe << 26)) >>> 16, ae += 65535 & (b = (oe >>> 19 | be << 13) ^ (be >>> 29 | oe << 3) ^ oe >>> 6), W += b >>> 16, Ne[Ge] = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, de[Ge] = 65535 & z | ee << 16
                    }
                    z = 65535 & (O = Qe), ee = O >>> 16, ae = 65535 & (b = fe), W = b >>> 16, ee += (O = pe[0]) >>> 16, ae += 65535 & (b = he[0]), W += b >>> 16, he[0] = fe = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, pe[0] = Qe = 65535 & z | ee << 16, z = 65535 & (O = k), ee = O >>> 16, ae = 65535 & (b = it), W = b >>> 16, ee += (O = pe[1]) >>> 16, ae += 65535 & (b = he[1]), W += b >>> 16, he[1] = it = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, pe[1] = k = 65535 & z | ee << 16, z = 65535 & (O = ue), ee = O >>> 16, ae = 65535 & (b = Ke), W = b >>> 16, ee += (O = pe[2]) >>> 16, ae += 65535 & (b = he[2]), W += b >>> 16, he[2] = Ke = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, pe[2] = ue = 65535 & z | ee << 16, z = 65535 & (O = R), ee = O >>> 16, ae = 65535 & (b = Je), W = b >>> 16, ee += (O = pe[3]) >>> 16, ae += 65535 & (b = he[3]), W += b >>> 16, he[3] = Je = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, pe[3] = R = 65535 & z | ee << 16, z = 65535 & (O = N), ee = O >>> 16, ae = 65535 & (b = et), W = b >>> 16, ee += (O = pe[4]) >>> 16, ae += 65535 & (b = he[4]), W += b >>> 16, he[4] = et = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, pe[4] = N = 65535 & z | ee << 16, z = 65535 & (O = C), ee = O >>> 16, ae = 65535 & (b = jt), W = b >>> 16, ee += (O = pe[5]) >>> 16, ae += 65535 & (b = he[5]), W += b >>> 16, he[5] = jt = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, pe[5] = C = 65535 & z | ee << 16, z = 65535 & (O = q), ee = O >>> 16, ae = 65535 & (b = Lt), W = b >>> 16, ee += (O = pe[6]) >>> 16, ae += 65535 & (b = he[6]), W += b >>> 16, he[6] = Lt = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, pe[6] = q = 65535 & z | ee << 16, z = 65535 & (O = P), ee = O >>> 16, ae = 65535 & (b = Ft), W = b >>> 16, ee += (O = pe[7]) >>> 16, ae += 65535 & (b = he[7]), W += b >>> 16, he[7] = Ft = 65535 & (ae += (ee += (z += 65535 & O) >>> 16) >>> 16) | (W += ae >>> 16) << 16, pe[7] = P = 65535 & z | ee << 16, Ie += 128, ve -= 128
                }
                return Ie
            }
            ne.hash = function Ee(Ne) {
                var de = new we;
                de.update(Ne);
                var he = de.digest();
                return de.clean(), he
            }
        },
        7263: (Ve, ne) => {
            "use strict";

            function ce() {
                return (null == global ? void 0 : global.crypto) || (null == global ? void 0 : global.msCrypto) || {}
            }

            function _() {
                const we = ce();
                return we.subtle || we.webkitSubtle
            }
            Object.defineProperty(ne, "__esModule", {
                value: !0
            }), ne.isBrowserCryptoAvailable = ne.getSubtleCrypto = ne.getBrowerCrypto = void 0, ne.getBrowerCrypto = ce, ne.getSubtleCrypto = _, ne.isBrowserCryptoAvailable = function ye() {
                return !!ce() && !!_()
            }
        },
        4574: (Ve, ne) => {
            "use strict";

            function ce() {
                return typeof document > "u" && typeof navigator < "u" && "ReactNative" === navigator.product
            }

            function _() {
                return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
            }
            Object.defineProperty(ne, "__esModule", {
                value: !0
            }), ne.isBrowser = ne.isNode = ne.isReactNative = void 0, ne.isReactNative = ce, ne.isNode = _, ne.isBrowser = function ye() {
                return !ce() && !_()
            }
        },
        2299: (Ve, ne, ce) => {
            "use strict";
            Object.defineProperty(ne, "__esModule", {
                value: !0
            });
            const _ = ce(4308);
            _.__exportStar(ce(7263), ne), _.__exportStar(ce(4574), ne)
        },
        2678: (Ve, ne, ce) => {
            "use strict";
            ce.r(ne), ce.d(ne, {
                EthereumProvider: () => ky,
                OPTIONAL_EVENTS: () => dl,
                OPTIONAL_METHODS: () => hl,
                REQUIRED_EVENTS: () => Bs,
                REQUIRED_METHODS: () => Us,
                default: () => ks
            });
            var _ = ce(5861),
                ye = ce(2016),
                we = ce.n(ye),
                E = ce(3304);
            const re = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                Ee = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                Ne = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function de(d, t) {
                if (!("__proto__" === d || "constructor" === d && t && "object" == typeof t && "prototype" in t)) return t;
                ! function he(d) {
                    console.warn(`[destr] Dropping "${d}" key to prevent prototype pollution.`)
                }(d)
            }

            function pe(d, t = {}) {
                if ("string" != typeof d) return d;
                const r = d.trim();
                if ('"' === d[0] && d.endsWith('"') && !d.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    const a = r.toLowerCase();
                    if ("true" === a) return !0;
                    if ("false" === a) return !1;
                    if ("undefined" === a) return;
                    if ("null" === a) return null;
                    if ("nan" === a) return Number.NaN;
                    if ("infinity" === a) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === a) return Number.NEGATIVE_INFINITY
                }
                if (!Ne.test(d)) {
                    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
                    return d
                }
                try {
                    if (re.test(d) || Ee.test(d)) {
                        if (t.strict) throw new Error("[destr] Possible prototype pollution");
                        return JSON.parse(d, de)
                    }
                    return JSON.parse(d)
                } catch (a) {
                    if (t.strict) throw a;
                    return d
                }
            }

            function ve(d, ...t) {
                try {
                    return function Ie(d) {
                        return d && "function" == typeof d.then ? d : Promise.resolve(d)
                    }(d(...t))
                } catch (r) {
                    return Promise.reject(r)
                }
            }

            function Ke(d) {
                if (function fe(d) {
                        const t = typeof d;
                        return null === d || "object" !== t && "function" !== t
                    }(d)) return String(d);
                if (function it(d) {
                        const t = Object.getPrototypeOf(d);
                        return !t || t.isPrototypeOf(Object)
                    }(d) || Array.isArray(d)) return JSON.stringify(d);
                if ("function" == typeof d.toJSON) return Ke(d.toJSON());
                throw new Error("[unstorage] Cannot stringify value!")
            }

            function Je() {
                if (void 0 === typeof Buffer) throw new TypeError("[unstorage] Buffer is not supported!")
            }
            const et = "base64:";

            function k(d) {
                return d ? d.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function ue(...d) {
                return k(d.join(":"))
            }

            function R(d) {
                return (d = k(d)) ? d + ":" : ""
            }
            const q = () => {
                const d = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => d.has(t),
                    getItem: t => d.get(t) ? ? null,
                    getItemRaw: t => d.get(t) ? ? null,
                    setItem(t, r) {
                        d.set(t, r)
                    },
                    setItemRaw(t, r) {
                        d.set(t, r)
                    },
                    removeItem(t) {
                        d.delete(t)
                    },
                    getKeys: () => Array.from(d.keys()),
                    clear() {
                        d.clear()
                    },
                    dispose() {
                        d.clear()
                    }
                }
            };

            function z(d, t, r) {
                return d.watch ? d.watch((a, l) => t(a, r + l)) : () => {}
            }

            function ee(d) {
                return ae.apply(this, arguments)
            }

            function ae() {
                return (ae = (0, _.Z)(function*(d) {
                    "function" == typeof d.dispose && (yield ve(d.dispose))
                })).apply(this, arguments)
            }

            function Se(d) {
                return new Promise((t, r) => {
                    d.oncomplete = d.onsuccess = () => t(d.result), d.onabort = d.onerror = () => r(d.error)
                })
            }

            function Ge(d, t) {
                const r = indexedDB.open(d);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                const a = Se(r);
                return (l, f) => a.then(g => f(g.transaction(t, l).objectStore(t)))
            }
            let Fe;

            function $t() {
                return Fe || (Fe = Ge("keyval-store", "keyval")), Fe
            }

            function on(d, t = $t()) {
                return t("readonly", r => Se(r.get(d)))
            }
            const ft = d => JSON.stringify(d, (t, r) => "bigint" == typeof r ? r.toString() + "n" : r),
                Jt = d => {
                    const r = d.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(r, (a, l) => "string" == typeof l && l.match(/^\d+n$/) ? BigInt(l.substring(0, l.length - 1)) : l)
                };

            function Mt(d) {
                if ("string" != typeof d) throw new Error("Cannot safe json parse value of type " + typeof d);
                try {
                    return Jt(d)
                } catch {
                    return d
                }
            }

            function xt(d) {
                return "string" == typeof d ? d : ft(d) || ""
            }
            var Zt = (d = {}) => {
                const t = d.base && d.base.length > 0 ? `${d.base}:` : "",
                    r = l => t + l;
                let a;
                return d.dbName && d.storeName && (a = Ge(d.dbName, d.storeName)), {
                    name: "idb-keyval",
                    options: d,
                    hasItem: l => (0, _.Z)(function*() {
                        return !(typeof(yield on(r(l), a)) > "u")
                    })(),
                    getItem: l => (0, _.Z)(function*() {
                        return (yield on(r(l), a)) ? ? null
                    })(),
                    setItem: (l, f) => function _t(d, t, r = $t()) {
                        return r("readwrite", a => (a.put(t, d), Se(a.transaction)))
                    }(r(l), f, a),
                    removeItem: l => function y(d, t = $t()) {
                        return t("readwrite", r => (r.delete(d), Se(r.transaction)))
                    }(r(l), a),
                    getKeys: () => function tt(d = $t()) {
                        return d("readonly", t => {
                            if (t.getAllKeys) return Se(t.getAllKeys());
                            const r = [];
                            return function De(d, t) {
                                return d.openCursor().onsuccess = function() {
                                    this.result && (t(this.result), this.result.continue())
                                }, Se(d.transaction)
                            }(t, a => r.push(a.key)).then(() => r)
                        })
                    }(a),
                    clear: () => function Pe(d = $t()) {
                        return d("readwrite", t => (t.clear(), Se(t.transaction)))
                    }(a)
                }
            };
            class pt {
                constructor() {
                    this.indexedDb = function P(d = {}) {
                        const t = {
                                mounts: {
                                    "": d.driver || q()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            r = S => {
                                for (const j of t.mountpoints)
                                    if (S.startsWith(j)) return {
                                        base: j,
                                        relativeKey: S.slice(j.length),
                                        driver: t.mounts[j]
                                    };
                                return {
                                    base: "",
                                    relativeKey: S,
                                    driver: t.mounts[""]
                                }
                            },
                            a = (S, j) => t.mountpoints.filter(H => H.startsWith(S) || j && S.startsWith(H)).map(H => ({
                                relativeBase: S.length > H.length ? S.slice(H.length) : void 0,
                                mountpoint: H,
                                driver: t.mounts[H]
                            })),
                            l = (S, j) => {
                                if (t.watching) {
                                    j = k(j);
                                    for (const H of t.watchListeners) H(S, j)
                                }
                            },
                            f = function() {
                                var S = (0, _.Z)(function*() {
                                    if (!t.watching) {
                                        t.watching = !0;
                                        for (const j in t.mounts) t.unwatch[j] = yield z(t.mounts[j], l, j)
                                    }
                                });
                                return function() {
                                    return S.apply(this, arguments)
                                }
                            }(),
                            g = function() {
                                var S = (0, _.Z)(function*() {
                                    if (t.watching) {
                                        for (const j in t.unwatch) yield t.unwatch[j]();
                                        t.unwatch = {}, t.watching = !1
                                    }
                                });
                                return function() {
                                    return S.apply(this, arguments)
                                }
                            }(),
                            w = (S, j, H) => {
                                const J = new Map,
                                    le = se => {
                                        let Ae = J.get(se.base);
                                        return Ae || (Ae = {
                                            driver: se.driver,
                                            base: se.base,
                                            items: []
                                        }, J.set(se.base, Ae)), Ae
                                    };
                                for (const se of S) {
                                    const Ae = "string" == typeof se,
                                        qe = k(Ae ? se : se.key),
                                        We = Ae ? void 0 : se.value,
                                        kt = Ae || !se.options ? j : { ...j,
                                            ...se.options
                                        },
                                        ut = r(qe);
                                    le(ut).items.push({
                                        key: qe,
                                        value: We,
                                        relativeKey: ut.relativeKey,
                                        options: kt
                                    })
                                }
                                return Promise.all([...J.values()].map(se => H(se))).then(se => se.flat())
                            },
                            T = {
                                hasItem(S, j = {}) {
                                    S = k(S);
                                    const {
                                        relativeKey: H,
                                        driver: J
                                    } = r(S);
                                    return ve(J.hasItem, H, j)
                                },
                                getItem(S, j = {}) {
                                    S = k(S);
                                    const {
                                        relativeKey: H,
                                        driver: J
                                    } = r(S);
                                    return ve(J.getItem, H, j).then(le => pe(le))
                                },
                                getItems: (S, j) => w(S, j, H => H.driver.getItems ? ve(H.driver.getItems, H.items.map(J => ({
                                    key: J.relativeKey,
                                    options: J.options
                                })), j).then(J => J.map(le => ({
                                    key: ue(H.base, le.key),
                                    value: pe(le.value)
                                }))) : Promise.all(H.items.map(J => ve(H.driver.getItem, J.relativeKey, J.options).then(le => ({
                                    key: J.key,
                                    value: pe(le)
                                }))))),
                                getItemRaw(S, j = {}) {
                                    S = k(S);
                                    const {
                                        relativeKey: H,
                                        driver: J
                                    } = r(S);
                                    return J.getItemRaw ? ve(J.getItemRaw, H, j) : ve(J.getItem, H, j).then(le => function Lt(d) {
                                        return "string" == typeof d && d.startsWith(et) ? (Je(), Buffer.from(d.slice(7), "base64")) : d
                                    }(le))
                                },
                                setItem: (S, j, H = {}) => (0, _.Z)(function*() {
                                    if (void 0 === j) return T.removeItem(S);
                                    S = k(S);
                                    const {
                                        relativeKey: J,
                                        driver: le
                                    } = r(S);
                                    le.setItem && (yield ve(le.setItem, J, Ke(j), H), le.watch || l("update", S))
                                })(),
                                setItems: (S, j) => (0, _.Z)(function*() {
                                    yield w(S, j, function() {
                                        var H = (0, _.Z)(function*(J) {
                                            if (J.driver.setItems) return ve(J.driver.setItems, J.items.map(le => ({
                                                key: le.relativeKey,
                                                value: Ke(le.value),
                                                options: le.options
                                            })), j);
                                            J.driver.setItem && (yield Promise.all(J.items.map(le => ve(J.driver.setItem, le.relativeKey, Ke(le.value), le.options))))
                                        });
                                        return function(J) {
                                            return H.apply(this, arguments)
                                        }
                                    }())
                                })(),
                                setItemRaw: (S, j, H = {}) => (0, _.Z)(function*() {
                                    if (void 0 === j) return T.removeItem(S, H);
                                    S = k(S);
                                    const {
                                        relativeKey: J,
                                        driver: le
                                    } = r(S);
                                    if (le.setItemRaw) yield ve(le.setItemRaw, J, j, H);
                                    else {
                                        if (!le.setItem) return;
                                        yield ve(le.setItem, J, function jt(d) {
                                            if ("string" == typeof d) return d;
                                            Je();
                                            const t = Buffer.from(d).toString("base64");
                                            return et + t
                                        }(j), H)
                                    }
                                    le.watch || l("update", S)
                                })(),
                                removeItem: (S, j = {}) => (0, _.Z)(function*() {
                                    "boolean" == typeof j && (j = {
                                        removeMeta: j
                                    }), S = k(S);
                                    const {
                                        relativeKey: H,
                                        driver: J
                                    } = r(S);
                                    J.removeItem && (yield ve(J.removeItem, H, j), (j.removeMeta || j.removeMata) && (yield ve(J.removeItem, H + "$", j)), J.watch || l("remove", S))
                                })(),
                                getMeta: (S, j = {}) => (0, _.Z)(function*() {
                                    "boolean" == typeof j && (j = {
                                        nativeOnly: j
                                    }), S = k(S);
                                    const {
                                        relativeKey: H,
                                        driver: J
                                    } = r(S), le = Object.create(null);
                                    if (J.getMeta && Object.assign(le, yield ve(J.getMeta, H, j)), !j.nativeOnly) {
                                        const se = yield ve(J.getItem, H + "$", j).then(Ae => pe(Ae));
                                        se && "object" == typeof se && ("string" == typeof se.atime && (se.atime = new Date(se.atime)), "string" == typeof se.mtime && (se.mtime = new Date(se.mtime)), Object.assign(le, se))
                                    }
                                    return le
                                })(),
                                setMeta(S, j, H = {}) {
                                    return this.setItem(S + "$", j, H)
                                },
                                removeMeta(S, j = {}) {
                                    return this.removeItem(S + "$", j)
                                },
                                getKeys: (S, j = {}) => (0, _.Z)(function*() {
                                    S = R(S);
                                    const H = a(S, !0);
                                    let J = [];
                                    const le = [];
                                    for (const se of H) {
                                        const qe = (yield ve(se.driver.getKeys, se.relativeBase, j)).map(We => se.mountpoint + k(We)).filter(We => !J.some(kt => We.startsWith(kt)));
                                        le.push(...qe), J = [se.mountpoint, ...J.filter(We => !We.startsWith(se.mountpoint))]
                                    }
                                    return le.filter(S ? se => se.startsWith(S) && !se.endsWith("$") : se => !se.endsWith("$"))
                                })(),
                                clear: (S, j = {}) => (0, _.Z)(function*() {
                                    S = R(S), yield Promise.all(a(S, !1).map(function() {
                                        var H = (0, _.Z)(function*(J) {
                                            if (J.driver.clear) return ve(J.driver.clear, J.relativeBase, j);
                                            if (J.driver.removeItem) {
                                                const le = yield J.driver.getKeys(J.relativeBase || "", j);
                                                return Promise.all(le.map(se => J.driver.removeItem(se, j)))
                                            }
                                        });
                                        return function(J) {
                                            return H.apply(this, arguments)
                                        }
                                    }()))
                                })(),
                                dispose: () => (0, _.Z)(function*() {
                                    yield Promise.all(Object.values(t.mounts).map(S => ee(S)))
                                })(),
                                watch: S => (0, _.Z)(function*() {
                                    return yield f(), t.watchListeners.push(S), (0, _.Z)(function*() {
                                        t.watchListeners = t.watchListeners.filter(j => j !== S), 0 === t.watchListeners.length && (yield g())
                                    })
                                })(),
                                unwatch: () => (0, _.Z)(function*() {
                                    t.watchListeners = [], yield g()
                                })(),
                                mount(S, j) {
                                    if ((S = R(S)) && t.mounts[S]) throw new Error(`already mounted at ${S}`);
                                    return S && (t.mountpoints.push(S), t.mountpoints.sort((H, J) => J.length - H.length)), t.mounts[S] = j, t.watching && Promise.resolve(z(j, l, S)).then(H => {
                                        t.unwatch[S] = H
                                    }).catch(console.error), T
                                },
                                unmount: (S, j = !0) => (0, _.Z)(function*() {
                                    (S = R(S)) && t.mounts[S] && (t.watching && S in t.unwatch && (t.unwatch[S](), delete t.unwatch[S]), j && (yield ee(t.mounts[S])), t.mountpoints = t.mountpoints.filter(H => H !== S), delete t.mounts[S])
                                })(),
                                getMount(S = "") {
                                    S = k(S) + ":";
                                    const j = r(S);
                                    return {
                                        driver: j.driver,
                                        base: j.base
                                    }
                                },
                                getMounts: (S = "", j = {}) => (S = k(S), a(S, j.parents).map(J => ({
                                    driver: J.driver,
                                    base: J.mountpoint
                                })))
                            };
                        return T
                    }({
                        driver: Zt({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                getKeys() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return t.indexedDb.getKeys()
                    })()
                }
                getEntries() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return (yield t.indexedDb.getItems(yield t.indexedDb.getKeys())).map(r => [r.key, r.value])
                    })()
                }
                getItem(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        const a = yield r.indexedDb.getItem(t);
                        if (null !== a) return a
                    })()
                }
                setItem(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        yield a.indexedDb.setItem(t, xt(r))
                    })()
                }
                removeItem(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.indexedDb.removeItem(t)
                    })()
                }
            }
            var ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                Ye = {
                    exports: {}
                };

            function Qt(d) {
                var t;
                return [d[0], Mt(null != (t = d[1]) ? t : "")]
            }! function() {
                let d;

                function t() {}
                d = t, d.prototype.getItem = function(r) {
                    return this.hasOwnProperty(r) ? String(this[r]) : null
                }, d.prototype.setItem = function(r, a) {
                    this[r] = String(a)
                }, d.prototype.removeItem = function(r) {
                    delete this[r]
                }, d.prototype.clear = function() {
                    const r = this;
                    Object.keys(r).forEach(function(a) {
                        r[a] = void 0, delete r[a]
                    })
                }, d.prototype.key = function(r) {
                    return r = r || 0, Object.keys(this)[r]
                }, d.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), Ye.exports = typeof ht < "u" && ht.localStorage ? ht.localStorage : typeof window < "u" && window.localStorage ? window.localStorage : new t
            }();
            class or {
                constructor() {
                    this.localStorage = Ye.exports
                }
                getKeys() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return Object.keys(t.localStorage)
                    })()
                }
                getEntries() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return Object.entries(t.localStorage).map(Qt)
                    })()
                }
                getItem(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        const a = r.localStorage.getItem(t);
                        if (null !== a) return Mt(a)
                    })()
                }
                setItem(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        a.localStorage.setItem(t, xt(r))
                    })()
                }
                removeItem(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        r.localStorage.removeItem(t)
                    })()
                }
            }
            const fr = function() {
                    var d = (0, _.Z)(function*(t, r, a) {
                        const l = "wc_storage_version",
                            f = yield r.getItem(l);
                        if (f && f >= 1) return void a(r);
                        const g = yield t.getKeys();
                        if (!g.length) return void a(r);
                        const w = [];
                        for (; g.length;) {
                            const T = g.shift();
                            if (!T) continue;
                            const S = T.toLowerCase();
                            if (S.includes("wc@") || S.includes("walletconnect") || S.includes("wc_") || S.includes("wallet_connect")) {
                                const j = yield t.getItem(T);
                                yield r.setItem(T, j), w.push(T)
                            }
                        }
                        yield r.setItem(l, 1), a(r), Or(t, w)
                    });
                    return function(r, a, l) {
                        return d.apply(this, arguments)
                    }
                }(),
                Or = function() {
                    var d = (0, _.Z)(function*(t, r) {
                        r.length && r.forEach(function() {
                            var a = (0, _.Z)(function*(l) {
                                yield t.removeItem(l)
                            });
                            return function(l) {
                                return a.apply(this, arguments)
                            }
                        }())
                    });
                    return function(r, a) {
                        return d.apply(this, arguments)
                    }
                }();
            class Dr {
                constructor() {
                    this.initialized = !1, this.setInitialized = r => {
                        this.storage = r, this.initialized = !0
                    };
                    const t = new or;
                    this.storage = t;
                    try {
                        const r = new pt;
                        fr(t, r, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                getKeys() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return yield t.initialize(), t.storage.getKeys()
                    })()
                }
                getEntries() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return yield t.initialize(), t.storage.getEntries()
                    })()
                }
                getItem(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        return yield r.initialize(), r.storage.getItem(t)
                    })()
                }
                setItem(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        return yield a.initialize(), a.storage.setItem(t, r)
                    })()
                }
                removeItem(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        return yield r.initialize(), r.storage.removeItem(t)
                    })()
                }
                initialize() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.initialized || (yield new Promise(r => {
                            const a = setInterval(() => {
                                t.initialized && (clearInterval(a), r())
                            }, 20)
                        }))
                    })()
                }
            }
            var br = ce(986),
                yr = ce(1590),
                Nr = ce.n(yr);
            const Kr = "custom_context";
            Symbol;
            var Yt = Object.defineProperty,
                Xt = Object.defineProperties,
                er = Object.getOwnPropertyDescriptors,
                Bt = Object.getOwnPropertySymbols,
                tr = Object.prototype.hasOwnProperty,
                Ht = Object.prototype.propertyIsEnumerable,
                Tt = (d, t, r) => t in d ? Yt(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r;

            function Dt(d) {
                return ((d, t) => Xt(d, er(t)))(((d, t) => {
                    for (var r in t || (t = {})) tr.call(t, r) && Tt(d, r, t[r]);
                    if (Bt)
                        for (var r of Bt(t)) Ht.call(t, r) && Tt(d, r, t[r]);
                    return d
                })({}, d), {
                    level: d ? .level || "info"
                })
            }

            function wr(d, t = Kr) {
                let r = "";
                return r = typeof d.bindings > "u" ? function rr(d, t = Kr) {
                    return d[t] || ""
                }(d, t) : d.bindings().context || "", r
            }

            function xr(d, t, r = Kr) {
                const a = function cn(d, t, r = Kr) {
                    const a = wr(d, r);
                    return a.trim() ? `${a}/${t}` : t
                }(d, t, r);
                return function nr(d, t, r = Kr) {
                    return d[r] = t, d
                }(d.child({
                    context: a
                }), a, r)
            }
            var Hn = ce(2108);
            class Sn extends Hn.q {
                constructor(t) {
                    super(), this.opts = t, this.protocol = "wc", this.version = 2
                }
            }
            class Uo extends Hn.q {
                constructor(t, r) {
                    super(), this.core = t, this.logger = r, this.records = new Map
                }
            }
            class Bo {
                constructor(t, r) {
                    this.logger = t, this.core = r
                }
            }
            class Ho extends Hn.q {
                constructor(t, r) {
                    super(), this.relayer = t, this.logger = r
                }
            }
            class ko extends Hn.q {
                constructor(t) {
                    super()
                }
            }
            class wi {
                constructor(t, r, a, l) {
                    this.core = t, this.logger = r, this.name = a
                }
            }
            class Ko extends Hn.q {
                constructor(t, r) {
                    super(), this.relayer = t, this.logger = r
                }
            }
            class Vo extends Hn.q {
                constructor(t, r) {
                    super(), this.core = t, this.logger = r
                }
            }
            class Go {
                constructor(t, r) {
                    this.projectId = t, this.logger = r
                }
            }
            class Wo {
                constructor(t, r) {
                    this.projectId = t, this.logger = r
                }
            }
            class Jo {
                constructor(t) {
                    this.opts = t, this.protocol = "wc", this.version = 2
                }
            }
            class Qo {
                constructor(t) {
                    this.client = t
                }
            }
            var kn = ce(5972),
                Rs = ce(5465),
                Oe = ce(5409);
            const Ts = "base64url",
                Cs = "utf8",
                ta = ":",
                Ds = "did",
                xi = "key",
                Rn = "base58btc",
                ra = "z",
                na = "K36";
            var sa = ce(1376),
                Hi = ce(878),
                ki = ce(8003);

            function Vr(d) {
                return (0, Hi.B)((0, ki.m)(xt(d), Cs), Ts)
            }

            function Ki(d) {
                const t = (0, ki.m)(na, Rn),
                    r = ra + (0, Hi.B)((0, sa.z)([t, d]), Rn);
                return [Ds, xi, r].join(ta)
            }

            function Ii(d) {
                return (0, Hi.B)(d, Ts)
            }

            function Gi(d = (0, Rs.randomBytes)(32)) {
                return kn._w(d)
            }

            function Pi() {
                return (Pi = (0, _.Z)(function*(d, t, r, a, l = (0, Oe.fromMiliseconds)(Date.now())) {
                    const f = {
                            alg: "EdDSA",
                            typ: "JWT"
                        },
                        T = {
                            iss: Ki(a.publicKey),
                            sub: d,
                            aud: t,
                            iat: l,
                            exp: l + r
                        },
                        S = function Vi(d) {
                            return (0, ki.m)([Vr(d.header), Vr(d.payload)].join("."), "utf8")
                        }({
                            header: f,
                            payload: T
                        });
                    return function Ns(d) {
                        return [Vr(d.header), Vr(d.payload), Ii(d.signature)].join(".")
                    }({
                        header: f,
                        payload: T,
                        signature: kn.Xx(a.secretKey, S)
                    })
                })).apply(this, arguments)
            }
            ce(2768);
            var I = ce(3544);
            const je = "INTERNAL_ERROR",
                mt = "SERVER_ERROR",
                ir = [-32700, -32600, -32601, -32602, -32603],
                ct = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [je]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [mt]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                Er = mt;

            function Rr(d) {
                return Object.keys(ct).includes(d) ? ct[d] : ct[Er]
            }

            function mn(d, t, r) {
                return d.message.includes("getaddrinfo ENOTFOUND") || d.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : d
            }
            var js = ce(2299);

            function Kn(d = 3) {
                return Date.now() * Math.pow(10, d) + Math.floor(Math.random() * Math.pow(10, d))
            }

            function ca(d = 6) {
                return BigInt(Kn(d))
            }

            function ui(d, t, r) {
                return {
                    id: r || Kn(),
                    jsonrpc: "2.0",
                    method: d,
                    params: t
                }
            }

            function Ls(d, t) {
                return {
                    id: d,
                    jsonrpc: "2.0",
                    result: t
                }
            }

            function Fs(d, t, r) {
                return {
                    id: d,
                    jsonrpc: "2.0",
                    error: Jh(t, r)
                }
            }

            function Jh(d, t) {
                return typeof d > "u" ? Rr(je) : ("string" == typeof d && (d = Object.assign(Object.assign({}, Rr(mt)), {
                    message: d
                })), typeof t < "u" && (d.data = t), function ar(d) {
                    return ir.includes(d)
                }(d.code) && (d = function un(d) {
                    return Object.values(ct).find(r => r.code === d) || ct[Er]
                }(d.code)), d)
            }
            class Qh {}
            class Yh extends Qh {
                constructor() {
                    super()
                }
            }
            class iu extends Yh {
                constructor(t) {
                    super()
                }
            }

            function su(d, t) {
                const r = function td(d) {
                    const t = d.match(new RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(d);
                return !(typeof r > "u") && new RegExp(t).test(r)
            }

            function ou(d) {
                return su(d, "^https?:")
            }

            function au(d) {
                return su(d, "^wss?:")
            }

            function cu(d) {
                return "object" == typeof d && "id" in d && "jsonrpc" in d && "2.0" === d.jsonrpc
            }

            function ua(d) {
                return cu(d) && "method" in d
            }

            function Qi(d) {
                return cu(d) && (Tn(d) || Wr(d))
            }

            function Tn(d) {
                return "result" in d
            }

            function Wr(d) {
                return "error" in d
            }
            class nd extends iu {
                constructor(t) {
                    super(t), this.events = new ye.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
                }
                connect(t = this.connection) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.open(t)
                    })()
                }
                disconnect() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.close()
                    })()
                }
                on(t, r) {
                    this.events.on(t, r)
                }
                once(t, r) {
                    this.events.once(t, r)
                }
                off(t, r) {
                    this.events.off(t, r)
                }
                removeListener(t, r) {
                    this.events.removeListener(t, r)
                }
                request(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        return a.requestStrict(ui(t.method, t.params || [], t.id || ca().toString()), r)
                    })()
                }
                requestStrict(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        return new Promise(function() {
                            var l = (0, _.Z)(function*(f, g) {
                                if (!a.connection.connected) try {
                                    yield a.open()
                                } catch (w) {
                                    g(w)
                                }
                                a.events.on(`${t.id}`, w => {
                                    Wr(w) ? g(w.error) : f(w.result)
                                });
                                try {
                                    yield a.connection.send(t, r)
                                } catch (w) {
                                    g(w)
                                }
                            });
                            return function(f, g) {
                                return l.apply(this, arguments)
                            }
                        }())
                    })()
                }
                setConnection(t = this.connection) {
                    return t
                }
                onPayload(t) {
                    this.events.emit("payload", t), Qi(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
                        type: t.method,
                        data: t.params
                    })
                }
                onClose(t) {
                    t && 3e3 === t.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
                }
                open(t = this.connection) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        r.connection === t && r.connection.connected || (r.connection.connected && r.close(), "string" == typeof t && (yield r.connection.open(t), t = r.connection), r.connection = r.setConnection(t), yield r.connection.open(), r.registerEventListeners(), r.events.emit("connect"))
                    })()
                }
                close() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.connection.close()
                    })()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)), this.connection.on("close", t => this.onClose(t)), this.connection.on("error", t => this.events.emit("error", t)), this.connection.on("register_error", t => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            const uu = d => d.split("?")[0],
                od = typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : ce(3569);
            class ad {
                constructor(t) {
                    if (this.url = t, this.events = new ye.EventEmitter, this.registering = !1, !au(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                    this.url = t
                }
                get connected() {
                    return typeof this.socket < "u"
                }
                get connecting() {
                    return this.registering
                }
                on(t, r) {
                    this.events.on(t, r)
                }
                once(t, r) {
                    this.events.once(t, r)
                }
                off(t, r) {
                    this.events.off(t, r)
                }
                removeListener(t, r) {
                    this.events.removeListener(t, r)
                }
                open(t = this.url) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.register(t)
                    })()
                }
                close() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return new Promise((r, a) => {
                            typeof t.socket > "u" ? a(new Error("Connection already closed")) : (t.socket.onclose = l => {
                                t.onClose(l), r()
                            }, t.socket.close())
                        })
                    })()
                }
                send(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        typeof r.socket > "u" && (r.socket = yield r.register());
                        try {
                            r.socket.send(xt(t))
                        } catch (a) {
                            r.onError(t.id, a)
                        }
                    })()
                }
                register(t = this.url) {
                    if (!au(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
                    if (this.registering) {
                        const r = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((a, l) => {
                            this.events.once("register_error", f => {
                                this.resetMaxListeners(), l(f)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return l(new Error("WebSocket connection is missing or invalid"));
                                a(this.socket)
                            })
                        })
                    }
                    return this.url = t, this.registering = !0, new Promise((r, a) => {
                        const l = new URLSearchParams(t).get("origin"),
                            f = (0, js.isReactNative)() ? {
                                headers: {
                                    origin: l
                                }
                            } : {
                                rejectUnauthorized: (d = t, !new RegExp("wss?://localhost(:d{2,5})?").test(d))
                            },
                            g = new od(t, [], f);
                        var d;
                        typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u" ? g.onerror = w => {
                            a(this.emitError(w.error))
                        } : g.on("error", w => {
                            a(this.emitError(w))
                        }), g.onopen = () => {
                            this.onOpen(g), r(g)
                        }
                    })
                }
                onOpen(t) {
                    t.onmessage = r => this.onPayload(r), t.onclose = r => this.onClose(r), this.socket = t, this.registering = !1, this.events.emit("open")
                }
                onClose(t) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", t)
                }
                onPayload(t) {
                    if (typeof t.data > "u") return;
                    const r = "string" == typeof t.data ? Mt(t.data) : t.data;
                    this.events.emit("payload", r)
                }
                onError(t, r) {
                    const a = this.parseError(r),
                        f = Fs(t, a.message || a.toString());
                    this.events.emit("payload", f)
                }
                parseError(t, r = this.url) {
                    return mn(t, uu(r), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(t) {
                    const r = this.parseError(new Error(t ? .message || `WebSocket connection failed for host: ${uu(this.url)}`));
                    return this.events.emit("register_error", r), r
                }
            }
            var cd = ce(2650),
                ud = ce.n(cd),
                ld = ce(9557),
                fd = ce.n(ld),
                pd = function hd(d, t) {
                    if (d.length >= 255) throw new TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), a = 0; a < r.length; a++) r[a] = 255;
                    for (var l = 0; l < d.length; l++) {
                        var f = d.charAt(l),
                            g = f.charCodeAt(0);
                        if (255 !== r[g]) throw new TypeError(f + " is ambiguous");
                        r[g] = l
                    }
                    var w = d.length,
                        T = d.charAt(0),
                        S = Math.log(w) / Math.log(256),
                        j = Math.log(256) / Math.log(w);

                    function J(se) {
                        if ("string" != typeof se) throw new TypeError("Expected String");
                        if (0 === se.length) return new Uint8Array;
                        var Ae = 0;
                        if (" " !== se[Ae]) {
                            for (var qe = 0, We = 0; se[Ae] === T;) qe++, Ae++;
                            for (var kt = (se.length - Ae) * S + 1 >>> 0, ut = new Uint8Array(kt); se[Ae];) {
                                var Kt = r[se.charCodeAt(Ae)];
                                if (255 === Kt) return;
                                for (var yt = 0, Vt = kt - 1;
                                    (0 !== Kt || yt < We) && -1 !== Vt; Vt--, yt++) ut[Vt] = (Kt += w * ut[Vt] >>> 0) % 256 >>> 0, Kt = Kt / 256 >>> 0;
                                if (0 !== Kt) throw new Error("Non-zero carry");
                                We = yt, Ae++
                            }
                            if (" " !== se[Ae]) {
                                for (var rt = kt - We; rt !== kt && 0 === ut[rt];) rt++;
                                for (var dr = new Uint8Array(qe + (kt - rt)), Qn = qe; rt !== kt;) dr[Qn++] = ut[rt++];
                                return dr
                            }
                        }
                    }
                    return {
                        encode: function H(se) {
                            if (se instanceof Uint8Array || (ArrayBuffer.isView(se) ? se = new Uint8Array(se.buffer, se.byteOffset, se.byteLength) : Array.isArray(se) && (se = Uint8Array.from(se))), !(se instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
                            if (0 === se.length) return "";
                            for (var Ae = 0, qe = 0, We = 0, kt = se.length; We !== kt && 0 === se[We];) We++, Ae++;
                            for (var ut = (kt - We) * j + 1 >>> 0, Kt = new Uint8Array(ut); We !== kt;) {
                                for (var yt = se[We], Vt = 0, rt = ut - 1;
                                    (0 !== yt || Vt < qe) && -1 !== rt; rt--, Vt++) Kt[rt] = (yt += 256 * Kt[rt] >>> 0) % w >>> 0, yt = yt / w >>> 0;
                                if (0 !== yt) throw new Error("Non-zero carry");
                                qe = Vt, We++
                            }
                            for (var dr = ut - qe; dr !== ut && 0 === Kt[dr];) dr++;
                            for (var Qn = T.repeat(Ae); dr < ut; ++dr) Qn += d.charAt(Kt[dr]);
                            return Qn
                        },
                        decodeUnsafe: J,
                        decode: function le(se) {
                            var Ae = J(se);
                            if (Ae) return Ae;
                            throw new Error(`Non-${t} character`)
                        }
                    }
                };
            const fu = d => {
                if (d instanceof Uint8Array && "Uint8Array" === d.constructor.name) return d;
                if (d instanceof ArrayBuffer) return new Uint8Array(d);
                if (ArrayBuffer.isView(d)) return new Uint8Array(d.buffer, d.byteOffset, d.byteLength);
                throw new Error("Unknown type, must be binary type")
            };
            class vd {
                constructor(t, r, a) {
                    this.name = t, this.prefix = r, this.baseEncode = a
                }
                encode(t) {
                    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class _d {
                constructor(t, r, a) {
                    if (this.name = t, this.prefix = r, void 0 === r.codePointAt(0)) throw new Error("Invalid prefix character");
                    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = a
                }
                decode(t) {
                    if ("string" == typeof t) {
                        if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(t.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(t) {
                    return hu(this, t)
                }
            }
            class md {
                constructor(t) {
                    this.decoders = t
                }
                or(t) {
                    return hu(this, t)
                }
                decode(t) {
                    const a = this.decoders[t[0]];
                    if (a) return a.decode(t);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            const hu = (d, t) => new md({ ...d.decoders || {
                    [d.prefix]: d
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class bd {
                constructor(t, r, a, l) {
                    this.name = t, this.prefix = r, this.baseEncode = a, this.baseDecode = l, this.encoder = new vd(t, r, a), this.decoder = new _d(t, r, l)
                }
                encode(t) {
                    return this.encoder.encode(t)
                }
                decode(t) {
                    return this.decoder.decode(t)
                }
            }
            const Ms = ({
                    name: d,
                    prefix: t,
                    encode: r,
                    decode: a
                }) => new bd(d, t, r, a),
                Yi = ({
                    prefix: d,
                    name: t,
                    alphabet: r
                }) => {
                    const {
                        encode: a,
                        decode: l
                    } = pd(r, t);
                    return Ms({
                        prefix: d,
                        name: t,
                        encode: a,
                        decode: f => fu(l(f))
                    })
                },
                vr = ({
                    name: d,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: a
                }) => Ms({
                    prefix: t,
                    name: d,
                    encode: l => ((d, t, r) => {
                        const a = "=" === t[t.length - 1],
                            l = (1 << r) - 1;
                        let f = "",
                            g = 0,
                            w = 0;
                        for (let T = 0; T < d.length; ++T)
                            for (w = w << 8 | d[T], g += 8; g > r;) g -= r, f += t[l & w >> g];
                        if (g && (f += t[l & w << r - g]), a)
                            for (; f.length * r & 7;) f += "=";
                        return f
                    })(l, a, r),
                    decode: l => ((d, t, r, a) => {
                        const l = {};
                        for (let j = 0; j < t.length; ++j) l[t[j]] = j;
                        let f = d.length;
                        for (;
                            "=" === d[f - 1];) --f;
                        const g = new Uint8Array(f * r / 8 | 0);
                        let w = 0,
                            T = 0,
                            S = 0;
                        for (let j = 0; j < f; ++j) {
                            const H = l[d[j]];
                            if (void 0 === H) throw new SyntaxError(`Non-${a} character`);
                            T = T << r | H, w += r, w >= 8 && (w -= 8, g[S++] = 255 & T >> w)
                        }
                        if (w >= r || 255 & T << 8 - w) throw new SyntaxError("Unexpected end of data");
                        return g
                    })(l, a, r, d)
                }),
                Ed = Ms({
                    prefix: "\0",
                    name: "identity",
                    encode: d => (d => (new TextDecoder).decode(d))(d),
                    decode: d => (d => (new TextEncoder).encode(d))(d)
                });
            var Id = Object.freeze({
                __proto__: null,
                identity: Ed
            });
            const Pd = vr({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var Sd = Object.freeze({
                __proto__: null,
                base2: Pd
            });
            const Od = vr({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var Rd = Object.freeze({
                __proto__: null,
                base8: Od
            });
            const Ad = Yi({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var Td = Object.freeze({
                __proto__: null,
                base10: Ad
            });
            const Cd = vr({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                Dd = vr({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var Nd = Object.freeze({
                __proto__: null,
                base16: Cd,
                base16upper: Dd
            });
            const jd = vr({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                Ld = vr({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                Fd = vr({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                Md = vr({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                Zd = vr({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                zd = vr({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                qd = vr({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                $d = vr({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                Ud = vr({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var Bd = Object.freeze({
                __proto__: null,
                base32: jd,
                base32upper: Ld,
                base32pad: Fd,
                base32padupper: Md,
                base32hex: Zd,
                base32hexupper: zd,
                base32hexpad: qd,
                base32hexpadupper: $d,
                base32z: Ud
            });
            const Hd = Yi({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                kd = Yi({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var Kd = Object.freeze({
                __proto__: null,
                base36: Hd,
                base36upper: kd
            });
            const Vd = Yi({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                Gd = Yi({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var Wd = Object.freeze({
                __proto__: null,
                base58btc: Vd,
                base58flickr: Gd
            });
            const Jd = vr({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                Qd = vr({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Yd = vr({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                Xd = vr({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var ep = Object.freeze({
                __proto__: null,
                base64: Jd,
                base64pad: Qd,
                base64url: Yd,
                base64urlpad: Xd
            });
            const du = Array.from("\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"),
                tp = du.reduce((d, t, r) => (d[r] = t, d), []),
                rp = du.reduce((d, t, r) => (d[t.codePointAt(0)] = r, d), []),
                sp = Ms({
                    prefix: "\u{1f680}",
                    name: "base256emoji",
                    encode: function np(d) {
                        return d.reduce((t, r) => t + tp[r], "")
                    },
                    decode: function ip(d) {
                        const t = [];
                        for (const r of d) {
                            const a = rp[r.codePointAt(0)];
                            if (void 0 === a) throw new Error(`Non-base256emoji character: ${r}`);
                            t.push(a)
                        }
                        return new Uint8Array(t)
                    }
                });
            var op = Object.freeze({
                    __proto__: null,
                    base256emoji: sp
                }),
                pu = 128,
                up = -128,
                lp = Math.pow(2, 31),
                hp = 128,
                yu = 127,
                dp = Math.pow(2, 7),
                pp = Math.pow(2, 14),
                gp = Math.pow(2, 21),
                yp = Math.pow(2, 28),
                vp = Math.pow(2, 35),
                _p = Math.pow(2, 42),
                mp = Math.pow(2, 49),
                bp = Math.pow(2, 56),
                wp = Math.pow(2, 63),
                Ep = {
                    encode: function gu(d, t, r) {
                        t = t || [];
                        for (var a = r = r || 0; d >= lp;) t[r++] = 255 & d | pu, d /= 128;
                        for (; d & up;) t[r++] = 255 & d | pu, d >>>= 7;
                        return t[r] = 0 | d, gu.bytes = r - a + 1, t
                    },
                    decode: function la(d, a) {
                        var g, r = 0,
                            l = 0,
                            f = a = a || 0,
                            w = d.length;
                        do {
                            if (f >= w) throw la.bytes = 0, new RangeError("Could not decode varint");
                            g = d[f++], r += l < 28 ? (g & yu) << l : (g & yu) * Math.pow(2, l), l += 7
                        } while (g >= hp);
                        return la.bytes = f - a, r
                    },
                    encodingLength: function(d) {
                        return d < dp ? 1 : d < pp ? 2 : d < gp ? 3 : d < yp ? 4 : d < vp ? 5 : d < _p ? 6 : d < mp ? 7 : d < bp ? 8 : d < wp ? 9 : 10
                    }
                },
                vu = Ep;
            const _u = (d, t, r = 0) => (vu.encode(d, t, r), t),
                mu = d => vu.encodingLength(d),
                fa = (d, t) => {
                    const r = t.byteLength,
                        a = mu(d),
                        l = a + mu(r),
                        f = new Uint8Array(l + r);
                    return _u(d, f, 0), _u(r, f, a), f.set(t, l), new Ip(d, r, t, f)
                };
            class Ip {
                constructor(t, r, a, l) {
                    this.code = t, this.size = r, this.digest = a, this.bytes = l
                }
            }
            const bu = ({
                name: d,
                code: t,
                encode: r
            }) => new Pp(d, t, r);
            class Pp {
                constructor(t, r, a) {
                    this.name = t, this.code = r, this.encode = a
                }
                digest(t) {
                    if (t instanceof Uint8Array) {
                        const r = this.encode(t);
                        return r instanceof Uint8Array ? fa(this.code, r) : r.then(a => fa(this.code, a))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            const wu = d => function() {
                    var t = (0, _.Z)(function*(r) {
                        return new Uint8Array(yield crypto.subtle.digest(d, r))
                    });
                    return function(r) {
                        return t.apply(this, arguments)
                    }
                }(),
                Sp = bu({
                    name: "sha2-256",
                    code: 18,
                    encode: wu("SHA-256")
                }),
                Op = bu({
                    name: "sha2-512",
                    code: 19,
                    encode: wu("SHA-512")
                });
            Object.freeze({
                __proto__: null,
                sha256: Sp,
                sha512: Op
            });
            const Eu = fu;
            Object.freeze({
                __proto__: null,
                identity: {
                    code: 0,
                    name: "identity",
                    encode: Eu,
                    digest: d => fa(0, Eu(d))
                }
            }), new TextEncoder, new TextDecoder;
            const Iu = { ...Id,
                ...Sd,
                ...Rd,
                ...Td,
                ...Nd,
                ...Bd,
                ...Kd,
                ...Wd,
                ...ep,
                ...op
            };

            function Pu(d) {
                return null != globalThis.Buffer ? new Uint8Array(d.buffer, d.byteOffset, d.byteLength) : d
            }

            function Su(d, t, r, a) {
                return {
                    name: d,
                    prefix: t,
                    encoder: {
                        name: d,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: a
                    }
                }
            }
            const Ou = Su("utf8", "u", d => "u" + new TextDecoder("utf8").decode(d), d => (new TextEncoder).encode(d.substring(1))),
                ha = Su("ascii", "a", d => {
                    let t = "a";
                    for (let r = 0; r < d.length; r++) t += String.fromCharCode(d[r]);
                    return t
                }, d => {
                    const t = function Cp(d = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? Pu(globalThis.Buffer.allocUnsafe(d)) : new Uint8Array(d)
                    }((d = d.substring(1)).length);
                    for (let r = 0; r < d.length; r++) t[r] = d.charCodeAt(r);
                    return t
                }),
                Dp = {
                    utf8: Ou,
                    "utf-8": Ou,
                    hex: Iu.base16,
                    latin1: ha,
                    ascii: ha,
                    binary: ha,
                    ...Iu
                },
                Vn = "wc@2:core:",
                Fp = {
                    database: ":memory:"
                },
                Au = "client_ed25519_seed",
                Zp = Oe.ONE_DAY,
                Bp = Oe.SIX_HOURS,
                Cu = "wss://relay.walletconnect.com",
                Du = "wss://relay.walletconnect.org",
                Gp = Oe.ONE_SECOND,
                ln_created = "subscription_created",
                ln_deleted = "subscription_deleted",
                tg = 1e3 * Oe.FIVE_SECONDS,
                Xi = {
                    wc_pairingDelete: {
                        req: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: Oe.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: Oe.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                Jr_expired = "expirer_expired",
                pa = "verify-api",
                Si = "https://verify.walletconnect.com",
                ga = "https://verify.walletconnect.org",
                cg = [Si, ga];
            class fg {
                constructor(t, r) {
                    var a = this;
                    this.core = t, this.logger = r, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = Vn, this.init = (0, _.Z)(function*() {
                        if (!a.initialized) {
                            const l = yield a.getKeyChain();
                            typeof l < "u" && (a.keychain = l), a.initialized = !0
                        }
                    }), this.has = l => (this.isInitialized(), this.keychain.has(l)), this.set = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            a.isInitialized(), a.keychain.set(f, g), yield a.persist()
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.get = l => {
                        this.isInitialized();
                        const f = this.keychain.get(l);
                        if (typeof f > "u") {
                            const {
                                message: g
                            } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${l}`);
                            throw new Error(g)
                        }
                        return f
                    }, this.del = function() {
                        var l = (0, _.Z)(function*(f) {
                            a.isInitialized(), a.keychain.delete(f), yield a.persist()
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.core = t, this.logger = xr(r, this.name)
                }
                get context() {
                    return wr(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setKeyChain(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.core.storage.setItem(r.storageKey, (0, E.KC)(t))
                    })()
                }
                getKeyChain() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        const r = yield t.core.storage.getItem(t.storageKey);
                        return typeof r < "u" ? (0, E.IP)(r) : void 0
                    })()
                }
                persist() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.setKeyChain(t.keychain)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class hg {
                constructor(t, r, a) {
                    var l = this;
                    this.core = t, this.logger = r, this.name = "crypto", this.initialized = !1, this.init = (0, _.Z)(function*() {
                        l.initialized || (yield l.keychain.init(), l.initialized = !0)
                    }), this.hasKeys = f => (this.isInitialized(), this.keychain.has(f)), this.getClientId = (0, _.Z)(function*() {
                        return l.isInitialized(), Ki(Gi(yield l.getClientSeed()).publicKey)
                    }), this.generateKeyPair = () => {
                        this.isInitialized();
                        const f = (0, E.Au)();
                        return this.setPrivateKey(f.publicKey, f.privateKey)
                    }, this.signJWT = function() {
                        var f = (0, _.Z)(function*(g) {
                            l.isInitialized();
                            const T = Gi(yield l.getClientSeed()),
                                S = (0, E.jd)();
                            return yield function ci(d, t, r, a) {
                                return Pi.apply(this, arguments)
                            }(S, g, Zp, T)
                        });
                        return function(g) {
                            return f.apply(this, arguments)
                        }
                    }(), this.generateSharedKey = (f, g, w) => {
                        this.isInitialized();
                        const T = this.getPrivateKey(f),
                            S = (0, E.m$)(T, g);
                        return this.setSymKey(S, w)
                    }, this.setSymKey = function() {
                        var f = (0, _.Z)(function*(g, w) {
                            l.isInitialized();
                            const T = w || (0, E.Ym)(g);
                            return yield l.keychain.set(T, g), T
                        });
                        return function(g, w) {
                            return f.apply(this, arguments)
                        }
                    }(), this.deleteKeyPair = function() {
                        var f = (0, _.Z)(function*(g) {
                            l.isInitialized(), yield l.keychain.del(g)
                        });
                        return function(g) {
                            return f.apply(this, arguments)
                        }
                    }(), this.deleteSymKey = function() {
                        var f = (0, _.Z)(function*(g) {
                            l.isInitialized(), yield l.keychain.del(g)
                        });
                        return function(g) {
                            return f.apply(this, arguments)
                        }
                    }(), this.encode = function() {
                        var f = (0, _.Z)(function*(g, w, T) {
                            l.isInitialized();
                            const S = (0, E.EN)(T),
                                j = xt(w);
                            if ((0, E.Q8)(S)) {
                                const se = S.senderPublicKey,
                                    Ae = S.receiverPublicKey;
                                g = yield l.generateSharedKey(se, Ae)
                            }
                            const H = l.getSymKey(g),
                                {
                                    type: J,
                                    senderPublicKey: le
                                } = S;
                            return (0, E.HI)({
                                type: J,
                                symKey: H,
                                message: j,
                                senderPublicKey: le
                            })
                        });
                        return function(g, w, T) {
                            return f.apply(this, arguments)
                        }
                    }(), this.decode = function() {
                        var f = (0, _.Z)(function*(g, w, T) {
                            l.isInitialized();
                            const S = (0, E.Ll)(w, T);
                            if ((0, E.Q8)(S)) {
                                const j = S.receiverPublicKey,
                                    H = S.senderPublicKey;
                                g = yield l.generateSharedKey(j, H)
                            }
                            try {
                                const j = l.getSymKey(g);
                                return Mt((0, E.pe)({
                                    symKey: j,
                                    encoded: w
                                }))
                            } catch (j) {
                                l.logger.error(`Failed to decode message from topic: '${g}', clientId: '${yield l.getClientId()}'`), l.logger.error(j)
                            }
                        });
                        return function(g, w, T) {
                            return f.apply(this, arguments)
                        }
                    }(), this.getPayloadType = f => {
                        const g = (0, E.vB)(f);
                        return (0, E.WG)(g.type)
                    }, this.getPayloadSenderPublicKey = f => {
                        const g = (0, E.vB)(f);
                        return g.senderPublicKey ? (0, I.BB)(g.senderPublicKey, E.AW) : void 0
                    }, this.core = t, this.logger = xr(r, this.name), this.keychain = a || new fg(this.core, this.logger)
                }
                get context() {
                    return wr(this.logger)
                }
                setPrivateKey(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        return yield a.keychain.set(t, r), t
                    })()
                }
                getPrivateKey(t) {
                    return this.keychain.get(t)
                }
                getClientSeed() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        let r = "";
                        try {
                            r = t.keychain.get(Au)
                        } catch {
                            r = (0, E.jd)(), yield t.keychain.set(Au, r)
                        }
                        return function Np(d, t = "utf8") {
                            const r = Dp[t];
                            if (!r) throw new Error(`Unsupported encoding "${t}"`);
                            return "utf8" !== t && "utf-8" !== t || null == globalThis.Buffer || null == globalThis.Buffer.from ? r.decoder.decode(`${r.prefix}${d}`) : Pu(globalThis.Buffer.from(d, "utf-8"))
                        }(r, "base16")
                    })()
                }
                getSymKey(t) {
                    return this.keychain.get(t)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class dg extends Bo {
                constructor(t, r) {
                    var a;
                    super(t, r), a = this, this.logger = t, this.core = r, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = Vn, this.init = (0, _.Z)(function*() {
                        if (!a.initialized) {
                            a.logger.trace("Initialized");
                            try {
                                const l = yield a.getRelayerMessages();
                                typeof l < "u" && (a.messages = l), a.logger.debug(`Successfully Restored records for ${a.name}`), a.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: a.messages.size
                                })
                            } catch (l) {
                                a.logger.debug(`Failed to Restore records for ${a.name}`), a.logger.error(l)
                            } finally {
                                a.initialized = !0
                            }
                        }
                    }), this.set = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            a.isInitialized();
                            const w = (0, E.rj)(g);
                            let T = a.messages.get(f);
                            return typeof T > "u" && (T = {}), typeof T[w] < "u" || (T[w] = g, a.messages.set(f, T), yield a.persist()), w
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.get = l => {
                        this.isInitialized();
                        let f = this.messages.get(l);
                        return typeof f > "u" && (f = {}), f
                    }, this.has = (l, f) => (this.isInitialized(), typeof this.get(l)[(0, E.rj)(f)] < "u"), this.del = function() {
                        var l = (0, _.Z)(function*(f) {
                            a.isInitialized(), a.messages.delete(f), yield a.persist()
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.logger = xr(t, this.name), this.core = r
                }
                get context() {
                    return wr(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                setRelayerMessages(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.core.storage.setItem(r.storageKey, (0, E.KC)(t))
                    })()
                }
                getRelayerMessages() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        const r = yield t.core.storage.getItem(t.storageKey);
                        return typeof r < "u" ? (0, E.IP)(r) : void 0
                    })()
                }
                persist() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.setRelayerMessages(t.messages)
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class pg extends Ho {
                constructor(t, r) {
                    var a;
                    super(t, r), a = this, this.relayer = t, this.logger = r, this.events = new ye.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, Oe.toMiliseconds)(Oe.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = function() {
                        var l = (0, _.Z)(function*(f, g, w) {
                            var T;
                            a.logger.debug("Publishing Payload"), a.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: f,
                                    message: g,
                                    opts: w
                                }
                            });
                            try {
                                const S = w ? .ttl || Bp,
                                    j = (0, E._H)(w),
                                    H = w ? .prompt || !1,
                                    J = w ? .tag || 0,
                                    le = w ? .id || ca().toString(),
                                    se = {
                                        topic: f,
                                        message: g,
                                        opts: {
                                            ttl: S,
                                            relay: j,
                                            prompt: H,
                                            tag: J,
                                            id: le
                                        }
                                    },
                                    Ae = setTimeout(() => a.queue.set(le, se), a.publishTimeout);
                                try {
                                    yield yield(0, E.hF)(a.rpcPublish(f, g, S, j, H, J, le), a.publishTimeout, "Failed to publish payload, please try again."), a.removeRequestFromQueue(le), a.relayer.events.emit("relayer_publish", se)
                                } catch (qe) {
                                    if (a.logger.debug("Publishing Payload stalled"), a.needsTransportRestart = !0, null != (T = w ? .internal) && T.throwOnFailedPublish) throw a.removeRequestFromQueue(le), qe;
                                    return
                                } finally {
                                    clearTimeout(Ae)
                                }
                                a.logger.debug("Successfully Published Payload"), a.logger.trace({
                                    type: "method",
                                    method: "publish",
                                    params: {
                                        topic: f,
                                        message: g,
                                        opts: w
                                    }
                                })
                            } catch (S) {
                                throw a.logger.debug("Failed to Publish Payload"), a.logger.error(S), S
                            }
                        });
                        return function(f, g, w) {
                            return l.apply(this, arguments)
                        }
                    }(), this.on = (l, f) => {
                        this.events.on(l, f)
                    }, this.once = (l, f) => {
                        this.events.once(l, f)
                    }, this.off = (l, f) => {
                        this.events.off(l, f)
                    }, this.removeListener = (l, f) => {
                        this.events.removeListener(l, f)
                    }, this.relayer = t, this.logger = xr(r, this.name), this.registerEventListeners()
                }
                get context() {
                    return wr(this.logger)
                }
                rpcPublish(t, r, a, l, f, g, w) {
                    var T, S, j, H;
                    const J = {
                        method: (0, E.cO)(l.protocol).publish,
                        params: {
                            topic: t,
                            message: r,
                            ttl: a,
                            prompt: f,
                            tag: g
                        },
                        id: w
                    };
                    return (0, E.o8)(null == (T = J.params) ? void 0 : T.prompt) && (null == (S = J.params) || delete S.prompt), (0, E.o8)(null == (j = J.params) ? void 0 : j.tag) && (null == (H = J.params) || delete H.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: J
                    }), this.relayer.request(J)
                }
                removeRequestFromQueue(t) {
                    this.queue.delete(t)
                }
                checkQueue() {
                    var t = this;
                    this.queue.forEach(function() {
                        var r = (0, _.Z)(function*(a) {
                            const {
                                topic: l,
                                message: f,
                                opts: g
                            } = a;
                            yield t.publish(l, f, g)
                        });
                        return function(a) {
                            return r.apply(this, arguments)
                        }
                    }())
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) return this.needsTransportRestart = !1, void this.relayer.events.emit("relayer_connection_stalled");
                        this.checkQueue()
                    }), this.relayer.on("relayer_message_ack", t => {
                        this.removeRequestFromQueue(t.id.toString())
                    })
                }
            }
            class gg {
                constructor() {
                    this.map = new Map, this.set = (t, r) => {
                        const a = this.get(t);
                        this.exists(t, r) || this.map.set(t, [...a, r])
                    }, this.get = t => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
                        if (typeof r > "u") return void this.map.delete(t);
                        if (!this.map.has(t)) return;
                        const a = this.get(t);
                        if (!this.exists(t, r)) return;
                        const l = a.filter(f => f !== r);
                        l.length ? this.map.set(t, l) : this.map.delete(t)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var yg = Object.defineProperty,
                vg = Object.defineProperties,
                _g = Object.getOwnPropertyDescriptors,
                Nu = Object.getOwnPropertySymbols,
                mg = Object.prototype.hasOwnProperty,
                bg = Object.prototype.propertyIsEnumerable,
                ju = (d, t, r) => t in d ? yg(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r,
                ts = (d, t) => {
                    for (var r in t || (t = {})) mg.call(t, r) && ju(d, r, t[r]);
                    if (Nu)
                        for (var r of Nu(t)) bg.call(t, r) && ju(d, r, t[r]);
                    return d
                },
                ya = (d, t) => vg(d, _g(t));
            class wg extends Ko {
                constructor(t, r) {
                    var a;
                    super(t, r), a = this, this.relayer = t, this.logger = r, this.subscriptions = new Map, this.topicMap = new gg, this.events = new ye.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Vn, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = (0, _.Z)(function*() {
                        a.initialized || (a.logger.trace("Initialized"), a.registerEventListeners(), a.clientId = yield a.relayer.core.crypto.getClientId())
                    }), this.subscribe = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            yield a.restartToComplete(), a.isInitialized(), a.logger.debug("Subscribing Topic"), a.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: f,
                                    opts: g
                                }
                            });
                            try {
                                const w = (0, E._H)(g),
                                    T = {
                                        topic: f,
                                        relay: w
                                    };
                                a.pending.set(f, T);
                                const S = yield a.rpcSubscribe(f, w);
                                return a.onSubscribe(S, T), a.logger.debug("Successfully Subscribed Topic"), a.logger.trace({
                                    type: "method",
                                    method: "subscribe",
                                    params: {
                                        topic: f,
                                        opts: g
                                    }
                                }), S
                            } catch (w) {
                                throw a.logger.debug("Failed to Subscribe Topic"), a.logger.error(w), w
                            }
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.unsubscribe = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            yield a.restartToComplete(), a.isInitialized(), typeof g ? .id < "u" ? yield a.unsubscribeById(f, g.id, g): yield a.unsubscribeByTopic(f, g)
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.isSubscribed = function() {
                        var l = (0, _.Z)(function*(f) {
                            return !!a.topics.includes(f) || (yield new Promise((g, w) => {
                                const T = new Oe.Watch;
                                T.start(a.pendingSubscriptionWatchLabel);
                                const S = setInterval(() => {
                                    !a.pending.has(f) && a.topics.includes(f) && (clearInterval(S), T.stop(a.pendingSubscriptionWatchLabel), g(!0)), T.elapsed(a.pendingSubscriptionWatchLabel) >= tg && (clearInterval(S), T.stop(a.pendingSubscriptionWatchLabel), w(new Error("Subscription resolution timeout")))
                                }, a.pollingInterval)
                            }).catch(() => !1))
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.on = (l, f) => {
                        this.events.on(l, f)
                    }, this.once = (l, f) => {
                        this.events.once(l, f)
                    }, this.off = (l, f) => {
                        this.events.off(l, f)
                    }, this.removeListener = (l, f) => {
                        this.events.removeListener(l, f)
                    }, this.restart = (0, _.Z)(function*() {
                        a.restartInProgress = !0, yield a.restore(), yield a.reset(), a.restartInProgress = !1
                    }), this.relayer = t, this.logger = xr(r, this.name), this.clientId = ""
                }
                get context() {
                    return wr(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(t, r) {
                    let a = !1;
                    try {
                        a = this.getSubscription(t).topic === r
                    } catch {}
                    return a
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                unsubscribeByTopic(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        const l = a.topicMap.get(t);
                        yield Promise.all(l.map(function() {
                            var f = (0, _.Z)(function*(g) {
                                return yield a.unsubscribeById(t, g, r)
                            });
                            return function(g) {
                                return f.apply(this, arguments)
                            }
                        }()))
                    })()
                }
                unsubscribeById(t, r, a) {
                    var l = this;
                    return (0, _.Z)(function*() {
                        l.logger.debug("Unsubscribing Topic"), l.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: t,
                                id: r,
                                opts: a
                            }
                        });
                        try {
                            const f = (0, E._H)(a);
                            yield l.rpcUnsubscribe(t, r, f);
                            const g = (0, E.D6)("USER_DISCONNECTED", `${l.name}, ${t}`);
                            yield l.onUnsubscribe(t, r, g), l.logger.debug("Successfully Unsubscribed Topic"), l.logger.trace({
                                type: "method",
                                method: "unsubscribe",
                                params: {
                                    topic: t,
                                    id: r,
                                    opts: a
                                }
                            })
                        } catch (f) {
                            throw l.logger.debug("Failed to Unsubscribe Topic"), l.logger.error(f), f
                        }
                    })()
                }
                rpcSubscribe(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        const l = {
                            method: (0, E.cO)(r.protocol).subscribe,
                            params: {
                                topic: t
                            }
                        };
                        a.logger.debug("Outgoing Relay Payload"), a.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: l
                        });
                        try {
                            yield yield(0, E.hF)(a.relayer.request(l), a.subscribeTimeout)
                        } catch {
                            a.logger.debug("Outgoing Relay Subscribe Payload stalled"), a.relayer.events.emit("relayer_connection_stalled")
                        }
                        return (0, E.rj)(t + a.clientId)
                    })()
                }
                rpcBatchSubscribe(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (!t.length) return;
                        const l = {
                            method: (0, E.cO)(t[0].relay.protocol).batchSubscribe,
                            params: {
                                topics: t.map(f => f.topic)
                            }
                        };
                        r.logger.debug("Outgoing Relay Payload"), r.logger.trace({
                            type: "payload",
                            direction: "outgoing",
                            request: l
                        });
                        try {
                            return yield yield(0, E.hF)(r.relayer.request(l), r.subscribeTimeout)
                        } catch {
                            r.logger.debug("Outgoing Relay Payload stalled"), r.relayer.events.emit("relayer_connection_stalled")
                        }
                    })()
                }
                rpcUnsubscribe(t, r, a) {
                    const l = {
                        method: (0, E.cO)(a.protocol).unsubscribe,
                        params: {
                            topic: t,
                            id: r
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: l
                    }), this.relayer.request(l)
                }
                onSubscribe(t, r) {
                    this.setSubscription(t, ya(ts({}, r), {
                        id: t
                    })), this.pending.delete(r.topic)
                }
                onBatchSubscribe(t) {
                    t.length && t.forEach(r => {
                        this.setSubscription(r.id, ts({}, r)), this.pending.delete(r.topic)
                    })
                }
                onUnsubscribe(t, r, a) {
                    var l = this;
                    return (0, _.Z)(function*() {
                        l.events.removeAllListeners(r), l.hasSubscription(r, t) && l.deleteSubscription(r, a), yield l.relayer.messages.del(t)
                    })()
                }
                setRelayerSubscriptions(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.relayer.core.storage.setItem(r.storageKey, t)
                    })()
                }
                getRelayerSubscriptions() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return yield t.relayer.core.storage.getItem(t.storageKey)
                    })()
                }
                setSubscription(t, r) {
                    this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: t,
                        subscription: r
                    }), this.addSubscription(t, r))
                }
                addSubscription(t, r) {
                    this.subscriptions.set(t, ts({}, r)), this.topicMap.set(r.topic, t), this.events.emit(ln_created, r)
                }
                getSubscription(t) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: t
                    });
                    const r = this.subscriptions.get(t);
                    if (!r) {
                        const {
                            message: a
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw new Error(a)
                    }
                    return r
                }
                deleteSubscription(t, r) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: t,
                        reason: r
                    });
                    const a = this.getSubscription(t);
                    this.subscriptions.delete(t), this.topicMap.delete(a.topic, t), this.events.emit(ln_deleted, ya(ts({}, a), {
                        reason: r
                    }))
                }
                persist() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.setRelayerSubscriptions(t.values), t.events.emit("subscription_sync")
                    })()
                }
                reset() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        if (t.cached.length) {
                            const r = Math.ceil(t.cached.length / t.batchSubscribeTopicsLimit);
                            for (let a = 0; a < r; a++) {
                                const l = t.cached.splice(0, t.batchSubscribeTopicsLimit);
                                yield t.batchSubscribe(l)
                            }
                        }
                        t.events.emit("subscription_resubscribed")
                    })()
                }
                restore() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        try {
                            const r = yield t.getRelayerSubscriptions();
                            if (typeof r > "u" || !r.length) return;
                            if (t.subscriptions.size) {
                                const {
                                    message: a
                                } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", t.name);
                                throw t.logger.error(a), t.logger.error(`${t.name}: ${JSON.stringify(t.values)}`), new Error(a)
                            }
                            t.cached = r, t.logger.debug(`Successfully Restored subscriptions for ${t.name}`), t.logger.trace({
                                type: "method",
                                method: "restore",
                                subscriptions: t.values
                            })
                        } catch (r) {
                            t.logger.debug(`Failed to Restore subscriptions for ${t.name}`), t.logger.error(r)
                        }
                    })()
                }
                batchSubscribe(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (!t.length) return;
                        const a = yield r.rpcBatchSubscribe(t);
                        (0, E.qt)(a) && r.onBatchSubscribe(a.map((l, f) => ya(ts({}, t[f]), {
                            id: l
                        })))
                    })()
                }
                onConnect() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.restartInProgress || (yield t.restart(), t.onEnable())
                    })()
                }
                onDisconnect() {
                    this.onDisable()
                }
                checkPending() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        if (!t.initialized || t.relayer.transportExplicitlyClosed) return;
                        const r = [];
                        t.pending.forEach(a => {
                            r.push(a)
                        }), yield t.batchSubscribe(r)
                    })()
                }
                registerEventListeners() {
                    var t = this;
                    this.relayer.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, (0, _.Z)(function*() {
                        yield t.checkPending()
                    })), this.relayer.on("relayer_connect", (0, _.Z)(function*() {
                        yield t.onConnect()
                    })), this.relayer.on("relayer_disconnect", () => {
                        this.onDisconnect()
                    }), this.events.on(ln_created, function() {
                        var r = (0, _.Z)(function*(a) {
                            const l = ln_created;
                            t.logger.info(`Emitting ${l}`), t.logger.debug({
                                type: "event",
                                event: l,
                                data: a
                            }), yield t.persist()
                        });
                        return function(a) {
                            return r.apply(this, arguments)
                        }
                    }()), this.events.on(ln_deleted, function() {
                        var r = (0, _.Z)(function*(a) {
                            const l = ln_deleted;
                            t.logger.info(`Emitting ${l}`), t.logger.debug({
                                type: "event",
                                event: l,
                                data: a
                            }), yield t.persist()
                        });
                        return function(a) {
                            return r.apply(this, arguments)
                        }
                    }())
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                restartToComplete() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.restartInProgress && (yield new Promise(r => {
                            const a = setInterval(() => {
                                t.restartInProgress || (clearInterval(a), r())
                            }, t.pollingInterval)
                        }))
                    })()
                }
            }
            var xg = Object.defineProperty,
                Lu = Object.getOwnPropertySymbols,
                Eg = Object.prototype.hasOwnProperty,
                Ig = Object.prototype.propertyIsEnumerable,
                Fu = (d, t, r) => t in d ? xg(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r;
            class Sg extends ko {
                constructor(t) {
                    var r;
                    super(t), r = this, this.protocol = "wc", this.version = 2, this.events = new ye.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = function() {
                        var a = (0, _.Z)(function*(l) {
                            r.logger.debug("Publishing Request Payload");
                            try {
                                return yield r.toEstablishConnection(), yield r.provider.request(l)
                            } catch (f) {
                                throw r.logger.debug("Failed to Publish Request"), r.logger.error(f), f
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onPayloadHandler = a => {
                        this.onProviderPayload(a)
                    }, this.onConnectHandler = () => {
                        this.events.emit("relayer_connect")
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = a => {
                        this.logger.error(a), this.events.emit("relayer_error", a), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on("payload", this.onPayloadHandler), this.provider.on("connect", this.onConnectHandler), this.provider.on("disconnect", this.onDisconnectHandler), this.provider.on("error", this.onProviderErrorHandler)
                    }, this.core = t.core, this.logger = typeof t.logger < "u" && "string" != typeof t.logger ? xr(t.logger, this.name) : Nr()(Dt({
                        level: t.logger || "error"
                    })), this.messages = new dg(this.logger, t.core), this.subscriber = new wg(this, this.logger), this.publisher = new pg(this, this.logger), this.relayUrl = t ? .relayUrl || Cu, this.projectId = t.projectId, this.bundleId = (0, E.X_)(), this.provider = {}
                }
                init() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.logger.trace("Initialized"), t.registerEventListeners(), yield t.createProvider(), yield Promise.all([t.messages.init(), t.subscriber.init()]);
                        try {
                            yield t.transportOpen()
                        } catch {
                            t.logger.warn(`Connection via ${t.relayUrl} failed, attempting to connect via failover domain ${Du}...`), yield t.restartTransport(Du)
                        }
                        t.initialized = !0, setTimeout((0, _.Z)(function*() {
                            0 === t.subscriber.topics.length && (t.logger.info("No topics subscribed to after init, closing transport"), yield t.transportClose(), t.transportExplicitlyClosed = !1)
                        }), 1e4)
                    })()
                }
                get context() {
                    return wr(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                publish(t, r, a) {
                    var l = this;
                    return (0, _.Z)(function*() {
                        l.isInitialized(), yield l.publisher.publish(t, r, a), yield l.recordMessageEvent({
                            topic: t,
                            message: r,
                            publishedAt: Date.now()
                        })
                    })()
                }
                subscribe(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        var l;
                        a.isInitialized();
                        let g, f = (null == (l = a.subscriber.topicMap.get(t)) ? void 0 : l[0]) || "";
                        if (f) return f;
                        const w = T => {
                            T.topic === t && (a.subscriber.off(ln_created, w), g())
                        };
                        return yield Promise.all([new Promise(T => {
                            g = T, a.subscriber.on(ln_created, w)
                        }), new Promise(function() {
                            var T = (0, _.Z)(function*(S) {
                                f = yield a.subscriber.subscribe(t, r), S()
                            });
                            return function(S) {
                                return T.apply(this, arguments)
                            }
                        }())]), f
                    })()
                }
                unsubscribe(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        a.isInitialized(), yield a.subscriber.unsubscribe(t, r)
                    })()
                }
                on(t, r) {
                    this.events.on(t, r)
                }
                once(t, r) {
                    this.events.once(t, r)
                }
                off(t, r) {
                    this.events.off(t, r)
                }
                removeListener(t, r) {
                    this.events.removeListener(t, r)
                }
                transportClose() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.transportExplicitlyClosed = !0, t.hasExperiencedNetworkDisruption && t.connected ? yield(0, E.hF)(t.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => t.onProviderDisconnect()): t.connected && (yield t.provider.disconnect())
                    })()
                }
                transportOpen(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (r.transportExplicitlyClosed = !1, yield r.confirmOnlineStateOrThrow(), !r.connectionAttemptInProgress) {
                            t && t !== r.relayUrl && (r.relayUrl = t, yield r.transportClose(), yield r.createProvider()), r.connectionAttemptInProgress = !0;
                            try {
                                yield Promise.all([new Promise(a => {
                                    if (!r.initialized) return a();
                                    r.subscriber.once("subscription_resubscribed", () => {
                                        a()
                                    })
                                }), new Promise(function() {
                                    var a = (0, _.Z)(function*(l, f) {
                                        try {
                                            yield(0, E.hF)(r.provider.connect(), 1e4, `Socket stalled when trying to connect to ${r.relayUrl}`)
                                        } catch (g) {
                                            return void f(g)
                                        }
                                        l()
                                    });
                                    return function(l, f) {
                                        return a.apply(this, arguments)
                                    }
                                }())])
                            } catch (a) {
                                if (r.logger.error(a), !r.isConnectionStalled(a.message)) throw a;
                                r.provider.events.emit("disconnect")
                            } finally {
                                r.connectionAttemptInProgress = !1, r.hasExperiencedNetworkDisruption = !1
                            }
                        }
                    })()
                }
                restartTransport(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.confirmOnlineStateOrThrow(), !r.connectionAttemptInProgress && (r.relayUrl = t || r.relayUrl, yield r.transportClose(), yield r.createProvider(), yield r.transportOpen())
                    })()
                }
                confirmOnlineStateOrThrow() {
                    return (0, _.Z)(function*() {
                        if (!(yield(0, E.Gg)())) throw new Error("No internet connection detected. Please restart your network and try again.")
                    })()
                }
                isConnectionStalled(t) {
                    return this.staleConnectionErrors.some(r => t.includes(r))
                }
                createProvider() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.provider.connection && t.unregisterProviderListeners();
                        const r = yield t.core.crypto.signJWT(t.relayUrl);
                        t.provider = new nd(new ad((0, E.$0)({
                            sdkVersion: "2.11.0",
                            protocol: t.protocol,
                            version: t.version,
                            relayUrl: t.relayUrl,
                            projectId: t.projectId,
                            auth: r,
                            useOnCloseEvent: !0,
                            bundleId: t.bundleId
                        }))), t.registerProviderListeners()
                    })()
                }
                recordMessageEvent(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        const {
                            topic: a,
                            message: l
                        } = t;
                        yield r.messages.set(a, l)
                    })()
                }
                shouldIgnoreMessageEvent(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        const {
                            topic: a,
                            message: l
                        } = t;
                        if (!l || 0 === l.length) return r.logger.debug(`Ignoring invalid/empty message: ${l}`), !0;
                        if (!(yield r.subscriber.isSubscribed(a))) return r.logger.debug(`Ignoring message for non-subscribed topic ${a}`), !0;
                        const f = r.messages.has(a, l);
                        return f && r.logger.debug(`Ignoring duplicate message: ${l}`), f
                    })()
                }
                onProviderPayload(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (r.logger.debug("Incoming Relay Payload"), r.logger.trace({
                                type: "payload",
                                direction: "incoming",
                                payload: t
                            }), ua(t)) {
                            if (!t.method.endsWith("_subscription")) return;
                            const a = t.params,
                                {
                                    topic: l,
                                    message: f,
                                    publishedAt: g
                                } = a.data,
                                w = {
                                    topic: l,
                                    message: f,
                                    publishedAt: g
                                };
                            r.logger.debug("Emitting Relayer Payload"), r.logger.trace(((d, t) => {
                                for (var r in t || (t = {})) Eg.call(t, r) && Fu(d, r, t[r]);
                                if (Lu)
                                    for (var r of Lu(t)) Ig.call(t, r) && Fu(d, r, t[r]);
                                return d
                            })({
                                type: "event",
                                event: a.id
                            }, w)), r.events.emit(a.id, w), yield r.acknowledgePayload(t), yield r.onMessageEvent(w)
                        } else Qi(t) && r.events.emit("relayer_message_ack", t)
                    })()
                }
                onMessageEvent(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        (yield r.shouldIgnoreMessageEvent(t)) || (r.events.emit("relayer_message", t), yield r.recordMessageEvent(t))
                    })()
                }
                acknowledgePayload(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        const a = Ls(t.id, !0);
                        yield r.provider.connection.send(a)
                    })()
                }
                unregisterProviderListeners() {
                    this.provider.off("payload", this.onPayloadHandler), this.provider.off("connect", this.onConnectHandler), this.provider.off("disconnect", this.onDisconnectHandler), this.provider.off("error", this.onProviderErrorHandler)
                }
                registerEventListeners() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.events.on("relayer_connection_stalled", () => {
                            t.restartTransport().catch(a => t.logger.error(a))
                        });
                        let r = yield(0, E.Gg)();
                        (0, E.uw)(function() {
                            var a = (0, _.Z)(function*(l) {
                                t.initialized && r !== l && (r = l, l ? yield t.restartTransport().catch(f => t.logger.error(f)): (t.hasExperiencedNetworkDisruption = !0, yield t.transportClose().catch(f => t.logger.error(f))))
                            });
                            return function(l) {
                                return a.apply(this, arguments)
                            }
                        }())
                    })()
                }
                onProviderDisconnect() {
                    this.events.emit("relayer_disconnect"), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    var t = this;
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout((0, _.Z)(function*() {
                        yield t.restartTransport().catch(r => t.logger.error(r))
                    }), (0, Oe.toMiliseconds)(Gp)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                toEstablishConnection() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        if (yield t.confirmOnlineStateOrThrow(), !t.connected) {
                            if (t.connectionAttemptInProgress) return yield new Promise(r => {
                                const a = setInterval(() => {
                                    t.connected && (clearInterval(a), r())
                                }, t.connectionStatusPollingInterval)
                            });
                            yield t.restartTransport()
                        }
                    })()
                }
            }
            var Og = Object.defineProperty,
                Mu = Object.getOwnPropertySymbols,
                Rg = Object.prototype.hasOwnProperty,
                Ag = Object.prototype.propertyIsEnumerable,
                Zu = (d, t, r) => t in d ? Og(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r,
                zu = (d, t) => {
                    for (var r in t || (t = {})) Rg.call(t, r) && Zu(d, r, t[r]);
                    if (Mu)
                        for (var r of Mu(t)) Ag.call(t, r) && Zu(d, r, t[r]);
                    return d
                };
            class Zs extends wi {
                constructor(t, r, a, l = Vn, f = void 0) {
                    var g;
                    super(t, r, a, l), g = this, this.core = t, this.logger = r, this.name = a, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Vn, this.init = (0, _.Z)(function*() {
                        g.initialized || (g.logger.trace("Initialized"), yield g.restore(), g.cached.forEach(w => {
                            g.getKey && null !== w && !(0, E.o8)(w) ? g.map.set(g.getKey(w), w) : (0, E.xW)(w) ? g.map.set(w.id, w) : (0, E.h1)(w) && g.map.set(w.topic, w)
                        }), g.cached = [], g.initialized = !0)
                    }), this.set = function() {
                        var w = (0, _.Z)(function*(T, S) {
                            g.isInitialized(), g.map.has(T) ? yield g.update(T, S): (g.logger.debug("Setting value"), g.logger.trace({
                                type: "method",
                                method: "set",
                                key: T,
                                value: S
                            }), g.map.set(T, S), yield g.persist())
                        });
                        return function(T, S) {
                            return w.apply(this, arguments)
                        }
                    }(), this.get = w => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: w
                    }), this.getData(w)), this.getAll = w => (this.isInitialized(), w ? this.values.filter(T => Object.keys(w).every(S => ud()(T[S], w[S]))) : this.values), this.update = function() {
                        var w = (0, _.Z)(function*(T, S) {
                            g.isInitialized(), g.logger.debug("Updating value"), g.logger.trace({
                                type: "method",
                                method: "update",
                                key: T,
                                update: S
                            });
                            const j = zu(zu({}, g.getData(T)), S);
                            g.map.set(T, j), yield g.persist()
                        });
                        return function(T, S) {
                            return w.apply(this, arguments)
                        }
                    }(), this.delete = function() {
                        var w = (0, _.Z)(function*(T, S) {
                            g.isInitialized(), g.map.has(T) && (g.logger.debug("Deleting value"), g.logger.trace({
                                type: "method",
                                method: "delete",
                                key: T,
                                reason: S
                            }), g.map.delete(T), yield g.persist())
                        });
                        return function(T, S) {
                            return w.apply(this, arguments)
                        }
                    }(), this.logger = xr(r, this.name), this.storagePrefix = l, this.getKey = f
                }
                get context() {
                    return wr(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                setDataStore(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.core.storage.setItem(r.storageKey, t)
                    })()
                }
                getDataStore() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return yield t.core.storage.getItem(t.storageKey)
                    })()
                }
                getData(t) {
                    const r = this.map.get(t);
                    if (!r) {
                        const {
                            message: a
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(a), new Error(a)
                    }
                    return r
                }
                persist() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.setDataStore(t.values)
                    })()
                }
                restore() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        try {
                            const r = yield t.getDataStore();
                            if (typeof r > "u" || !r.length) return;
                            if (t.map.size) {
                                const {
                                    message: a
                                } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", t.name);
                                throw t.logger.error(a), new Error(a)
                            }
                            t.cached = r, t.logger.debug(`Successfully Restored value for ${t.name}`), t.logger.trace({
                                type: "method",
                                method: "restore",
                                value: t.values
                            })
                        } catch (r) {
                            t.logger.debug(`Failed to Restore value for ${t.name}`), t.logger.error(r)
                        }
                    })()
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Tg {
                constructor(t, r) {
                    var a = this;
                    this.core = t, this.logger = r, this.name = "pairing", this.version = "0.3", this.events = new(we()), this.initialized = !1, this.storagePrefix = Vn, this.ignoredPayloadTypes = [E.rV], this.registeredMethods = [], this.init = (0, _.Z)(function*() {
                        a.initialized || (yield a.pairings.init(), yield a.cleanup(), a.registerRelayerEvents(), a.registerExpirerEvents(), a.initialized = !0, a.logger.trace("Initialized"))
                    }), this.register = ({
                        methods: l
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...l])]
                    }, this.create = (0, _.Z)(function*() {
                        a.isInitialized();
                        const l = (0, E.jd)(),
                            f = yield a.core.crypto.setSymKey(l), g = (0, E.gn)(Oe.FIVE_MINUTES), w = {
                                protocol: "irn"
                            }, T = {
                                topic: f,
                                expiry: g,
                                relay: w,
                                active: !1
                            }, S = (0, E.Bv)({
                                protocol: a.core.protocol,
                                version: a.core.version,
                                topic: f,
                                symKey: l,
                                relay: w
                            });
                        return yield a.pairings.set(f, T), yield a.core.relayer.subscribe(f), a.core.expirer.set(f, g), {
                            topic: f,
                            uri: S
                        }
                    }), this.pair = function() {
                        var l = (0, _.Z)(function*(f) {
                            a.isInitialized(), a.isValidPair(f);
                            const {
                                topic: g,
                                symKey: w,
                                relay: T
                            } = (0, E.he)(f.uri);
                            let S;
                            if (a.pairings.keys.includes(g) && (S = a.pairings.get(g), S.active)) throw new Error(`Pairing already exists: ${g}. Please try again with a new connection URI.`);
                            const j = (0, E.gn)(Oe.FIVE_MINUTES),
                                H = {
                                    topic: g,
                                    relay: T,
                                    expiry: j,
                                    active: !1
                                };
                            return yield a.pairings.set(g, H), a.core.expirer.set(g, j), f.activatePairing && (yield a.activate({
                                topic: g
                            })), a.events.emit("pairing_create", H), a.core.crypto.keychain.has(g) || (yield a.core.crypto.setSymKey(w, g), yield a.core.relayer.subscribe(g, {
                                relay: T
                            })), H
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.activate = function() {
                        var l = (0, _.Z)(function*({
                            topic: f
                        }) {
                            a.isInitialized();
                            const g = (0, E.gn)(Oe.THIRTY_DAYS);
                            yield a.pairings.update(f, {
                                active: !0,
                                expiry: g
                            }), a.core.expirer.set(f, g)
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var l = (0, _.Z)(function*(f) {
                            a.isInitialized(), yield a.isValidPing(f);
                            const {
                                topic: g
                            } = f;
                            if (a.pairings.keys.includes(g)) {
                                const w = yield a.sendRequest(g, "wc_pairingPing", {}), {
                                    done: T,
                                    resolve: S,
                                    reject: j
                                } = (0, E.H1)();
                                a.events.once((0, E.E0)("pairing_ping", w), ({
                                    error: H
                                }) => {
                                    H ? j(H) : S()
                                }), yield T()
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.updateExpiry = function() {
                        var l = (0, _.Z)(function*({
                            topic: f,
                            expiry: g
                        }) {
                            a.isInitialized(), yield a.pairings.update(f, {
                                expiry: g
                            })
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.updateMetadata = function() {
                        var l = (0, _.Z)(function*({
                            topic: f,
                            metadata: g
                        }) {
                            a.isInitialized(), yield a.pairings.update(f, {
                                peerMetadata: g
                            })
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = function() {
                        var l = (0, _.Z)(function*(f) {
                            a.isInitialized(), yield a.isValidDisconnect(f);
                            const {
                                topic: g
                            } = f;
                            a.pairings.keys.includes(g) && (yield a.sendRequest(g, "wc_pairingDelete", (0, E.D6)("USER_DISCONNECTED")), yield a.deletePairing(g))
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var l = (0, _.Z)(function*(f, g, w) {
                            const T = ui(g, w),
                                S = yield a.core.crypto.encode(f, T), j = Xi[g].req;
                            return a.core.history.set(f, T), a.core.relayer.publish(f, S, j), T.id
                        });
                        return function(f, g, w) {
                            return l.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var l = (0, _.Z)(function*(f, g, w) {
                            const T = Ls(f, w),
                                S = yield a.core.crypto.encode(g, T), j = yield a.core.history.get(g, f), H = Xi[j.request.method].res;
                            yield a.core.relayer.publish(g, S, H), yield a.core.history.resolve(T)
                        });
                        return function(f, g, w) {
                            return l.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var l = (0, _.Z)(function*(f, g, w) {
                            const T = Fs(f, w),
                                S = yield a.core.crypto.encode(g, T), j = yield a.core.history.get(g, f), H = Xi[j.request.method] ? Xi[j.request.method].res : Xi.unregistered_method.res;
                            yield a.core.relayer.publish(g, S, H), yield a.core.history.resolve(T)
                        });
                        return function(f, g, w) {
                            return l.apply(this, arguments)
                        }
                    }(), this.deletePairing = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            yield a.core.relayer.unsubscribe(f), yield Promise.all([a.pairings.delete(f, (0, E.D6)("USER_DISCONNECTED")), a.core.crypto.deleteSymKey(f), g ? Promise.resolve() : a.core.expirer.del(f)])
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, _.Z)(function*() {
                        const l = a.pairings.getAll().filter(f => (0, E.Bw)(f.expiry));
                        yield Promise.all(l.map(f => a.deletePairing(f.topic)))
                    }), this.onRelayEventRequest = l => {
                        const {
                            topic: f,
                            payload: g
                        } = l;
                        switch (g.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(f, g);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(f, g);
                            default:
                                return this.onUnknownRpcMethodRequest(f, g)
                        }
                    }, this.onRelayEventResponse = function() {
                        var l = (0, _.Z)(function*(f) {
                            const {
                                topic: g,
                                payload: w
                            } = f, T = (yield a.core.history.get(g, w.id)).request.method;
                            return "wc_pairingPing" === T ? a.onPairingPingResponse(g, w) : a.onUnknownRpcMethodResponse(T)
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.onPairingPingRequest = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            const {
                                id: w
                            } = g;
                            try {
                                a.isValidPing({
                                    topic: f
                                }), yield a.sendResult(w, f, !0), a.events.emit("pairing_ping", {
                                    id: w,
                                    topic: f
                                })
                            } catch (T) {
                                yield a.sendError(w, f, T), a.logger.error(T)
                            }
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.onPairingPingResponse = (l, f) => {
                        const {
                            id: g
                        } = f;
                        setTimeout(() => {
                            Tn(f) ? this.events.emit((0, E.E0)("pairing_ping", g), {}) : Wr(f) && this.events.emit((0, E.E0)("pairing_ping", g), {
                                error: f.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            const {
                                id: w
                            } = g;
                            try {
                                a.isValidDisconnect({
                                    topic: f
                                }), yield a.deletePairing(f), a.events.emit("pairing_delete", {
                                    id: w,
                                    topic: f
                                })
                            } catch (T) {
                                yield a.sendError(w, f, T), a.logger.error(T)
                            }
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodRequest = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            const {
                                id: w,
                                method: T
                            } = g;
                            try {
                                if (a.registeredMethods.includes(T)) return;
                                const S = (0, E.D6)("WC_METHOD_UNSUPPORTED", T);
                                yield a.sendError(w, f, S), a.logger.error(S)
                            } catch (S) {
                                yield a.sendError(w, f, S), a.logger.error(S)
                            }
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.onUnknownRpcMethodResponse = l => {
                        this.registeredMethods.includes(l) || this.logger.error((0, E.D6)("WC_METHOD_UNSUPPORTED", l))
                    }, this.isValidPair = l => {
                        var f;
                        if (!(0, E.EJ)(l)) {
                            const {
                                message: w
                            } = (0, E.Z7)("MISSING_OR_INVALID", `pair() params: ${l}`);
                            throw new Error(w)
                        }
                        if (!(0, E.jv)(l.uri)) {
                            const {
                                message: w
                            } = (0, E.Z7)("MISSING_OR_INVALID", `pair() uri: ${l.uri}`);
                            throw new Error(w)
                        }
                        const g = (0, E.he)(l.uri);
                        if (null == (f = g ? .relay) || !f.protocol) {
                            const {
                                message: w
                            } = (0, E.Z7)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw new Error(w)
                        }
                        if (null == g || !g.symKey) {
                            const {
                                message: w
                            } = (0, E.Z7)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw new Error(w)
                        }
                    }, this.isValidPing = function() {
                        var l = (0, _.Z)(function*(f) {
                            if (!(0, E.EJ)(f)) {
                                const {
                                    message: w
                                } = (0, E.Z7)("MISSING_OR_INVALID", `ping() params: ${f}`);
                                throw new Error(w)
                            }
                            const {
                                topic: g
                            } = f;
                            yield a.isValidPairingTopic(g)
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var l = (0, _.Z)(function*(f) {
                            if (!(0, E.EJ)(f)) {
                                const {
                                    message: w
                                } = (0, E.Z7)("MISSING_OR_INVALID", `disconnect() params: ${f}`);
                                throw new Error(w)
                            }
                            const {
                                topic: g
                            } = f;
                            yield a.isValidPairingTopic(g)
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.isValidPairingTopic = function() {
                        var l = (0, _.Z)(function*(f) {
                            if (!(0, E.M_)(f, !1)) {
                                const {
                                    message: g
                                } = (0, E.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${f}`);
                                throw new Error(g)
                            }
                            if (!a.pairings.keys.includes(f)) {
                                const {
                                    message: g
                                } = (0, E.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${f}`);
                                throw new Error(g)
                            }
                            if ((0, E.Bw)(a.pairings.get(f).expiry)) {
                                yield a.deletePairing(f);
                                const {
                                    message: g
                                } = (0, E.Z7)("EXPIRED", `pairing topic: ${f}`);
                                throw new Error(g)
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.core = t, this.logger = xr(r, this.name), this.pairings = new Zs(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return wr(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
                registerRelayerEvents() {
                    var t = this;
                    this.core.relayer.on("relayer_message", function() {
                        var r = (0, _.Z)(function*(a) {
                            const {
                                topic: l,
                                message: f
                            } = a;
                            if (!t.pairings.keys.includes(l) || t.ignoredPayloadTypes.includes(t.core.crypto.getPayloadType(f))) return;
                            const g = yield t.core.crypto.decode(l, f);
                            try {
                                ua(g) ? (t.core.history.set(l, g), t.onRelayEventRequest({
                                    topic: l,
                                    payload: g
                                })) : Qi(g) && (yield t.core.history.resolve(g), yield t.onRelayEventResponse({
                                    topic: l,
                                    payload: g
                                }), t.core.history.delete(l, g.id))
                            } catch (w) {
                                t.logger.error(w)
                            }
                        });
                        return function(a) {
                            return r.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var t = this;
                    this.core.expirer.on(Jr_expired, function() {
                        var r = (0, _.Z)(function*(a) {
                            const {
                                topic: l
                            } = (0, E.iP)(a.target);
                            l && t.pairings.keys.includes(l) && (yield t.deletePairing(l, !0), t.events.emit("pairing_expire", {
                                topic: l
                            }))
                        });
                        return function(a) {
                            return r.apply(this, arguments)
                        }
                    }())
                }
            }
            class Cg extends Uo {
                constructor(t, r) {
                    var a;
                    super(t, r), a = this, this.core = t, this.logger = r, this.records = new Map, this.events = new ye.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Vn, this.init = (0, _.Z)(function*() {
                        a.initialized || (a.logger.trace("Initialized"), yield a.restore(), a.cached.forEach(l => a.records.set(l.id, l)), a.cached = [], a.registerEventListeners(), a.initialized = !0)
                    }), this.set = (l, f, g) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: l,
                                request: f,
                                chainId: g
                            }), this.records.has(f.id)) return;
                        const w = {
                            id: f.id,
                            topic: l,
                            request: {
                                method: f.method,
                                params: f.params || null
                            },
                            chainId: g,
                            expiry: (0, E.gn)(Oe.THIRTY_DAYS)
                        };
                        this.records.set(w.id, w), this.events.emit("history_created", w)
                    }, this.resolve = function() {
                        var l = (0, _.Z)(function*(f) {
                            if (a.isInitialized(), a.logger.debug("Updating JSON-RPC response history record"), a.logger.trace({
                                    type: "method",
                                    method: "update",
                                    response: f
                                }), !a.records.has(f.id)) return;
                            const g = yield a.getRecord(f.id);
                            typeof g.response > "u" && (g.response = Wr(f) ? {
                                error: f.error
                            } : {
                                result: f.result
                            }, a.records.set(g.id, g), a.events.emit("history_updated", g))
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.get = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            return a.isInitialized(), a.logger.debug("Getting record"), a.logger.trace({
                                type: "method",
                                method: "get",
                                topic: f,
                                id: g
                            }), yield a.getRecord(g)
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.delete = (l, f) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: f
                        }), this.values.forEach(g => {
                            if (g.topic === l) {
                                if (typeof f < "u" && g.id !== f) return;
                                this.records.delete(g.id), this.events.emit("history_deleted", g)
                            }
                        })
                    }, this.exists = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            return a.isInitialized(), !!a.records.has(g) && (yield a.getRecord(g)).topic === f
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.on = (l, f) => {
                        this.events.on(l, f)
                    }, this.once = (l, f) => {
                        this.events.once(l, f)
                    }, this.off = (l, f) => {
                        this.events.off(l, f)
                    }, this.removeListener = (l, f) => {
                        this.events.removeListener(l, f)
                    }, this.logger = xr(r, this.name)
                }
                get context() {
                    return wr(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    const t = [];
                    return this.values.forEach(r => {
                        if (typeof r.response < "u") return;
                        const a = {
                            topic: r.topic,
                            request: ui(r.request.method, r.request.params, r.id),
                            chainId: r.chainId
                        };
                        return t.push(a)
                    }), t
                }
                setJsonRpcRecords(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.core.storage.setItem(r.storageKey, t)
                    })()
                }
                getJsonRpcRecords() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return yield t.core.storage.getItem(t.storageKey)
                    })()
                }
                getRecord(t) {
                    this.isInitialized();
                    const r = this.records.get(t);
                    if (!r) {
                        const {
                            message: a
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw new Error(a)
                    }
                    return r
                }
                persist() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.setJsonRpcRecords(t.values), t.events.emit("history_sync")
                    })()
                }
                restore() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        try {
                            const r = yield t.getJsonRpcRecords();
                            if (typeof r > "u" || !r.length) return;
                            if (t.records.size) {
                                const {
                                    message: a
                                } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", t.name);
                                throw t.logger.error(a), new Error(a)
                            }
                            t.cached = r, t.logger.debug(`Successfully Restored records for ${t.name}`), t.logger.trace({
                                type: "method",
                                method: "restore",
                                records: t.values
                            })
                        } catch (r) {
                            t.logger.debug(`Failed to Restore records for ${t.name}`), t.logger.error(r)
                        }
                    })()
                }
                registerEventListeners() {
                    this.events.on("history_created", t => {
                        const r = "history_created";
                        this.logger.info(`Emitting ${r}`), this.logger.debug({
                            type: "event",
                            event: r,
                            record: t
                        }), this.persist()
                    }), this.events.on("history_updated", t => {
                        const r = "history_updated";
                        this.logger.info(`Emitting ${r}`), this.logger.debug({
                            type: "event",
                            event: r,
                            record: t
                        }), this.persist()
                    }), this.events.on("history_deleted", t => {
                        const r = "history_deleted";
                        this.logger.info(`Emitting ${r}`), this.logger.debug({
                            type: "event",
                            event: r,
                            record: t
                        }), this.persist()
                    }), this.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(t => {
                            (0, Oe.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id))
                        })
                    } catch (t) {
                        this.logger.warn(t)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Dg extends Vo {
                constructor(t, r) {
                    var a;
                    super(t, r), a = this, this.core = t, this.logger = r, this.expirations = new Map, this.events = new ye.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = Vn, this.init = (0, _.Z)(function*() {
                        a.initialized || (a.logger.trace("Initialized"), yield a.restore(), a.cached.forEach(l => a.expirations.set(l.target, l)), a.cached = [], a.registerEventListeners(), a.initialized = !0)
                    }), this.has = l => {
                        try {
                            const f = this.formatTarget(l);
                            return typeof this.getExpiration(f) < "u"
                        } catch {
                            return !1
                        }
                    }, this.set = (l, f) => {
                        this.isInitialized();
                        const g = this.formatTarget(l),
                            w = {
                                target: g,
                                expiry: f
                            };
                        this.expirations.set(g, w), this.checkExpiry(g, w), this.events.emit("expirer_created", {
                            target: g,
                            expiration: w
                        })
                    }, this.get = l => {
                        this.isInitialized();
                        const f = this.formatTarget(l);
                        return this.getExpiration(f)
                    }, this.del = l => {
                        if (this.isInitialized(), this.has(l)) {
                            const f = this.formatTarget(l),
                                g = this.getExpiration(f);
                            this.expirations.delete(f), this.events.emit("expirer_deleted", {
                                target: f,
                                expiration: g
                            })
                        }
                    }, this.on = (l, f) => {
                        this.events.on(l, f)
                    }, this.once = (l, f) => {
                        this.events.once(l, f)
                    }, this.off = (l, f) => {
                        this.events.off(l, f)
                    }, this.removeListener = (l, f) => {
                        this.events.removeListener(l, f)
                    }, this.logger = xr(r, this.name)
                }
                get context() {
                    return wr(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(t) {
                    if ("string" == typeof t) return (0, E.Z4)(t);
                    if ("number" == typeof t) return (0, E.Gq)(t);
                    const {
                        message: r
                    } = (0, E.Z7)("UNKNOWN_TYPE", "Target type: " + typeof t);
                    throw new Error(r)
                }
                setExpirations(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.core.storage.setItem(r.storageKey, t)
                    })()
                }
                getExpirations() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return yield t.core.storage.getItem(t.storageKey)
                    })()
                }
                persist() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.setExpirations(t.values), t.events.emit("expirer_sync")
                    })()
                }
                restore() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        try {
                            const r = yield t.getExpirations();
                            if (typeof r > "u" || !r.length) return;
                            if (t.expirations.size) {
                                const {
                                    message: a
                                } = (0, E.Z7)("RESTORE_WILL_OVERRIDE", t.name);
                                throw t.logger.error(a), new Error(a)
                            }
                            t.cached = r, t.logger.debug(`Successfully Restored expirations for ${t.name}`), t.logger.trace({
                                type: "method",
                                method: "restore",
                                expirations: t.values
                            })
                        } catch (r) {
                            t.logger.debug(`Failed to Restore expirations for ${t.name}`), t.logger.error(r)
                        }
                    })()
                }
                getExpiration(t) {
                    const r = this.expirations.get(t);
                    if (!r) {
                        const {
                            message: a
                        } = (0, E.Z7)("NO_MATCHING_KEY", `${this.name}: ${t}`);
                        throw this.logger.error(a), new Error(a)
                    }
                    return r
                }
                checkExpiry(t, r) {
                    const {
                        expiry: a
                    } = r;
                    (0, Oe.toMiliseconds)(a) - Date.now() <= 0 && this.expire(t, r)
                }
                expire(t, r) {
                    this.expirations.delete(t), this.events.emit(Jr_expired, {
                        target: t,
                        expiration: r
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(br.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on("expirer_created", t => {
                        const r = "expirer_created";
                        this.logger.info(`Emitting ${r}`), this.logger.debug({
                            type: "event",
                            event: r,
                            data: t
                        }), this.persist()
                    }), this.events.on(Jr_expired, t => {
                        const r = Jr_expired;
                        this.logger.info(`Emitting ${r}`), this.logger.debug({
                            type: "event",
                            event: r,
                            data: t
                        }), this.persist()
                    }), this.events.on("expirer_deleted", t => {
                        const r = "expirer_deleted";
                        this.logger.info(`Emitting ${r}`), this.logger.debug({
                            type: "event",
                            event: r,
                            data: t
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        const {
                            message: t
                        } = (0, E.Z7)("NOT_INITIALIZED", this.name);
                        throw new Error(t)
                    }
                }
            }
            class Ng extends Go {
                constructor(t, r) {
                    var a;
                    super(t, r), a = this, this.projectId = t, this.logger = r, this.name = pa, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = function() {
                        var l = (0, _.Z)(function*(f) {
                            if (a.verifyDisabled || (0, E.b$)() || !(0, E.jU)()) return;
                            const g = a.getVerifyUrl(f ? .verifyUrl);
                            a.verifyUrl !== g && a.removeIframe(), a.verifyUrl = g;
                            try {
                                yield a.createIframe()
                            } catch (w) {
                                a.logger.info(`Verify iframe failed to load: ${a.verifyUrl}`), a.logger.info(w)
                            }
                            if (!a.initialized) {
                                a.removeIframe(), a.verifyUrl = ga;
                                try {
                                    yield a.createIframe()
                                } catch (w) {
                                    a.logger.info(`Verify iframe failed to load: ${a.verifyUrl}`), a.logger.info(w), a.verifyDisabled = !0
                                }
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.register = function() {
                        var l = (0, _.Z)(function*(f) {
                            a.initialized ? a.sendPost(f.attestationId) : (a.addToQueue(f.attestationId), yield a.init())
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.resolve = function() {
                        var l = (0, _.Z)(function*(f) {
                            if (a.isDevEnv) return "";
                            const g = a.getVerifyUrl(f ? .verifyUrl);
                            let w;
                            try {
                                w = yield a.fetchAttestation(f.attestationId, g)
                            } catch (T) {
                                a.logger.info(`failed to resolve attestation: ${f.attestationId} from url: ${g}`), a.logger.info(T), w = yield a.fetchAttestation(f.attestationId, ga)
                            }
                            return w
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.fetchAttestation = function() {
                        var l = (0, _.Z)(function*(f, g) {
                            a.logger.info(`resolving attestation: ${f} from url: ${g}`);
                            const w = a.startAbortTimer(2 * Oe.ONE_SECOND),
                                T = yield fetch(`${g}/attestation/${f}`, {
                                    signal: a.abortController.signal
                                });
                            return clearTimeout(w), 200 === T.status ? yield T.json(): void 0
                        });
                        return function(f, g) {
                            return l.apply(this, arguments)
                        }
                    }(), this.addToQueue = l => {
                        this.queue.push(l)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(l => this.sendPost(l)), this.queue = [])
                    }, this.sendPost = l => {
                        var f;
                        try {
                            if (!this.iframe) return;
                            null == (f = this.iframe.contentWindow) || f.postMessage(l, "*"), this.logger.info(`postMessage sent: ${l} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = (0, _.Z)(function*() {
                        let l;
                        const f = g => {
                            "verify_ready" === g.data && (a.initialized = !0, a.processQueue(), window.removeEventListener("message", f), l())
                        };
                        yield Promise.race([new Promise(g => {
                            if (document.getElementById(pa)) return g();
                            window.addEventListener("message", f);
                            const w = document.createElement("iframe");
                            w.id = pa, w.src = `${a.verifyUrl}/${a.projectId}`, w.style.display = "none", document.body.append(w), a.iframe = w, l = g
                        }), new Promise((g, w) => setTimeout(() => {
                            window.removeEventListener("message", f), w("verify iframe load timeout")
                        }, (0, Oe.toMiliseconds)(Oe.FIVE_SECONDS)))])
                    }), this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = l => {
                        let f = l || Si;
                        return cg.includes(f) || (this.logger.info(`verify url: ${f}, not included in trusted list, assigning default: ${Si}`), f = Si), f
                    }, this.logger = xr(r, this.name), this.verifyUrl = Si, this.abortController = new AbortController, this.isDevEnv = (0, E.UG)() && process.env.IS_VITEST
                }
                get context() {
                    return wr(this.logger)
                }
                startAbortTimer(t) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, Oe.toMiliseconds)(t))
                }
            }
            class jg extends Wo {
                constructor(t, r) {
                    var a;
                    super(t, r), a = this, this.projectId = t, this.logger = r, this.context = "echo", this.registerDeviceToken = function() {
                        var l = (0, _.Z)(function*(f) {
                            const {
                                clientId: g,
                                token: w,
                                notificationType: T,
                                enableEncrypted: S = !1
                            } = f, j = `https://echo.walletconnect.com/${a.projectId}/clients`;
                            yield fd()(j, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    client_id: g,
                                    type: T,
                                    token: w,
                                    always_raw: S
                                })
                            })
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.logger = xr(r, this.context)
                }
            }
            var Lg = Object.defineProperty,
                qu = Object.getOwnPropertySymbols,
                Fg = Object.prototype.hasOwnProperty,
                Mg = Object.prototype.propertyIsEnumerable,
                $u = (d, t, r) => t in d ? Lg(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r,
                Uu = (d, t) => {
                    for (var r in t || (t = {})) Fg.call(t, r) && $u(d, r, t[r]);
                    if (qu)
                        for (var r of qu(t)) Mg.call(t, r) && $u(d, r, t[r]);
                    return d
                };
            class va extends Sn {
                constructor(t) {
                    super(t), this.protocol = "wc", this.version = 2, this.name = "core", this.events = new ye.EventEmitter, this.initialized = !1, this.on = (a, l) => this.events.on(a, l), this.once = (a, l) => this.events.once(a, l), this.off = (a, l) => this.events.off(a, l), this.removeListener = (a, l) => this.events.removeListener(a, l), this.projectId = t ? .projectId, this.relayUrl = t ? .relayUrl || Cu, this.customStoragePrefix = null != t && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
                    const r = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : Nr()(Dt({
                        level: t ? .logger || "error"
                    }));
                    this.logger = xr(r, this.name), this.heartbeat = new br.HeartBeat, this.crypto = new hg(this, this.logger, t ? .keychain), this.history = new Cg(this, this.logger), this.expirer = new Dg(this, this.logger), this.storage = null != t && t.storage ? t.storage : new Dr(Uu(Uu({}, Fp), t ? .storageOptions)), this.relayer = new Sg({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new Tg(this, this.logger), this.verify = new Ng(this.projectId || "", this.logger), this.echoClient = new jg(this.projectId || "", this.logger)
                }
                static init(t) {
                    return (0, _.Z)(function*() {
                        const r = new va(t);
                        yield r.initialize();
                        const a = yield r.crypto.getClientId();
                        return yield r.storage.setItem("WALLETCONNECT_CLIENT_ID", a), r
                    })()
                }
                get context() {
                    return wr(this.logger)
                }
                start() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.initialized || (yield t.initialize())
                    })()
                }
                initialize() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.logger.trace("Initialized");
                        try {
                            yield t.crypto.init(), yield t.history.init(), yield t.expirer.init(), yield t.relayer.init(), yield t.heartbeat.init(), yield t.pairing.init(), t.initialized = !0, t.logger.info("Core Initialization Success")
                        } catch (r) {
                            throw t.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, r), t.logger.error(r.message), r
                        }
                    })()
                }
            }
            const Zg = va,
                _a = "wc@2:client:",
                Ku = "WALLETCONNECT_DEEPLINK_CHOICE",
                Vu = "Proposal expired",
                zs = Oe.SEVEN_DAYS,
                rs = {
                    wc_sessionPropose: {
                        req: {
                            ttl: Oe.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: Oe.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: Oe.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: Oe.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: Oe.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: Oe.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: Oe.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: Oe.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: Oe.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: Oe.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: Oe.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                ba = {
                    min: Oe.FIVE_MINUTES,
                    max: Oe.SEVEN_DAYS
                },
                Bg = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var Hg = Object.defineProperty,
                kg = Object.defineProperties,
                Kg = Object.getOwnPropertyDescriptors,
                Gu = Object.getOwnPropertySymbols,
                Vg = Object.prototype.hasOwnProperty,
                Gg = Object.prototype.propertyIsEnumerable,
                Wu = (d, t, r) => t in d ? Hg(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r,
                Lr = (d, t) => {
                    for (var r in t || (t = {})) Vg.call(t, r) && Wu(d, r, t[r]);
                    if (Gu)
                        for (var r of Gu(t)) Gg.call(t, r) && Wu(d, r, t[r]);
                    return d
                },
                ns = (d, t) => kg(d, Kg(t));
            class Wg extends Qo {
                constructor(t) {
                    var r;
                    super(t), r = this, this.name = "engine", this.events = new(we()), this.initialized = !1, this.ignoredPayloadTypes = [E.rV], this.requestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: "IDLE",
                        queue: []
                    }, this.requestQueueDelay = Oe.ONE_SECOND, this.init = (0, _.Z)(function*() {
                        r.initialized || (yield r.cleanup(), r.registerRelayerEvents(), r.registerExpirerEvents(), r.registerPairingEvents(), r.client.core.pairing.register({
                            methods: Object.keys(rs)
                        }), r.initialized = !0, setTimeout(() => {
                            r.sessionRequestQueue.queue = r.getPendingSessionRequests(), r.processSessionRequestQueue()
                        }, (0, Oe.toMiliseconds)(r.requestQueueDelay)))
                    }), this.connect = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized();
                            const f = ns(Lr({}, l), {
                                requiredNamespaces: l.requiredNamespaces || {},
                                optionalNamespaces: l.optionalNamespaces || {}
                            });
                            yield r.isValidConnect(f);
                            const {
                                pairingTopic: g,
                                requiredNamespaces: w,
                                optionalNamespaces: T,
                                sessionProperties: S,
                                relays: j
                            } = f;
                            let J, H = g,
                                le = !1;
                            if (H && (le = r.client.core.pairing.pairings.get(H).active), !H || !le) {
                                const {
                                    topic: yt,
                                    uri: Vt
                                } = yield r.client.core.pairing.create();
                                H = yt, J = Vt
                            }
                            const se = yield r.client.core.crypto.generateKeyPair(), Ae = Lr({
                                requiredNamespaces: w,
                                optionalNamespaces: T,
                                relays: j ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: se,
                                    metadata: r.client.metadata
                                }
                            }, S && {
                                sessionProperties: S
                            }), {
                                reject: qe,
                                resolve: We,
                                done: kt
                            } = (0, E.H1)(Oe.FIVE_MINUTES, Vu);
                            if (r.events.once((0, E.E0)("session_connect"), function() {
                                    var yt = (0, _.Z)(function*({
                                        error: Vt,
                                        session: rt
                                    }) {
                                        if (Vt) qe(Vt);
                                        else if (rt) {
                                            rt.self.publicKey = se;
                                            const dr = ns(Lr({}, rt), {
                                                requiredNamespaces: rt.requiredNamespaces,
                                                optionalNamespaces: rt.optionalNamespaces
                                            });
                                            yield r.client.session.set(rt.topic, dr), yield r.setExpiry(rt.topic, rt.expiry), H && (yield r.client.core.pairing.updateMetadata({
                                                topic: H,
                                                metadata: rt.peer.metadata
                                            })), We(dr)
                                        }
                                    });
                                    return function(Vt) {
                                        return yt.apply(this, arguments)
                                    }
                                }()), !H) {
                                const {
                                    message: yt
                                } = (0, E.Z7)("NO_MATCHING_KEY", `connect() pairing topic: ${H}`);
                                throw new Error(yt)
                            }
                            const ut = yield r.sendRequest({
                                topic: H,
                                method: "wc_sessionPropose",
                                params: Ae
                            }), Kt = (0, E.gn)(Oe.FIVE_MINUTES);
                            return yield r.setProposal(ut, Lr({
                                id: ut,
                                expiry: Kt
                            }, Ae)), {
                                uri: J,
                                approval: kt
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var a = (0, _.Z)(function*(l) {
                            return yield r.isInitialized(), yield r.client.core.pairing.pair(l)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidApprove(l);
                            const {
                                id: f,
                                relayProtocol: g,
                                namespaces: w,
                                sessionProperties: T
                            } = l, S = r.client.proposal.get(f);
                            let {
                                pairingTopic: j,
                                proposer: H,
                                requiredNamespaces: J,
                                optionalNamespaces: le
                            } = S;
                            j = j || "", (0, E.L5)(J) || (J = (0, E.fc)(w, "approve()"));
                            const se = yield r.client.core.crypto.generateKeyPair(), Ae = H.publicKey, qe = yield r.client.core.crypto.generateSharedKey(se, Ae);
                            j && f && (yield r.client.core.pairing.updateMetadata({
                                topic: j,
                                metadata: H.metadata
                            }), yield r.sendResult({
                                id: f,
                                topic: j,
                                result: {
                                    relay: {
                                        protocol: g ? ? "irn"
                                    },
                                    responderPublicKey: se
                                }
                            }), yield r.client.proposal.delete(f, (0, E.D6)("USER_DISCONNECTED")), yield r.client.core.pairing.activate({
                                topic: j
                            }));
                            const We = Lr({
                                relay: {
                                    protocol: g ? ? "irn"
                                },
                                namespaces: w,
                                requiredNamespaces: J,
                                optionalNamespaces: le,
                                pairingTopic: j,
                                controller: {
                                    publicKey: se,
                                    metadata: r.client.metadata
                                },
                                expiry: (0, E.gn)(zs)
                            }, T && {
                                sessionProperties: T
                            });
                            yield r.client.core.relayer.subscribe(qe), yield r.sendRequest({
                                topic: qe,
                                method: "wc_sessionSettle",
                                params: We,
                                throwOnFailedPublish: !0
                            });
                            const kt = ns(Lr({}, We), {
                                topic: qe,
                                pairingTopic: j,
                                acknowledged: !1,
                                self: We.controller,
                                peer: {
                                    publicKey: H.publicKey,
                                    metadata: H.metadata
                                },
                                controller: se
                            });
                            return yield r.client.session.set(qe, kt), yield r.setExpiry(qe, (0, E.gn)(zs)), {
                                topic: qe,
                                acknowledged: () => new Promise(ut => setTimeout(() => ut(r.client.session.get(qe)), 500))
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidReject(l);
                            const {
                                id: f,
                                reason: g
                            } = l, {
                                pairingTopic: w
                            } = r.client.proposal.get(f);
                            w && (yield r.sendError(f, w, g), yield r.client.proposal.delete(f, (0, E.D6)("USER_DISCONNECTED")))
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidUpdate(l);
                            const {
                                topic: f,
                                namespaces: g
                            } = l, w = yield r.sendRequest({
                                topic: f,
                                method: "wc_sessionUpdate",
                                params: {
                                    namespaces: g
                                }
                            }), {
                                done: T,
                                resolve: S,
                                reject: j
                            } = (0, E.H1)();
                            return r.events.once((0, E.E0)("session_update", w), ({
                                error: H
                            }) => {
                                H ? j(H) : S()
                            }), yield r.client.session.update(f, {
                                namespaces: g
                            }), {
                                acknowledged: T
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidExtend(l);
                            const {
                                topic: f
                            } = l, g = yield r.sendRequest({
                                topic: f,
                                method: "wc_sessionExtend",
                                params: {}
                            }), {
                                done: w,
                                resolve: T,
                                reject: S
                            } = (0, E.H1)();
                            return r.events.once((0, E.E0)("session_extend", g), ({
                                error: j
                            }) => {
                                j ? S(j) : T()
                            }), yield r.setExpiry(f, (0, E.gn)(zs)), {
                                acknowledged: w
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidRequest(l);
                            const {
                                chainId: f,
                                request: g,
                                topic: w,
                                expiry: T
                            } = l, S = Kn(), {
                                done: j,
                                resolve: H,
                                reject: J
                            } = (0, E.H1)(T, "Request expired. Please try again.");
                            return r.events.once((0, E.E0)("session_request", S), ({
                                error: le,
                                result: se
                            }) => {
                                le ? J(le) : H(se)
                            }), yield Promise.all([new Promise(function() {
                                var le = (0, _.Z)(function*(se) {
                                    yield r.sendRequest({
                                        clientRpcId: S,
                                        topic: w,
                                        method: "wc_sessionRequest",
                                        params: {
                                            request: g,
                                            chainId: f
                                        },
                                        expiry: T,
                                        throwOnFailedPublish: !0
                                    }).catch(Ae => J(Ae)), r.client.events.emit("session_request_sent", {
                                        topic: w,
                                        request: g,
                                        chainId: f,
                                        id: S
                                    }), se()
                                });
                                return function(se) {
                                    return le.apply(this, arguments)
                                }
                            }()), new Promise(function() {
                                var le = (0, _.Z)(function*(se) {
                                    const Ae = yield(0, E.bW)(r.client.core.storage, Ku);
                                    (0, E.Hh)({
                                        id: S,
                                        topic: w,
                                        wcDeepLink: Ae
                                    }), se()
                                });
                                return function(se) {
                                    return le.apply(this, arguments)
                                }
                            }()), j()]).then(le => le[2])
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidRespond(l);
                            const {
                                topic: f,
                                response: g
                            } = l, {
                                id: w
                            } = g;
                            Tn(g) ? yield r.sendResult({
                                id: w,
                                topic: f,
                                result: g.result,
                                throwOnFailedPublish: !0
                            }): Wr(g) && (yield r.sendError(w, f, g.error)), r.cleanupAfterResponse(l)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidPing(l);
                            const {
                                topic: f
                            } = l;
                            if (r.client.session.keys.includes(f)) {
                                const g = yield r.sendRequest({
                                    topic: f,
                                    method: "wc_sessionPing",
                                    params: {}
                                }), {
                                    done: w,
                                    resolve: T,
                                    reject: S
                                } = (0, E.H1)();
                                r.events.once((0, E.E0)("session_ping", g), ({
                                    error: j
                                }) => {
                                    j ? S(j) : T()
                                }), yield w()
                            } else r.client.core.pairing.pairings.keys.includes(f) && (yield r.client.core.pairing.ping({
                                topic: f
                            }))
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidEmit(l);
                            const {
                                topic: f,
                                event: g,
                                chainId: w
                            } = l;
                            yield r.sendRequest({
                                topic: f,
                                method: "wc_sessionEvent",
                                params: {
                                    event: g,
                                    chainId: w
                                }
                            })
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var a = (0, _.Z)(function*(l) {
                            yield r.isInitialized(), yield r.isValidDisconnect(l);
                            const {
                                topic: f
                            } = l;
                            r.client.session.keys.includes(f) ? (yield r.sendRequest({
                                topic: f,
                                method: "wc_sessionDelete",
                                params: (0, E.D6)("USER_DISCONNECTED"),
                                throwOnFailedPublish: !0
                            }), yield r.deleteSession(f)) : yield r.client.core.pairing.disconnect({
                                topic: f
                            })
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.find = a => (this.isInitialized(), this.client.session.getAll().filter(l => (0, E.Ih)(l, a))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (l.pairingTopic) try {
                                const f = r.client.core.pairing.pairings.get(l.pairingTopic),
                                    g = r.client.core.pairing.pairings.getAll().filter(w => {
                                        var T, S;
                                        return (null == (T = w.peerMetadata) ? void 0 : T.url) && (null == (S = w.peerMetadata) ? void 0 : S.url) === l.peer.metadata.url && w.topic && w.topic !== f.topic
                                    });
                                if (0 === g.length) return;
                                r.client.logger.info(`Cleaning up ${g.length} duplicate pairing(s)`), yield Promise.all(g.map(w => r.client.core.pairing.disconnect({
                                    topic: w.topic
                                }))), r.client.logger.info("Duplicate pairings clean up finished")
                            } catch (f) {
                                r.client.logger.error(f)
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.deleteSession = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                self: g
                            } = r.client.session.get(l);
                            yield r.client.core.relayer.unsubscribe(l), r.client.session.delete(l, (0, E.D6)("USER_DISCONNECTED")), r.client.core.crypto.keychain.has(g.publicKey) && (yield r.client.core.crypto.deleteKeyPair(g.publicKey)), r.client.core.crypto.keychain.has(l) && (yield r.client.core.crypto.deleteSymKey(l)), f || r.client.core.expirer.del(l), r.client.core.storage.removeItem(Ku).catch(w => r.client.logger.warn(w)), r.getPendingSessionRequests().forEach(w => {
                                w.topic === l && r.deletePendingSessionRequest(w.id, (0, E.D6)("USER_DISCONNECTED"))
                            })
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.deleteProposal = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            yield Promise.all([r.client.proposal.delete(l, (0, E.D6)("USER_DISCONNECTED")), f ? Promise.resolve() : r.client.core.expirer.del(l)])
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.deletePendingSessionRequest = function() {
                        var a = (0, _.Z)(function*(l, f, g = !1) {
                            yield Promise.all([r.client.pendingRequest.delete(l, f), g ? Promise.resolve() : r.client.core.expirer.del(l)]), r.sessionRequestQueue.queue = r.sessionRequestQueue.queue.filter(w => w.id !== l), g && (r.sessionRequestQueue.state = "IDLE")
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.setExpiry = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            r.client.session.keys.includes(l) && (yield r.client.session.update(l, {
                                expiry: f
                            })), r.client.core.expirer.set(l, f)
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.setProposal = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            yield r.client.proposal.set(l, f), r.client.core.expirer.set(l, f.expiry)
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.setPendingSessionRequest = function() {
                        var a = (0, _.Z)(function*(l) {
                            const f = rs.wc_sessionRequest.req.ttl,
                                {
                                    id: g,
                                    topic: w,
                                    params: T,
                                    verifyContext: S
                                } = l;
                            yield r.client.pendingRequest.set(g, {
                                id: g,
                                topic: w,
                                params: T,
                                verifyContext: S
                            }), f && r.client.core.expirer.set(g, (0, E.gn)(f))
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendRequest = function() {
                        var a = (0, _.Z)(function*(l) {
                            const {
                                topic: f,
                                method: g,
                                params: w,
                                expiry: T,
                                relayRpcId: S,
                                clientRpcId: j,
                                throwOnFailedPublish: H
                            } = l, J = ui(g, w, j);
                            if ((0, E.jU)() && Bg.includes(g)) {
                                const Ae = (0, E.rj)(JSON.stringify(J));
                                r.client.core.verify.register({
                                    attestationId: Ae
                                })
                            }
                            const le = yield r.client.core.crypto.encode(f, J), se = rs[g].req;
                            return T && (se.ttl = T), S && (se.id = S), r.client.core.history.set(f, J), H ? (se.internal = ns(Lr({}, se.internal), {
                                throwOnFailedPublish: !0
                            }), yield r.client.core.relayer.publish(f, le, se)) : r.client.core.relayer.publish(f, le, se).catch(Ae => r.client.logger.error(Ae)), J.id
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendResult = function() {
                        var a = (0, _.Z)(function*(l) {
                            const {
                                id: f,
                                topic: g,
                                result: w,
                                throwOnFailedPublish: T
                            } = l, S = Ls(f, w), j = yield r.client.core.crypto.encode(g, S), H = yield r.client.core.history.get(g, f), J = rs[H.request.method].res;
                            T ? (J.internal = ns(Lr({}, J.internal), {
                                throwOnFailedPublish: !0
                            }), yield r.client.core.relayer.publish(g, j, J)) : r.client.core.relayer.publish(g, j, J).catch(le => r.client.logger.error(le)), yield r.client.core.history.resolve(S)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.sendError = function() {
                        var a = (0, _.Z)(function*(l, f, g) {
                            const w = Fs(l, g),
                                T = yield r.client.core.crypto.encode(f, w), S = yield r.client.core.history.get(f, l);
                            r.client.core.relayer.publish(f, T, rs[S.request.method].res), yield r.client.core.history.resolve(w)
                        });
                        return function(l, f, g) {
                            return a.apply(this, arguments)
                        }
                    }(), this.cleanup = (0, _.Z)(function*() {
                        const a = [],
                            l = [];
                        r.client.session.getAll().forEach(f => {
                            (0, E.Bw)(f.expiry) && a.push(f.topic)
                        }), r.client.proposal.getAll().forEach(f => {
                            (0, E.Bw)(f.expiry) && l.push(f.id)
                        }), yield Promise.all([...a.map(f => r.deleteSession(f)), ...l.map(f => r.deleteProposal(f))])
                    }), this.onRelayEventRequest = function() {
                        var a = (0, _.Z)(function*(l) {
                            r.requestQueue.queue.push(l), yield r.processRequestsQueue()
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.processRequestsQueue = (0, _.Z)(function*() {
                        if ("ACTIVE" !== r.requestQueue.state) {
                            for (r.client.logger.info(`Request queue starting with ${r.requestQueue.queue.length} requests`); r.requestQueue.queue.length > 0;) {
                                r.requestQueue.state = "ACTIVE";
                                const a = r.requestQueue.queue.shift();
                                if (a) try {
                                    r.processRequest(a), yield new Promise(l => setTimeout(l, 300))
                                } catch (l) {
                                    r.client.logger.warn(l)
                                }
                            }
                            r.requestQueue.state = "IDLE"
                        } else r.client.logger.info("Request queue already active, skipping...")
                    }), this.processRequest = a => {
                        const {
                            topic: l,
                            payload: f
                        } = a, g = f.method;
                        switch (g) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(l, f);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(l, f);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(l, f);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(l, f);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(l, f);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(l, f);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(l, f);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(l, f);
                            default:
                                return this.client.logger.info(`Unsupported request method ${g}`)
                        }
                    }, this.onRelayEventResponse = function() {
                        var a = (0, _.Z)(function*(l) {
                            const {
                                topic: f,
                                payload: g
                            } = l, w = (yield r.client.core.history.get(f, g.id)).request.method;
                            switch (w) {
                                case "wc_sessionPropose":
                                    return r.onSessionProposeResponse(f, g);
                                case "wc_sessionSettle":
                                    return r.onSessionSettleResponse(f, g);
                                case "wc_sessionUpdate":
                                    return r.onSessionUpdateResponse(f, g);
                                case "wc_sessionExtend":
                                    return r.onSessionExtendResponse(f, g);
                                case "wc_sessionPing":
                                    return r.onSessionPingResponse(f, g);
                                case "wc_sessionRequest":
                                    return r.onSessionRequestResponse(f, g);
                                default:
                                    return r.client.logger.info(`Unsupported response method ${w}`)
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onRelayEventUnknownPayload = a => {
                        const {
                            topic: l
                        } = a, {
                            message: f
                        } = (0, E.Z7)("MISSING_OR_INVALID", `Decoded payload on topic ${l} is not identifiable as a JSON-RPC request or a response.`);
                        throw new Error(f)
                    }, this.onSessionProposeRequest = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                params: g,
                                id: w
                            } = f;
                            try {
                                r.isValidConnect(Lr({}, f.params));
                                const T = (0, E.gn)(Oe.FIVE_MINUTES),
                                    S = Lr({
                                        id: w,
                                        pairingTopic: l,
                                        expiry: T
                                    }, g);
                                yield r.setProposal(w, S);
                                const j = (0, E.rj)(JSON.stringify(f)),
                                    H = yield r.getVerifyContext(j, S.proposer.metadata);
                                r.client.events.emit("session_proposal", {
                                    id: w,
                                    params: S,
                                    verifyContext: H
                                })
                            } catch (T) {
                                yield r.sendError(w, l, T), r.client.logger.error(T)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onSessionProposeResponse = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                id: g
                            } = f;
                            if (Tn(f)) {
                                const {
                                    result: w
                                } = f;
                                r.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    result: w
                                });
                                const T = r.client.proposal.get(g);
                                r.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    proposal: T
                                });
                                const S = T.proposer.publicKey;
                                r.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    selfPublicKey: S
                                });
                                const j = w.responderPublicKey;
                                r.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    peerPublicKey: j
                                });
                                const H = yield r.client.core.crypto.generateSharedKey(S, j);
                                r.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    sessionTopic: H
                                });
                                const J = yield r.client.core.relayer.subscribe(H);
                                r.client.logger.trace({
                                    type: "method",
                                    method: "onSessionProposeResponse",
                                    subscriptionId: J
                                }), yield r.client.core.pairing.activate({
                                    topic: l
                                })
                            } else Wr(f) && (yield r.client.proposal.delete(g, (0, E.D6)("USER_DISCONNECTED")), r.events.emit((0, E.E0)("session_connect"), {
                                error: f.error
                            }))
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onSessionSettleRequest = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                id: g,
                                params: w
                            } = f;
                            try {
                                r.isValidSessionSettleRequest(w);
                                const {
                                    relay: T,
                                    controller: S,
                                    expiry: j,
                                    namespaces: H,
                                    requiredNamespaces: J,
                                    optionalNamespaces: le,
                                    sessionProperties: se,
                                    pairingTopic: Ae
                                } = f.params, qe = Lr({
                                    topic: l,
                                    relay: T,
                                    expiry: j,
                                    namespaces: H,
                                    acknowledged: !0,
                                    pairingTopic: Ae,
                                    requiredNamespaces: J,
                                    optionalNamespaces: le,
                                    controller: S.publicKey,
                                    self: {
                                        publicKey: "",
                                        metadata: r.client.metadata
                                    },
                                    peer: {
                                        publicKey: S.publicKey,
                                        metadata: S.metadata
                                    }
                                }, se && {
                                    sessionProperties: se
                                });
                                yield r.sendResult({
                                    id: f.id,
                                    topic: l,
                                    result: !0
                                }), r.events.emit((0, E.E0)("session_connect"), {
                                    session: qe
                                }), r.cleanupDuplicatePairings(qe)
                            } catch (T) {
                                yield r.sendError(g, l, T), r.client.logger.error(T)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onSessionSettleResponse = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                id: g
                            } = f;
                            Tn(f) ? (yield r.client.session.update(l, {
                                acknowledged: !0
                            }), r.events.emit((0, E.E0)("session_approve", g), {})) : Wr(f) && (yield r.client.session.delete(l, (0, E.D6)("USER_DISCONNECTED")), r.events.emit((0, E.E0)("session_approve", g), {
                                error: f.error
                            }))
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onSessionUpdateRequest = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                params: g,
                                id: w
                            } = f;
                            try {
                                const T = `${l}_session_update`,
                                    S = E.O6.get(T);
                                if (S && r.isRequestOutOfSync(S, w)) return void r.client.logger.info(`Discarding out of sync request - ${w}`);
                                r.isValidUpdate(Lr({
                                    topic: l
                                }, g)), yield r.client.session.update(l, {
                                    namespaces: g.namespaces
                                }), yield r.sendResult({
                                    id: w,
                                    topic: l,
                                    result: !0
                                }), r.client.events.emit("session_update", {
                                    id: w,
                                    topic: l,
                                    params: g
                                }), E.O6.set(T, w)
                            } catch (T) {
                                yield r.sendError(w, l, T), r.client.logger.error(T)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isRequestOutOfSync = (a, l) => parseInt(l.toString().slice(0, -3)) <= parseInt(a.toString().slice(0, -3)), this.onSessionUpdateResponse = (a, l) => {
                        const {
                            id: f
                        } = l;
                        Tn(l) ? this.events.emit((0, E.E0)("session_update", f), {}) : Wr(l) && this.events.emit((0, E.E0)("session_update", f), {
                            error: l.error
                        })
                    }, this.onSessionExtendRequest = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                id: g
                            } = f;
                            try {
                                r.isValidExtend({
                                    topic: l
                                }), yield r.setExpiry(l, (0, E.gn)(zs)), yield r.sendResult({
                                    id: g,
                                    topic: l,
                                    result: !0
                                }), r.client.events.emit("session_extend", {
                                    id: g,
                                    topic: l
                                })
                            } catch (w) {
                                yield r.sendError(g, l, w), r.client.logger.error(w)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onSessionExtendResponse = (a, l) => {
                        const {
                            id: f
                        } = l;
                        Tn(l) ? this.events.emit((0, E.E0)("session_extend", f), {}) : Wr(l) && this.events.emit((0, E.E0)("session_extend", f), {
                            error: l.error
                        })
                    }, this.onSessionPingRequest = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                id: g
                            } = f;
                            try {
                                r.isValidPing({
                                    topic: l
                                }), yield r.sendResult({
                                    id: g,
                                    topic: l,
                                    result: !0
                                }), r.client.events.emit("session_ping", {
                                    id: g,
                                    topic: l
                                })
                            } catch (w) {
                                yield r.sendError(g, l, w), r.client.logger.error(w)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onSessionPingResponse = (a, l) => {
                        const {
                            id: f
                        } = l;
                        setTimeout(() => {
                            Tn(l) ? this.events.emit((0, E.E0)("session_ping", f), {}) : Wr(l) && this.events.emit((0, E.E0)("session_ping", f), {
                                error: l.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                id: g
                            } = f;
                            try {
                                r.isValidDisconnect({
                                    topic: l,
                                    reason: f.params
                                }), yield Promise.all([new Promise(w => {
                                    r.client.core.relayer.once("relayer_publish", (0, _.Z)(function*() {
                                        w(yield r.deleteSession(l))
                                    }))
                                }), r.sendResult({
                                    id: g,
                                    topic: l,
                                    result: !0
                                })]), r.client.events.emit("session_delete", {
                                    id: g,
                                    topic: l
                                })
                            } catch (w) {
                                r.client.logger.error(w)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onSessionRequest = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                id: g,
                                params: w
                            } = f;
                            try {
                                r.isValidRequest(Lr({
                                    topic: l
                                }, w));
                                const T = (0, E.rj)(JSON.stringify(ui("wc_sessionRequest", w, g))),
                                    S = r.client.session.get(l),
                                    H = {
                                        id: g,
                                        topic: l,
                                        params: w,
                                        verifyContext: yield r.getVerifyContext(T, S.peer.metadata)
                                    };
                                yield r.setPendingSessionRequest(H), r.addSessionRequestToSessionRequestQueue(H), r.processSessionRequestQueue()
                            } catch (T) {
                                yield r.sendError(g, l, T), r.client.logger.error(T)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.onSessionRequestResponse = (a, l) => {
                        const {
                            id: f
                        } = l;
                        Tn(l) ? this.events.emit((0, E.E0)("session_request", f), {
                            result: l.result
                        }) : Wr(l) && this.events.emit((0, E.E0)("session_request", f), {
                            error: l.error
                        })
                    }, this.onSessionEventRequest = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const {
                                id: g,
                                params: w
                            } = f;
                            try {
                                const T = `${l}_session_event_${w.event.name}`,
                                    S = E.O6.get(T);
                                if (S && r.isRequestOutOfSync(S, g)) return void r.client.logger.info(`Discarding out of sync request - ${g}`);
                                r.isValidEmit(Lr({
                                    topic: l
                                }, w)), r.client.events.emit("session_event", {
                                    id: g,
                                    topic: l,
                                    params: w
                                }), E.O6.set(T, g)
                            } catch (T) {
                                yield r.sendError(g, l, T), r.client.logger.error(T)
                            }
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.addSessionRequestToSessionRequestQueue = a => {
                        this.sessionRequestQueue.queue.push(a)
                    }, this.cleanupAfterResponse = a => {
                        this.deletePendingSessionRequest(a.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = "IDLE", this.processSessionRequestQueue()
                        }, (0, Oe.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if ("ACTIVE" === this.sessionRequestQueue.state) return void this.client.logger.info("session request queue is already active.");
                        const a = this.sessionRequestQueue.queue[0];
                        if (a) try {
                            this.sessionRequestQueue.state = "ACTIVE", this.client.events.emit("session_request", a)
                        } catch (l) {
                            this.client.logger.error(l)
                        } else this.client.logger.info("session request queue is empty.")
                    }, this.onPairingCreated = a => {
                        if (a.active) return;
                        const l = this.client.proposal.getAll().find(f => f.pairingTopic === a.topic);
                        l && this.onSessionProposeRequest(a.topic, ui("wc_sessionPropose", {
                            requiredNamespaces: l.requiredNamespaces,
                            optionalNamespaces: l.optionalNamespaces,
                            relays: l.relays,
                            proposer: l.proposer,
                            sessionProperties: l.sessionProperties
                        }, l.id))
                    }, this.isValidConnect = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: j
                                } = (0, E.Z7)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(l)}`);
                                throw new Error(j)
                            }
                            const {
                                pairingTopic: f,
                                requiredNamespaces: g,
                                optionalNamespaces: w,
                                sessionProperties: T,
                                relays: S
                            } = l;
                            if ((0, E.o8)(f) || (yield r.isValidPairingTopic(f)), !(0, E.PM)(S, !0)) {
                                const {
                                    message: j
                                } = (0, E.Z7)("MISSING_OR_INVALID", `connect() relays: ${S}`);
                                throw new Error(j)
                            }!(0, E.o8)(g) && 0 !== (0, E.L5)(g) && r.validateNamespaces(g, "requiredNamespaces"), !(0, E.o8)(w) && 0 !== (0, E.L5)(w) && r.validateNamespaces(w, "optionalNamespaces"), (0, E.o8)(T) || r.validateSessionProps(T, "sessionProperties")
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.validateNamespaces = (a, l) => {
                        const f = (0, E.n)(a, "connect()", l);
                        if (f) throw new Error(f.message)
                    }, this.isValidApprove = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) throw new Error((0, E.Z7)("MISSING_OR_INVALID", `approve() params: ${l}`).message);
                            const {
                                id: f,
                                namespaces: g,
                                relayProtocol: w,
                                sessionProperties: T
                            } = l;
                            yield r.isValidProposalId(f);
                            const S = r.client.proposal.get(f),
                                j = (0, E.in)(g, "approve()");
                            if (j) throw new Error(j.message);
                            const H = (0, E.rF)(S.requiredNamespaces, g, "approve()");
                            if (H) throw new Error(H.message);
                            if (!(0, E.M_)(w, !0)) {
                                const {
                                    message: J
                                } = (0, E.Z7)("MISSING_OR_INVALID", `approve() relayProtocol: ${w}`);
                                throw new Error(J)
                            }(0, E.o8)(T) || r.validateSessionProps(T, "sessionProperties")
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidReject = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: w
                                } = (0, E.Z7)("MISSING_OR_INVALID", `reject() params: ${l}`);
                                throw new Error(w)
                            }
                            const {
                                id: f,
                                reason: g
                            } = l;
                            if (yield r.isValidProposalId(f), !(0, E.$t)(g)) {
                                const {
                                    message: w
                                } = (0, E.Z7)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(g)}`);
                                throw new Error(w)
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidSessionSettleRequest = a => {
                        if (!(0, E.EJ)(a)) {
                            const {
                                message: j
                            } = (0, E.Z7)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${a}`);
                            throw new Error(j)
                        }
                        const {
                            relay: l,
                            controller: f,
                            namespaces: g,
                            expiry: w
                        } = a;
                        if (!(0, E.Z2)(l)) {
                            const {
                                message: j
                            } = (0, E.Z7)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw new Error(j)
                        }
                        const T = (0, E.Dd)(f, "onSessionSettleRequest()");
                        if (T) throw new Error(T.message);
                        const S = (0, E.in)(g, "onSessionSettleRequest()");
                        if (S) throw new Error(S.message);
                        if ((0, E.Bw)(w)) {
                            const {
                                message: j
                            } = (0, E.Z7)("EXPIRED", "onSessionSettleRequest()");
                            throw new Error(j)
                        }
                    }, this.isValidUpdate = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: j
                                } = (0, E.Z7)("MISSING_OR_INVALID", `update() params: ${l}`);
                                throw new Error(j)
                            }
                            const {
                                topic: f,
                                namespaces: g
                            } = l;
                            yield r.isValidSessionTopic(f);
                            const w = r.client.session.get(f),
                                T = (0, E.in)(g, "update()");
                            if (T) throw new Error(T.message);
                            const S = (0, E.rF)(w.requiredNamespaces, g, "update()");
                            if (S) throw new Error(S.message)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidExtend = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: g
                                } = (0, E.Z7)("MISSING_OR_INVALID", `extend() params: ${l}`);
                                throw new Error(g)
                            }
                            const {
                                topic: f
                            } = l;
                            yield r.isValidSessionTopic(f)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidRequest = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: j
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() params: ${l}`);
                                throw new Error(j)
                            }
                            const {
                                topic: f,
                                request: g,
                                chainId: w,
                                expiry: T
                            } = l;
                            yield r.isValidSessionTopic(f);
                            const {
                                namespaces: S
                            } = r.client.session.get(f);
                            if (!(0, E.p8)(S, w)) {
                                const {
                                    message: j
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() chainId: ${w}`);
                                throw new Error(j)
                            }
                            if (!(0, E.hH)(g)) {
                                const {
                                    message: j
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() ${JSON.stringify(g)}`);
                                throw new Error(j)
                            }
                            if (!(0, E.al)(S, w, g.method)) {
                                const {
                                    message: j
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() method: ${g.method}`);
                                throw new Error(j)
                            }
                            if (T && !(0, E.ON)(T, ba)) {
                                const {
                                    message: j
                                } = (0, E.Z7)("MISSING_OR_INVALID", `request() expiry: ${T}. Expiry must be a number (in seconds) between ${ba.min} and ${ba.max}`);
                                throw new Error(j)
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidRespond = function() {
                        var a = (0, _.Z)(function*(l) {
                            var f;
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: T
                                } = (0, E.Z7)("MISSING_OR_INVALID", `respond() params: ${l}`);
                                throw new Error(T)
                            }
                            const {
                                topic: g,
                                response: w
                            } = l;
                            try {
                                yield r.isValidSessionTopic(g)
                            } catch (T) {
                                throw null != (f = l ? .response) && f.id && r.cleanupAfterResponse(l), T
                            }
                            if (!(0, E.JT)(w)) {
                                const {
                                    message: T
                                } = (0, E.Z7)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(w)}`);
                                throw new Error(T)
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidPing = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: g
                                } = (0, E.Z7)("MISSING_OR_INVALID", `ping() params: ${l}`);
                                throw new Error(g)
                            }
                            const {
                                topic: f
                            } = l;
                            yield r.isValidSessionOrPairingTopic(f)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidEmit = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: S
                                } = (0, E.Z7)("MISSING_OR_INVALID", `emit() params: ${l}`);
                                throw new Error(S)
                            }
                            const {
                                topic: f,
                                event: g,
                                chainId: w
                            } = l;
                            yield r.isValidSessionTopic(f);
                            const {
                                namespaces: T
                            } = r.client.session.get(f);
                            if (!(0, E.p8)(T, w)) {
                                const {
                                    message: S
                                } = (0, E.Z7)("MISSING_OR_INVALID", `emit() chainId: ${w}`);
                                throw new Error(S)
                            }
                            if (!(0, E.nf)(g)) {
                                const {
                                    message: S
                                } = (0, E.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(g)}`);
                                throw new Error(S)
                            }
                            if (!(0, E.sI)(T, w, g.name)) {
                                const {
                                    message: S
                                } = (0, E.Z7)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(g)}`);
                                throw new Error(S)
                            }
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.isValidDisconnect = function() {
                        var a = (0, _.Z)(function*(l) {
                            if (!(0, E.EJ)(l)) {
                                const {
                                    message: g
                                } = (0, E.Z7)("MISSING_OR_INVALID", `disconnect() params: ${l}`);
                                throw new Error(g)
                            }
                            const {
                                topic: f
                            } = l;
                            yield r.isValidSessionOrPairingTopic(f)
                        });
                        return function(l) {
                            return a.apply(this, arguments)
                        }
                    }(), this.getVerifyContext = function() {
                        var a = (0, _.Z)(function*(l, f) {
                            const g = {
                                verified: {
                                    verifyUrl: f.verifyUrl || Si,
                                    validation: "UNKNOWN",
                                    origin: f.url || ""
                                }
                            };
                            try {
                                const w = yield r.client.core.verify.resolve({
                                    attestationId: l,
                                    verifyUrl: f.verifyUrl
                                });
                                w && (g.verified.origin = w.origin, g.verified.isScam = w.isScam, g.verified.validation = w.origin === new URL(f.url).origin ? "VALID" : "INVALID")
                            } catch (w) {
                                r.client.logger.info(w)
                            }
                            return r.client.logger.info(`Verify context: ${JSON.stringify(g)}`), g
                        });
                        return function(l, f) {
                            return a.apply(this, arguments)
                        }
                    }(), this.validateSessionProps = (a, l) => {
                        Object.values(a).forEach(f => {
                            if (!(0, E.M_)(f, !1)) {
                                const {
                                    message: g
                                } = (0, E.Z7)("MISSING_OR_INVALID", `${l} must be in Record<string, string> format. Received: ${JSON.stringify(f)}`);
                                throw new Error(g)
                            }
                        })
                    }
                }
                isInitialized() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        if (!t.initialized) {
                            const {
                                message: r
                            } = (0, E.Z7)("NOT_INITIALIZED", t.name);
                            throw new Error(r)
                        }
                        yield t.client.core.relayer.confirmOnlineStateOrThrow()
                    })()
                }
                registerRelayerEvents() {
                    var t = this;
                    this.client.core.relayer.on("relayer_message", function() {
                        var r = (0, _.Z)(function*(a) {
                            const {
                                topic: l,
                                message: f
                            } = a;
                            if (t.ignoredPayloadTypes.includes(t.client.core.crypto.getPayloadType(f))) return;
                            const g = yield t.client.core.crypto.decode(l, f);
                            try {
                                ua(g) ? (t.client.core.history.set(l, g), t.onRelayEventRequest({
                                    topic: l,
                                    payload: g
                                })) : Qi(g) ? (yield t.client.core.history.resolve(g), yield t.onRelayEventResponse({
                                    topic: l,
                                    payload: g
                                }), t.client.core.history.delete(l, g.id)) : t.onRelayEventUnknownPayload({
                                    topic: l,
                                    payload: g
                                })
                            } catch (w) {
                                t.client.logger.error(w)
                            }
                        });
                        return function(a) {
                            return r.apply(this, arguments)
                        }
                    }())
                }
                registerExpirerEvents() {
                    var t = this;
                    this.client.core.expirer.on(Jr_expired, function() {
                        var r = (0, _.Z)(function*(a) {
                            const {
                                topic: l,
                                id: f
                            } = (0, E.iP)(a.target);
                            if (f && t.client.pendingRequest.keys.includes(f)) return yield t.deletePendingSessionRequest(f, (0, E.Z7)("EXPIRED"), !0);
                            l ? t.client.session.keys.includes(l) && (yield t.deleteSession(l, !0), t.client.events.emit("session_expire", {
                                topic: l
                            })) : f && (yield t.deleteProposal(f, !0), t.client.events.emit("proposal_expire", {
                                id: f
                            }))
                        });
                        return function(a) {
                            return r.apply(this, arguments)
                        }
                    }())
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on("pairing_create", t => this.onPairingCreated(t))
                }
                isValidPairingTopic(t) {
                    if (!(0, E.M_)(t, !1)) {
                        const {
                            message: r
                        } = (0, E.Z7)("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
                        throw new Error(r)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(t)) {
                        const {
                            message: r
                        } = (0, E.Z7)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
                        throw new Error(r)
                    }
                    if ((0, E.Bw)(this.client.core.pairing.pairings.get(t).expiry)) {
                        const {
                            message: r
                        } = (0, E.Z7)("EXPIRED", `pairing topic: ${t}`);
                        throw new Error(r)
                    }
                }
                isValidSessionTopic(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (!(0, E.M_)(t, !1)) {
                            const {
                                message: a
                            } = (0, E.Z7)("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
                            throw new Error(a)
                        }
                        if (!r.client.session.keys.includes(t)) {
                            const {
                                message: a
                            } = (0, E.Z7)("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
                            throw new Error(a)
                        }
                        if ((0, E.Bw)(r.client.session.get(t).expiry)) {
                            yield r.deleteSession(t);
                            const {
                                message: a
                            } = (0, E.Z7)("EXPIRED", `session topic: ${t}`);
                            throw new Error(a)
                        }
                    })()
                }
                isValidSessionOrPairingTopic(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (r.client.session.keys.includes(t)) yield r.isValidSessionTopic(t);
                        else {
                            if (!r.client.core.pairing.pairings.keys.includes(t)) {
                                if ((0, E.M_)(t, !1)) {
                                    const {
                                        message: a
                                    } = (0, E.Z7)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
                                    throw new Error(a)
                                } {
                                    const {
                                        message: a
                                    } = (0, E.Z7)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
                                    throw new Error(a)
                                }
                            }
                            r.isValidPairingTopic(t)
                        }
                    })()
                }
                isValidProposalId(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (!(0, E.Q0)(t)) {
                            const {
                                message: a
                            } = (0, E.Z7)("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
                            throw new Error(a)
                        }
                        if (!r.client.proposal.keys.includes(t)) {
                            const {
                                message: a
                            } = (0, E.Z7)("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
                            throw new Error(a)
                        }
                        if ((0, E.Bw)(r.client.proposal.get(t).expiry)) {
                            yield r.deleteProposal(t);
                            const {
                                message: a
                            } = (0, E.Z7)("EXPIRED", `proposal id: ${t}`);
                            throw new Error(a)
                        }
                    })()
                }
            }
            class Jg extends Zs {
                constructor(t, r) {
                    super(t, r, "proposal", _a), this.core = t, this.logger = r
                }
            }
            class Qg extends Zs {
                constructor(t, r) {
                    super(t, r, "session", _a), this.core = t, this.logger = r
                }
            }
            class Yg extends Zs {
                constructor(t, r) {
                    super(t, r, "request", _a, a => a.id), this.core = t, this.logger = r
                }
            }
            class wa extends Jo {
                constructor(t) {
                    var r;
                    super(t), r = this, this.protocol = "wc", this.version = 2, this.name = "client", this.events = new ye.EventEmitter, this.on = (l, f) => this.events.on(l, f), this.once = (l, f) => this.events.once(l, f), this.off = (l, f) => this.events.off(l, f), this.removeListener = (l, f) => this.events.removeListener(l, f), this.removeAllListeners = l => this.events.removeAllListeners(l), this.connect = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.connect(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.pair = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.pair(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.approve = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.approve(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.reject = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.reject(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.update = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.update(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.extend = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.extend(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.request = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.request(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.respond = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.respond(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.ping = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.ping(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.emit = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.emit(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.disconnect = function() {
                        var l = (0, _.Z)(function*(f) {
                            try {
                                return yield r.engine.disconnect(f)
                            } catch (g) {
                                throw r.logger.error(g.message), g
                            }
                        });
                        return function(f) {
                            return l.apply(this, arguments)
                        }
                    }(), this.find = l => {
                        try {
                            return this.engine.find(l)
                        } catch (f) {
                            throw this.logger.error(f.message), f
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (l) {
                            throw this.logger.error(l.message), l
                        }
                    }, this.name = t ? .name || "client", this.metadata = t ? .metadata || (0, E.D)();
                    const a = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : Nr()(Dt({
                        level: t ? .logger || "error"
                    }));
                    this.core = t ? .core || new Zg(t), this.logger = xr(a, this.name), this.session = new Qg(this.core, this.logger), this.proposal = new Jg(this.core, this.logger), this.pendingRequest = new Yg(this.core, this.logger), this.engine = new Wg(this)
                }
                static init(t) {
                    return (0, _.Z)(function*() {
                        const r = new wa(t);
                        return yield r.initialize(), r
                    })()
                }
                get context() {
                    return wr(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                initialize() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.logger.trace("Initialized");
                        try {
                            yield t.core.start(), yield t.session.init(), yield t.proposal.init(), yield t.pendingRequest.init(), yield t.engine.init(), t.core.verify.init({
                                verifyUrl: t.metadata.verifyUrl
                            }), t.logger.info("SignClient Initialization Success")
                        } catch (r) {
                            throw t.logger.info("SignClient Initialization Failure"), t.logger.error(r.message), r
                        }
                    })()
                }
            }
            var Xg = ce(2055),
                Ju = ce.n(Xg),
                ey = Object.defineProperty,
                ty = Object.defineProperties,
                ry = Object.getOwnPropertyDescriptors,
                Qu = Object.getOwnPropertySymbols,
                ny = Object.prototype.hasOwnProperty,
                iy = Object.prototype.propertyIsEnumerable,
                Yu = (d, t, r) => t in d ? ey(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r,
                Xu = (d, t) => {
                    for (var r in t || (t = {})) ny.call(t, r) && Yu(d, r, t[r]);
                    if (Qu)
                        for (var r of Qu(t)) iy.call(t, r) && Yu(d, r, t[r]);
                    return d
                },
                el = (d, t) => ty(d, ry(t));
            const tl = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class Gn {
                constructor(t, r = !1) {
                    if (this.url = t, this.disableProviderPing = r, this.events = new ye.EventEmitter, this.isAvailable = !1, this.registering = !1, !ou(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    this.url = t, this.disableProviderPing = r
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(t, r) {
                    this.events.on(t, r)
                }
                once(t, r) {
                    this.events.once(t, r)
                }
                off(t, r) {
                    this.events.off(t, r)
                }
                removeListener(t, r) {
                    this.events.removeListener(t, r)
                }
                open(t = this.url) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.register(t)
                    })()
                }
                close() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        if (!t.isAvailable) throw new Error("Connection already closed");
                        t.onClose()
                    })()
                }
                send(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        r.isAvailable || (yield r.register());
                        try {
                            const a = xt(t),
                                l = yield(yield Ju()(r.url, el(Xu({}, tl), {
                                    body: a
                                }))).json();
                            r.onPayload({
                                data: l
                            })
                        } catch (a) {
                            r.onError(t.id, a)
                        }
                    })()
                }
                register(t = this.url) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (!ou(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                        if (r.registering) {
                            const a = r.events.getMaxListeners();
                            return (r.events.listenerCount("register_error") >= a || r.events.listenerCount("open") >= a) && r.events.setMaxListeners(a + 1), new Promise((l, f) => {
                                r.events.once("register_error", g => {
                                    r.resetMaxListeners(), f(g)
                                }), r.events.once("open", () => {
                                    if (r.resetMaxListeners(), typeof r.isAvailable > "u") return f(new Error("HTTP connection is missing or invalid"));
                                    l()
                                })
                            })
                        }
                        r.url = t, r.registering = !0;
                        try {
                            if (!r.disableProviderPing) {
                                const a = xt({
                                    id: 1,
                                    jsonrpc: "2.0",
                                    method: "test",
                                    params: []
                                });
                                yield Ju()(t, el(Xu({}, tl), {
                                    body: a
                                }))
                            }
                            r.onOpen()
                        } catch (a) {
                            const l = r.parseError(a);
                            throw r.events.emit("register_error", l), r.onClose(), l
                        }
                    })()
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(t) {
                    if (typeof t.data > "u") return;
                    const r = "string" == typeof t.data ? Mt(t.data) : t.data;
                    this.events.emit("payload", r)
                }
                onError(t, r) {
                    const a = this.parseError(r),
                        f = Fs(t, a.message || a.toString());
                    this.events.emit("payload", f)
                }
                parseError(t, r = this.url) {
                    return mn(t, r, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            class Wn extends iu {
                constructor(t) {
                    super(t), this.events = new ye.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
                }
                connect(t = this.connection) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        yield r.open(t)
                    })()
                }
                disconnect() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.close()
                    })()
                }
                on(t, r) {
                    this.events.on(t, r)
                }
                once(t, r) {
                    this.events.once(t, r)
                }
                off(t, r) {
                    this.events.off(t, r)
                }
                removeListener(t, r) {
                    this.events.removeListener(t, r)
                }
                request(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        return a.requestStrict(ui(t.method, t.params || [], t.id || ca().toString()), r)
                    })()
                }
                requestStrict(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        return new Promise(function() {
                            var l = (0, _.Z)(function*(f, g) {
                                if (!a.connection.connected) try {
                                    yield a.open()
                                } catch (w) {
                                    g(w)
                                }
                                a.events.on(`${t.id}`, w => {
                                    Wr(w) ? g(w.error) : f(w.result)
                                });
                                try {
                                    yield a.connection.send(t, r)
                                } catch (w) {
                                    g(w)
                                }
                            });
                            return function(f, g) {
                                return l.apply(this, arguments)
                            }
                        }())
                    })()
                }
                setConnection(t = this.connection) {
                    return t
                }
                onPayload(t) {
                    this.events.emit("payload", t), Qi(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
                        type: t.method,
                        data: t.params
                    })
                }
                onClose(t) {
                    t && 3e3 === t.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
                }
                open(t = this.connection) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        r.connection === t && r.connection.connected || (r.connection.connected && r.close(), "string" == typeof t && (yield r.connection.open(t), t = r.connection), r.connection = r.setConnection(t), yield r.connection.open(), r.registerEventListeners(), r.events.emit("connect"))
                    })()
                }
                close() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        yield t.connection.close()
                    })()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)), this.connection.on("close", t => this.onClose(t)), this.connection.on("error", t => this.events.emit("error", t)), this.connection.on("register_error", t => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            const il = "wc@2:universal_provider:";
            var d, t, is = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
                xa = {
                    exports: {}
                };
            d = xa, t = xa.exports,
                function() {
                    var r, g = "Expected a function",
                        T = "__lodash_hash_undefined__",
                        j = "__lodash_placeholder__",
                        fi = 1 / 0,
                        Yn = 9007199254740991,
                        wn = 4294967295,
                        tv = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        Oi = "[object Arguments]",
                        Vs = "[object Array]",
                        os = "[object Boolean]",
                        as = "[object Date]",
                        Gs = "[object Error]",
                        Ws = "[object Function]",
                        _l = "[object GeneratorFunction]",
                        fn = "[object Map]",
                        cs = "[object Number]",
                        jn = "[object Object]",
                        ml = "[object Promise]",
                        us = "[object RegExp]",
                        hn = "[object Set]",
                        ls = "[object String]",
                        Js = "[object Symbol]",
                        fs = "[object WeakMap]",
                        hs = "[object ArrayBuffer]",
                        Ri = "[object DataView]",
                        Ra = "[object Float32Array]",
                        Aa = "[object Float64Array]",
                        Ta = "[object Int8Array]",
                        Ca = "[object Int16Array]",
                        Da = "[object Int32Array]",
                        Na = "[object Uint8Array]",
                        ja = "[object Uint8ClampedArray]",
                        La = "[object Uint16Array]",
                        Fa = "[object Uint32Array]",
                        cv = /\b__p \+= '';/g,
                        uv = /\b(__p \+=) '' \+/g,
                        lv = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        bl = /&(?:amp|lt|gt|quot|#39);/g,
                        wl = /[&<>"']/g,
                        fv = RegExp(bl.source),
                        hv = RegExp(wl.source),
                        dv = /<%-([\s\S]+?)%>/g,
                        pv = /<%([\s\S]+?)%>/g,
                        xl = /<%=([\s\S]+?)%>/g,
                        gv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        yv = /^\w*$/,
                        vv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        Ma = /[\\^$.*+?()[\]{}|]/g,
                        _v = RegExp(Ma.source),
                        Za = /^\s+/,
                        mv = /\s/,
                        bv = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        wv = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        xv = /,? & /,
                        Ev = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        Iv = /[()=,{}\[\]\/\s]/,
                        Pv = /\\(\\)?/g,
                        Sv = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        El = /\w*$/,
                        Ov = /^[-+]0x[0-9a-f]+$/i,
                        Rv = /^0b[01]+$/i,
                        Av = /^\[object .+?Constructor\]$/,
                        Tv = /^0o[0-7]+$/i,
                        Cv = /^(?:0|[1-9]\d*)$/,
                        Dv = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        Qs = /($^)/,
                        Nv = /['\n\r\u2028\u2029\\]/g,
                        Ys = "\\ud800-\\udfff",
                        Il = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        Pl = "\\u2700-\\u27bf",
                        Sl = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        Ol = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        Rl = "\\ufe0e\\ufe0f",
                        Al = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        $v = "[" + Ys + "]",
                        Tl = "[" + Al + "]",
                        Xs = "[" + Il + "]",
                        Cl = "\\d+",
                        Uv = "[" + Pl + "]",
                        Dl = "[" + Sl + "]",
                        Nl = "[^" + Ys + Al + Cl + Pl + Sl + Ol + "]",
                        qa = "\\ud83c[\\udffb-\\udfff]",
                        jl = "[^" + Ys + "]",
                        $a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                        Ua = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                        Ai = "[" + Ol + "]",
                        Fl = "(?:" + Dl + "|" + Nl + ")",
                        Hv = "(?:" + Ai + "|" + Nl + ")",
                        Ml = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
                        Zl = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
                        zl = "(?:" + Xs + "|" + qa + ")?",
                        ql = "[" + Rl + "]?",
                        $l = ql + zl + "(?:\\u200d(?:" + [jl, $a, Ua].join("|") + ")" + ql + zl + ")*",
                        Gv = "(?:" + [Uv, $a, Ua].join("|") + ")" + $l,
                        Wv = "(?:" + [jl + Xs + "?", Xs, $a, Ua, $v].join("|") + ")",
                        Jv = RegExp("['\u2019]", "g"),
                        Qv = RegExp(Xs, "g"),
                        Ba = RegExp(qa + "(?=" + qa + ")|" + Wv + $l, "g"),
                        Yv = RegExp([Ai + "?" + Dl + "+" + Ml + "(?=" + [Tl, Ai, "$"].join("|") + ")", Hv + "+" + Zl + "(?=" + [Tl, Ai + Fl, "$"].join("|") + ")", Ai + "?" + Fl + "+" + Ml, Ai + "+" + Zl, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Cl, Gv].join("|"), "g"),
                        Xv = RegExp("[\\u200d" + Ys + Il + Rl + "]"),
                        e0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        t0 = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        r0 = -1,
                        Et = {};
                    Et[Ra] = Et[Aa] = Et[Ta] = Et[Ca] = Et[Da] = Et[Na] = Et[ja] = Et[La] = Et[Fa] = !0, Et[Oi] = Et[Vs] = Et[hs] = Et[os] = Et[Ri] = Et[as] = Et[Gs] = Et[Ws] = Et[fn] = Et[cs] = Et[jn] = Et[us] = Et[hn] = Et[ls] = Et[fs] = !1;
                    var bt = {};
                    bt[Oi] = bt[Vs] = bt[hs] = bt[Ri] = bt[os] = bt[as] = bt[Ra] = bt[Aa] = bt[Ta] = bt[Ca] = bt[Da] = bt[fn] = bt[cs] = bt[jn] = bt[us] = bt[hn] = bt[ls] = bt[Js] = bt[Na] = bt[ja] = bt[La] = bt[Fa] = !0, bt[Gs] = bt[Ws] = bt[fs] = !1;
                    var o0 = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        a0 = parseFloat,
                        c0 = parseInt,
                        Ul = "object" == typeof is && is && is.Object === Object && is,
                        u0 = "object" == typeof self && self && self.Object === Object && self,
                        _r = Ul || u0 || Function("return this")(),
                        Ha = t && !t.nodeType && t,
                        hi = Ha && d && !d.nodeType && d,
                        Bl = hi && hi.exports === Ha,
                        ka = Bl && Ul.process,
                        Qr = function() {
                            try {
                                return hi && hi.require && hi.require("util").types || ka && ka.binding && ka.binding("util")
                            } catch {}
                        }(),
                        Hl = Qr && Qr.isArrayBuffer,
                        kl = Qr && Qr.isDate,
                        Kl = Qr && Qr.isMap,
                        Vl = Qr && Qr.isRegExp,
                        Gl = Qr && Qr.isSet,
                        Wl = Qr && Qr.isTypedArray;

                    function qr(M, G, B) {
                        switch (B.length) {
                            case 0:
                                return M.call(G);
                            case 1:
                                return M.call(G, B[0]);
                            case 2:
                                return M.call(G, B[0], B[1]);
                            case 3:
                                return M.call(G, B[0], B[1], B[2])
                        }
                        return M.apply(G, B)
                    }

                    function l0(M, G, B, me) {
                        for (var Le = -1, nt = null == M ? 0 : M.length; ++Le < nt;) {
                            var cr = M[Le];
                            G(me, cr, B(cr), M)
                        }
                        return me
                    }

                    function Yr(M, G) {
                        for (var B = -1, me = null == M ? 0 : M.length; ++B < me && !1 !== G(M[B], B, M););
                        return M
                    }

                    function f0(M, G) {
                        for (var B = null == M ? 0 : M.length; B-- && !1 !== G(M[B], B, M););
                        return M
                    }

                    function Jl(M, G) {
                        for (var B = -1, me = null == M ? 0 : M.length; ++B < me;)
                            if (!G(M[B], B, M)) return !1;
                        return !0
                    }

                    function Xn(M, G) {
                        for (var B = -1, me = null == M ? 0 : M.length, Le = 0, nt = []; ++B < me;) {
                            var cr = M[B];
                            G(cr, B, M) && (nt[Le++] = cr)
                        }
                        return nt
                    }

                    function eo(M, G) {
                        return !(null == M || !M.length) && Ti(M, G, 0) > -1
                    }

                    function Ka(M, G, B) {
                        for (var me = -1, Le = null == M ? 0 : M.length; ++me < Le;)
                            if (B(G, M[me])) return !0;
                        return !1
                    }

                    function St(M, G) {
                        for (var B = -1, me = null == M ? 0 : M.length, Le = Array(me); ++B < me;) Le[B] = G(M[B], B, M);
                        return Le
                    }

                    function ei(M, G) {
                        for (var B = -1, me = G.length, Le = M.length; ++B < me;) M[Le + B] = G[B];
                        return M
                    }

                    function Va(M, G, B, me) {
                        var Le = -1,
                            nt = null == M ? 0 : M.length;
                        for (me && nt && (B = M[++Le]); ++Le < nt;) B = G(B, M[Le], Le, M);
                        return B
                    }

                    function h0(M, G, B, me) {
                        var Le = null == M ? 0 : M.length;
                        for (me && Le && (B = M[--Le]); Le--;) B = G(B, M[Le], Le, M);
                        return B
                    }

                    function Ga(M, G) {
                        for (var B = -1, me = null == M ? 0 : M.length; ++B < me;)
                            if (G(M[B], B, M)) return !0;
                        return !1
                    }
                    var d0 = Wa("length");

                    function Ql(M, G, B) {
                        var me;
                        return B(M, function(Le, nt, cr) {
                            if (G(Le, nt, cr)) return me = nt, !1
                        }), me
                    }

                    function to(M, G, B, me) {
                        for (var Le = M.length, nt = B + (me ? 1 : -1); me ? nt-- : ++nt < Le;)
                            if (G(M[nt], nt, M)) return nt;
                        return -1
                    }

                    function Ti(M, G, B) {
                        return G == G ? function O0(M, G, B) {
                            for (var me = B - 1, Le = M.length; ++me < Le;)
                                if (M[me] === G) return me;
                            return -1
                        }(M, G, B) : to(M, Yl, B)
                    }

                    function y0(M, G, B, me) {
                        for (var Le = B - 1, nt = M.length; ++Le < nt;)
                            if (me(M[Le], G)) return Le;
                        return -1
                    }

                    function Yl(M) {
                        return M != M
                    }

                    function Xl(M, G) {
                        var B = null == M ? 0 : M.length;
                        return B ? Qa(M, G) / B : NaN
                    }

                    function Wa(M) {
                        return function(G) {
                            return null == G ? r : G[M]
                        }
                    }

                    function Ja(M) {
                        return function(G) {
                            return null == M ? r : M[G]
                        }
                    }

                    function ef(M, G, B, me, Le) {
                        return Le(M, function(nt, cr, vt) {
                            B = me ? (me = !1, nt) : G(B, nt, cr, vt)
                        }), B
                    }

                    function Qa(M, G) {
                        for (var B, me = -1, Le = M.length; ++me < Le;) {
                            var nt = G(M[me]);
                            nt !== r && (B = B === r ? nt : B + nt)
                        }
                        return B
                    }

                    function Ya(M, G) {
                        for (var B = -1, me = Array(M); ++B < M;) me[B] = G(B);
                        return me
                    }

                    function tf(M) {
                        return M && M.slice(0, of (M) + 1).replace(Za, "")
                    }

                    function $r(M) {
                        return function(G) {
                            return M(G)
                        }
                    }

                    function Xa(M, G) {
                        return St(G, function(B) {
                            return M[B]
                        })
                    }

                    function ds(M, G) {
                        return M.has(G)
                    }

                    function rf(M, G) {
                        for (var B = -1, me = M.length; ++B < me && Ti(G, M[B], 0) > -1;);
                        return B
                    }

                    function nf(M, G) {
                        for (var B = M.length; B-- && Ti(G, M[B], 0) > -1;);
                        return B
                    }
                    var b0 = Ja({\
                            u00c0: "A",
                            \u00c1: "A",
                            \u00c2: "A",
                            \u00c3: "A",
                            \u00c4: "A",
                            \u00c5: "A",
                            \u00e0: "a",
                            \u00e1: "a",
                            \u00e2: "a",
                            \u00e3: "a",
                            \u00e4: "a",
                            \u00e5: "a",
                            \u00c7: "C",
                            \u00e7: "c",
                            \u00d0: "D",
                            \u00f0: "d",
                            \u00c8: "E",
                            \u00c9: "E",
                            \u00ca: "E",
                            \u00cb: "E",
                            \u00e8: "e",
                            \u00e9: "e",
                            \u00ea: "e",
                            \u00eb: "e",
                            \u00cc: "I",
                            \u00cd: "I",
                            \u00ce: "I",
                            \u00cf: "I",
                            \u00ec: "i",
                            \u00ed: "i",
                            \u00ee: "i",
                            \u00ef: "i",
                            \u00d1: "N",
                            \u00f1: "n",
                            \u00d2: "O",
                            \u00d3: "O",
                            \u00d4: "O",
                            \u00d5: "O",
                            \u00d6: "O",
                            \u00d8: "O",
                            \u00f2: "o",
                            \u00f3: "o",
                            \u00f4: "o",
                            \u00f5: "o",
                            \u00f6: "o",
                            \u00f8: "o",
                            \u00d9: "U",
                            \u00da: "U",
                            \u00db: "U",
                            \u00dc: "U",
                            \u00f9: "u",
                            \u00fa: "u",
                            \u00fb: "u",
                            \u00fc: "u",
                            \u00dd: "Y",
                            \u00fd: "y",
                            \u00ff: "y",
                            \u00c6: "Ae",
                            \u00e6: "ae",
                            \u00de: "Th",
                            \u00fe: "th",
                            \u00df: "ss",
                            \u0100: "A",
                            \u0102: "A",
                            \u0104: "A",
                            \u0101: "a",
                            \u0103: "a",
                            \u0105: "a",
                            \u0106: "C",
                            \u0108: "C",
                            \u010a: "C",
                            \u010c: "C",
                            \u0107: "c",
                            \u0109: "c",
                            \u010b: "c",
                            \u010d: "c",
                            \u010e: "D",
                            \u0110: "D",
                            \u010f: "d",
                            \u0111: "d",
                            \u0112: "E",
                            \u0114: "E",
                            \u0116: "E",
                            \u0118: "E",
                            \u011a: "E",
                            \u0113: "e",
                            \u0115: "e",
                            \u0117: "e",
                            \u0119: "e",
                            \u011b: "e",
                            \u011c: "G",
                            \u011e: "G",
                            \u0120: "G",
                            \u0122: "G",
                            \u011d: "g",
                            \u011f: "g",
                            \u0121: "g",
                            \u0123: "g",
                            \u0124: "H",
                            \u0126: "H",
                            \u0125: "h",
                            \u0127: "h",
                            \u0128: "I",
                            \u012a: "I",
                            \u012c: "I",
                            \u012e: "I",
                            \u0130: "I",
                            \u0129: "i",
                            \u012b: "i",
                            \u012d: "i",
                            \u012f: "i",
                            \u0131: "i",
                            \u0134: "J",
                            \u0135: "j",
                            \u0136: "K",
                            \u0137: "k",
                            \u0138: "k",
                            \u0139: "L",
                            \u013b: "L",
                            \u013d: "L",
                            \u013f: "L",
                            \u0141: "L",
                            \u013a: "l",
                            \u013c: "l",
                            \u013e: "l",
                            \u0140: "l",
                            \u0142: "l",
                            \u0143: "N",
                            \u0145: "N",
                            \u0147: "N",
                            \u014a: "N",
                            \u0144: "n",
                            \u0146: "n",
                            \u0148: "n",
                            \u014b: "n",
                            \u014c: "O",
                            \u014e: "O",
                            \u0150: "O",
                            \u014d: "o",
                            \u014f: "o",
                            \u0151: "o",
                            \u0154: "R",
                            \u0156: "R",
                            \u0158: "R",
                            \u0155: "r",
                            \u0157: "r",
                            \u0159: "r",
                            \u015a: "S",
                            \u015c: "S",
                            \u015e: "S",
                            \u0160: "S",
                            \u015b: "s",
                            \u015d: "s",
                            \u015f: "s",
                            \u0161: "s",
                            \u0162: "T",
                            \u0164: "T",
                            \u0166: "T",
                            \u0163: "t",
                            \u0165: "t",
                            \u0167: "t",
                            \u0168: "U",
                            \u016a: "U",
                            \u016c: "U",
                            \u016e: "U",
                            \u0170: "U",
                            \u0172: "U",
                            \u0169: "u",
                            \u016b: "u",
                            \u016d: "u",
                            \u016f: "u",
                            \u0171: "u",
                            \u0173: "u",
                            \u0174: "W",
                            \u0175: "w",
                            \u0176: "Y",
                            \u0177: "y",
                            \u0178: "Y",
                            \u0179: "Z",
                            \u017b: "Z",
                            \u017d: "Z",
                            \u017a: "z",
                            \u017c: "z",
                            \u017e: "z",
                            \u0132: "IJ",
                            \u0133: "ij",
                            \u0152: "Oe",
                            \u0153: "oe",
                            \u0149: "'n",
                            \u017f: "s"
                        }),
                        w0 = Ja({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function x0(M) {
                        return "\\" + o0[M]
                    }

                    function Ci(M) {
                        return Xv.test(M)
                    }

                    function ec(M) {
                        var G = -1,
                            B = Array(M.size);
                        return M.forEach(function(me, Le) {
                            B[++G] = [Le, me]
                        }), B
                    }

                    function sf(M, G) {
                        return function(B) {
                            return M(G(B))
                        }
                    }

                    function ti(M, G) {
                        for (var B = -1, me = M.length, Le = 0, nt = []; ++B < me;) {
                            var cr = M[B];
                            (cr === G || cr === j) && (M[B] = j, nt[Le++] = B)
                        }
                        return nt
                    }

                    function ro(M) {
                        var G = -1,
                            B = Array(M.size);
                        return M.forEach(function(me) {
                            B[++G] = me
                        }), B
                    }

                    function Di(M) {
                        return Ci(M) ? function T0(M) {
                            for (var G = Ba.lastIndex = 0; Ba.test(M);) ++G;
                            return G
                        }(M) : d0(M)
                    }

                    function dn(M) {
                        return Ci(M) ? function C0(M) {
                            return M.match(Ba) || []
                        }(M) : function p0(M) {
                            return M.split("")
                        }(M)
                    }

                    function of (M) {
                        for (var G = M.length; G-- && mv.test(M.charAt(G)););
                        return G
                    }
                    var A0 = Ja({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        Ni = function M(G) {
                            var e, B = (G = null == G ? _r : Ni.defaults(_r.Object(), G, Ni.pick(_r, t0))).Array,
                                me = G.Date,
                                Le = G.Error,
                                nt = G.Function,
                                cr = G.Math,
                                vt = G.Object,
                                tc = G.RegExp,
                                j0 = G.String,
                                Xr = G.TypeError,
                                no = B.prototype,
                                ji = vt.prototype,
                                io = G["__core-js_shared__"],
                                so = nt.prototype.toString,
                                lt = ji.hasOwnProperty,
                                F0 = 0,
                                af = (e = /[^.]+$/.exec(io && io.keys && io.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "",
                                oo = ji.toString,
                                M0 = so.call(vt),
                                Z0 = _r._,
                                z0 = tc("^" + so.call(lt).replace(Ma, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                ao = Bl ? G.Buffer : r,
                                ri = G.Symbol,
                                co = G.Uint8Array,
                                cf = ao ? ao.allocUnsafe : r,
                                uo = sf(vt.getPrototypeOf, vt),
                                uf = vt.create,
                                lf = ji.propertyIsEnumerable,
                                lo = no.splice,
                                ff = ri ? ri.isConcatSpreadable : r,
                                ps = ri ? ri.iterator : r,
                                di = ri ? ri.toStringTag : r,
                                fo = function() {
                                    try {
                                        var e = _i(vt, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                q0 = G.clearTimeout !== _r.clearTimeout && G.clearTimeout,
                                $0 = me && me.now !== _r.Date.now && me.now,
                                U0 = G.setTimeout !== _r.setTimeout && G.setTimeout,
                                ho = cr.ceil,
                                po = cr.floor,
                                rc = vt.getOwnPropertySymbols,
                                B0 = ao ? ao.isBuffer : r,
                                hf = G.isFinite,
                                H0 = no.join,
                                k0 = sf(vt.keys, vt),
                                ur = cr.max,
                                Pr = cr.min,
                                K0 = me.now,
                                V0 = G.parseInt,
                                df = cr.random,
                                G0 = no.reverse,
                                nc = _i(G, "DataView"),
                                gs = _i(G, "Map"),
                                ic = _i(G, "Promise"),
                                Li = _i(G, "Set"),
                                ys = _i(G, "WeakMap"),
                                vs = _i(vt, "create"),
                                go = ys && new ys,
                                Fi = {},
                                W0 = mi(nc),
                                J0 = mi(gs),
                                Q0 = mi(ic),
                                Y0 = mi(Li),
                                X0 = mi(ys),
                                yo = ri ? ri.prototype : r,
                                _s = yo ? yo.valueOf : r,
                                pf = yo ? yo.toString : r;

                            function m(e) {
                                if (qt(e) && !Me(e) && !(e instanceof He)) {
                                    if (e instanceof en) return e;
                                    if (lt.call(e, "__wrapped__")) return gh(e)
                                }
                                return new en(e)
                            }
                            var Mi = function() {
                                function e() {}
                                return function(n) {
                                    if (!Nt(n)) return {};
                                    if (uf) return uf(n);
                                    e.prototype = n;
                                    var o = new e;
                                    return e.prototype = r, o
                                }
                            }();

                            function vo() {}

                            function en(e, n) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r
                            }

                            function He(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = wn, this.__views__ = []
                            }

                            function pi(e) {
                                var n = -1,
                                    o = null == e ? 0 : e.length;
                                for (this.clear(); ++n < o;) {
                                    var p = e[n];
                                    this.set(p[0], p[1])
                                }
                            }

                            function Ln(e) {
                                var n = -1,
                                    o = null == e ? 0 : e.length;
                                for (this.clear(); ++n < o;) {
                                    var p = e[n];
                                    this.set(p[0], p[1])
                                }
                            }

                            function Fn(e) {
                                var n = -1,
                                    o = null == e ? 0 : e.length;
                                for (this.clear(); ++n < o;) {
                                    var p = e[n];
                                    this.set(p[0], p[1])
                                }
                            }

                            function gi(e) {
                                var n = -1,
                                    o = null == e ? 0 : e.length;
                                for (this.__data__ = new Fn; ++n < o;) this.add(e[n])
                            }

                            function pn(e) {
                                var n = this.__data__ = new Ln(e);
                                this.size = n.size
                            }

                            function gf(e, n) {
                                var o = Me(e),
                                    p = !o && bi(e),
                                    v = !o && !p && ai(e),
                                    x = !o && !p && !v && $i(e),
                                    A = o || p || v || x,
                                    D = A ? Ya(e.length, j0) : [],
                                    Z = D.length;
                                for (var Q in e)(n || lt.call(e, Q)) && (!A || !("length" == Q || v && ("offset" == Q || "parent" == Q) || x && ("buffer" == Q || "byteLength" == Q || "byteOffset" == Q) || qn(Q, Z))) && D.push(Q);
                                return D
                            }

                            function yf(e) {
                                var n = e.length;
                                return n ? e[gc(0, n - 1)] : r
                            }

                            function P_(e, n) {
                                return Co(Fr(e), yi(n, 0, e.length))
                            }

                            function S_(e) {
                                return Co(Fr(e))
                            }

                            function sc(e, n, o) {
                                (o !== r && !gn(e[n], o) || o === r && !(n in e)) && Mn(e, n, o)
                            }

                            function ms(e, n, o) {
                                var p = e[n];
                                (!lt.call(e, n) || !gn(p, o) || o === r && !(n in e)) && Mn(e, n, o)
                            }

                            function _o(e, n) {
                                for (var o = e.length; o--;)
                                    if (gn(e[o][0], n)) return o;
                                return -1
                            }

                            function O_(e, n, o, p) {
                                return ni(e, function(v, x, A) {
                                    n(p, v, o(v), A)
                                }), p
                            }

                            function vf(e, n) {
                                return e && En(n, pr(n), e)
                            }

                            function Mn(e, n, o) {
                                "__proto__" == n && fo ? fo(e, n, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: o,
                                    writable: !0
                                }) : e[n] = o
                            }

                            function oc(e, n) {
                                for (var o = -1, p = n.length, v = B(p), x = null == e; ++o < p;) v[o] = x ? r : qc(e, n[o]);
                                return v
                            }

                            function yi(e, n, o) {
                                return e == e && (o !== r && (e = e <= o ? e : o), n !== r && (e = e >= n ? e : n)), e
                            }

                            function tn(e, n, o, p, v, x) {
                                var A, D = 1 & n,
                                    Z = 2 & n,
                                    Q = 4 & n;
                                if (o && (A = v ? o(e, p, v, x) : o(e)), A !== r) return A;
                                if (!Nt(e)) return e;
                                var Y = Me(e);
                                if (Y) {
                                    if (A = function ym(e) {
                                            var n = e.length,
                                                o = new e.constructor(n);
                                            return n && "string" == typeof e[0] && lt.call(e, "index") && (o.index = e.index, o.input = e.input), o
                                        }(e), !D) return Fr(e, A)
                                } else {
                                    var ie = Sr(e),
                                        ge = ie == Ws || ie == _l;
                                    if (ai(e)) return $f(e, D);
                                    if (ie == jn || ie == Oi || ge && !v) {
                                        if (A = Z || ge ? {} : oh(e), !D) return Z ? function sm(e, n) {
                                            return En(e, ih(e), n)
                                        }(e, function R_(e, n) {
                                            return e && En(n, Zr(n), e)
                                        }(A, e)) : function im(e, n) {
                                            return En(e, Ac(e), n)
                                        }(e, vf(A, e))
                                    } else {
                                        if (!bt[ie]) return v ? e : {};
                                        A = function vm(e, n, o) {
                                            var p = e.constructor;
                                            switch (n) {
                                                case hs:
                                                    return xc(e);
                                                case os:
                                                case as:
                                                    return new p(+e);
                                                case Ri:
                                                    return function em(e, n) {
                                                        var o = n ? xc(e.buffer) : e.buffer;
                                                        return new e.constructor(o, e.byteOffset, e.byteLength)
                                                    }(e, o);
                                                case Ra:
                                                case Aa:
                                                case Ta:
                                                case Ca:
                                                case Da:
                                                case Na:
                                                case ja:
                                                case La:
                                                case Fa:
                                                    return Uf(e, o);
                                                case fn:
                                                    return new p;
                                                case cs:
                                                case ls:
                                                    return new p(e);
                                                case us:
                                                    return function tm(e) {
                                                        var n = new e.constructor(e.source, El.exec(e));
                                                        return n.lastIndex = e.lastIndex, n
                                                    }(e);
                                                case hn:
                                                    return new p;
                                                case Js:
                                                    return function rm(e) {
                                                        return _s ? vt(_s.call(e)) : {}
                                                    }(e)
                                            }
                                        }(e, ie, D)
                                    }
                                }
                                x || (x = new pn);
                                var xe = x.get(e);
                                if (xe) return xe;
                                x.set(e, A), Lh(e) ? e.forEach(function(Ce) {
                                    A.add(tn(Ce, n, o, Ce, e, x))
                                }) : Nh(e) && e.forEach(function(Ce, Be) {
                                    A.set(Be, tn(Ce, n, o, Be, e, x))
                                });
                                var $e = Y ? r : (Q ? Z ? Sc : Pc : Z ? Zr : pr)(e);
                                return Yr($e || e, function(Ce, Be) {
                                    $e && (Ce = e[Be = Ce]), ms(A, Be, tn(Ce, n, o, Be, e, x))
                                }), A
                            }

                            function _f(e, n, o) {
                                var p = o.length;
                                if (null == e) return !p;
                                for (e = vt(e); p--;) {
                                    var v = o[p],
                                        A = e[v];
                                    if (A === r && !(v in e) || !(0, n[v])(A)) return !1
                                }
                                return !0
                            }

                            function mf(e, n, o) {
                                if ("function" != typeof e) throw new Xr(g);
                                return Ss(function() {
                                    e.apply(r, o)
                                }, n)
                            }

                            function bs(e, n, o, p) {
                                var v = -1,
                                    x = eo,
                                    A = !0,
                                    D = e.length,
                                    Z = [],
                                    Q = n.length;
                                if (!D) return Z;
                                o && (n = St(n, $r(o))), p ? (x = Ka, A = !1) : n.length >= 200 && (x = ds, A = !1, n = new gi(n));
                                e: for (; ++v < D;) {
                                    var Y = e[v],
                                        ie = null == o ? Y : o(Y);
                                    if (Y = p || 0 !== Y ? Y : 0, A && ie == ie) {
                                        for (var ge = Q; ge--;)
                                            if (n[ge] === ie) continue e;
                                        Z.push(Y)
                                    } else x(n, ie, p) || Z.push(Y)
                                }
                                return Z
                            }
                            m.templateSettings = {
                                escape: dv,
                                evaluate: pv,
                                interpolate: xl,
                                variable: "",
                                imports: {
                                    _: m
                                }
                            }, (m.prototype = vo.prototype).constructor = m, (en.prototype = Mi(vo.prototype)).constructor = en, (He.prototype = Mi(vo.prototype)).constructor = He, pi.prototype.clear = function n_() {
                                this.__data__ = vs ? vs(null) : {}, this.size = 0
                            }, pi.prototype.delete = function i_(e) {
                                var n = this.has(e) && delete this.__data__[e];
                                return this.size -= n ? 1 : 0, n
                            }, pi.prototype.get = function s_(e) {
                                var n = this.__data__;
                                if (vs) {
                                    var o = n[e];
                                    return o === T ? r : o
                                }
                                return lt.call(n, e) ? n[e] : r
                            }, pi.prototype.has = function o_(e) {
                                var n = this.__data__;
                                return vs ? n[e] !== r : lt.call(n, e)
                            }, pi.prototype.set = function a_(e, n) {
                                var o = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, o[e] = vs && n === r ? T : n, this
                            }, Ln.prototype.clear = function c_() {
                                this.__data__ = [], this.size = 0
                            }, Ln.prototype.delete = function u_(e) {
                                var n = this.__data__,
                                    o = _o(n, e);
                                return !(o < 0 || (o == n.length - 1 ? n.pop() : lo.call(n, o, 1), --this.size, 0))
                            }, Ln.prototype.get = function l_(e) {
                                var n = this.__data__,
                                    o = _o(n, e);
                                return o < 0 ? r : n[o][1]
                            }, Ln.prototype.has = function f_(e) {
                                return _o(this.__data__, e) > -1
                            }, Ln.prototype.set = function h_(e, n) {
                                var o = this.__data__,
                                    p = _o(o, e);
                                return p < 0 ? (++this.size, o.push([e, n])) : o[p][1] = n, this
                            }, Fn.prototype.clear = function d_() {
                                this.size = 0, this.__data__ = {
                                    hash: new pi,
                                    map: new(gs || Ln),
                                    string: new pi
                                }
                            }, Fn.prototype.delete = function p_(e) {
                                var n = To(this, e).delete(e);
                                return this.size -= n ? 1 : 0, n
                            }, Fn.prototype.get = function g_(e) {
                                return To(this, e).get(e)
                            }, Fn.prototype.has = function y_(e) {
                                return To(this, e).has(e)
                            }, Fn.prototype.set = function v_(e, n) {
                                var o = To(this, e),
                                    p = o.size;
                                return o.set(e, n), this.size += o.size == p ? 0 : 1, this
                            }, gi.prototype.add = gi.prototype.push = function __(e) {
                                return this.__data__.set(e, T), this
                            }, gi.prototype.has = function m_(e) {
                                return this.__data__.has(e)
                            }, pn.prototype.clear = function b_() {
                                this.__data__ = new Ln, this.size = 0
                            }, pn.prototype.delete = function w_(e) {
                                var n = this.__data__,
                                    o = n.delete(e);
                                return this.size = n.size, o
                            }, pn.prototype.get = function x_(e) {
                                return this.__data__.get(e)
                            }, pn.prototype.has = function E_(e) {
                                return this.__data__.has(e)
                            }, pn.prototype.set = function I_(e, n) {
                                var o = this.__data__;
                                if (o instanceof Ln) {
                                    var p = o.__data__;
                                    if (!gs || p.length < 199) return p.push([e, n]), this.size = ++o.size, this;
                                    o = this.__data__ = new Fn(p)
                                }
                                return o.set(e, n), this.size = o.size, this
                            };
                            var ni = Kf(xn),
                                bf = Kf(cc, !0);

                            function T_(e, n) {
                                var o = !0;
                                return ni(e, function(p, v, x) {
                                    return o = !!n(p, v, x)
                                }), o
                            }

                            function mo(e, n, o) {
                                for (var p = -1, v = e.length; ++p < v;) {
                                    var x = e[p],
                                        A = n(x);
                                    if (null != A && (D === r ? A == A && !Br(A) : o(A, D))) var D = A,
                                        Z = x
                                }
                                return Z
                            }

                            function wf(e, n) {
                                var o = [];
                                return ni(e, function(p, v, x) {
                                    n(p, v, x) && o.push(p)
                                }), o
                            }

                            function mr(e, n, o, p, v) {
                                var x = -1,
                                    A = e.length;
                                for (o || (o = mm), v || (v = []); ++x < A;) {
                                    var D = e[x];
                                    n > 0 && o(D) ? n > 1 ? mr(D, n - 1, o, p, v) : ei(v, D) : p || (v[v.length] = D)
                                }
                                return v
                            }
                            var ac = Vf(),
                                xf = Vf(!0);

                            function xn(e, n) {
                                return e && ac(e, n, pr)
                            }

                            function cc(e, n) {
                                return e && xf(e, n, pr)
                            }

                            function bo(e, n) {
                                return Xn(n, function(o) {
                                    return $n(e[o])
                                })
                            }

                            function vi(e, n) {
                                for (var o = 0, p = (n = si(n, e)).length; null != e && o < p;) e = e[In(n[o++])];
                                return o && o == p ? e : r
                            }

                            function Ef(e, n, o) {
                                var p = n(e);
                                return Me(e) ? p : ei(p, o(e))
                            }

                            function Ar(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : di && di in vt(e) ? function dm(e) {
                                    var n = lt.call(e, di),
                                        o = e[di];
                                    try {
                                        e[di] = r;
                                        var p = !0
                                    } catch {}
                                    var v = oo.call(e);
                                    return p && (n ? e[di] = o : delete e[di]), v
                                }(e) : function Sm(e) {
                                    return oo.call(e)
                                }(e)
                            }

                            function uc(e, n) {
                                return e > n
                            }

                            function D_(e, n) {
                                return null != e && lt.call(e, n)
                            }

                            function N_(e, n) {
                                return null != e && n in vt(e)
                            }

                            function lc(e, n, o) {
                                for (var p = o ? Ka : eo, v = e[0].length, x = e.length, A = x, D = B(x), Z = 1 / 0, Q = []; A--;) {
                                    var Y = e[A];
                                    A && n && (Y = St(Y, $r(n))), Z = Pr(Y.length, Z), D[A] = !o && (n || v >= 120 && Y.length >= 120) ? new gi(A && Y) : r
                                }
                                Y = e[0];
                                var ie = -1,
                                    ge = D[0];
                                e: for (; ++ie < v && Q.length < Z;) {
                                    var xe = Y[ie],
                                        Te = n ? n(xe) : xe;
                                    if (xe = o || 0 !== xe ? xe : 0, !(ge ? ds(ge, Te) : p(Q, Te, o))) {
                                        for (A = x; --A;) {
                                            var $e = D[A];
                                            if (!($e ? ds($e, Te) : p(e[A], Te, o))) continue e
                                        }
                                        ge && ge.push(Te), Q.push(xe)
                                    }
                                }
                                return Q
                            }

                            function ws(e, n, o) {
                                var p = null == (e = lh(e, n = si(n, e))) ? e : e[In(nn(n))];
                                return null == p ? r : qr(p, e, o)
                            }

                            function If(e) {
                                return qt(e) && Ar(e) == Oi
                            }

                            function xs(e, n, o, p, v) {
                                return e === n || (null == e || null == n || !qt(e) && !qt(n) ? e != e && n != n : function Z_(e, n, o, p, v, x) {
                                    var A = Me(e),
                                        D = Me(n),
                                        Z = A ? Vs : Sr(e),
                                        Q = D ? Vs : Sr(n),
                                        Y = (Z = Z == Oi ? jn : Z) == jn,
                                        ie = (Q = Q == Oi ? jn : Q) == jn,
                                        ge = Z == Q;
                                    if (ge && ai(e)) {
                                        if (!ai(n)) return !1;
                                        A = !0, Y = !1
                                    }
                                    if (ge && !Y) return x || (x = new pn), A || $i(e) ? nh(e, n, o, p, v, x) : function fm(e, n, o, p, v, x, A) {
                                        switch (o) {
                                            case Ri:
                                                if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) return !1;
                                                e = e.buffer, n = n.buffer;
                                            case hs:
                                                return !(e.byteLength != n.byteLength || !x(new co(e), new co(n)));
                                            case os:
                                            case as:
                                            case cs:
                                                return gn(+e, +n);
                                            case Gs:
                                                return e.name == n.name && e.message == n.message;
                                            case us:
                                            case ls:
                                                return e == n + "";
                                            case fn:
                                                var D = ec;
                                            case hn:
                                                if (D || (D = ro), e.size != n.size && !(1 & p)) return !1;
                                                var Q = A.get(e);
                                                if (Q) return Q == n;
                                                p |= 2, A.set(e, n);
                                                var Y = nh(D(e), D(n), p, v, x, A);
                                                return A.delete(e), Y;
                                            case Js:
                                                if (_s) return _s.call(e) == _s.call(n)
                                        }
                                        return !1
                                    }(e, n, Z, o, p, v, x);
                                    if (!(1 & o)) {
                                        var xe = Y && lt.call(e, "__wrapped__"),
                                            Te = ie && lt.call(n, "__wrapped__");
                                        if (xe || Te) {
                                            var $e = xe ? e.value() : e,
                                                Ce = Te ? n.value() : n;
                                            return x || (x = new pn), v($e, Ce, o, p, x)
                                        }
                                    }
                                    return !!ge && (x || (x = new pn), function hm(e, n, o, p, v, x) {
                                        var A = 1 & o,
                                            D = Pc(e),
                                            Z = D.length;
                                        if (Z != Pc(n).length && !A) return !1;
                                        for (var ie = Z; ie--;) {
                                            var ge = D[ie];
                                            if (!(A ? ge in n : lt.call(n, ge))) return !1
                                        }
                                        var xe = x.get(e),
                                            Te = x.get(n);
                                        if (xe && Te) return xe == n && Te == e;
                                        var $e = !0;
                                        x.set(e, n), x.set(n, e);
                                        for (var Ce = A; ++ie < Z;) {
                                            var Be = e[ge = D[ie]],
                                                ke = n[ge];
                                            if (p) var Hr = A ? p(ke, Be, ge, n, e, x) : p(Be, ke, ge, e, n, x);
                                            if (!(Hr === r ? Be === ke || v(Be, ke, o, p, x) : Hr)) {
                                                $e = !1;
                                                break
                                            }
                                            Ce || (Ce = "constructor" == ge)
                                        }
                                        if ($e && !Ce) {
                                            var Cr = e.constructor,
                                                kr = n.constructor;
                                            Cr != kr && "constructor" in e && "constructor" in n && !("function" == typeof Cr && Cr instanceof Cr && "function" == typeof kr && kr instanceof kr) && ($e = !1)
                                        }
                                        return x.delete(e), x.delete(n), $e
                                    }(e, n, o, p, v, x))
                                }(e, n, o, p, xs, v))
                            }

                            function fc(e, n, o, p) {
                                var v = o.length,
                                    x = v,
                                    A = !p;
                                if (null == e) return !x;
                                for (e = vt(e); v--;) {
                                    var D = o[v];
                                    if (A && D[2] ? D[1] !== e[D[0]] : !(D[0] in e)) return !1
                                }
                                for (; ++v < x;) {
                                    var Z = (D = o[v])[0],
                                        Q = e[Z],
                                        Y = D[1];
                                    if (A && D[2]) {
                                        if (Q === r && !(Z in e)) return !1
                                    } else {
                                        var ie = new pn;
                                        if (p) var ge = p(Q, Y, Z, e, n, ie);
                                        if (!(ge === r ? xs(Y, Q, 3, p, ie) : ge)) return !1
                                    }
                                }
                                return !0
                            }

                            function Pf(e) {
                                return !(!Nt(e) || function wm(e) {
                                    return !!af && af in e
                                }(e)) && ($n(e) ? z0 : Av).test(mi(e))
                            }

                            function Sf(e) {
                                return "function" == typeof e ? e : null == e ? zr : "object" == typeof e ? Me(e) ? Af(e[0], e[1]) : Rf(e) : Gh(e)
                            }

                            function hc(e) {
                                if (!Ps(e)) return k0(e);
                                var n = [];
                                for (var o in vt(e)) lt.call(e, o) && "constructor" != o && n.push(o);
                                return n
                            }

                            function dc(e, n) {
                                return e < n
                            }

                            function Of(e, n) {
                                var o = -1,
                                    p = Mr(e) ? B(e.length) : [];
                                return ni(e, function(v, x, A) {
                                    p[++o] = n(v, x, A)
                                }), p
                            }

                            function Rf(e) {
                                var n = Rc(e);
                                return 1 == n.length && n[0][2] ? ch(n[0][0], n[0][1]) : function(o) {
                                    return o === e || fc(o, e, n)
                                }
                            }

                            function Af(e, n) {
                                return Tc(e) && ah(n) ? ch(In(e), n) : function(o) {
                                    var p = qc(o, e);
                                    return p === r && p === n ? $c(o, e) : xs(n, p, 3)
                                }
                            }

                            function wo(e, n, o, p, v) {
                                e !== n && ac(n, function(x, A) {
                                    if (v || (v = new pn), Nt(x)) ! function H_(e, n, o, p, v, x, A) {
                                        var D = Dc(e, o),
                                            Z = Dc(n, o),
                                            Q = A.get(Z);
                                        if (Q) sc(e, o, Q);
                                        else {
                                            var Y = x ? x(D, Z, o + "", e, n, A) : r,
                                                ie = Y === r;
                                            if (ie) {
                                                var ge = Me(Z),
                                                    xe = !ge && ai(Z),
                                                    Te = !ge && !xe && $i(Z);
                                                Y = Z, ge || xe || Te ? Me(D) ? Y = D : Gt(D) ? Y = Fr(D) : xe ? (ie = !1, Y = $f(Z, !0)) : Te ? (ie = !1, Y = Uf(Z, !0)) : Y = [] : Os(Z) || bi(Z) ? (Y = D, bi(D) ? Y = Zh(D) : (!Nt(D) || $n(D)) && (Y = oh(Z))) : ie = !1
                                            }
                                            ie && (A.set(Z, Y), v(Y, Z, p, x, A), A.delete(Z)), sc(e, o, Y)
                                        }
                                    }(e, n, A, o, wo, p, v);
                                    else {
                                        var D = p ? p(Dc(e, A), x, A + "", e, n, v) : r;
                                        D === r && (D = x), sc(e, A, D)
                                    }
                                }, Zr)
                            }

                            function Tf(e, n) {
                                var o = e.length;
                                if (o) return qn(n += n < 0 ? o : 0, o) ? e[n] : r
                            }

                            function Cf(e, n, o) {
                                n = n.length ? St(n, function(x) {
                                    return Me(x) ? function(A) {
                                        return vi(A, 1 === x.length ? x[0] : x)
                                    } : x
                                }) : [zr];
                                var p = -1;
                                return n = St(n, $r(Re())),
                                    function v0(M, G) {
                                        var B = M.length;
                                        for (M.sort(G); B--;) M[B] = M[B].value;
                                        return M
                                    }(Of(e, function(x, A, D) {
                                        return {
                                            criteria: St(n, function(Q) {
                                                return Q(x)
                                            }),
                                            index: ++p,
                                            value: x
                                        }
                                    }), function(x, A) {
                                        return function nm(e, n, o) {
                                            for (var p = -1, v = e.criteria, x = n.criteria, A = v.length, D = o.length; ++p < A;) {
                                                var Z = Bf(v[p], x[p]);
                                                if (Z) return p >= D ? Z : Z * ("desc" == o[p] ? -1 : 1)
                                            }
                                            return e.index - n.index
                                        }(x, A, o)
                                    })
                            }

                            function Df(e, n, o) {
                                for (var p = -1, v = n.length, x = {}; ++p < v;) {
                                    var A = n[p],
                                        D = vi(e, A);
                                    o(D, A) && Es(x, si(A, e), D)
                                }
                                return x
                            }

                            function pc(e, n, o, p) {
                                var v = p ? y0 : Ti,
                                    x = -1,
                                    A = n.length,
                                    D = e;
                                for (e === n && (n = Fr(n)), o && (D = St(e, $r(o))); ++x < A;)
                                    for (var Z = 0, Q = n[x], Y = o ? o(Q) : Q;
                                        (Z = v(D, Y, Z, p)) > -1;) D !== e && lo.call(D, Z, 1), lo.call(e, Z, 1);
                                return e
                            }

                            function Nf(e, n) {
                                for (var o = e ? n.length : 0, p = o - 1; o--;) {
                                    var v = n[o];
                                    if (o == p || v !== x) {
                                        var x = v;
                                        qn(v) ? lo.call(e, v, 1) : _c(e, v)
                                    }
                                }
                                return e
                            }

                            function gc(e, n) {
                                return e + po(df() * (n - e + 1))
                            }

                            function yc(e, n) {
                                var o = "";
                                if (!e || n < 1 || n > Yn) return o;
                                do {
                                    n % 2 && (o += e), (n = po(n / 2)) && (e += e)
                                } while (n);
                                return o
                            }

                            function Ue(e, n) {
                                return Nc(uh(e, n, zr), e + "")
                            }

                            function G_(e) {
                                return yf(Ui(e))
                            }

                            function W_(e, n) {
                                var o = Ui(e);
                                return Co(o, yi(n, 0, o.length))
                            }

                            function Es(e, n, o, p) {
                                if (!Nt(e)) return e;
                                for (var v = -1, x = (n = si(n, e)).length, A = x - 1, D = e; null != D && ++v < x;) {
                                    var Z = In(n[v]),
                                        Q = o;
                                    if ("__proto__" === Z || "constructor" === Z || "prototype" === Z) return e;
                                    if (v != A) {
                                        var Y = D[Z];
                                        (Q = p ? p(Y, Z, D) : r) === r && (Q = Nt(Y) ? Y : qn(n[v + 1]) ? [] : {})
                                    }
                                    ms(D, Z, Q), D = D[Z]
                                }
                                return e
                            }
                            var jf = go ? function(e, n) {
                                    return go.set(e, n), e
                                } : zr,
                                J_ = fo ? function(e, n) {
                                    return fo(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: Bc(n),
                                        writable: !0
                                    })
                                } : zr;

                            function Q_(e) {
                                return Co(Ui(e))
                            }

                            function rn(e, n, o) {
                                var p = -1,
                                    v = e.length;
                                n < 0 && (n = -n > v ? 0 : v + n), (o = o > v ? v : o) < 0 && (o += v), v = n > o ? 0 : o - n >>> 0, n >>>= 0;
                                for (var x = B(v); ++p < v;) x[p] = e[p + n];
                                return x
                            }

                            function Y_(e, n) {
                                var o;
                                return ni(e, function(p, v, x) {
                                    return !(o = n(p, v, x))
                                }), !!o
                            }

                            function xo(e, n, o) {
                                var p = 0,
                                    v = null == e ? p : e.length;
                                if ("number" == typeof n && n == n && v <= 2147483647) {
                                    for (; p < v;) {
                                        var x = p + v >>> 1,
                                            A = e[x];
                                        null !== A && !Br(A) && (o ? A <= n : A < n) ? p = x + 1 : v = x
                                    }
                                    return v
                                }
                                return vc(e, n, zr, o)
                            }

                            function vc(e, n, o, p) {
                                var v = 0,
                                    x = null == e ? 0 : e.length;
                                if (0 === x) return 0;
                                for (var A = (n = o(n)) != n, D = null === n, Z = Br(n), Q = n === r; v < x;) {
                                    var Y = po((v + x) / 2),
                                        ie = o(e[Y]),
                                        ge = ie !== r,
                                        xe = null === ie,
                                        Te = ie == ie,
                                        $e = Br(ie);
                                    if (A) var Ce = p || Te;
                                    else Ce = Q ? Te && (p || ge) : D ? Te && ge && (p || !xe) : Z ? Te && ge && !xe && (p || !$e) : !xe && !$e && (p ? ie <= n : ie < n);
                                    Ce ? v = Y + 1 : x = Y
                                }
                                return Pr(x, 4294967294)
                            }

                            function Lf(e, n) {
                                for (var o = -1, p = e.length, v = 0, x = []; ++o < p;) {
                                    var A = e[o],
                                        D = n ? n(A) : A;
                                    if (!o || !gn(D, Z)) {
                                        var Z = D;
                                        x[v++] = 0 === A ? 0 : A
                                    }
                                }
                                return x
                            }

                            function Ff(e) {
                                return "number" == typeof e ? e : Br(e) ? NaN : +e
                            }

                            function Ur(e) {
                                if ("string" == typeof e) return e;
                                if (Me(e)) return St(e, Ur) + "";
                                if (Br(e)) return pf ? pf.call(e) : "";
                                var n = e + "";
                                return "0" == n && 1 / e == -fi ? "-0" : n
                            }

                            function ii(e, n, o) {
                                var p = -1,
                                    v = eo,
                                    x = e.length,
                                    A = !0,
                                    D = [],
                                    Z = D;
                                if (o) A = !1, v = Ka;
                                else if (x >= 200) {
                                    var Q = n ? null : um(e);
                                    if (Q) return ro(Q);
                                    A = !1, v = ds, Z = new gi
                                } else Z = n ? [] : D;
                                e: for (; ++p < x;) {
                                    var Y = e[p],
                                        ie = n ? n(Y) : Y;
                                    if (Y = o || 0 !== Y ? Y : 0, A && ie == ie) {
                                        for (var ge = Z.length; ge--;)
                                            if (Z[ge] === ie) continue e;
                                        n && Z.push(ie), D.push(Y)
                                    } else v(Z, ie, o) || (Z !== D && Z.push(ie), D.push(Y))
                                }
                                return D
                            }

                            function _c(e, n) {
                                return null == (e = lh(e, n = si(n, e))) || delete e[In(nn(n))]
                            }

                            function Mf(e, n, o, p) {
                                return Es(e, n, o(vi(e, n)), p)
                            }

                            function Eo(e, n, o, p) {
                                for (var v = e.length, x = p ? v : -1;
                                    (p ? x-- : ++x < v) && n(e[x], x, e););
                                return o ? rn(e, p ? 0 : x, p ? x + 1 : v) : rn(e, p ? x + 1 : 0, p ? v : x)
                            }

                            function Zf(e, n) {
                                var o = e;
                                return o instanceof He && (o = o.value()), Va(n, function(p, v) {
                                    return v.func.apply(v.thisArg, ei([p], v.args))
                                }, o)
                            }

                            function mc(e, n, o) {
                                var p = e.length;
                                if (p < 2) return p ? ii(e[0]) : [];
                                for (var v = -1, x = B(p); ++v < p;)
                                    for (var A = e[v], D = -1; ++D < p;) D != v && (x[v] = bs(x[v] || A, e[D], n, o));
                                return ii(mr(x, 1), n, o)
                            }

                            function zf(e, n, o) {
                                for (var p = -1, v = e.length, x = n.length, A = {}; ++p < v;) o(A, e[p], p < x ? n[p] : r);
                                return A
                            }

                            function bc(e) {
                                return Gt(e) ? e : []
                            }

                            function wc(e) {
                                return "function" == typeof e ? e : zr
                            }

                            function si(e, n) {
                                return Me(e) ? e : Tc(e, n) ? [e] : ph(ot(e))
                            }
                            var X_ = Ue;

                            function oi(e, n, o) {
                                var p = e.length;
                                return o = o === r ? p : o, !n && o >= p ? e : rn(e, n, o)
                            }
                            var qf = q0 || function(e) {
                                return _r.clearTimeout(e)
                            };

                            function $f(e, n) {
                                if (n) return e.slice();
                                var o = e.length,
                                    p = cf ? cf(o) : new e.constructor(o);
                                return e.copy(p), p
                            }

                            function xc(e) {
                                var n = new e.constructor(e.byteLength);
                                return new co(n).set(new co(e)), n
                            }

                            function Uf(e, n) {
                                var o = n ? xc(e.buffer) : e.buffer;
                                return new e.constructor(o, e.byteOffset, e.length)
                            }

                            function Bf(e, n) {
                                if (e !== n) {
                                    var o = e !== r,
                                        p = null === e,
                                        v = e == e,
                                        x = Br(e),
                                        A = n !== r,
                                        D = null === n,
                                        Z = n == n,
                                        Q = Br(n);
                                    if (!D && !Q && !x && e > n || x && A && Z && !D && !Q || p && A && Z || !o && Z || !v) return 1;
                                    if (!p && !x && !Q && e < n || Q && o && v && !p && !x || D && o && v || !A && v || !Z) return -1
                                }
                                return 0
                            }

                            function Hf(e, n, o, p) {
                                for (var v = -1, x = e.length, A = o.length, D = -1, Z = n.length, Q = ur(x - A, 0), Y = B(Z + Q), ie = !p; ++D < Z;) Y[D] = n[D];
                                for (; ++v < A;)(ie || v < x) && (Y[o[v]] = e[v]);
                                for (; Q--;) Y[D++] = e[v++];
                                return Y
                            }

                            function kf(e, n, o, p) {
                                for (var v = -1, x = e.length, A = -1, D = o.length, Z = -1, Q = n.length, Y = ur(x - D, 0), ie = B(Y + Q), ge = !p; ++v < Y;) ie[v] = e[v];
                                for (var xe = v; ++Z < Q;) ie[xe + Z] = n[Z];
                                for (; ++A < D;)(ge || v < x) && (ie[xe + o[A]] = e[v++]);
                                return ie
                            }

                            function Fr(e, n) {
                                var o = -1,
                                    p = e.length;
                                for (n || (n = B(p)); ++o < p;) n[o] = e[o];
                                return n
                            }

                            function En(e, n, o, p) {
                                var v = !o;
                                o || (o = {});
                                for (var x = -1, A = n.length; ++x < A;) {
                                    var D = n[x],
                                        Z = p ? p(o[D], e[D], D, o, e) : r;
                                    Z === r && (Z = e[D]), v ? Mn(o, D, Z) : ms(o, D, Z)
                                }
                                return o
                            }

                            function Io(e, n) {
                                return function(o, p) {
                                    var v = Me(o) ? l0 : O_,
                                        x = n ? n() : {};
                                    return v(o, e, Re(p, 2), x)
                                }
                            }

                            function Zi(e) {
                                return Ue(function(n, o) {
                                    var p = -1,
                                        v = o.length,
                                        x = v > 1 ? o[v - 1] : r,
                                        A = v > 2 ? o[2] : r;
                                    for (x = e.length > 3 && "function" == typeof x ? (v--, x) : r, A && Tr(o[0], o[1], A) && (x = v < 3 ? r : x, v = 1), n = vt(n); ++p < v;) {
                                        var D = o[p];
                                        D && e(n, D, p, x)
                                    }
                                    return n
                                })
                            }

                            function Kf(e, n) {
                                return function(o, p) {
                                    if (null == o) return o;
                                    if (!Mr(o)) return e(o, p);
                                    for (var v = o.length, x = n ? v : -1, A = vt(o);
                                        (n ? x-- : ++x < v) && !1 !== p(A[x], x, A););
                                    return o
                                }
                            }

                            function Vf(e) {
                                return function(n, o, p) {
                                    for (var v = -1, x = vt(n), A = p(n), D = A.length; D--;) {
                                        var Z = A[e ? D : ++v];
                                        if (!1 === o(x[Z], Z, x)) break
                                    }
                                    return n
                                }
                            }

                            function Gf(e) {
                                return function(n) {
                                    var o = Ci(n = ot(n)) ? dn(n) : r,
                                        p = o ? o[0] : n.charAt(0),
                                        v = o ? oi(o, 1).join("") : n.slice(1);
                                    return p[e]() + v
                                }
                            }

                            function zi(e) {
                                return function(n) {
                                    return Va(Kh(kh(n).replace(Jv, "")), e, "")
                                }
                            }

                            function Is(e) {
                                return function() {
                                    var n = arguments;
                                    switch (n.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(n[0]);
                                        case 2:
                                            return new e(n[0], n[1]);
                                        case 3:
                                            return new e(n[0], n[1], n[2]);
                                        case 4:
                                            return new e(n[0], n[1], n[2], n[3]);
                                        case 5:
                                            return new e(n[0], n[1], n[2], n[3], n[4]);
                                        case 6:
                                            return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
                                        case 7:
                                            return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                                    }
                                    var o = Mi(e.prototype),
                                        p = e.apply(o, n);
                                    return Nt(p) ? p : o
                                }
                            }

                            function Wf(e) {
                                return function(n, o, p) {
                                    var v = vt(n);
                                    if (!Mr(n)) {
                                        var x = Re(o, 3);
                                        n = pr(n), o = function(D) {
                                            return x(v[D], D, v)
                                        }
                                    }
                                    var A = e(n, o, p);
                                    return A > -1 ? v[x ? n[A] : A] : r
                                }
                            }

                            function Jf(e) {
                                return zn(function(n) {
                                    var o = n.length,
                                        p = o,
                                        v = en.prototype.thru;
                                    for (e && n.reverse(); p--;) {
                                        var x = n[p];
                                        if ("function" != typeof x) throw new Xr(g);
                                        if (v && !A && "wrapper" == Ao(x)) var A = new en([], !0)
                                    }
                                    for (p = A ? p : o; ++p < o;) {
                                        var D = Ao(x = n[p]),
                                            Z = "wrapper" == D ? Oc(x) : r;
                                        A = Z && Cc(Z[0]) && 424 == Z[1] && !Z[4].length && 1 == Z[9] ? A[Ao(Z[0])].apply(A, Z[3]) : 1 == x.length && Cc(x) ? A[D]() : A.thru(x)
                                    }
                                    return function() {
                                        var Q = arguments,
                                            Y = Q[0];
                                        if (A && 1 == Q.length && Me(Y)) return A.plant(Y).value();
                                        for (var ie = 0, ge = o ? n[ie].apply(this, Q) : Y; ++ie < o;) ge = n[ie].call(this, ge);
                                        return ge
                                    }
                                })
                            }

                            function Po(e, n, o, p, v, x, A, D, Z, Q) {
                                var Y = 128 & n,
                                    ie = 1 & n,
                                    ge = 2 & n,
                                    xe = 24 & n,
                                    Te = 512 & n,
                                    $e = ge ? r : Is(e);
                                return function Ce() {
                                    for (var Be = arguments.length, ke = B(Be), Hr = Be; Hr--;) ke[Hr] = arguments[Hr];
                                    if (xe) var Cr = qi(Ce),
                                        kr = function m0(M, G) {
                                            for (var B = M.length, me = 0; B--;) M[B] === G && ++me;
                                            return me
                                        }(ke, Cr);
                                    if (p && (ke = Hf(ke, p, v, xe)), x && (ke = kf(ke, x, A, xe)), Be -= kr, xe && Be < Q) {
                                        var Wt = ti(ke, Cr);
                                        return Xf(e, n, Po, Ce.placeholder, o, ke, Wt, D, Z, Q - Be)
                                    }
                                    var yn = ie ? o : this,
                                        Bn = ge ? yn[e] : e;
                                    return Be = ke.length, D ? ke = function Om(e, n) {
                                        for (var o = e.length, p = Pr(n.length, o), v = Fr(e); p--;) {
                                            var x = n[p];
                                            e[p] = qn(x, o) ? v[x] : r
                                        }
                                        return e
                                    }(ke, D) : Te && Be > 1 && ke.reverse(), Y && Z < Be && (ke.length = Z), this && this !== _r && this instanceof Ce && (Bn = $e || Is(Bn)), Bn.apply(yn, ke)
                                }
                            }

                            function Qf(e, n) {
                                return function(o, p) {
                                    return function L_(e, n, o, p) {
                                        return xn(e, function(v, x, A) {
                                            n(p, o(v), x, A)
                                        }), p
                                    }(o, e, n(p), {})
                                }
                            }

                            function So(e, n) {
                                return function(o, p) {
                                    var v;
                                    if (o === r && p === r) return n;
                                    if (o !== r && (v = o), p !== r) {
                                        if (v === r) return p;
                                        "string" == typeof o || "string" == typeof p ? (o = Ur(o), p = Ur(p)) : (o = Ff(o), p = Ff(p)), v = e(o, p)
                                    }
                                    return v
                                }
                            }

                            function Ec(e) {
                                return zn(function(n) {
                                    return n = St(n, $r(Re())), Ue(function(o) {
                                        var p = this;
                                        return e(n, function(v) {
                                            return qr(v, p, o)
                                        })
                                    })
                                })
                            }

                            function Oo(e, n) {
                                var o = (n = n === r ? " " : Ur(n)).length;
                                if (o < 2) return o ? yc(n, e) : n;
                                var p = yc(n, ho(e / Di(n)));
                                return Ci(n) ? oi(dn(p), 0, e).join("") : p.slice(0, e)
                            }

                            function Yf(e) {
                                return function(n, o, p) {
                                    return p && "number" != typeof p && Tr(n, o, p) && (o = p = r), n = Un(n), o === r ? (o = n, n = 0) : o = Un(o),
                                        function V_(e, n, o, p) {
                                            for (var v = -1, x = ur(ho((n - e) / (o || 1)), 0), A = B(x); x--;) A[p ? x : ++v] = e, e += o;
                                            return A
                                        }(n, o, p = p === r ? n < o ? 1 : -1 : Un(p), e)
                                }
                            }

                            function Ro(e) {
                                return function(n, o) {
                                    return "string" == typeof n && "string" == typeof o || (n = sn(n), o = sn(o)), e(n, o)
                                }
                            }

                            function Xf(e, n, o, p, v, x, A, D, Z, Q) {
                                var Y = 8 & n;
                                n |= Y ? 32 : 64, 4 & (n &= ~(Y ? 64 : 32)) || (n &= -4);
                                var $e = [e, n, v, Y ? x : r, Y ? A : r, Y ? r : x, Y ? r : A, D, Z, Q],
                                    Ce = o.apply(r, $e);
                                return Cc(e) && fh(Ce, $e), Ce.placeholder = p, hh(Ce, e, n)
                            }

                            function Ic(e) {
                                var n = cr[e];
                                return function(o, p) {
                                    if (o = sn(o), (p = null == p ? 0 : Pr(Ze(p), 292)) && hf(o)) {
                                        var v = (ot(o) + "e").split("e");
                                        return +((v = (ot(n(v[0] + "e" + (+v[1] + p))) + "e").split("e"))[0] + "e" + (+v[1] - p))
                                    }
                                    return n(o)
                                }
                            }
                            var um = Li && 1 / ro(new Li([, -0]))[1] == fi ? function(e) {
                                return new Li(e)
                            } : Kc;

                            function eh(e) {
                                return function(n) {
                                    var o = Sr(n);
                                    return o == fn ? ec(n) : o == hn ? function S0(M) {
                                        var G = -1,
                                            B = Array(M.size);
                                        return M.forEach(function(me) {
                                            B[++G] = [me, me]
                                        }), B
                                    }(n) : function _0(M, G) {
                                        return St(G, function(B) {
                                            return [B, M[B]]
                                        })
                                    }(n, e(n))
                                }
                            }

                            function Zn(e, n, o, p, v, x, A, D) {
                                var Z = 2 & n;
                                if (!Z && "function" != typeof e) throw new Xr(g);
                                var Q = p ? p.length : 0;
                                if (Q || (n &= -97, p = v = r), A = A === r ? A : ur(Ze(A), 0), D = D === r ? D : Ze(D), Q -= v ? v.length : 0, 64 & n) {
                                    var Y = p,
                                        ie = v;
                                    p = v = r
                                }
                                var ge = Z ? r : Oc(e),
                                    xe = [e, n, o, p, v, Y, ie, x, A, D];
                                if (ge && function Im(e, n) {
                                        var o = e[1],
                                            p = n[1],
                                            v = o | p;
                                        if (!(v < 131) && !(128 == p && 8 == o || 128 == p && 256 == o && e[7].length <= n[8] || 384 == p && n[7].length <= n[8] && 8 == o)) return e;
                                        1 & p && (e[2] = n[2], v |= 1 & o ? 0 : 4);
                                        var D = n[3];
                                        if (D) {
                                            var Z = e[3];
                                            e[3] = Z ? Hf(Z, D, n[4]) : D, e[4] = Z ? ti(e[3], j) : n[4]
                                        }(D = n[5]) && (e[5] = (Z = e[5]) ? kf(Z, D, n[6]) : D, e[6] = Z ? ti(e[5], j) : n[6]), (D = n[7]) && (e[7] = D), 128 & p && (e[8] = null == e[8] ? n[8] : Pr(e[8], n[8])), null == e[9] && (e[9] = n[9]), e[0] = n[0], e[1] = v
                                    }(xe, ge), e = xe[0], n = xe[1], o = xe[2], p = xe[3], v = xe[4], !(D = xe[9] = xe[9] === r ? Z ? 0 : e.length : ur(xe[9] - Q, 0)) && 24 & n && (n &= -25), n && 1 != n) Te = 8 == n || 16 == n ? function am(e, n, o) {
                                    var p = Is(e);
                                    return function v() {
                                        for (var x = arguments.length, A = B(x), D = x, Z = qi(v); D--;) A[D] = arguments[D];
                                        var Q = x < 3 && A[0] !== Z && A[x - 1] !== Z ? [] : ti(A, Z);
                                        return (x -= Q.length) < o ? Xf(e, n, Po, v.placeholder, r, A, Q, r, r, o - x) : qr(this && this !== _r && this instanceof v ? p : e, this, A)
                                    }
                                }(e, n, D) : 32 != n && 33 != n || v.length ? Po.apply(r, xe) : function cm(e, n, o, p) {
                                    var v = 1 & n,
                                        x = Is(e);
                                    return function A() {
                                        for (var D = -1, Z = arguments.length, Q = -1, Y = p.length, ie = B(Y + Z), ge = this && this !== _r && this instanceof A ? x : e; ++Q < Y;) ie[Q] = p[Q];
                                        for (; Z--;) ie[Q++] = arguments[++D];
                                        return qr(ge, v ? o : this, ie)
                                    }
                                }(e, n, o, p);
                                else var Te = function om(e, n, o) {
                                    var p = 1 & n,
                                        v = Is(e);
                                    return function x() {
                                        return (this && this !== _r && this instanceof x ? v : e).apply(p ? o : this, arguments)
                                    }
                                }(e, n, o);
                                return hh((ge ? jf : fh)(Te, xe), e, n)
                            }

                            function th(e, n, o, p) {
                                return e === r || gn(e, ji[o]) && !lt.call(p, o) ? n : e
                            }

                            function rh(e, n, o, p, v, x) {
                                return Nt(e) && Nt(n) && (x.set(n, e), wo(e, n, r, rh, x), x.delete(n)), e
                            }

                            function lm(e) {
                                return Os(e) ? r : e
                            }

                            function nh(e, n, o, p, v, x) {
                                var A = 1 & o,
                                    D = e.length,
                                    Z = n.length;
                                if (D != Z && !(A && Z > D)) return !1;
                                var Q = x.get(e),
                                    Y = x.get(n);
                                if (Q && Y) return Q == n && Y == e;
                                var ie = -1,
                                    ge = !0,
                                    xe = 2 & o ? new gi : r;
                                for (x.set(e, n), x.set(n, e); ++ie < D;) {
                                    var Te = e[ie],
                                        $e = n[ie];
                                    if (p) var Ce = A ? p($e, Te, ie, n, e, x) : p(Te, $e, ie, e, n, x);
                                    if (Ce !== r) {
                                        if (Ce) continue;
                                        ge = !1;
                                        break
                                    }
                                    if (xe) {
                                        if (!Ga(n, function(Be, ke) {
                                                if (!ds(xe, ke) && (Te === Be || v(Te, Be, o, p, x))) return xe.push(ke)
                                            })) {
                                            ge = !1;
                                            break
                                        }
                                    } else if (Te !== $e && !v(Te, $e, o, p, x)) {
                                        ge = !1;
                                        break
                                    }
                                }
                                return x.delete(e), x.delete(n), ge
                            }

                            function zn(e) {
                                return Nc(uh(e, r, _h), e + "")
                            }

                            function Pc(e) {
                                return Ef(e, pr, Ac)
                            }

                            function Sc(e) {
                                return Ef(e, Zr, ih)
                            }
                            var Oc = go ? function(e) {
                                return go.get(e)
                            } : Kc;

                            function Ao(e) {
                                for (var n = e.name + "", o = Fi[n], p = lt.call(Fi, n) ? o.length : 0; p--;) {
                                    var v = o[p],
                                        x = v.func;
                                    if (null == x || x == e) return v.name
                                }
                                return n
                            }

                            function qi(e) {
                                return (lt.call(m, "placeholder") ? m : e).placeholder
                            }

                            function Re() {
                                var e = m.iteratee || Hc;
                                return e = e === Hc ? Sf : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function To(e, n) {
                                var o = e.__data__;
                                return function bm(e) {
                                    var n = typeof e;
                                    return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e
                                }(n) ? o["string" == typeof n ? "string" : "hash"] : o.map
                            }

                            function Rc(e) {
                                for (var n = pr(e), o = n.length; o--;) {
                                    var p = n[o],
                                        v = e[p];
                                    n[o] = [p, v, ah(v)]
                                }
                                return n
                            }

                            function _i(e, n) {
                                var o = function E0(M, G) {
                                    return null == M ? r : M[G]
                                }(e, n);
                                return Pf(o) ? o : r
                            }
                            var Ac = rc ? function(e) {
                                    return null == e ? [] : (e = vt(e), Xn(rc(e), function(n) {
                                        return lf.call(e, n)
                                    }))
                                } : Vc,
                                ih = rc ? function(e) {
                                    for (var n = []; e;) ei(n, Ac(e)), e = uo(e);
                                    return n
                                } : Vc,
                                Sr = Ar;

                            function sh(e, n, o) {
                                for (var p = -1, v = (n = si(n, e)).length, x = !1; ++p < v;) {
                                    var A = In(n[p]);
                                    if (!(x = null != e && o(e, A))) break;
                                    e = e[A]
                                }
                                return x || ++p != v ? x : !!(v = null == e ? 0 : e.length) && Mo(v) && qn(A, v) && (Me(e) || bi(e))
                            }

                            function oh(e) {
                                return "function" != typeof e.constructor || Ps(e) ? {} : Mi(uo(e))
                            }

                            function mm(e) {
                                return Me(e) || bi(e) || !!(ff && e && e[ff])
                            }

                            function qn(e, n) {
                                var o = typeof e;
                                return !!(n = n ? ? Yn) && ("number" == o || "symbol" != o && Cv.test(e)) && e > -1 && e % 1 == 0 && e < n
                            }

                            function Tr(e, n, o) {
                                if (!Nt(o)) return !1;
                                var p = typeof n;
                                return !!("number" == p ? Mr(o) && qn(n, o.length) : "string" == p && n in o) && gn(o[n], e)
                            }

                            function Tc(e, n) {
                                if (Me(e)) return !1;
                                var o = typeof e;
                                return !("number" != o && "symbol" != o && "boolean" != o && null != e && !Br(e)) || yv.test(e) || !gv.test(e) || null != n && e in vt(n)
                            }

                            function Cc(e) {
                                var n = Ao(e),
                                    o = m[n];
                                if ("function" != typeof o || !(n in He.prototype)) return !1;
                                if (e === o) return !0;
                                var p = Oc(o);
                                return !!p && e === p[0]
                            }(nc && Sr(new nc(new ArrayBuffer(1))) != Ri || gs && Sr(new gs) != fn || ic && Sr(ic.resolve()) != ml || Li && Sr(new Li) != hn || ys && Sr(new ys) != fs) && (Sr = function(e) {
                                var n = Ar(e),
                                    o = n == jn ? e.constructor : r,
                                    p = o ? mi(o) : "";
                                if (p) switch (p) {
                                    case W0:
                                        return Ri;
                                    case J0:
                                        return fn;
                                    case Q0:
                                        return ml;
                                    case Y0:
                                        return hn;
                                    case X0:
                                        return fs
                                }
                                return n
                            });
                            var xm = io ? $n : Gc;

                            function Ps(e) {
                                var n = e && e.constructor;
                                return e === ("function" == typeof n && n.prototype || ji)
                            }

                            function ah(e) {
                                return e == e && !Nt(e)
                            }

                            function ch(e, n) {
                                return function(o) {
                                    return null != o && o[e] === n && (n !== r || e in vt(o))
                                }
                            }

                            function uh(e, n, o) {
                                return n = ur(n === r ? e.length - 1 : n, 0),
                                    function() {
                                        for (var p = arguments, v = -1, x = ur(p.length - n, 0), A = B(x); ++v < x;) A[v] = p[n + v];
                                        v = -1;
                                        for (var D = B(n + 1); ++v < n;) D[v] = p[v];
                                        return D[n] = o(A), qr(e, this, D)
                                    }
                            }

                            function lh(e, n) {
                                return n.length < 2 ? e : vi(e, rn(n, 0, -1))
                            }

                            function Dc(e, n) {
                                if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
                            }
                            var fh = dh(jf),
                                Ss = U0 || function(e, n) {
                                    return _r.setTimeout(e, n)
                                },
                                Nc = dh(J_);

                            function hh(e, n, o) {
                                var p = n + "";
                                return Nc(e, function _m(e, n) {
                                    var o = n.length;
                                    if (!o) return e;
                                    var p = o - 1;
                                    return n[p] = (o > 1 ? "& " : "") + n[p], n = n.join(o > 2 ? ", " : " "), e.replace(bv, "{\n/* [wrapped with " + n + "] */\n")
                                }(p, function Rm(e, n) {
                                    return Yr(tv, function(o) {
                                        var p = "_." + o[0];
                                        n & o[1] && !eo(e, p) && e.push(p)
                                    }), e.sort()
                                }(function gm(e) {
                                    var n = e.match(wv);
                                    return n ? n[1].split(xv) : []
                                }(p), o)))
                            }

                            function dh(e) {
                                var n = 0,
                                    o = 0;
                                return function() {
                                    var p = K0(),
                                        v = 16 - (p - o);
                                    if (o = p, v > 0) {
                                        if (++n >= 800) return arguments[0]
                                    } else n = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function Co(e, n) {
                                var o = -1,
                                    p = e.length,
                                    v = p - 1;
                                for (n = n === r ? p : n; ++o < n;) {
                                    var x = gc(o, v),
                                        A = e[x];
                                    e[x] = e[o], e[o] = A
                                }
                                return e.length = n, e
                            }
                            var ph = function Em(e) {
                                var n = Lo(e, function(p) {
                                        return 500 === o.size && o.clear(), p
                                    }),
                                    o = n.cache;
                                return n
                            }(function(e) {
                                var n = [];
                                return 46 === e.charCodeAt(0) && n.push(""), e.replace(vv, function(o, p, v, x) {
                                    n.push(v ? x.replace(Pv, "$1") : p || o)
                                }), n
                            });

                            function In(e) {
                                if ("string" == typeof e || Br(e)) return e;
                                var n = e + "";
                                return "0" == n && 1 / e == -fi ? "-0" : n
                            }

                            function mi(e) {
                                if (null != e) {
                                    try {
                                        return so.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function gh(e) {
                                if (e instanceof He) return e.clone();
                                var n = new en(e.__wrapped__, e.__chain__);
                                return n.__actions__ = Fr(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n
                            }
                            var Dm = Ue(function(e, n) {
                                    return Gt(e) ? bs(e, mr(n, 1, Gt, !0)) : []
                                }),
                                Nm = Ue(function(e, n) {
                                    var o = nn(n);
                                    return Gt(o) && (o = r), Gt(e) ? bs(e, mr(n, 1, Gt, !0), Re(o, 2)) : []
                                }),
                                jm = Ue(function(e, n) {
                                    var o = nn(n);
                                    return Gt(o) && (o = r), Gt(e) ? bs(e, mr(n, 1, Gt, !0), r, o) : []
                                });

                            function yh(e, n, o) {
                                var p = null == e ? 0 : e.length;
                                if (!p) return -1;
                                var v = null == o ? 0 : Ze(o);
                                return v < 0 && (v = ur(p + v, 0)), to(e, Re(n, 3), v)
                            }

                            function vh(e, n, o) {
                                var p = null == e ? 0 : e.length;
                                if (!p) return -1;
                                var v = p - 1;
                                return o !== r && (v = Ze(o), v = o < 0 ? ur(p + v, 0) : Pr(v, p - 1)), to(e, Re(n, 3), v, !0)
                            }

                            function _h(e) {
                                return null != e && e.length ? mr(e, 1) : []
                            }

                            function mh(e) {
                                return e && e.length ? e[0] : r
                            }
                            var km = Ue(function(e) {
                                    var n = St(e, bc);
                                    return n.length && n[0] === e[0] ? lc(n) : []
                                }),
                                Km = Ue(function(e) {
                                    var n = nn(e),
                                        o = St(e, bc);
                                    return n === nn(o) ? n = r : o.pop(), o.length && o[0] === e[0] ? lc(o, Re(n, 2)) : []
                                }),
                                Vm = Ue(function(e) {
                                    var n = nn(e),
                                        o = St(e, bc);
                                    return (n = "function" == typeof n ? n : r) && o.pop(), o.length && o[0] === e[0] ? lc(o, r, n) : []
                                });

                            function nn(e) {
                                var n = null == e ? 0 : e.length;
                                return n ? e[n - 1] : r
                            }
                            var Qm = Ue(bh);

                            function bh(e, n) {
                                return e && e.length && n && n.length ? pc(e, n) : e
                            }
                            var e1 = zn(function(e, n) {
                                var o = null == e ? 0 : e.length,
                                    p = oc(e, n);
                                return Nf(e, St(n, function(v) {
                                    return qn(v, o) ? +v : v
                                }).sort(Bf)), p
                            });

                            function jc(e) {
                                return null == e ? e : G0.call(e)
                            }
                            var y1 = Ue(function(e) {
                                    return ii(mr(e, 1, Gt, !0))
                                }),
                                v1 = Ue(function(e) {
                                    var n = nn(e);
                                    return Gt(n) && (n = r), ii(mr(e, 1, Gt, !0), Re(n, 2))
                                }),
                                _1 = Ue(function(e) {
                                    var n = nn(e);
                                    return n = "function" == typeof n ? n : r, ii(mr(e, 1, Gt, !0), r, n)
                                });

                            function Lc(e) {
                                if (!e || !e.length) return [];
                                var n = 0;
                                return e = Xn(e, function(o) {
                                    if (Gt(o)) return n = ur(o.length, n), !0
                                }), Ya(n, function(o) {
                                    return St(e, Wa(o))
                                })
                            }

                            function wh(e, n) {
                                if (!e || !e.length) return [];
                                var o = Lc(e);
                                return null == n ? o : St(o, function(p) {
                                    return qr(n, r, p)
                                })
                            }
                            var x1 = Ue(function(e, n) {
                                    return Gt(e) ? bs(e, n) : []
                                }),
                                E1 = Ue(function(e) {
                                    return mc(Xn(e, Gt))
                                }),
                                I1 = Ue(function(e) {
                                    var n = nn(e);
                                    return Gt(n) && (n = r), mc(Xn(e, Gt), Re(n, 2))
                                }),
                                P1 = Ue(function(e) {
                                    var n = nn(e);
                                    return n = "function" == typeof n ? n : r, mc(Xn(e, Gt), r, n)
                                }),
                                S1 = Ue(Lc),
                                A1 = Ue(function(e) {
                                    var n = e.length,
                                        o = n > 1 ? e[n - 1] : r;
                                    return o = "function" == typeof o ? (e.pop(), o) : r, wh(e, o)
                                });

                            function xh(e) {
                                var n = m(e);
                                return n.__chain__ = !0, n
                            }

                            function Do(e, n) {
                                return n(e)
                            }
                            var C1 = zn(function(e) {
                                    var n = e.length,
                                        o = n ? e[0] : 0,
                                        p = this.__wrapped__,
                                        v = function(x) {
                                            return oc(x, e)
                                        };
                                    return !(n > 1 || this.__actions__.length) && p instanceof He && qn(o) ? ((p = p.slice(o, +o + (n ? 1 : 0))).__actions__.push({
                                        func: Do,
                                        args: [v],
                                        thisArg: r
                                    }), new en(p, this.__chain__).thru(function(x) {
                                        return n && !x.length && x.push(r), x
                                    })) : this.thru(v)
                                }),
                                z1 = Io(function(e, n, o) {
                                    lt.call(e, o) ? ++e[o] : Mn(e, o, 1)
                                }),
                                U1 = Wf(yh),
                                B1 = Wf(vh);

                            function Eh(e, n) {
                                return (Me(e) ? Yr : ni)(e, Re(n, 3))
                            }

                            function Ih(e, n) {
                                return (Me(e) ? f0 : bf)(e, Re(n, 3))
                            }
                            var V1 = Io(function(e, n, o) {
                                    lt.call(e, o) ? e[o].push(n) : Mn(e, o, [n])
                                }),
                                W1 = Ue(function(e, n, o) {
                                    var p = -1,
                                        v = "function" == typeof n,
                                        x = Mr(e) ? B(e.length) : [];
                                    return ni(e, function(A) {
                                        x[++p] = v ? qr(n, A, o) : ws(A, n, o)
                                    }), x
                                }),
                                J1 = Io(function(e, n, o) {
                                    Mn(e, o, n)
                                });

                            function No(e, n) {
                                return (Me(e) ? St : Of)(e, Re(n, 3))
                            }
                            var Y1 = Io(function(e, n, o) {
                                    e[o ? 0 : 1].push(n)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                ab = Ue(function(e, n) {
                                    if (null == e) return [];
                                    var o = n.length;
                                    return o > 1 && Tr(e, n[0], n[1]) ? n = [] : o > 2 && Tr(n[0], n[1], n[2]) && (n = [n[0]]), Cf(e, mr(n, 1), [])
                                }),
                                jo = $0 || function() {
                                    return _r.Date.now()
                                };

                            function Ph(e, n, o) {
                                return n = o ? r : n, Zn(e, 128, r, r, r, r, n = e && null == n ? e.length : n)
                            }

                            function Sh(e, n) {
                                var o;
                                if ("function" != typeof n) throw new Xr(g);
                                return e = Ze(e),
                                    function() {
                                        return --e > 0 && (o = n.apply(this, arguments)), e <= 1 && (n = r), o
                                    }
                            }
                            var Fc = Ue(function(e, n, o) {
                                    var p = 1;
                                    if (o.length) {
                                        var v = ti(o, qi(Fc));
                                        p |= 32
                                    }
                                    return Zn(e, p, n, o, v)
                                }),
                                Oh = Ue(function(e, n, o) {
                                    var p = 3;
                                    if (o.length) {
                                        var v = ti(o, qi(Oh));
                                        p |= 32
                                    }
                                    return Zn(n, p, e, o, v)
                                });

                            function Th(e, n, o) {
                                var p, v, x, A, D, Z, Q = 0,
                                    Y = !1,
                                    ie = !1,
                                    ge = !0;
                                if ("function" != typeof e) throw new Xr(g);

                                function xe(Wt) {
                                    var yn = p,
                                        Bn = v;
                                    return p = v = r, Q = Wt, A = e.apply(Bn, yn)
                                }

                                function Ce(Wt) {
                                    var yn = Wt - Z;
                                    return Z === r || yn >= n || yn < 0 || ie && Wt - Q >= x
                                }

                                function Be() {
                                    var Wt = jo();
                                    if (Ce(Wt)) return ke(Wt);
                                    D = Ss(Be, function $e(Wt) {
                                        var Wh = n - (Wt - Z);
                                        return ie ? Pr(Wh, x - (Wt - Q)) : Wh
                                    }(Wt))
                                }

                                function ke(Wt) {
                                    return D = r, ge && p ? xe(Wt) : (p = v = r, A)
                                }

                                function kr() {
                                    var Wt = jo(),
                                        yn = Ce(Wt);
                                    if (p = arguments, v = this, Z = Wt, yn) {
                                        if (D === r) return function Te(Wt) {
                                            return Q = Wt, D = Ss(Be, n), Y ? xe(Wt) : A
                                        }(Z);
                                        if (ie) return qf(D), D = Ss(Be, n), xe(Z)
                                    }
                                    return D === r && (D = Ss(Be, n)), A
                                }
                                return n = sn(n) || 0, Nt(o) && (Y = !!o.leading, x = (ie = "maxWait" in o) ? ur(sn(o.maxWait) || 0, n) : x, ge = "trailing" in o ? !!o.trailing : ge), kr.cancel = function Hr() {
                                    D !== r && qf(D), Q = 0, p = Z = v = D = r
                                }, kr.flush = function Cr() {
                                    return D === r ? A : ke(jo())
                                }, kr
                            }
                            var ub = Ue(function(e, n) {
                                    return mf(e, 1, n)
                                }),
                                lb = Ue(function(e, n, o) {
                                    return mf(e, sn(n) || 0, o)
                                });

                            function Lo(e, n) {
                                if ("function" != typeof e || null != n && "function" != typeof n) throw new Xr(g);
                                var o = function() {
                                    var p = arguments,
                                        v = n ? n.apply(this, p) : p[0],
                                        x = o.cache;
                                    if (x.has(v)) return x.get(v);
                                    var A = e.apply(this, p);
                                    return o.cache = x.set(v, A) || x, A
                                };
                                return o.cache = new(Lo.Cache || Fn), o
                            }

                            function Fo(e) {
                                if ("function" != typeof e) throw new Xr(g);
                                return function() {
                                    var n = arguments;
                                    switch (n.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, n[0]);
                                        case 2:
                                            return !e.call(this, n[0], n[1]);
                                        case 3:
                                            return !e.call(this, n[0], n[1], n[2])
                                    }
                                    return !e.apply(this, n)
                                }
                            }
                            Lo.Cache = Fn;
                            var db = X_(function(e, n) {
                                    var o = (n = 1 == n.length && Me(n[0]) ? St(n[0], $r(Re())) : St(mr(n, 1), $r(Re()))).length;
                                    return Ue(function(p) {
                                        for (var v = -1, x = Pr(p.length, o); ++v < x;) p[v] = n[v].call(this, p[v]);
                                        return qr(e, this, p)
                                    })
                                }),
                                Mc = Ue(function(e, n) {
                                    var o = ti(n, qi(Mc));
                                    return Zn(e, 32, r, n, o)
                                }),
                                Ch = Ue(function(e, n) {
                                    var o = ti(n, qi(Ch));
                                    return Zn(e, 64, r, n, o)
                                }),
                                pb = zn(function(e, n) {
                                    return Zn(e, 256, r, r, r, n)
                                });

                            function gn(e, n) {
                                return e === n || e != e && n != n
                            }
                            var Sb = Ro(uc),
                                Ob = Ro(function(e, n) {
                                    return e >= n
                                }),
                                bi = If(function() {
                                    return arguments
                                }()) ? If : function(e) {
                                    return qt(e) && lt.call(e, "callee") && !lf.call(e, "callee")
                                },
                                Me = B.isArray,
                                Rb = Hl ? $r(Hl) : function F_(e) {
                                    return qt(e) && Ar(e) == hs
                                };

                            function Mr(e) {
                                return null != e && Mo(e.length) && !$n(e)
                            }

                            function Gt(e) {
                                return qt(e) && Mr(e)
                            }
                            var ai = B0 || Gc,
                                Tb = kl ? $r(kl) : function M_(e) {
                                    return qt(e) && Ar(e) == as
                                };

                            function Zc(e) {
                                if (!qt(e)) return !1;
                                var n = Ar(e);
                                return n == Gs || "[object DOMException]" == n || "string" == typeof e.message && "string" == typeof e.name && !Os(e)
                            }

                            function $n(e) {
                                if (!Nt(e)) return !1;
                                var n = Ar(e);
                                return n == Ws || n == _l || "[object AsyncFunction]" == n || "[object Proxy]" == n
                            }

                            function Dh(e) {
                                return "number" == typeof e && e == Ze(e)
                            }

                            function Mo(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= Yn
                            }

                            function Nt(e) {
                                var n = typeof e;
                                return null != e && ("object" == n || "function" == n)
                            }

                            function qt(e) {
                                return null != e && "object" == typeof e
                            }
                            var Nh = Kl ? $r(Kl) : function z_(e) {
                                return qt(e) && Sr(e) == fn
                            };

                            function jh(e) {
                                return "number" == typeof e || qt(e) && Ar(e) == cs
                            }

                            function Os(e) {
                                if (!qt(e) || Ar(e) != jn) return !1;
                                var n = uo(e);
                                if (null === n) return !0;
                                var o = lt.call(n, "constructor") && n.constructor;
                                return "function" == typeof o && o instanceof o && so.call(o) == M0
                            }
                            var zc = Vl ? $r(Vl) : function q_(e) {
                                    return qt(e) && Ar(e) == us
                                },
                                Lh = Gl ? $r(Gl) : function $_(e) {
                                    return qt(e) && Sr(e) == hn
                                };

                            function Zo(e) {
                                return "string" == typeof e || !Me(e) && qt(e) && Ar(e) == ls
                            }

                            function Br(e) {
                                return "symbol" == typeof e || qt(e) && Ar(e) == Js
                            }
                            var $i = Wl ? $r(Wl) : function U_(e) {
                                    return qt(e) && Mo(e.length) && !!Et[Ar(e)]
                                },
                                Kb = Ro(dc),
                                Vb = Ro(function(e, n) {
                                    return e <= n
                                });

                            function Fh(e) {
                                if (!e) return [];
                                if (Mr(e)) return Zo(e) ? dn(e) : Fr(e);
                                if (ps && e[ps]) return function P0(M) {
                                    for (var G, B = []; !(G = M.next()).done;) B.push(G.value);
                                    return B
                                }(e[ps]());
                                var n = Sr(e);
                                return (n == fn ? ec : n == hn ? ro : Ui)(e)
                            }

                            function Un(e) {
                                return e ? (e = sn(e)) === fi || e === -fi ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function Ze(e) {
                                var n = Un(e),
                                    o = n % 1;
                                return n == n ? o ? n - o : n : 0
                            }

                            function Mh(e) {
                                return e ? yi(Ze(e), 0, wn) : 0
                            }

                            function sn(e) {
                                if ("number" == typeof e) return e;
                                if (Br(e)) return NaN;
                                if (Nt(e)) {
                                    var n = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = Nt(n) ? n + "" : n
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tf(e);
                                var o = Rv.test(e);
                                return o || Tv.test(e) ? c0(e.slice(2), o ? 2 : 8) : Ov.test(e) ? NaN : +e
                            }

                            function Zh(e) {
                                return En(e, Zr(e))
                            }

                            function ot(e) {
                                return null == e ? "" : Ur(e)
                            }
                            var Wb = Zi(function(e, n) {
                                    if (Ps(n) || Mr(n)) En(n, pr(n), e);
                                    else
                                        for (var o in n) lt.call(n, o) && ms(e, o, n[o])
                                }),
                                zh = Zi(function(e, n) {
                                    En(n, Zr(n), e)
                                }),
                                zo = Zi(function(e, n, o, p) {
                                    En(n, Zr(n), e, p)
                                }),
                                Jb = Zi(function(e, n, o, p) {
                                    En(n, pr(n), e, p)
                                }),
                                Qb = zn(oc),
                                Xb = Ue(function(e, n) {
                                    e = vt(e);
                                    var o = -1,
                                        p = n.length,
                                        v = p > 2 ? n[2] : r;
                                    for (v && Tr(n[0], n[1], v) && (p = 1); ++o < p;)
                                        for (var x = n[o], A = Zr(x), D = -1, Z = A.length; ++D < Z;) {
                                            var Q = A[D],
                                                Y = e[Q];
                                            (Y === r || gn(Y, ji[Q]) && !lt.call(e, Q)) && (e[Q] = x[Q])
                                        }
                                    return e
                                }),
                                ew = Ue(function(e) {
                                    return e.push(r, rh), qr(qh, r, e)
                                });

                            function qc(e, n, o) {
                                var p = null == e ? r : vi(e, n);
                                return p === r ? o : p
                            }

                            function $c(e, n) {
                                return null != e && sh(e, n, N_)
                            }
                            var lw = Qf(function(e, n, o) {
                                    null != n && "function" != typeof n.toString && (n = oo.call(n)), e[n] = o
                                }, Bc(zr)),
                                fw = Qf(function(e, n, o) {
                                    null != n && "function" != typeof n.toString && (n = oo.call(n)), lt.call(e, n) ? e[n].push(o) : e[n] = [o]
                                }, Re),
                                hw = Ue(ws);

                            function pr(e) {
                                return Mr(e) ? gf(e) : hc(e)
                            }

                            function Zr(e) {
                                return Mr(e) ? gf(e, !0) : function B_(e) {
                                    if (!Nt(e)) return function Pm(e) {
                                        var n = [];
                                        if (null != e)
                                            for (var o in vt(e)) n.push(o);
                                        return n
                                    }(e);
                                    var n = Ps(e),
                                        o = [];
                                    for (var p in e) "constructor" == p && (n || !lt.call(e, p)) || o.push(p);
                                    return o
                                }(e)
                            }
                            var gw = Zi(function(e, n, o) {
                                    wo(e, n, o)
                                }),
                                qh = Zi(function(e, n, o, p) {
                                    wo(e, n, o, p)
                                }),
                                yw = zn(function(e, n) {
                                    var o = {};
                                    if (null == e) return o;
                                    var p = !1;
                                    n = St(n, function(x) {
                                        return x = si(x, e), p || (p = x.length > 1), x
                                    }), En(e, Sc(e), o), p && (o = tn(o, 7, lm));
                                    for (var v = n.length; v--;) _c(o, n[v]);
                                    return o
                                }),
                                _w = zn(function(e, n) {
                                    return null == e ? {} : function k_(e, n) {
                                        return Df(e, n, function(o, p) {
                                            return $c(e, p)
                                        })
                                    }(e, n)
                                });

                            function $h(e, n) {
                                if (null == e) return {};
                                var o = St(Sc(e), function(p) {
                                    return [p]
                                });
                                return n = Re(n), Df(e, o, function(p, v) {
                                    return n(p, v[0])
                                })
                            }
                            var Uh = eh(pr),
                                Bh = eh(Zr);

                            function Ui(e) {
                                return null == e ? [] : Xa(e, pr(e))
                            }
                            var Tw = zi(function(e, n, o) {
                                return n = n.toLowerCase(), e + (o ? Hh(n) : n)
                            });

                            function Hh(e) {
                                return Uc(ot(e).toLowerCase())
                            }

                            function kh(e) {
                                return (e = ot(e)) && e.replace(Dv, b0).replace(Qv, "")
                            }
                            var jw = zi(function(e, n, o) {
                                    return e + (o ? "-" : "") + n.toLowerCase()
                                }),
                                Lw = zi(function(e, n, o) {
                                    return e + (o ? " " : "") + n.toLowerCase()
                                }),
                                Fw = Gf("toLowerCase"),
                                Bw = zi(function(e, n, o) {
                                    return e + (o ? "_" : "") + n.toLowerCase()
                                }),
                                kw = zi(function(e, n, o) {
                                    return e + (o ? " " : "") + Uc(n)
                                }),
                                tx = zi(function(e, n, o) {
                                    return e + (o ? " " : "") + n.toUpperCase()
                                }),
                                Uc = Gf("toUpperCase");

                            function Kh(e, n, o) {
                                return e = ot(e), (n = o ? r : n) === r ? function I0(M) {
                                    return e0.test(M)
                                }(e) ? function D0(M) {
                                    return M.match(Yv) || []
                                }(e) : function g0(M) {
                                    return M.match(Ev) || []
                                }(e) : e.match(n) || []
                            }
                            var Vh = Ue(function(e, n) {
                                    try {
                                        return qr(e, r, n)
                                    } catch (o) {
                                        return Zc(o) ? o : new Le(o)
                                    }
                                }),
                                rx = zn(function(e, n) {
                                    return Yr(n, function(o) {
                                        o = In(o), Mn(e, o, Fc(e[o], e))
                                    }), e
                                });

                            function Bc(e) {
                                return function() {
                                    return e
                                }
                            }
                            var ox = Jf(),
                                ax = Jf(!0);

                            function zr(e) {
                                return e
                            }

                            function Hc(e) {
                                return Sf("function" == typeof e ? e : tn(e, 1))
                            }
                            var lx = Ue(function(e, n) {
                                    return function(o) {
                                        return ws(o, e, n)
                                    }
                                }),
                                fx = Ue(function(e, n) {
                                    return function(o) {
                                        return ws(e, o, n)
                                    }
                                });

                            function kc(e, n, o) {
                                var p = pr(n),
                                    v = bo(n, p);
                                null == o && (!Nt(n) || !v.length && p.length) && (o = n, n = e, e = this, v = bo(n, pr(n)));
                                var x = !(Nt(o) && "chain" in o && !o.chain),
                                    A = $n(e);
                                return Yr(v, function(D) {
                                    var Z = n[D];
                                    e[D] = Z, A && (e.prototype[D] = function() {
                                        var Q = this.__chain__;
                                        if (x || Q) {
                                            var Y = e(this.__wrapped__);
                                            return (Y.__actions__ = Fr(this.__actions__)).push({
                                                func: Z,
                                                args: arguments,
                                                thisArg: e
                                            }), Y.__chain__ = Q, Y
                                        }
                                        return Z.apply(e, ei([this.value()], arguments))
                                    })
                                }), e
                            }

                            function Kc() {}
                            var px = Ec(St),
                                gx = Ec(Jl),
                                yx = Ec(Ga);

                            function Gh(e) {
                                return Tc(e) ? Wa(In(e)) : function K_(e) {
                                    return function(n) {
                                        return vi(n, e)
                                    }
                                }(e)
                            }
                            var _x = Yf(),
                                mx = Yf(!0);

                            function Vc() {
                                return []
                            }

                            function Gc() {
                                return !1
                            }
                            var Sx = So(function(e, n) {
                                    return e + n
                                }, 0),
                                Ox = Ic("ceil"),
                                Rx = So(function(e, n) {
                                    return e / n
                                }, 1),
                                Ax = Ic("floor"),
                                Fx = So(function(e, n) {
                                    return e * n
                                }, 1),
                                Mx = Ic("round"),
                                Zx = So(function(e, n) {
                                    return e - n
                                }, 0);
                            return m.after = function cb(e, n) {
                                if ("function" != typeof n) throw new Xr(g);
                                return e = Ze(e),
                                    function() {
                                        if (--e < 1) return n.apply(this, arguments)
                                    }
                            }, m.ary = Ph, m.assign = Wb, m.assignIn = zh, m.assignInWith = zo, m.assignWith = Jb, m.at = Qb, m.before = Sh, m.bind = Fc, m.bindAll = rx, m.bindKey = Oh, m.castArray = function bb() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return Me(e) ? e : [e]
                            }, m.chain = xh, m.chunk = function Am(e, n, o) {
                                n = (o ? Tr(e, n, o) : n === r) ? 1 : ur(Ze(n), 0);
                                var p = null == e ? 0 : e.length;
                                if (!p || n < 1) return [];
                                for (var v = 0, x = 0, A = B(ho(p / n)); v < p;) A[x++] = rn(e, v, v += n);
                                return A
                            }, m.compact = function Tm(e) {
                                for (var n = -1, o = null == e ? 0 : e.length, p = 0, v = []; ++n < o;) {
                                    var x = e[n];
                                    x && (v[p++] = x)
                                }
                                return v
                            }, m.concat = function Cm() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var n = B(e - 1), o = arguments[0], p = e; p--;) n[p - 1] = arguments[p];
                                return ei(Me(o) ? Fr(o) : [o], mr(n, 1))
                            }, m.cond = function nx(e) {
                                var n = null == e ? 0 : e.length,
                                    o = Re();
                                return e = n ? St(e, function(p) {
                                    if ("function" != typeof p[1]) throw new Xr(g);
                                    return [o(p[0]), p[1]]
                                }) : [], Ue(function(p) {
                                    for (var v = -1; ++v < n;) {
                                        var x = e[v];
                                        if (qr(x[0], this, p)) return qr(x[1], this, p)
                                    }
                                })
                            }, m.conforms = function ix(e) {
                                return function A_(e) {
                                    var n = pr(e);
                                    return function(o) {
                                        return _f(o, e, n)
                                    }
                                }(tn(e, 1))
                            }, m.constant = Bc, m.countBy = z1, m.create = function Yb(e, n) {
                                var o = Mi(e);
                                return null == n ? o : vf(o, n)
                            }, m.curry = function Rh(e, n, o) {
                                var p = Zn(e, 8, r, r, r, r, r, n = o ? r : n);
                                return p.placeholder = Rh.placeholder, p
                            }, m.curryRight = function Ah(e, n, o) {
                                var p = Zn(e, 16, r, r, r, r, r, n = o ? r : n);
                                return p.placeholder = Ah.placeholder, p
                            }, m.debounce = Th, m.defaults = Xb, m.defaultsDeep = ew, m.defer = ub, m.delay = lb, m.difference = Dm, m.differenceBy = Nm, m.differenceWith = jm, m.drop = function Lm(e, n, o) {
                                var p = null == e ? 0 : e.length;
                                return p ? rn(e, (n = o || n === r ? 1 : Ze(n)) < 0 ? 0 : n, p) : []
                            }, m.dropRight = function Fm(e, n, o) {
                                var p = null == e ? 0 : e.length;
                                return p ? rn(e, 0, (n = p - (n = o || n === r ? 1 : Ze(n))) < 0 ? 0 : n) : []
                            }, m.dropRightWhile = function Mm(e, n) {
                                return e && e.length ? Eo(e, Re(n, 3), !0, !0) : []
                            }, m.dropWhile = function Zm(e, n) {
                                return e && e.length ? Eo(e, Re(n, 3), !0) : []
                            }, m.fill = function zm(e, n, o, p) {
                                var v = null == e ? 0 : e.length;
                                return v ? (o && "number" != typeof o && Tr(e, n, o) && (o = 0, p = v), function C_(e, n, o, p) {
                                    var v = e.length;
                                    for ((o = Ze(o)) < 0 && (o = -o > v ? 0 : v + o), (p = p === r || p > v ? v : Ze(p)) < 0 && (p += v), p = o > p ? 0 : Mh(p); o < p;) e[o++] = n;
                                    return e
                                }(e, n, o, p)) : []
                            }, m.filter = function $1(e, n) {
                                return (Me(e) ? Xn : wf)(e, Re(n, 3))
                            }, m.flatMap = function H1(e, n) {
                                return mr(No(e, n), 1)
                            }, m.flatMapDeep = function k1(e, n) {
                                return mr(No(e, n), fi)
                            }, m.flatMapDepth = function K1(e, n, o) {
                                return o = o === r ? 1 : Ze(o), mr(No(e, n), o)
                            }, m.flatten = _h, m.flattenDeep = function qm(e) {
                                return null != e && e.length ? mr(e, fi) : []
                            }, m.flattenDepth = function $m(e, n) {
                                return null != e && e.length ? mr(e, n = n === r ? 1 : Ze(n)) : []
                            }, m.flip = function fb(e) {
                                return Zn(e, 512)
                            }, m.flow = ox, m.flowRight = ax, m.fromPairs = function Um(e) {
                                for (var n = -1, o = null == e ? 0 : e.length, p = {}; ++n < o;) {
                                    var v = e[n];
                                    p[v[0]] = v[1]
                                }
                                return p
                            }, m.functions = function aw(e) {
                                return null == e ? [] : bo(e, pr(e))
                            }, m.functionsIn = function cw(e) {
                                return null == e ? [] : bo(e, Zr(e))
                            }, m.groupBy = V1, m.initial = function Hm(e) {
                                return null != e && e.length ? rn(e, 0, -1) : []
                            }, m.intersection = km, m.intersectionBy = Km, m.intersectionWith = Vm, m.invert = lw, m.invertBy = fw, m.invokeMap = W1, m.iteratee = Hc, m.keyBy = J1, m.keys = pr, m.keysIn = Zr, m.map = No, m.mapKeys = function dw(e, n) {
                                var o = {};
                                return n = Re(n, 3), xn(e, function(p, v, x) {
                                    Mn(o, n(p, v, x), p)
                                }), o
                            }, m.mapValues = function pw(e, n) {
                                var o = {};
                                return n = Re(n, 3), xn(e, function(p, v, x) {
                                    Mn(o, v, n(p, v, x))
                                }), o
                            }, m.matches = function cx(e) {
                                return Rf(tn(e, 1))
                            }, m.matchesProperty = function ux(e, n) {
                                return Af(e, tn(n, 1))
                            }, m.memoize = Lo, m.merge = gw, m.mergeWith = qh, m.method = lx, m.methodOf = fx, m.mixin = kc, m.negate = Fo, m.nthArg = function dx(e) {
                                return e = Ze(e), Ue(function(n) {
                                    return Tf(n, e)
                                })
                            }, m.omit = yw, m.omitBy = function vw(e, n) {
                                return $h(e, Fo(Re(n)))
                            }, m.once = function hb(e) {
                                return Sh(2, e)
                            }, m.orderBy = function Q1(e, n, o, p) {
                                return null == e ? [] : (Me(n) || (n = null == n ? [] : [n]), Me(o = p ? r : o) || (o = null == o ? [] : [o]), Cf(e, n, o))
                            }, m.over = px, m.overArgs = db, m.overEvery = gx, m.overSome = yx, m.partial = Mc, m.partialRight = Ch, m.partition = Y1, m.pick = _w, m.pickBy = $h, m.property = Gh, m.propertyOf = function vx(e) {
                                return function(n) {
                                    return null == e ? r : vi(e, n)
                                }
                            }, m.pull = Qm, m.pullAll = bh, m.pullAllBy = function Ym(e, n, o) {
                                return e && e.length && n && n.length ? pc(e, n, Re(o, 2)) : e
                            }, m.pullAllWith = function Xm(e, n, o) {
                                return e && e.length && n && n.length ? pc(e, n, r, o) : e
                            }, m.pullAt = e1, m.range = _x, m.rangeRight = mx, m.rearg = pb, m.reject = function tb(e, n) {
                                return (Me(e) ? Xn : wf)(e, Fo(Re(n, 3)))
                            }, m.remove = function t1(e, n) {
                                var o = [];
                                if (!e || !e.length) return o;
                                var p = -1,
                                    v = [],
                                    x = e.length;
                                for (n = Re(n, 3); ++p < x;) {
                                    var A = e[p];
                                    n(A, p, e) && (o.push(A), v.push(p))
                                }
                                return Nf(e, v), o
                            }, m.rest = function gb(e, n) {
                                if ("function" != typeof e) throw new Xr(g);
                                return Ue(e, n = n === r ? n : Ze(n))
                            }, m.reverse = jc, m.sampleSize = function nb(e, n, o) {
                                return n = (o ? Tr(e, n, o) : n === r) ? 1 : Ze(n), (Me(e) ? P_ : W_)(e, n)
                            }, m.set = function bw(e, n, o) {
                                return null == e ? e : Es(e, n, o)
                            }, m.setWith = function ww(e, n, o, p) {
                                return p = "function" == typeof p ? p : r, null == e ? e : Es(e, n, o, p)
                            }, m.shuffle = function ib(e) {
                                return (Me(e) ? S_ : Q_)(e)
                            }, m.slice = function r1(e, n, o) {
                                var p = null == e ? 0 : e.length;
                                return p ? (o && "number" != typeof o && Tr(e, n, o) ? (n = 0, o = p) : (n = null == n ? 0 : Ze(n), o = o === r ? p : Ze(o)), rn(e, n, o)) : []
                            }, m.sortBy = ab, m.sortedUniq = function u1(e) {
                                return e && e.length ? Lf(e) : []
                            }, m.sortedUniqBy = function l1(e, n) {
                                return e && e.length ? Lf(e, Re(n, 2)) : []
                            }, m.split = function Hw(e, n, o) {
                                return o && "number" != typeof o && Tr(e, n, o) && (n = o = r), (o = o === r ? wn : o >>> 0) ? (e = ot(e)) && ("string" == typeof n || null != n && !zc(n)) && !(n = Ur(n)) && Ci(e) ? oi(dn(e), 0, o) : e.split(n, o) : []
                            }, m.spread = function yb(e, n) {
                                if ("function" != typeof e) throw new Xr(g);
                                return n = null == n ? 0 : ur(Ze(n), 0), Ue(function(o) {
                                    var p = o[n],
                                        v = oi(o, 0, n);
                                    return p && ei(v, p), qr(e, this, v)
                                })
                            }, m.tail = function f1(e) {
                                var n = null == e ? 0 : e.length;
                                return n ? rn(e, 1, n) : []
                            }, m.take = function h1(e, n, o) {
                                return e && e.length ? rn(e, 0, (n = o || n === r ? 1 : Ze(n)) < 0 ? 0 : n) : []
                            }, m.takeRight = function d1(e, n, o) {
                                var p = null == e ? 0 : e.length;
                                return p ? rn(e, (n = p - (n = o || n === r ? 1 : Ze(n))) < 0 ? 0 : n, p) : []
                            }, m.takeRightWhile = function p1(e, n) {
                                return e && e.length ? Eo(e, Re(n, 3), !1, !0) : []
                            }, m.takeWhile = function g1(e, n) {
                                return e && e.length ? Eo(e, Re(n, 3)) : []
                            }, m.tap = function T1(e, n) {
                                return n(e), e
                            }, m.throttle = function vb(e, n, o) {
                                var p = !0,
                                    v = !0;
                                if ("function" != typeof e) throw new Xr(g);
                                return Nt(o) && (p = "leading" in o ? !!o.leading : p, v = "trailing" in o ? !!o.trailing : v), Th(e, n, {
                                    leading: p,
                                    maxWait: n,
                                    trailing: v
                                })
                            }, m.thru = Do, m.toArray = Fh, m.toPairs = Uh, m.toPairsIn = Bh, m.toPath = function Ix(e) {
                                return Me(e) ? St(e, In) : Br(e) ? [e] : Fr(ph(ot(e)))
                            }, m.toPlainObject = Zh, m.transform = function xw(e, n, o) {
                                var p = Me(e),
                                    v = p || ai(e) || $i(e);
                                if (n = Re(n, 4), null == o) {
                                    var x = e && e.constructor;
                                    o = v ? p ? new x : [] : Nt(e) && $n(x) ? Mi(uo(e)) : {}
                                }
                                return (v ? Yr : xn)(e, function(A, D, Z) {
                                    return n(o, A, D, Z)
                                }), o
                            }, m.unary = function _b(e) {
                                return Ph(e, 1)
                            }, m.union = y1, m.unionBy = v1, m.unionWith = _1, m.uniq = function m1(e) {
                                return e && e.length ? ii(e) : []
                            }, m.uniqBy = function b1(e, n) {
                                return e && e.length ? ii(e, Re(n, 2)) : []
                            }, m.uniqWith = function w1(e, n) {
                                return n = "function" == typeof n ? n : r, e && e.length ? ii(e, r, n) : []
                            }, m.unset = function Ew(e, n) {
                                return null == e || _c(e, n)
                            }, m.unzip = Lc, m.unzipWith = wh, m.update = function Iw(e, n, o) {
                                return null == e ? e : Mf(e, n, wc(o))
                            }, m.updateWith = function Pw(e, n, o, p) {
                                return p = "function" == typeof p ? p : r, null == e ? e : Mf(e, n, wc(o), p)
                            }, m.values = Ui, m.valuesIn = function Sw(e) {
                                return null == e ? [] : Xa(e, Zr(e))
                            }, m.without = x1, m.words = Kh, m.wrap = function mb(e, n) {
                                return Mc(wc(n), e)
                            }, m.xor = E1, m.xorBy = I1, m.xorWith = P1, m.zip = S1, m.zipObject = function O1(e, n) {
                                return zf(e || [], n || [], ms)
                            }, m.zipObjectDeep = function R1(e, n) {
                                return zf(e || [], n || [], Es)
                            }, m.zipWith = A1, m.entries = Uh, m.entriesIn = Bh, m.extend = zh, m.extendWith = zo, kc(m, m), m.add = Sx, m.attempt = Vh, m.camelCase = Tw, m.capitalize = Hh, m.ceil = Ox, m.clamp = function Ow(e, n, o) {
                                return o === r && (o = n, n = r), o !== r && (o = (o = sn(o)) == o ? o : 0), n !== r && (n = (n = sn(n)) == n ? n : 0), yi(sn(e), n, o)
                            }, m.clone = function wb(e) {
                                return tn(e, 4)
                            }, m.cloneDeep = function Eb(e) {
                                return tn(e, 5)
                            }, m.cloneDeepWith = function Ib(e, n) {
                                return tn(e, 5, n = "function" == typeof n ? n : r)
                            }, m.cloneWith = function xb(e, n) {
                                return tn(e, 4, n = "function" == typeof n ? n : r)
                            }, m.conformsTo = function Pb(e, n) {
                                return null == n || _f(e, n, pr(n))
                            }, m.deburr = kh, m.defaultTo = function sx(e, n) {
                                return null == e || e != e ? n : e
                            }, m.divide = Rx, m.endsWith = function Cw(e, n, o) {
                                e = ot(e), n = Ur(n);
                                var p = e.length,
                                    v = o = o === r ? p : yi(Ze(o), 0, p);
                                return (o -= n.length) >= 0 && e.slice(o, v) == n
                            }, m.eq = gn, m.escape = function Dw(e) {
                                return (e = ot(e)) && hv.test(e) ? e.replace(wl, w0) : e
                            }, m.escapeRegExp = function Nw(e) {
                                return (e = ot(e)) && _v.test(e) ? e.replace(Ma, "\\$&") : e
                            }, m.every = function q1(e, n, o) {
                                var p = Me(e) ? Jl : T_;
                                return o && Tr(e, n, o) && (n = r), p(e, Re(n, 3))
                            }, m.find = U1, m.findIndex = yh, m.findKey = function tw(e, n) {
                                return Ql(e, Re(n, 3), xn)
                            }, m.findLast = B1, m.findLastIndex = vh, m.findLastKey = function rw(e, n) {
                                return Ql(e, Re(n, 3), cc)
                            }, m.floor = Ax, m.forEach = Eh, m.forEachRight = Ih, m.forIn = function nw(e, n) {
                                return null == e ? e : ac(e, Re(n, 3), Zr)
                            }, m.forInRight = function iw(e, n) {
                                return null == e ? e : xf(e, Re(n, 3), Zr)
                            }, m.forOwn = function sw(e, n) {
                                return e && xn(e, Re(n, 3))
                            }, m.forOwnRight = function ow(e, n) {
                                return e && cc(e, Re(n, 3))
                            }, m.get = qc, m.gt = Sb, m.gte = Ob, m.has = function uw(e, n) {
                                return null != e && sh(e, n, D_)
                            }, m.hasIn = $c, m.head = mh, m.identity = zr, m.includes = function G1(e, n, o, p) {
                                e = Mr(e) ? e : Ui(e), o = o && !p ? Ze(o) : 0;
                                var v = e.length;
                                return o < 0 && (o = ur(v + o, 0)), Zo(e) ? o <= v && e.indexOf(n, o) > -1 : !!v && Ti(e, n, o) > -1
                            }, m.indexOf = function Bm(e, n, o) {
                                var p = null == e ? 0 : e.length;
                                if (!p) return -1;
                                var v = null == o ? 0 : Ze(o);
                                return v < 0 && (v = ur(p + v, 0)), Ti(e, n, v)
                            }, m.inRange = function Rw(e, n, o) {
                                return n = Un(n), o === r ? (o = n, n = 0) : o = Un(o),
                                    function j_(e, n, o) {
                                        return e >= Pr(n, o) && e < ur(n, o)
                                    }(e = sn(e), n, o)
                            }, m.invoke = hw, m.isArguments = bi, m.isArray = Me, m.isArrayBuffer = Rb, m.isArrayLike = Mr, m.isArrayLikeObject = Gt, m.isBoolean = function Ab(e) {
                                return !0 === e || !1 === e || qt(e) && Ar(e) == os
                            }, m.isBuffer = ai, m.isDate = Tb, m.isElement = function Cb(e) {
                                return qt(e) && 1 === e.nodeType && !Os(e)
                            }, m.isEmpty = function Db(e) {
                                if (null == e) return !0;
                                if (Mr(e) && (Me(e) || "string" == typeof e || "function" == typeof e.splice || ai(e) || $i(e) || bi(e))) return !e.length;
                                var n = Sr(e);
                                if (n == fn || n == hn) return !e.size;
                                if (Ps(e)) return !hc(e).length;
                                for (var o in e)
                                    if (lt.call(e, o)) return !1;
                                return !0
                            }, m.isEqual = function Nb(e, n) {
                                return xs(e, n)
                            }, m.isEqualWith = function jb(e, n, o) {
                                var p = (o = "function" == typeof o ? o : r) ? o(e, n) : r;
                                return p === r ? xs(e, n, r, o) : !!p
                            }, m.isError = Zc, m.isFinite = function Lb(e) {
                                return "number" == typeof e && hf(e)
                            }, m.isFunction = $n, m.isInteger = Dh, m.isLength = Mo, m.isMap = Nh, m.isMatch = function Fb(e, n) {
                                return e === n || fc(e, n, Rc(n))
                            }, m.isMatchWith = function Mb(e, n, o) {
                                return o = "function" == typeof o ? o : r, fc(e, n, Rc(n), o)
                            }, m.isNaN = function Zb(e) {
                                return jh(e) && e != +e
                            }, m.isNative = function zb(e) {
                                if (xm(e)) throw new Le("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return Pf(e)
                            }, m.isNil = function $b(e) {
                                return null == e
                            }, m.isNull = function qb(e) {
                                return null === e
                            }, m.isNumber = jh, m.isObject = Nt, m.isObjectLike = qt, m.isPlainObject = Os, m.isRegExp = zc, m.isSafeInteger = function Ub(e) {
                                return Dh(e) && e >= -Yn && e <= Yn
                            }, m.isSet = Lh, m.isString = Zo, m.isSymbol = Br, m.isTypedArray = $i, m.isUndefined = function Bb(e) {
                                return e === r
                            }, m.isWeakMap = function Hb(e) {
                                return qt(e) && Sr(e) == fs
                            }, m.isWeakSet = function kb(e) {
                                return qt(e) && "[object WeakSet]" == Ar(e)
                            }, m.join = function Gm(e, n) {
                                return null == e ? "" : H0.call(e, n)
                            }, m.kebabCase = jw, m.last = nn, m.lastIndexOf = function Wm(e, n, o) {
                                var p = null == e ? 0 : e.length;
                                if (!p) return -1;
                                var v = p;
                                return o !== r && (v = (v = Ze(o)) < 0 ? ur(p + v, 0) : Pr(v, p - 1)), n == n ? function R0(M, G, B) {
                                    for (var me = B + 1; me--;)
                                        if (M[me] === G) return me;
                                    return me
                                }(e, n, v) : to(e, Yl, v, !0)
                            }, m.lowerCase = Lw, m.lowerFirst = Fw, m.lt = Kb, m.lte = Vb, m.max = function Tx(e) {
                                return e && e.length ? mo(e, zr, uc) : r
                            }, m.maxBy = function Cx(e, n) {
                                return e && e.length ? mo(e, Re(n, 2), uc) : r
                            }, m.mean = function Dx(e) {
                                return Xl(e, zr)
                            }, m.meanBy = function Nx(e, n) {
                                return Xl(e, Re(n, 2))
                            }, m.min = function jx(e) {
                                return e && e.length ? mo(e, zr, dc) : r
                            }, m.minBy = function Lx(e, n) {
                                return e && e.length ? mo(e, Re(n, 2), dc) : r
                            }, m.stubArray = Vc, m.stubFalse = Gc, m.stubObject = function bx() {
                                return {}
                            }, m.stubString = function wx() {
                                return ""
                            }, m.stubTrue = function xx() {
                                return !0
                            }, m.multiply = Fx, m.nth = function Jm(e, n) {
                                return e && e.length ? Tf(e, Ze(n)) : r
                            }, m.noConflict = function hx() {
                                return _r._ === this && (_r._ = Z0), this
                            }, m.noop = Kc, m.now = jo, m.pad = function Mw(e, n, o) {
                                e = ot(e);
                                var p = (n = Ze(n)) ? Di(e) : 0;
                                if (!n || p >= n) return e;
                                var v = (n - p) / 2;
                                return Oo(po(v), o) + e + Oo(ho(v), o)
                            }, m.padEnd = function Zw(e, n, o) {
                                e = ot(e);
                                var p = (n = Ze(n)) ? Di(e) : 0;
                                return n && p < n ? e + Oo(n - p, o) : e
                            }, m.padStart = function zw(e, n, o) {
                                e = ot(e);
                                var p = (n = Ze(n)) ? Di(e) : 0;
                                return n && p < n ? Oo(n - p, o) + e : e
                            }, m.parseInt = function qw(e, n, o) {
                                return o || null == n ? n = 0 : n && (n = +n), V0(ot(e).replace(Za, ""), n || 0)
                            }, m.random = function Aw(e, n, o) {
                                if (o && "boolean" != typeof o && Tr(e, n, o) && (n = o = r), o === r && ("boolean" == typeof n ? (o = n, n = r) : "boolean" == typeof e && (o = e, e = r)), e === r && n === r ? (e = 0, n = 1) : (e = Un(e), n === r ? (n = e, e = 0) : n = Un(n)), e > n) {
                                    var p = e;
                                    e = n, n = p
                                }
                                if (o || e % 1 || n % 1) {
                                    var v = df();
                                    return Pr(e + v * (n - e + a0("1e-" + ((v + "").length - 1))), n)
                                }
                                return gc(e, n)
                            }, m.reduce = function X1(e, n, o) {
                                var p = Me(e) ? Va : ef,
                                    v = arguments.length < 3;
                                return p(e, Re(n, 4), o, v, ni)
                            }, m.reduceRight = function eb(e, n, o) {
                                var p = Me(e) ? h0 : ef,
                                    v = arguments.length < 3;
                                return p(e, Re(n, 4), o, v, bf)
                            }, m.repeat = function $w(e, n, o) {
                                return n = (o ? Tr(e, n, o) : n === r) ? 1 : Ze(n), yc(ot(e), n)
                            }, m.replace = function Uw() {
                                var e = arguments,
                                    n = ot(e[0]);
                                return e.length < 3 ? n : n.replace(e[1], e[2])
                            }, m.result = function mw(e, n, o) {
                                var p = -1,
                                    v = (n = si(n, e)).length;
                                for (v || (v = 1, e = r); ++p < v;) {
                                    var x = null == e ? r : e[In(n[p])];
                                    x === r && (p = v, x = o), e = $n(x) ? x.call(e) : x
                                }
                                return e
                            }, m.round = Mx, m.runInContext = M, m.sample = function rb(e) {
                                return (Me(e) ? yf : G_)(e)
                            }, m.size = function sb(e) {
                                if (null == e) return 0;
                                if (Mr(e)) return Zo(e) ? Di(e) : e.length;
                                var n = Sr(e);
                                return n == fn || n == hn ? e.size : hc(e).length
                            }, m.snakeCase = Bw, m.some = function ob(e, n, o) {
                                var p = Me(e) ? Ga : Y_;
                                return o && Tr(e, n, o) && (n = r), p(e, Re(n, 3))
                            }, m.sortedIndex = function n1(e, n) {
                                return xo(e, n)
                            }, m.sortedIndexBy = function i1(e, n, o) {
                                return vc(e, n, Re(o, 2))
                            }, m.sortedIndexOf = function s1(e, n) {
                                var o = null == e ? 0 : e.length;
                                if (o) {
                                    var p = xo(e, n);
                                    if (p < o && gn(e[p], n)) return p
                                }
                                return -1
                            }, m.sortedLastIndex = function o1(e, n) {
                                return xo(e, n, !0)
                            }, m.sortedLastIndexBy = function a1(e, n, o) {
                                return vc(e, n, Re(o, 2), !0)
                            }, m.sortedLastIndexOf = function c1(e, n) {
                                if (null != e && e.length) {
                                    var p = xo(e, n, !0) - 1;
                                    if (gn(e[p], n)) return p
                                }
                                return -1
                            }, m.startCase = kw, m.startsWith = function Kw(e, n, o) {
                                return e = ot(e), o = null == o ? 0 : yi(Ze(o), 0, e.length), n = Ur(n), e.slice(o, o + n.length) == n
                            }, m.subtract = Zx, m.sum = function zx(e) {
                                return e && e.length ? Qa(e, zr) : 0
                            }, m.sumBy = function qx(e, n) {
                                return e && e.length ? Qa(e, Re(n, 2)) : 0
                            }, m.template = function Vw(e, n, o) {
                                var p = m.templateSettings;
                                o && Tr(e, n, o) && (n = r), e = ot(e), n = zo({}, n, p, th);
                                var D, Z, v = zo({}, n.imports, p.imports, th),
                                    x = pr(v),
                                    A = Xa(v, x),
                                    Q = 0,
                                    Y = n.interpolate || Qs,
                                    ie = "__p += '",
                                    ge = tc((n.escape || Qs).source + "|" + Y.source + "|" + (Y === xl ? Sv : Qs).source + "|" + (n.evaluate || Qs).source + "|$", "g"),
                                    xe = "//# sourceURL=" + (lt.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++r0 + "]") + "\n";
                                e.replace(ge, function(Ce, Be, ke, Hr, Cr, kr) {
                                    return ke || (ke = Hr), ie += e.slice(Q, kr).replace(Nv, x0), Be && (D = !0, ie += "' +\n__e(" + Be + ") +\n'"), Cr && (Z = !0, ie += "';\n" + Cr + ";\n__p += '"), ke && (ie += "' +\n((__t = (" + ke + ")) == null ? '' : __t) +\n'"), Q = kr + Ce.length, Ce
                                }), ie += "';\n";
                                var Te = lt.call(n, "variable") && n.variable;
                                if (Te) {
                                    if (Iv.test(Te)) throw new Le("Invalid `variable` option passed into `_.template`")
                                } else ie = "with (obj) {\n" + ie + "\n}\n";
                                ie = (Z ? ie.replace(cv, "") : ie).replace(uv, "$1").replace(lv, "$1;"), ie = "function(" + (Te || "obj") + ") {\n" + (Te ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (Z ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + ie + "return __p\n}";
                                var $e = Vh(function() {
                                    return nt(x, xe + "return " + ie).apply(r, A)
                                });
                                if ($e.source = ie, Zc($e)) throw $e;
                                return $e
                            }, m.times = function Ex(e, n) {
                                if ((e = Ze(e)) < 1 || e > Yn) return [];
                                var o = wn,
                                    p = Pr(e, wn);
                                n = Re(n), e -= wn;
                                for (var v = Ya(p, n); ++o < e;) n(o);
                                return v
                            }, m.toFinite = Un, m.toInteger = Ze, m.toLength = Mh, m.toLower = function Gw(e) {
                                return ot(e).toLowerCase()
                            }, m.toNumber = sn, m.toSafeInteger = function Gb(e) {
                                return e ? yi(Ze(e), -Yn, Yn) : 0 === e ? e : 0
                            }, m.toString = ot, m.toUpper = function Ww(e) {
                                return ot(e).toUpperCase()
                            }, m.trim = function Jw(e, n, o) {
                                if ((e = ot(e)) && (o || n === r)) return tf(e);
                                if (!e || !(n = Ur(n))) return e;
                                var p = dn(e),
                                    v = dn(n);
                                return oi(p, rf(p, v), nf(p, v) + 1).join("")
                            }, m.trimEnd = function Qw(e, n, o) {
                                if ((e = ot(e)) && (o || n === r)) return e.slice(0, of (e) + 1);
                                if (!e || !(n = Ur(n))) return e;
                                var p = dn(e);
                                return oi(p, 0, nf(p, dn(n)) + 1).join("")
                            }, m.trimStart = function Yw(e, n, o) {
                                if ((e = ot(e)) && (o || n === r)) return e.replace(Za, "");
                                if (!e || !(n = Ur(n))) return e;
                                var p = dn(e);
                                return oi(p, rf(p, dn(n))).join("")
                            }, m.truncate = function Xw(e, n) {
                                var o = 30,
                                    p = "...";
                                if (Nt(n)) {
                                    var v = "separator" in n ? n.separator : v;
                                    o = "length" in n ? Ze(n.length) : o, p = "omission" in n ? Ur(n.omission) : p
                                }
                                var x = (e = ot(e)).length;
                                if (Ci(e)) {
                                    var A = dn(e);
                                    x = A.length
                                }
                                if (o >= x) return e;
                                var D = o - Di(p);
                                if (D < 1) return p;
                                var Z = A ? oi(A, 0, D).join("") : e.slice(0, D);
                                if (v === r) return Z + p;
                                if (A && (D += Z.length - D), zc(v)) {
                                    if (e.slice(D).search(v)) {
                                        var Q, Y = Z;
                                        for (v.global || (v = tc(v.source, ot(El.exec(v)) + "g")), v.lastIndex = 0; Q = v.exec(Y);) var ie = Q.index;
                                        Z = Z.slice(0, ie === r ? D : ie)
                                    }
                                } else if (e.indexOf(Ur(v), D) != D) {
                                    var ge = Z.lastIndexOf(v);
                                    ge > -1 && (Z = Z.slice(0, ge))
                                }
                                return Z + p
                            }, m.unescape = function ex(e) {
                                return (e = ot(e)) && fv.test(e) ? e.replace(bl, A0) : e
                            }, m.uniqueId = function Px(e) {
                                var n = ++F0;
                                return ot(e) + n
                            }, m.upperCase = tx, m.upperFirst = Uc, m.each = Eh, m.eachRight = Ih, m.first = mh, kc(m, function() {
                                var e = {};
                                return xn(m, function(n, o) {
                                    lt.call(m.prototype, o) || (e[o] = n)
                                }), e
                            }(), {
                                chain: !1
                            }), m.VERSION = "4.17.21", Yr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                m[e].placeholder = m
                            }), Yr(["drop", "take"], function(e, n) {
                                He.prototype[e] = function(o) {
                                    o = o === r ? 1 : ur(Ze(o), 0);
                                    var p = this.__filtered__ && !n ? new He(this) : this.clone();
                                    return p.__filtered__ ? p.__takeCount__ = Pr(o, p.__takeCount__) : p.__views__.push({
                                        size: Pr(o, wn),
                                        type: e + (p.__dir__ < 0 ? "Right" : "")
                                    }), p
                                }, He.prototype[e + "Right"] = function(o) {
                                    return this.reverse()[e](o).reverse()
                                }
                            }), Yr(["filter", "map", "takeWhile"], function(e, n) {
                                var o = n + 1,
                                    p = 1 == o || 3 == o;
                                He.prototype[e] = function(v) {
                                    var x = this.clone();
                                    return x.__iteratees__.push({
                                        iteratee: Re(v, 3),
                                        type: o
                                    }), x.__filtered__ = x.__filtered__ || p, x
                                }
                            }), Yr(["head", "last"], function(e, n) {
                                var o = "take" + (n ? "Right" : "");
                                He.prototype[e] = function() {
                                    return this[o](1).value()[0]
                                }
                            }), Yr(["initial", "tail"], function(e, n) {
                                var o = "drop" + (n ? "" : "Right");
                                He.prototype[e] = function() {
                                    return this.__filtered__ ? new He(this) : this[o](1)
                                }
                            }), He.prototype.compact = function() {
                                return this.filter(zr)
                            }, He.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, He.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, He.prototype.invokeMap = Ue(function(e, n) {
                                return "function" == typeof e ? new He(this) : this.map(function(o) {
                                    return ws(o, e, n)
                                })
                            }), He.prototype.reject = function(e) {
                                return this.filter(Fo(Re(e)))
                            }, He.prototype.slice = function(e, n) {
                                e = Ze(e);
                                var o = this;
                                return o.__filtered__ && (e > 0 || n < 0) ? new He(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), n !== r && (o = (n = Ze(n)) < 0 ? o.dropRight(-n) : o.take(n - e)), o)
                            }, He.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, He.prototype.toArray = function() {
                                return this.take(wn)
                            }, xn(He.prototype, function(e, n) {
                                var o = /^(?:filter|find|map|reject)|While$/.test(n),
                                    p = /^(?:head|last)$/.test(n),
                                    v = m[p ? "take" + ("last" == n ? "Right" : "") : n],
                                    x = p || /^find/.test(n);
                                v && (m.prototype[n] = function() {
                                    var A = this.__wrapped__,
                                        D = p ? [1] : arguments,
                                        Z = A instanceof He,
                                        Q = D[0],
                                        Y = Z || Me(A),
                                        ie = function(Be) {
                                            var ke = v.apply(m, ei([Be], D));
                                            return p && ge ? ke[0] : ke
                                        };
                                    Y && o && "function" == typeof Q && 1 != Q.length && (Z = Y = !1);
                                    var ge = this.__chain__,
                                        Te = x && !ge,
                                        $e = Z && !this.__actions__.length;
                                    if (!x && Y) {
                                        A = $e ? A : new He(this);
                                        var Ce = e.apply(A, D);
                                        return Ce.__actions__.push({
                                            func: Do,
                                            args: [ie],
                                            thisArg: r
                                        }), new en(Ce, ge)
                                    }
                                    return Te && $e ? e.apply(this, D) : (Ce = this.thru(ie), Te ? p ? Ce.value()[0] : Ce.value() : Ce)
                                })
                            }), Yr(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var n = no[e],
                                    o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    p = /^(?:pop|shift)$/.test(e);
                                m.prototype[e] = function() {
                                    var v = arguments;
                                    if (p && !this.__chain__) {
                                        var x = this.value();
                                        return n.apply(Me(x) ? x : [], v)
                                    }
                                    return this[o](function(A) {
                                        return n.apply(Me(A) ? A : [], v)
                                    })
                                }
                            }), xn(He.prototype, function(e, n) {
                                var o = m[n];
                                if (o) {
                                    var p = o.name + "";
                                    lt.call(Fi, p) || (Fi[p] = []), Fi[p].push({
                                        name: n,
                                        func: o
                                    })
                                }
                            }), Fi[Po(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], He.prototype.clone = function e_() {
                                var e = new He(this.__wrapped__);
                                return e.__actions__ = Fr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Fr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Fr(this.__views__), e
                            }, He.prototype.reverse = function t_() {
                                if (this.__filtered__) {
                                    var e = new He(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else(e = this.clone()).__dir__ *= -1;
                                return e
                            }, He.prototype.value = function r_() {
                                var e = this.__wrapped__.value(),
                                    n = this.__dir__,
                                    o = Me(e),
                                    p = n < 0,
                                    v = o ? e.length : 0,
                                    x = function pm(e, n, o) {
                                        for (var p = -1, v = o.length; ++p < v;) {
                                            var x = o[p],
                                                A = x.size;
                                            switch (x.type) {
                                                case "drop":
                                                    e += A;
                                                    break;
                                                case "dropRight":
                                                    n -= A;
                                                    break;
                                                case "take":
                                                    n = Pr(n, e + A);
                                                    break;
                                                case "takeRight":
                                                    e = ur(e, n - A)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: n
                                        }
                                    }(0, v, this.__views__),
                                    A = x.start,
                                    D = x.end,
                                    Z = D - A,
                                    Q = p ? D : A - 1,
                                    Y = this.__iteratees__,
                                    ie = Y.length,
                                    ge = 0,
                                    xe = Pr(Z, this.__takeCount__);
                                if (!o || !p && v == Z && xe == Z) return Zf(e, this.__actions__);
                                var Te = [];
                                e: for (; Z-- && ge < xe;) {
                                    for (var $e = -1, Ce = e[Q += n]; ++$e < ie;) {
                                        var Be = Y[$e],
                                            Hr = Be.type,
                                            Cr = (0, Be.iteratee)(Ce);
                                        if (2 == Hr) Ce = Cr;
                                        else if (!Cr) {
                                            if (1 == Hr) continue e;
                                            break e
                                        }
                                    }
                                    Te[ge++] = Ce
                                }
                                return Te
                            }, m.prototype.at = C1, m.prototype.chain = function D1() {
                                return xh(this)
                            }, m.prototype.commit = function N1() {
                                return new en(this.value(), this.__chain__)
                            }, m.prototype.next = function j1() {
                                this.__values__ === r && (this.__values__ = Fh(this.value()));
                                var e = this.__index__ >= this.__values__.length;
                                return {
                                    done: e,
                                    value: e ? r : this.__values__[this.__index__++]
                                }
                            }, m.prototype.plant = function F1(e) {
                                for (var n, o = this; o instanceof vo;) {
                                    var p = gh(o);
                                    p.__index__ = 0, p.__values__ = r, n ? v.__wrapped__ = p : n = p;
                                    var v = p;
                                    o = o.__wrapped__
                                }
                                return v.__wrapped__ = e, n
                            }, m.prototype.reverse = function M1() {
                                var e = this.__wrapped__;
                                if (e instanceof He) {
                                    var n = e;
                                    return this.__actions__.length && (n = new He(this)), (n = n.reverse()).__actions__.push({
                                        func: Do,
                                        args: [jc],
                                        thisArg: r
                                    }), new en(n, this.__chain__)
                                }
                                return this.thru(jc)
                            }, m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = function Z1() {
                                return Zf(this.__wrapped__, this.__actions__)
                            }, m.prototype.first = m.prototype.head, ps && (m.prototype[ps] = function L1() {
                                return this
                            }), m
                        }();
                    hi ? ((hi.exports = Ni)._ = Ni, Ha._ = Ni) : _r._ = Ni
                }.call(is);
            var fy = Object.defineProperty,
                hy = Object.defineProperties,
                dy = Object.getOwnPropertyDescriptors,
                sl = Object.getOwnPropertySymbols,
                py = Object.prototype.hasOwnProperty,
                gy = Object.prototype.propertyIsEnumerable,
                ol = (d, t, r) => t in d ? fy(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r,
                qs = (d, t) => {
                    for (var r in t || (t = {})) py.call(t, r) && ol(d, r, t[r]);
                    if (sl)
                        for (var r of sl(t)) gy.call(t, r) && ol(d, r, t[r]);
                    return d
                },
                yy = (d, t) => hy(d, dy(t));

            function Jn(d, t, r) {
                var a;
                const l = (0, E.DQ)(d);
                return (null == (a = t.rpcMap) ? void 0 : a[l.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${l.namespace}:${l.reference}&projectId=${r}`
            }

            function li(d) {
                return d.includes(":") ? d.split(":")[1] : d
            }

            function al(d) {
                return d.map(t => `${t.split(":")[0]}:${t.split(":")[1]}`)
            }

            function cl(d) {
                var t, r, a, l;
                const f = {};
                if (!(0, E.L5)(d)) return f;
                for (const [g, w] of Object.entries(d)) {
                    const T = (0, E.gp)(g) ? [g] : w.chains,
                        S = w.methods || [],
                        j = w.events || [],
                        H = w.rpcMap || {},
                        J = (0, E.M)(g);
                    f[J] = yy(qs(qs({}, f[J]), w), {
                        chains: (0, E.eG)(T, null == (t = f[J]) ? void 0 : t.chains),
                        methods: (0, E.eG)(S, null == (r = f[J]) ? void 0 : r.methods),
                        events: (0, E.eG)(j, null == (a = f[J]) ? void 0 : a.events),
                        rpcMap: qs(qs({}, H), null == (l = f[J]) ? void 0 : l.rpcMap)
                    })
                }
                return f
            }

            function my(d) {
                return d.includes(":") ? d.split(":")[2] : d
            }

            function by(d) {
                const t = {};
                for (const [r, a] of Object.entries(d)) {
                    const l = a.methods || [],
                        f = a.events || [],
                        g = a.accounts || [],
                        w = (0, E.gp)(r) ? [r] : a.chains ? a.chains : al(a.accounts);
                    t[r] = {
                        chains: w,
                        methods: l,
                        events: f,
                        accounts: g
                    }
                }
                return t
            }

            function Ea(d) {
                return "number" == typeof d ? d : d.includes("0x") ? parseInt(d, 16) : d.includes(":") ? Number(d.split(":")[1]) : Number(d)
            }
            const ul = {},
                Pt = d => ul[d],
                Ia = (d, t) => {
                    ul[d] = t
                };
            class wy {
                constructor(t) {
                    this.name = "polkadot", this.namespace = t.namespace, this.events = Pt("events"), this.client = Pt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, r) {
                    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit("default_chain_changed", `${this.name}:${t}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t && t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]) || []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach(r => {
                        var a;
                        const l = li(r);
                        t[l] = this.createHttpProvider(l, null == (a = this.namespace.rpcMap) ? void 0 : a[r])
                    }), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        r = this.httpProviders[t];
                    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return r
                }
                setHttpProvider(t, r) {
                    const a = this.createHttpProvider(t, r);
                    a && (this.httpProviders[t] = a)
                }
                createHttpProvider(t, r) {
                    const a = r || Jn(t, this.namespace, this.client.core.projectId);
                    if (!a) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new Wn(new Gn(a, Pt("disableProviderPing")))
                }
            }
            class xy {
                constructor(t) {
                    this.name = "eip155", this.namespace = t.namespace, this.events = Pt("events"), this.client = Pt("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                request(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        switch (t.request.method) {
                            case "eth_requestAccounts":
                            case "eth_accounts":
                                return r.getAccounts();
                            case "wallet_switchEthereumChain":
                                return yield r.handleSwitchChain(t);
                            case "eth_chainId":
                                return parseInt(r.getDefaultChain())
                        }
                        return r.namespace.methods.includes(t.request.method) ? yield r.client.request(t): r.getHttpProvider().request(t.request)
                    })()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                setDefaultChain(t, r) {
                    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r), this.chainId = parseInt(t), this.events.emit("default_chain_changed", `${this.name}:${t}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                createHttpProvider(t, r) {
                    const a = r || Jn(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
                    if (!a) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new Wn(new Gn(a, Pt("disableProviderPing")))
                }
                setHttpProvider(t, r) {
                    const a = this.createHttpProvider(t, r);
                    a && (this.httpProviders[t] = a)
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach(r => {
                        var a;
                        const l = parseInt(li(r));
                        t[l] = this.createHttpProvider(l, null == (a = this.namespace.rpcMap) ? void 0 : a[r])
                    }), t
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
                }
                getHttpProvider() {
                    const t = this.chainId,
                        r = this.httpProviders[t];
                    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return r
                }
                handleSwitchChain(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        var a, l;
                        let f = t.request.params ? null == (a = t.request.params[0]) ? void 0 : a.chainId : "0x0";
                        f = f.startsWith("0x") ? f : `0x${f}`;
                        const g = parseInt(f, 16);
                        if (r.isChainApproved(g)) r.setDefaultChain(`${g}`);
                        else {
                            if (!r.namespace.methods.includes("wallet_switchEthereumChain")) throw new Error(`Failed to switch to chain 'eip155:${g}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                            yield r.client.request({
                                topic: t.topic,
                                request: {
                                    method: t.request.method,
                                    params: [{
                                        chainId: f
                                    }]
                                },
                                chainId: null == (l = r.namespace.chains) ? void 0 : l[0]
                            }), r.setDefaultChain(`${g}`)
                        }
                        return null
                    })()
                }
                isChainApproved(t) {
                    return this.namespace.chains.includes(`${this.name}:${t}`)
                }
            }
            class Ey {
                constructor(t) {
                    this.name = "solana", this.namespace = t.namespace, this.events = Pt("events"), this.client = Pt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, r) {
                    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit("default_chain_changed", `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach(r => {
                        var a;
                        const l = li(r);
                        t[l] = this.createHttpProvider(l, null == (a = this.namespace.rpcMap) ? void 0 : a[r])
                    }), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        r = this.httpProviders[t];
                    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return r
                }
                setHttpProvider(t, r) {
                    const a = this.createHttpProvider(t, r);
                    a && (this.httpProviders[t] = a)
                }
                createHttpProvider(t, r) {
                    const a = r || Jn(t, this.namespace, this.client.core.projectId);
                    if (!a) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new Wn(new Gn(a, Pt("disableProviderPing")))
                }
            }
            class Iy {
                constructor(t) {
                    this.name = "cosmos", this.namespace = t.namespace, this.events = Pt("events"), this.client = Pt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, r) {
                    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach(r => {
                        var a;
                        const l = li(r);
                        t[l] = this.createHttpProvider(l, null == (a = this.namespace.rpcMap) ? void 0 : a[r])
                    }), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        r = this.httpProviders[t];
                    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return r
                }
                setHttpProvider(t, r) {
                    const a = this.createHttpProvider(t, r);
                    a && (this.httpProviders[t] = a)
                }
                createHttpProvider(t, r) {
                    const a = r || Jn(t, this.namespace, this.client.core.projectId);
                    if (!a) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new Wn(new Gn(a, Pt("disableProviderPing")))
                }
            }
            class Py {
                constructor(t) {
                    this.name = "cip34", this.namespace = t.namespace, this.events = Pt("events"), this.client = Pt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, r) {
                    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach(r => {
                        const a = this.getCardanoRPCUrl(r),
                            l = li(r);
                        t[l] = this.createHttpProvider(l, a)
                    }), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        r = this.httpProviders[t];
                    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return r
                }
                getCardanoRPCUrl(t) {
                    const r = this.namespace.rpcMap;
                    if (r) return r[t]
                }
                setHttpProvider(t, r) {
                    const a = this.createHttpProvider(t, r);
                    a && (this.httpProviders[t] = a)
                }
                createHttpProvider(t, r) {
                    const a = r || this.getCardanoRPCUrl(t);
                    if (!a) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new Wn(new Gn(a, Pt("disableProviderPing")))
                }
            }
            class Sy {
                constructor(t) {
                    this.name = "elrond", this.namespace = t.namespace, this.events = Pt("events"), this.client = Pt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, r) {
                    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit("default_chain_changed", `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach(r => {
                        var a;
                        const l = li(r);
                        t[l] = this.createHttpProvider(l, null == (a = this.namespace.rpcMap) ? void 0 : a[r])
                    }), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        r = this.httpProviders[t];
                    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return r
                }
                setHttpProvider(t, r) {
                    const a = this.createHttpProvider(t, r);
                    a && (this.httpProviders[t] = a)
                }
                createHttpProvider(t, r) {
                    const a = r || Jn(t, this.namespace, this.client.core.projectId);
                    if (!a) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new Wn(new Gn(a, Pt("disableProviderPing")))
                }
            }
            class Oy {
                constructor(t) {
                    this.name = "multiversx", this.namespace = t.namespace, this.events = Pt("events"), this.client = Pt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, r) {
                    this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit("default_chain_changed", `${this.name}:${t}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach(r => {
                        var a;
                        const l = li(r);
                        t[l] = this.createHttpProvider(l, null == (a = this.namespace.rpcMap) ? void 0 : a[r])
                    }), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        r = this.httpProviders[t];
                    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return r
                }
                setHttpProvider(t, r) {
                    const a = this.createHttpProvider(t, r);
                    a && (this.httpProviders[t] = a)
                }
                createHttpProvider(t, r) {
                    const a = r || Jn(t, this.namespace, this.client.core.projectId);
                    if (!a) throw new Error(`No RPC url provided for chainId: ${t}`);
                    return new Wn(new Gn(a, Pt("disableProviderPing")))
                }
            }
            class Ry {
                constructor(t) {
                    this.name = "near", this.namespace = t.namespace, this.events = Pt("events"), this.client = Pt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(t) {
                    this.namespace = Object.assign(this.namespace, t)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    const t = this.namespace.chains[0];
                    if (!t) throw new Error("ChainId not found");
                    return t.split(":")[1]
                }
                request(t) {
                    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
                }
                setDefaultChain(t, r) {
                    if (this.chainId = t, !this.httpProviders[t]) {
                        const a = r || Jn(`${this.name}:${t}`, this.namespace);
                        if (!a) throw new Error(`No RPC url provided for chainId: ${t}`);
                        this.setHttpProvider(t, a)
                    }
                    this.events.emit("default_chain_changed", `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    const t = this.namespace.accounts;
                    return t && t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]) || []
                }
                createHttpProviders() {
                    const t = {};
                    return this.namespace.chains.forEach(r => {
                        var a;
                        t[r] = this.createHttpProvider(r, null == (a = this.namespace.rpcMap) ? void 0 : a[r])
                    }), t
                }
                getHttpProvider() {
                    const t = `${this.name}:${this.chainId}`,
                        r = this.httpProviders[t];
                    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
                    return r
                }
                setHttpProvider(t, r) {
                    const a = this.createHttpProvider(t, r);
                    a && (this.httpProviders[t] = a)
                }
                createHttpProvider(t, r) {
                    const a = r || Jn(t, this.namespace);
                    return typeof a > "u" ? void 0 : new Wn(new Gn(a, Pt("disableProviderPing")))
                }
            }
            var Ay = Object.defineProperty,
                Ty = Object.defineProperties,
                Cy = Object.getOwnPropertyDescriptors,
                ll = Object.getOwnPropertySymbols,
                Dy = Object.prototype.hasOwnProperty,
                Ny = Object.prototype.propertyIsEnumerable,
                fl = (d, t, r) => t in d ? Ay(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r,
                $s = (d, t) => {
                    for (var r in t || (t = {})) Dy.call(t, r) && fl(d, r, t[r]);
                    if (ll)
                        for (var r of ll(t)) Ny.call(t, r) && fl(d, r, t[r]);
                    return d
                },
                Pa = (d, t) => Ty(d, Cy(t));
            class Sa {
                constructor(t) {
                    this.events = new(we()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof t ? .logger < "u" && "string" != typeof t ? .logger ? t.logger : Nr()(Dt({
                        level: t ? .logger || "error"
                    })), this.disableProviderPing = t ? .disableProviderPing || !1
                }
                static init(t) {
                    return (0, _.Z)(function*() {
                        const r = new Sa(t);
                        return yield r.initialize(), r
                    })()
                }
                request(t, r) {
                    var a = this;
                    return (0, _.Z)(function*() {
                        const [l, f] = a.validateChain(r);
                        if (!a.session) throw new Error("Please call connect() before request()");
                        return yield a.getProvider(l).request({
                            request: $s({}, t),
                            chainId: `${l}:${f}`,
                            topic: a.session.topic
                        })
                    })()
                }
                sendAsync(t, r, a) {
                    const l = (new Date).getTime();
                    this.request(t, a).then(f => r(null, Ls(l, f))).catch(f => r(f, void 0))
                }
                enable() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        if (!t.client) throw new Error("Sign Client not initialized");
                        return t.session || (yield t.connect({
                            namespaces: t.namespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            sessionProperties: t.sessionProperties
                        })), yield t.requestAccounts()
                    })()
                }
                disconnect() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        var r;
                        if (!t.session) throw new Error("Please call connect() before enable()");
                        yield t.client.disconnect({
                            topic: null == (r = t.session) ? void 0 : r.topic,
                            reason: (0, E.D6)("USER_DISCONNECTED")
                        }), yield t.cleanup()
                    })()
                }
                connect(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (!r.client) throw new Error("Sign Client not initialized");
                        if (r.setNamespaces(t), yield r.cleanupPendingPairings(), !t.skipPairing) return yield r.pair(t.pairingTopic)
                    })()
                }
                on(t, r) {
                    this.events.on(t, r)
                }
                once(t, r) {
                    this.events.once(t, r)
                }
                removeListener(t, r) {
                    this.events.removeListener(t, r)
                }
                off(t, r) {
                    this.events.off(t, r)
                }
                get isWalletConnect() {
                    return !0
                }
                pair(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        r.shouldAbortPairingAttempt = !1;
                        let a = 0;
                        do {
                            if (r.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
                            if (a >= r.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
                            const {
                                uri: l,
                                approval: f
                            } = yield r.client.connect({
                                pairingTopic: t,
                                requiredNamespaces: r.namespaces,
                                optionalNamespaces: r.optionalNamespaces,
                                sessionProperties: r.sessionProperties
                            });
                            l && (r.uri = l, r.events.emit("display_uri", l)), yield f().then(g => {
                                r.session = g, r.namespaces || (r.namespaces = by(g.namespaces), r.persist("namespaces", r.namespaces))
                            }).catch(g => {
                                if (g.message !== Vu) throw g;
                                a++
                            })
                        } while (!r.session);
                        return r.onConnect(), r.session
                    })()
                }
                setDefaultChain(t, r) {
                    try {
                        if (!this.session) return;
                        const [a, l] = this.validateChain(t);
                        this.getProvider(a).setDefaultChain(l, r)
                    } catch (a) {
                        if (!/Please call connect/.test(a.message)) throw a
                    }
                }
                cleanupPendingPairings(t = {}) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        r.logger.info("Cleaning up inactive pairings...");
                        const a = r.client.pairing.getAll();
                        if ((0, E.qt)(a)) {
                            for (const l of a) t.deletePairings ? r.client.core.expirer.set(l.topic, 0) : yield r.client.core.relayer.subscriber.unsubscribe(l.topic);
                            r.logger.info(`Inactive pairings cleared: ${a.length}`)
                        }
                    })()
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                checkStorage() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.namespaces = yield t.getFromStore("namespaces"), t.optionalNamespaces = (yield t.getFromStore("optionalNamespaces")) || {}, t.client.session.length && (t.session = t.client.session.get(t.client.session.keys[t.client.session.keys.length - 1]), t.createProviders())
                    })()
                }
                initialize() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.logger.trace("Initialized"), yield t.createClient(), yield t.checkStorage(), t.registerEventListeners()
                    })()
                }
                createClient() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.client = t.providerOpts.client || (yield wa.init({
                            logger: t.providerOpts.logger || "error",
                            relayUrl: t.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                            projectId: t.providerOpts.projectId,
                            metadata: t.providerOpts.metadata,
                            storageOptions: t.providerOpts.storageOptions,
                            storage: t.providerOpts.storage,
                            name: t.providerOpts.name
                        })), t.logger.trace("SignClient Initialized")
                    })()
                }
                createProviders() {
                    if (!this.client) throw new Error("Sign Client not initialized");
                    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
                    const t = [...new Set(Object.keys(this.session.namespaces).map(r => (0, E.M)(r)))];
                    Ia("client", this.client), Ia("events", this.events), Ia("disableProviderPing", this.disableProviderPing), t.forEach(r => {
                        if (!this.session) return;
                        const a = function vy(d, t) {
                                const r = Object.keys(t.namespaces).filter(l => l.includes(d));
                                if (!r.length) return [];
                                const a = [];
                                return r.forEach(l => {
                                    a.push(...t.namespaces[l].accounts)
                                }), a
                            }(r, this.session),
                            l = al(a),
                            f = function _y(d = {}, t = {}) {
                                const r = cl(d),
                                    a = cl(t);
                                return xa.exports.merge(r, a)
                            }(this.namespaces, this.optionalNamespaces),
                            g = Pa($s({}, f[r]), {
                                accounts: a,
                                chains: l
                            });
                        switch (r) {
                            case "eip155":
                                this.rpcProviders[r] = new xy({
                                    namespace: g
                                });
                                break;
                            case "solana":
                                this.rpcProviders[r] = new Ey({
                                    namespace: g
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[r] = new Iy({
                                    namespace: g
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[r] = new wy({
                                    namespace: g
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[r] = new Py({
                                    namespace: g
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[r] = new Sy({
                                    namespace: g
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[r] = new Oy({
                                    namespace: g
                                });
                                break;
                            case "near":
                                this.rpcProviders[r] = new Ry({
                                    namespace: g
                                })
                        }
                    })
                }
                registerEventListeners() {
                    var t = this;
                    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
                    this.client.on("session_ping", r => {
                        this.events.emit("session_ping", r)
                    }), this.client.on("session_event", r => {
                        const {
                            params: a
                        } = r, {
                            event: l
                        } = a;
                        if ("accountsChanged" === l.name) {
                            const f = l.data;
                            f && (0, E.qt)(f) && this.events.emit("accountsChanged", f.map(my))
                        } else if ("chainChanged" === l.name) {
                            const f = a.chainId,
                                g = a.event.data,
                                w = (0, E.M)(f),
                                T = Ea(f) !== Ea(g) ? `${w}:${Ea(g)}` : f;
                            this.onChainChanged(T)
                        } else this.events.emit(l.name, l.data);
                        this.events.emit("session_event", r)
                    }), this.client.on("session_update", ({
                        topic: r,
                        params: a
                    }) => {
                        var l;
                        const {
                            namespaces: f
                        } = a, g = null == (l = this.client) ? void 0 : l.session.get(r);
                        this.session = Pa($s({}, g), {
                            namespaces: f
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: r,
                            params: a
                        })
                    }), this.client.on("session_delete", function() {
                        var r = (0, _.Z)(function*(a) {
                            yield t.cleanup(), t.events.emit("session_delete", a), t.events.emit("disconnect", Pa($s({}, (0, E.D6)("USER_DISCONNECTED")), {
                                data: a.topic
                            }))
                        });
                        return function(a) {
                            return r.apply(this, arguments)
                        }
                    }()), this.on("default_chain_changed", r => {
                        this.onChainChanged(r, !0)
                    })
                }
                getProvider(t) {
                    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
                    return this.rpcProviders[t]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(t => {
                        var r;
                        this.getProvider(t).updateNamespace(null == (r = this.session) ? void 0 : r.namespaces[t])
                    })
                }
                setNamespaces(t) {
                    const {
                        namespaces: r,
                        optionalNamespaces: a,
                        sessionProperties: l
                    } = t;
                    r && Object.keys(r).length && (this.namespaces = r), a && Object.keys(a).length && (this.optionalNamespaces = a), this.sessionProperties = l, this.persist("namespaces", r), this.persist("optionalNamespaces", a)
                }
                validateChain(t) {
                    const [r, a] = t ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, a];
                    if (r && !Object.keys(this.namespaces || {}).map(g => (0, E.M)(g)).includes(r)) throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
                    if (r && a) return [r, a];
                    const l = (0, E.M)(Object.keys(this.namespaces)[0]);
                    return [l, this.rpcProviders[l].getDefaultChain()]
                }
                requestAccounts() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        const [r] = t.validateChain();
                        return yield t.getProvider(r).requestAccounts()
                    })()
                }
                onChainChanged(t, r = !1) {
                    var a;
                    if (!this.namespaces) return;
                    const [l, f] = this.validateChain(t);
                    r || this.getProvider(l).setDefaultChain(f), (null != (a = this.namespaces[l]) ? a : this.namespaces[`${l}:${f}`]).defaultChain = f, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", f)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                cleanup() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.session = void 0, t.namespaces = void 0, t.optionalNamespaces = void 0, t.sessionProperties = void 0, t.persist("namespaces", void 0), t.persist("optionalNamespaces", void 0), t.persist("sessionProperties", void 0), yield t.cleanupPendingPairings({
                            deletePairings: !0
                        })
                    })()
                }
                persist(t, r) {
                    this.client.core.storage.setItem(`${il}/${t}`, r)
                }
                getFromStore(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        return yield r.client.core.storage.getItem(`${il}/${t}`)
                    })()
                }
            }
            const jy = Sa,
                Us = ["eth_sendTransaction", "personal_sign"],
                hl = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                Bs = ["chainChanged", "accountsChanged"],
                dl = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var zy = Object.defineProperty,
                qy = Object.defineProperties,
                $y = Object.getOwnPropertyDescriptors,
                pl = Object.getOwnPropertySymbols,
                Uy = Object.prototype.hasOwnProperty,
                By = Object.prototype.propertyIsEnumerable,
                gl = (d, t, r) => t in d ? zy(d, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : d[t] = r,
                ss = (d, t) => {
                    for (var r in t || (t = {})) Uy.call(t, r) && gl(d, r, t[r]);
                    if (pl)
                        for (var r of pl(t)) By.call(t, r) && gl(d, r, t[r]);
                    return d
                },
                yl = (d, t) => qy(d, $y(t));

            function Hs(d) {
                return Number(d[0].split(":")[1])
            }

            function Oa(d) {
                return `0x${d.toString(16)}`
            }
            class ks {
                constructor() {
                    this.events = new ye.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (t, r) => (this.events.on(t, r), this), this.once = (t, r) => (this.events.once(t, r), this), this.removeListener = (t, r) => (this.events.removeListener(t, r), this), this.off = (t, r) => (this.events.off(t, r), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
                }
                static init(t) {
                    return (0, _.Z)(function*() {
                        const r = new ks;
                        return yield r.initialize(t), r
                    })()
                }
                request(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        return yield r.signer.request(t, r.formatChainId(r.chainId))
                    })()
                }
                sendAsync(t, r) {
                    this.signer.sendAsync(t, r, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                enable() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        return t.session || (yield t.connect()), yield t.request({
                            method: "eth_requestAccounts"
                        })
                    })()
                }
                connect(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (!r.signer.client) throw new Error("Provider not initialized. Call init() first");
                        r.loadConnectOpts(t);
                        const {
                            required: a,
                            optional: l
                        } = function Hy(d) {
                            const {
                                chains: t,
                                optionalChains: r,
                                methods: a,
                                optionalMethods: l,
                                events: f,
                                optionalEvents: g,
                                rpcMap: w
                            } = d;
                            if (!(0, E.qt)(t)) throw new Error("Invalid chains");
                            const T = {
                                    chains: t,
                                    methods: a || Us,
                                    events: f || Bs,
                                    rpcMap: ss({}, t.length ? {
                                        [Hs(t)]: w[Hs(t)]
                                    } : {})
                                },
                                S = f ? .filter(le => !Bs.includes(le)),
                                j = a ? .filter(le => !Us.includes(le));
                            if (!(r || g || l || null != S && S.length || null != j && j.length)) return {
                                required: t.length ? T : void 0
                            };
                            const J = {
                                chains: [...new Set(S ? .length && j ? .length || !r ? T.chains.concat(r || []) : r)],
                                methods: [...new Set(T.methods.concat(null != l && l.length ? l : hl))],
                                events: [...new Set(T.events.concat(null != g && g.length ? g : dl))],
                                rpcMap: w
                            };
                            return {
                                required: t.length ? T : void 0,
                                optional: r.length ? J : void 0
                            }
                        }(r.rpc);
                        try {
                            const f = yield new Promise(function() {
                                var w = (0, _.Z)(function*(T, S) {
                                    var j;
                                    r.rpc.showQrModal && (null == (j = r.modal) || j.subscribeModal(H => {
                                        !H.open && !r.signer.session && (r.signer.abortPairingAttempt(), S(new Error("Connection request reset. Please try again.")))
                                    })), yield r.signer.connect(yl(ss({
                                        namespaces: ss({}, a && {
                                            [r.namespace]: a
                                        })
                                    }, l && {
                                        optionalNamespaces: {
                                            [r.namespace]: l
                                        }
                                    }), {
                                        pairingTopic: t ? .pairingTopic
                                    })).then(H => {
                                        T(H)
                                    }).catch(H => {
                                        S(new Error(H.message))
                                    })
                                });
                                return function(T, S) {
                                    return w.apply(this, arguments)
                                }
                            }());
                            if (!f) return;
                            const g = (0, E.gu)(f.namespaces, [r.namespace]);
                            r.setChainIds(r.rpc.chains.length ? r.rpc.chains : g), r.setAccounts(g), r.events.emit("connect", {
                                chainId: Oa(r.chainId)
                            })
                        } catch (f) {
                            throw r.signer.logger.error(f), f
                        } finally {
                            r.modal && r.modal.closeModal()
                        }
                    })()
                }
                disconnect() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        t.session && (yield t.signer.disconnect()), t.reset()
                    })()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", t => {
                        const {
                            params: r
                        } = t, {
                            event: a
                        } = r;
                        "accountsChanged" === a.name ? (this.accounts = this.parseAccounts(a.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === a.name ? this.setChainId(this.formatChainId(a.data)) : this.events.emit(a.name, a.data), this.events.emit("session_event", t)
                    }), this.signer.on("chainChanged", t => {
                        const r = parseInt(t);
                        this.chainId = r, this.events.emit("chainChanged", Oa(this.chainId)), this.persist()
                    }), this.signer.on("session_update", t => {
                        this.events.emit("session_update", t)
                    }), this.signer.on("session_delete", t => {
                        this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", yl(ss({}, (0, E.D6)("USER_DISCONNECTED")), {
                            data: t.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", t => {
                        var r, a;
                        this.rpc.showQrModal && (null == (r = this.modal) || r.closeModal(), null == (a = this.modal) || a.openModal({
                            uri: t
                        })), this.events.emit("display_uri", t)
                    })
                }
                switchEthereumChain(t) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: t.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(t) {
                    return "string" == typeof t && t.startsWith(`${this.namespace}:`)
                }
                formatChainId(t) {
                    return `${this.namespace}:${t}`
                }
                parseChainId(t) {
                    return Number(t.split(":")[1])
                }
                setChainIds(t) {
                    const r = t.filter(a => this.isCompatibleChainId(a)).map(a => this.parseChainId(a));
                    r.length && (this.chainId = r[0], this.events.emit("chainChanged", Oa(this.chainId)), this.persist())
                }
                setChainId(t) {
                    if (this.isCompatibleChainId(t)) {
                        const r = this.parseChainId(t);
                        this.chainId = r, this.switchEthereumChain(r)
                    }
                }
                parseAccountId(t) {
                    const [r, a, l] = t.split(":");
                    return {
                        chainId: `${r}:${a}`,
                        address: l
                    }
                }
                setAccounts(t) {
                    this.accounts = t.filter(r => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map(r => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(t) {
                    var r, a;
                    const l = null != (r = t ? .chains) ? r : [],
                        f = null != (a = t ? .optionalChains) ? a : [],
                        g = l.concat(f);
                    if (!g.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
                    const w = l.length ? t ? .methods || Us : [],
                        T = l.length ? t ? .events || Bs : [],
                        S = t ? .optionalMethods || [],
                        j = t ? .optionalEvents || [],
                        H = t ? .rpcMap || this.buildRpcMap(g, t.projectId),
                        J = t ? .qrModalOptions || void 0;
                    return {
                        chains: l ? .map(le => this.formatChainId(le)),
                        optionalChains: f.map(le => this.formatChainId(le)),
                        methods: w,
                        events: T,
                        optionalMethods: S,
                        optionalEvents: j,
                        rpcMap: H,
                        showQrModal: !(null == t || !t.showQrModal),
                        qrModalOptions: J,
                        projectId: t.projectId,
                        metadata: t.metadata
                    }
                }
                buildRpcMap(t, r) {
                    const a = {};
                    return t.forEach(l => {
                        a[l] = this.getRpcUrl(l, r)
                    }), a
                }
                initialize(t) {
                    var r = this;
                    return (0, _.Z)(function*() {
                        if (r.rpc = r.getRpcConfig(t), r.chainId = Hs(r.rpc.chains.length ? r.rpc.chains : r.rpc.optionalChains), r.signer = yield jy.init({
                                projectId: r.rpc.projectId,
                                metadata: r.rpc.metadata,
                                disableProviderPing: t.disableProviderPing,
                                relayUrl: t.relayUrl,
                                storageOptions: t.storageOptions
                            }), r.registerEventListeners(), yield r.loadPersistedSession(), r.rpc.showQrModal) {
                            let a;
                            try {
                                const {
                                    WalletConnectModal: l
                                } = yield ce.e(301).then(ce.bind(ce, 3301));
                                a = l
                            } catch {
                                throw new Error("To use QR modal, please install @walletconnect/modal package")
                            }
                            if (a) try {
                                r.modal = new a(ss({
                                    projectId: r.rpc.projectId
                                }, r.rpc.qrModalOptions))
                            } catch (l) {
                                throw r.signer.logger.error(l), new Error("Could not generate WalletConnectModal Instance")
                            }
                        }
                    })()
                }
                loadConnectOpts(t) {
                    if (!t) return;
                    const {
                        chains: r,
                        optionalChains: a,
                        rpcMap: l
                    } = t;
                    r && (0, E.qt)(r) && (this.rpc.chains = r.map(f => this.formatChainId(f)), r.forEach(f => {
                        this.rpc.rpcMap[f] = l ? .[f] || this.getRpcUrl(f)
                    })), a && (0, E.qt)(a) && (this.rpc.optionalChains = [], this.rpc.optionalChains = a ? .map(f => this.formatChainId(f)), a.forEach(f => {
                        this.rpc.rpcMap[f] = l ? .[f] || this.getRpcUrl(f)
                    }))
                }
                getRpcUrl(t, r) {
                    var a;
                    return (null == (a = this.rpc.rpcMap) ? void 0 : a[t]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${t}&projectId=${r||this.rpc.projectId}`
                }
                loadPersistedSession() {
                    var t = this;
                    return (0, _.Z)(function*() {
                        if (!t.session) return;
                        const r = yield t.signer.client.core.storage.getItem(`${t.STORAGE_KEY}/chainId`), a = t.session.namespaces[`${t.namespace}:${r}`] ? t.session.namespaces[`${t.namespace}:${r}`] : t.session.namespaces[t.namespace];
                        t.setChainIds(r ? [t.formatChainId(r)] : a ? .accounts), t.setAccounts(a ? .accounts)
                    })()
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(t) {
                    return "string" == typeof t || t instanceof String ? [this.parseAccount(t)] : t.map(r => this.parseAccount(r))
                }
            }
            const ky = ks
        },
        2108: (Ve, ne, ce) => {
            "use strict";
            ce.d(ne, {
                q: () => _
            });
            class _ {}
        },
        699: (Ve, ne, ce) => {
            "use strict";
            ce.r(ne), ce.d(ne, {
                IEvents: () => _.q
            });
            var _ = ce(2108)
        },
        4953: (Ve, ne, ce) => {
            "use strict";
            Object.defineProperty(ne, "__esModule", {
                value: !0
            }), ne.HEARTBEAT_EVENTS = ne.HEARTBEAT_INTERVAL = void 0;
            const _ = ce(5409);
            ne.HEARTBEAT_INTERVAL = _.FIVE_SECONDS, ne.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        5368: (Ve, ne, ce) => {
            "use strict";
            Object.defineProperty(ne, "__esModule", {
                value: !0
            }), ce(9653).__exportStar(ce(4953), ne)
        },
        9754: (Ve, ne, ce) => {
            "use strict";
            Object.defineProperty(ne, "__esModule", {
                value: !0
            }), ne.HeartBeat = void 0;
            const _ = ce(9653),
                ye = ce(2016),
                we = ce(5409),
                E = ce(4083),
                re = ce(5368);
            class Ee extends E.IHeartBeat {
                constructor(de) {
                    super(de), this.events = new ye.EventEmitter, this.interval = re.HEARTBEAT_INTERVAL, this.interval = de ? .interval || re.HEARTBEAT_INTERVAL
                }
                static init(de) {
                    return _.__awaiter(this, void 0, void 0, function*() {
                        const he = new Ee(de);
                        return yield he.init(), he
                    })
                }
                init() {
                    return _.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(de, he) {
                    this.events.on(de, he)
                }
                once(de, he) {
                    this.events.once(de, he)
                }
                off(de, he) {
                    this.events.off(de, he)
                }
                removeListener(de, he) {
                    this.events.removeListener(de, he)
                }
                initialize() {
                    return _.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), we.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(re.HEARTBEAT_EVENTS.pulse)
                }
            }
            ne.HeartBeat = Ee
        },
        986: (Ve, ne, ce) => {
            "use strict";
            Object.defineProperty(ne, "__esModule", {
                value: !0
            });
            const _ = ce(9653);
            _.__exportStar(ce(9754), ne), _.__exportStar(ce(4083), ne), _.__exportStar(ce(5368), ne)
        },
        7293: (Ve, ne, ce) => {
            "use strict";
            Object.defineProperty(ne, "__esModule", {
                value: !0
            }), ne.IHeartBeat = void 0;
            const _ = ce(699);
            ne.IHeartBeat = class ye extends _.IEvents {
                constructor(E) {
                    super()
                }
            }
        },
        4083: (Ve, ne, ce) => {
            "use strict";
            Object.defineProperty(ne, "__esModule", {
                value: !0
            }), ce(9653).__exportStar(ce(7293), ne)
        },
        2768: () => {},
        2055: function(Ve, ne) {
            var we, ce = typeof self < "u" ? self : this,
                _ = function() {
                    function we() {
                        this.fetch = !1, this.DOMException = ce.DOMException
                    }
                    return we.prototype = ce, new we
                }();
            we = _,
                function(re) {
                    var Ee_searchParams = "URLSearchParams" in we,
                        Ee_iterable = "Symbol" in we && "iterator" in Symbol,
                        Ee_blob = "FileReader" in we && "Blob" in we && function() {
                            try {
                                return new Blob, !0
                            } catch {
                                return !1
                            }
                        }(),
                        Ee_formData = "FormData" in we,
                        Ee_arrayBuffer = "ArrayBuffer" in we;
                    if (Ee_arrayBuffer) var de = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        he = ArrayBuffer.isView || function(P) {
                            return P && de.indexOf(Object.prototype.toString.call(P)) > -1
                        };

                    function pe(P) {
                        if ("string" != typeof P && (P = String(P)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(P)) throw new TypeError("Invalid character in header field name");
                        return P.toLowerCase()
                    }

                    function ze(P) {
                        return "string" != typeof P && (P = String(P)), P
                    }

                    function Ie(P) {
                        var b = {
                            next: function() {
                                var O = P.shift();
                                return {
                                    done: void 0 === O,
                                    value: O
                                }
                            }
                        };
                        return Ee_iterable && (b[Symbol.iterator] = function() {
                            return b
                        }), b
                    }

                    function ve(P) {
                        this.map = {}, P instanceof ve ? P.forEach(function(b, O) {
                            this.append(O, b)
                        }, this) : Array.isArray(P) ? P.forEach(function(b) {
                            this.append(b[0], b[1])
                        }, this) : P && Object.getOwnPropertyNames(P).forEach(function(b) {
                            this.append(b, P[b])
                        }, this)
                    }

                    function fe(P) {
                        if (P.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        P.bodyUsed = !0
                    }

                    function it(P) {
                        return new Promise(function(b, O) {
                            P.onload = function() {
                                b(P.result)
                            }, P.onerror = function() {
                                O(P.error)
                            }
                        })
                    }

                    function Ke(P) {
                        var b = new FileReader,
                            O = it(b);
                        return b.readAsArrayBuffer(P), O
                    }

                    function jt(P) {
                        if (P.slice) return P.slice(0);
                        var b = new Uint8Array(P.byteLength);
                        return b.set(new Uint8Array(P)), b.buffer
                    }

                    function Lt() {
                        return this.bodyUsed = !1, this._initBody = function(P) {
                            this._bodyInit = P, P ? "string" == typeof P ? this._bodyText = P : Ee_blob && Blob.prototype.isPrototypeOf(P) ? this._bodyBlob = P : Ee_formData && FormData.prototype.isPrototypeOf(P) ? this._bodyFormData = P : Ee_searchParams && URLSearchParams.prototype.isPrototypeOf(P) ? this._bodyText = P.toString() : Ee_arrayBuffer && Ee_blob && function Ne(P) {
                                return P && DataView.prototype.isPrototypeOf(P)
                            }(P) ? (this._bodyArrayBuffer = jt(P.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : Ee_arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(P) || he(P)) ? this._bodyArrayBuffer = jt(P) : this._bodyText = P = Object.prototype.toString.call(P) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof P ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : Ee_searchParams && URLSearchParams.prototype.isPrototypeOf(P) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, Ee_blob && (this.blob = function() {
                            var P = fe(this);
                            if (P) return P;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? fe(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Ke)
                        }), this.text = function() {
                            var P = fe(this);
                            if (P) return P;
                            if (this._bodyBlob) return function Je(P) {
                                var b = new FileReader,
                                    O = it(b);
                                return b.readAsText(P), O
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function et(P) {
                                for (var b = new Uint8Array(P), O = new Array(b.length), oe = 0; oe < b.length; oe++) O[oe] = String.fromCharCode(b[oe]);
                                return O.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, Ee_formData && (this.formData = function() {
                            return this.text().then(ue)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    ve.prototype.append = function(P, b) {
                        P = pe(P), b = ze(b);
                        var O = this.map[P];
                        this.map[P] = O ? O + ", " + b : b
                    }, ve.prototype.delete = function(P) {
                        delete this.map[pe(P)]
                    }, ve.prototype.get = function(P) {
                        return P = pe(P), this.has(P) ? this.map[P] : null
                    }, ve.prototype.has = function(P) {
                        return this.map.hasOwnProperty(pe(P))
                    }, ve.prototype.set = function(P, b) {
                        this.map[pe(P)] = ze(b)
                    }, ve.prototype.forEach = function(P, b) {
                        for (var O in this.map) this.map.hasOwnProperty(O) && P.call(b, this.map[O], O, this)
                    }, ve.prototype.keys = function() {
                        var P = [];
                        return this.forEach(function(b, O) {
                            P.push(O)
                        }), Ie(P)
                    }, ve.prototype.values = function() {
                        var P = [];
                        return this.forEach(function(b) {
                            P.push(b)
                        }), Ie(P)
                    }, ve.prototype.entries = function() {
                        var P = [];
                        return this.forEach(function(b, O) {
                            P.push([O, b])
                        }), Ie(P)
                    }, Ee_iterable && (ve.prototype[Symbol.iterator] = ve.prototype.entries);
                    var Ft = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function k(P, b) {
                        var O = (b = b || {}).body;
                        if (P instanceof k) {
                            if (P.bodyUsed) throw new TypeError("Already read");
                            this.url = P.url, this.credentials = P.credentials, b.headers || (this.headers = new ve(P.headers)), this.method = P.method, this.mode = P.mode, this.signal = P.signal, !O && null != P._bodyInit && (O = P._bodyInit, P.bodyUsed = !0)
                        } else this.url = String(P);
                        if (this.credentials = b.credentials || this.credentials || "same-origin", (b.headers || !this.headers) && (this.headers = new ve(b.headers)), this.method = function Qe(P) {
                                var b = P.toUpperCase();
                                return Ft.indexOf(b) > -1 ? b : P
                            }(b.method || this.method || "GET"), this.mode = b.mode || this.mode || null, this.signal = b.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && O) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(O)
                    }

                    function ue(P) {
                        var b = new FormData;
                        return P.trim().split("&").forEach(function(O) {
                            if (O) {
                                var oe = O.split("="),
                                    be = oe.shift().replace(/\+/g, " "),
                                    z = oe.join("=").replace(/\+/g, " ");
                                b.append(decodeURIComponent(be), decodeURIComponent(z))
                            }
                        }), b
                    }

                    function R(P) {
                        var b = new ve;
                        return P.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(oe) {
                            var be = oe.split(":"),
                                z = be.shift().trim();
                            if (z) {
                                var ee = be.join(":").trim();
                                b.append(z, ee)
                            }
                        }), b
                    }

                    function N(P, b) {
                        b || (b = {}), this.type = "default", this.status = void 0 === b.status ? 200 : b.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in b ? b.statusText : "OK", this.headers = new ve(b.headers), this.url = b.url || "", this._initBody(P)
                    }
                    k.prototype.clone = function() {
                        return new k(this, {
                            body: this._bodyInit
                        })
                    }, Lt.call(k.prototype), Lt.call(N.prototype), N.prototype.clone = function() {
                        return new N(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new ve(this.headers),
                            url: this.url
                        })
                    }, N.error = function() {
                        var P = new N(null, {
                            status: 0,
                            statusText: ""
                        });
                        return P.type = "error", P
                    };
                    var C = [301, 302, 303, 307, 308];
                    N.redirect = function(P, b) {
                        if (-1 === C.indexOf(b)) throw new RangeError("Invalid status code");
                        return new N(null, {
                            status: b,
                            headers: {
                                location: P
                            }
                        })
                    }, re.DOMException = we.DOMException;
                    try {
                        new re.DOMException
                    } catch {
                        re.DOMException = function(b, O) {
                            this.message = b, this.name = O;
                            var oe = Error(b);
                            this.stack = oe.stack
                        }, re.DOMException.prototype = Object.create(Error.prototype), re.DOMException.prototype.constructor = re.DOMException
                    }

                    function q(P, b) {
                        return new Promise(function(O, oe) {
                            var be = new k(P, b);
                            if (be.signal && be.signal.aborted) return oe(new re.DOMException("Aborted", "AbortError"));
                            var z = new XMLHttpRequest;

                            function ee() {
                                z.abort()
                            }
                            z.onload = function() {
                                var ae = {
                                    status: z.status,
                                    statusText: z.statusText,
                                    headers: R(z.getAllResponseHeaders() || "")
                                };
                                ae.url = "responseURL" in z ? z.responseURL : ae.headers.get("X-Request-URL"), O(new N("response" in z ? z.response : z.responseText, ae))
                            }, z.onerror = function() {
                                oe(new TypeError("Network request failed"))
                            }, z.ontimeout = function() {
                                oe(new TypeError("Network request failed"))
                            }, z.onabort = function() {
                                oe(new re.DOMException("Aborted", "AbortError"))
                            }, z.open(be.method, be.url, !0), "include" === be.credentials ? z.withCredentials = !0 : "omit" === be.credentials && (z.withCredentials = !1), "responseType" in z && Ee_blob && (z.responseType = "blob"), be.headers.forEach(function(ae, W) {
                                z.setRequestHeader(W, ae)
                            }), be.signal && (be.signal.addEventListener("abort", ee), z.onreadystatechange = function() {
                                4 === z.readyState && be.signal.removeEventListener("abort", ee)
                            }), z.send(typeof be._bodyInit > "u" ? null : be._bodyInit)
                        })
                    }
                    q.polyfill = !0, we.fetch || (we.fetch = q, we.Headers = ve, we.Request = k, we.Response = N), re.Headers = ve, re.Request = k, re.Response = N, re.fetch = q, Object.defineProperty(re, "__esModule", {
                        value: !0
                    })
                }({}), _.fetch.ponyfill = !0, delete _.fetch.polyfill;
            var ye = _;
            (ne = ye.fetch).default = ye.fetch, ne.fetch = ye.fetch, ne.Headers = ye.Headers, ne.Request = ye.Request, ne.Response = ye.Response, Ve.exports = ne
        },
        9557: (Ve, ne, ce) => {
            Ve.exports = self.fetch || (self.fetch = ce(8456).default || ce(8456))
        },
        2650: (Ve, ne, ce) => {
            Ve = ce.nmd(Ve);
            var ye = "__lodash_hash_undefined__",
                we = 1,
                E = 2,
                re = 9007199254740991,
                Ee = "[object Arguments]",
                Ne = "[object Array]",
                de = "[object AsyncFunction]",
                he = "[object Boolean]",
                pe = "[object Date]",
                ze = "[object Error]",
                Ie = "[object Function]",
                ve = "[object GeneratorFunction]",
                fe = "[object Map]",
                it = "[object Number]",
                Ke = "[object Null]",
                Je = "[object Object]",
                et = "[object Promise]",
                jt = "[object Proxy]",
                Lt = "[object RegExp]",
                Ft = "[object Set]",
                Qe = "[object String]",
                ue = "[object Undefined]",
                R = "[object WeakMap]",
                N = "[object ArrayBuffer]",
                C = "[object DataView]",
                Se = /^\[object .+?Constructor\]$/,
                Ge = /^(?:0|[1-9]\d*)$/,
                Fe = {};
            Fe["[object Float32Array]"] = Fe["[object Float64Array]"] = Fe["[object Int8Array]"] = Fe["[object Int16Array]"] = Fe["[object Int32Array]"] = Fe["[object Uint8Array]"] = Fe["[object Uint8ClampedArray]"] = Fe["[object Uint16Array]"] = Fe["[object Uint32Array]"] = !0, Fe[Ee] = Fe[Ne] = Fe[N] = Fe[he] = Fe[C] = Fe[pe] = Fe[ze] = Fe[Ie] = Fe[fe] = Fe[it] = Fe[Je] = Fe[Lt] = Fe[Ft] = Fe[Qe] = Fe[R] = !1;
            var $t = "object" == typeof global && global && global.Object === Object && global,
                on = "object" == typeof self && self && self.Object === Object && self,
                _t = $t || on || Function("return this")(),
                K = ne && !ne.nodeType && ne,
                V = K && Ve && !Ve.nodeType && Ve,
                $ = V && V.exports === K,
                y = $ && $t.process,
                L = function() {
                    try {
                        return y && y.binding && y.binding("util")
                    } catch {}
                }(),
                Pe = L && L.isTypedArray;

            function wt(I, F) {
                for (var te = -1, _e = null == I ? 0 : I.length; ++te < _e;)
                    if (F(I[te], te, I)) return !0;
                return !1
            }

            function Jt(I, F) {
                return I.has(F)
            }

            function xt(I) {
                var F = -1,
                    te = Array(I.size);
                return I.forEach(function(_e, gt) {
                    te[++F] = [gt, _e]
                }), te
            }

            function Ut(I) {
                var F = -1,
                    te = Array(I.size);
                return I.forEach(function(_e) {
                    te[++F] = _e
                }), te
            }
            var I, Zt = Array.prototype,
                dt = Object.prototype,
                pt = _t["__core-js_shared__"],
                ht = Function.prototype.toString,
                Ye = dt.hasOwnProperty,
                Qt = (I = /[^.]+$/.exec(pt && pt.keys && pt.keys.IE_PROTO || "")) ? "Symbol(src)_1." + I : "",
                or = dt.toString,
                gr = RegExp("^" + ht.call(Ye).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                lr = $ ? _t.Buffer : void 0,
                fr = _t.Symbol,
                Or = _t.Uint8Array,
                Dr = dt.propertyIsEnumerable,
                br = Zt.splice,
                yr = fr ? fr.toStringTag : void 0,
                Nr = Object.getOwnPropertySymbols,
                Pn = lr ? lr.isBuffer : void 0,
                Kr = function sr(I, F) {
                    return function(te) {
                        return I(F(te))
                    }
                }(Object.keys, Object),
                an = Rn(_t, "DataView"),
                vn = Rn(_t, "Map"),
                Rt = Rn(_t, "Promise"),
                At = Rn(_t, "Set"),
                zt = Rn(_t, "WeakMap"),
                It = Rn(Object, "create"),
                Yt = Vr(an),
                Xt = Vr(vn),
                er = Vr(Rt),
                Bt = Vr(At),
                tr = Vr(zt),
                Ht = fr ? fr.prototype : void 0,
                Tt = Ht ? Ht.valueOf : void 0;

            function at(I) {
                var F = -1,
                    te = null == I ? 0 : I.length;
                for (this.clear(); ++F < te;) {
                    var _e = I[F];
                    this.set(_e[0], _e[1])
                }
            }

            function cn(I) {
                var F = -1,
                    te = null == I ? 0 : I.length;
                for (this.clear(); ++F < te;) {
                    var _e = I[F];
                    this.set(_e[0], _e[1])
                }
            }

            function Sn(I) {
                var F = -1,
                    te = null == I ? 0 : I.length;
                for (this.clear(); ++F < te;) {
                    var _e = I[F];
                    this.set(_e[0], _e[1])
                }
            }

            function wi(I) {
                var F = -1,
                    te = null == I ? 0 : I.length;
                for (this.__data__ = new Sn; ++F < te;) this.add(I[F])
            }

            function On(I) {
                var F = this.__data__ = new cn(I);
                this.size = F.size
            }

            function Bi(I, F) {
                for (var te = I.length; te--;)
                    if (Ki(I[te][0], F)) return te;
                return -1
            }

            function kn(I) {
                return null == I ? void 0 === I ? ue : Ke : yr && yr in Object(I) ? function ra(I) {
                    var F = Ye.call(I, yr),
                        te = I[yr];
                    try {
                        I[yr] = void 0;
                        var _e = !0
                    } catch {}
                    var gt = or.call(I);
                    return _e && (F ? I[yr] = te : delete I[yr]), gt
                }(I) : function Ei(I) {
                    return or.call(I)
                }(I)
            }

            function Rs(I) {
                return ci(I) && kn(I) == Ee
            }

            function Oe(I, F, te, _e, gt) {
                return I === F || (null == I || null == F || !ci(I) && !ci(F) ? I != I && F != F : function Yo(I, F, te, _e, gt, je) {
                    var mt = Ii(I),
                        ir = Ii(F),
                        hr = mt ? Ne : An(I),
                        ct = ir ? Ne : An(F),
                        Er = (hr = hr == Ee ? Je : hr) == Je,
                        Gr = (ct = ct == Ee ? Je : ct) == Je,
                        ar = hr == ct;
                    if (ar && Vi(I)) {
                        if (!Vi(F)) return !1;
                        mt = !0, Er = !1
                    }
                    if (ar && !Er) return je || (je = new On), mt || Pi(I) ? Cs(I, F, te, _e, gt, je) : function ea(I, F, te, _e, gt, je, mt) {
                        switch (te) {
                            case C:
                                if (I.byteLength != F.byteLength || I.byteOffset != F.byteOffset) return !1;
                                I = I.buffer, F = F.buffer;
                            case N:
                                return !(I.byteLength != F.byteLength || !je(new Or(I), new Or(F)));
                            case he:
                            case pe:
                            case it:
                                return Ki(+I, +F);
                            case ze:
                                return I.name == F.name && I.message == F.message;
                            case Lt:
                            case Qe:
                                return I == F + "";
                            case fe:
                                var ir = xt;
                            case Ft:
                                if (ir || (ir = Ut), I.size != F.size && !(_e & we)) return !1;
                                var ct = mt.get(I);
                                if (ct) return ct == F;
                                _e |= E, mt.set(I, F);
                                var Er = Cs(ir(I), ir(F), _e, gt, je, mt);
                                return mt.delete(I), Er;
                            case "[object Symbol]":
                                if (Tt) return Tt.call(I) == Tt.call(F)
                        }
                        return !1
                    }(I, F, hr, te, _e, gt, je);
                    if (!(te & we)) {
                        var jr = Er && Ye.call(I, "__wrapped__"),
                            Rr = Gr && Ye.call(F, "__wrapped__");
                        if (jr || Rr) {
                            var un = jr ? I.value() : I,
                                _n = Rr ? F.value() : F;
                            return je || (je = new On), gt(un, _n, te, _e, je)
                        }
                    }
                    return !!ar && (je || (je = new On), function ta(I, F, te, _e, gt, je) {
                        var mt = te & we,
                            ir = Ds(I),
                            hr = ir.length;
                        if (hr != Ds(F).length && !mt) return !1;
                        for (var Gr = hr; Gr--;) {
                            var ar = ir[Gr];
                            if (!(mt ? ar in F : Ye.call(F, ar))) return !1
                        }
                        var jr = je.get(I);
                        if (jr && je.get(F)) return jr == F;
                        var Rr = !0;
                        je.set(I, F), je.set(F, I);
                        for (var un = mt; ++Gr < hr;) {
                            var _n = I[ar = ir[Gr]],
                                mn = F[ar];
                            if (_e) var js = mt ? _e(mn, _n, ar, F, I, je) : _e(_n, mn, ar, I, F, je);
                            if (!(void 0 === js ? _n === mn || gt(_n, mn, te, _e, je) : js)) {
                                Rr = !1;
                                break
                            }
                            un || (un = "constructor" == ar)
                        }
                        if (Rr && !un) {
                            var Ji = I.constructor,
                                Kn = F.constructor;
                            Ji != Kn && "constructor" in I && "constructor" in F && !("function" == typeof Ji && Ji instanceof Ji && "function" == typeof Kn && Kn instanceof Kn) && (Rr = !1)
                        }
                        return je.delete(I), je.delete(F), Rr
                    }(I, F, te, _e, gt, je))
                }(I, F, te, _e, Oe, gt))
            }

            function Cs(I, F, te, _e, gt, je) {
                var mt = te & we,
                    ir = I.length,
                    hr = F.length;
                if (ir != hr && !(mt && hr > ir)) return !1;
                var ct = je.get(I);
                if (ct && je.get(F)) return ct == F;
                var Er = -1,
                    Gr = !0,
                    ar = te & E ? new wi : void 0;
                for (je.set(I, F), je.set(F, I); ++Er < ir;) {
                    var jr = I[Er],
                        Rr = F[Er];
                    if (_e) var un = mt ? _e(Rr, jr, Er, F, I, je) : _e(jr, Rr, Er, I, F, je);
                    if (void 0 !== un) {
                        if (un) continue;
                        Gr = !1;
                        break
                    }
                    if (ar) {
                        if (!wt(F, function(_n, mn) {
                                if (!Jt(ar, mn) && (jr === _n || gt(jr, _n, te, _e, je))) return ar.push(mn)
                            })) {
                            Gr = !1;
                            break
                        }
                    } else if (jr !== Rr && !gt(jr, Rr, te, _e, je)) {
                        Gr = !1;
                        break
                    }
                }
                return je.delete(I), je.delete(F), Gr
            }

            function Ds(I) {
                return function Qo(I, F, te) {
                    var _e = F(I);
                    return Ii(I) ? _e : function tt(I, F) {
                        for (var te = -1, _e = F.length, gt = I.length; ++te < _e;) I[gt + te] = F[te];
                        return I
                    }(_e, te(I))
                }(I, ru, na)
            }

            function xi(I, F) {
                var te = I.__data__;
                return function sa(I) {
                    var F = typeof I;
                    return "string" == F || "number" == F || "symbol" == F || "boolean" == F ? "__proto__" !== I : null === I
                }(F) ? te["string" == typeof F ? "string" : "hash"] : te.map
            }

            function Rn(I, F) {
                var te = function Mt(I, F) {
                    return I ? .[F]
                }(I, F);
                return function Xo(I) {
                    return !(!Gi(I) || function Hi(I) {
                        return !!Qt && Qt in I
                    }(I)) && (Ns(I) ? gr : Se).test(Vr(I))
                }(te) ? te : void 0
            }
            at.prototype.clear = function Ct() {
                this.__data__ = It ? It(null) : {}, this.size = 0
            }, at.prototype.delete = function Dt(I) {
                var F = this.has(I) && delete this.__data__[I];
                return this.size -= F ? 1 : 0, F
            }, at.prototype.get = function rr(I) {
                var F = this.__data__;
                if (It) {
                    var te = F[I];
                    return te === ye ? void 0 : te
                }
                return Ye.call(F, I) ? F[I] : void 0
            }, at.prototype.has = function nr(I) {
                var F = this.__data__;
                return It ? void 0 !== F[I] : Ye.call(F, I)
            }, at.prototype.set = function wr(I, F) {
                var te = this.__data__;
                return this.size += this.has(I) ? 0 : 1, te[I] = It && void 0 === F ? ye : F, this
            }, cn.prototype.clear = function xr() {
                this.__data__ = [], this.size = 0
            }, cn.prototype.delete = function qo(I) {
                var F = this.__data__,
                    te = Bi(F, I);
                return !(te < 0 || (te == F.length - 1 ? F.pop() : br.call(F, te, 1), --this.size, 0))
            }, cn.prototype.get = function $o(I) {
                var F = this.__data__,
                    te = Bi(F, I);
                return te < 0 ? void 0 : F[te][1]
            }, cn.prototype.has = function Wc(I) {
                return Bi(this.__data__, I) > -1
            }, cn.prototype.set = function Hn(I, F) {
                var te = this.__data__,
                    _e = Bi(te, I);
                return _e < 0 ? (++this.size, te.push([I, F])) : te[_e][1] = F, this
            }, Sn.prototype.clear = function Jc() {
                this.size = 0, this.__data__ = {
                    hash: new at,
                    map: new(vn || cn),
                    string: new at
                }
            }, Sn.prototype.delete = function Uo(I) {
                var F = xi(this, I).delete(I);
                return this.size -= F ? 1 : 0, F
            }, Sn.prototype.get = function Bo(I) {
                return xi(this, I).get(I)
            }, Sn.prototype.has = function Ho(I) {
                return xi(this, I).has(I)
            }, Sn.prototype.set = function ko(I, F) {
                var te = xi(this, I),
                    _e = te.size;
                return te.set(I, F), this.size += te.size == _e ? 0 : 1, this
            }, wi.prototype.add = wi.prototype.push = function Qc(I) {
                return this.__data__.set(I, ye), this
            }, wi.prototype.has = function Ko(I) {
                return this.__data__.has(I)
            }, On.prototype.clear = function Vo() {
                this.__data__ = new cn, this.size = 0
            }, On.prototype.delete = function Yc(I) {
                var F = this.__data__,
                    te = F.delete(I);
                return this.size = F.size, te
            }, On.prototype.get = function Go(I) {
                return this.__data__.get(I)
            }, On.prototype.has = function Wo(I) {
                return this.__data__.has(I)
            }, On.prototype.set = function Xc(I, F) {
                var te = this.__data__;
                if (te instanceof cn) {
                    var _e = te.__data__;
                    if (!vn || _e.length < 199) return _e.push([I, F]), this.size = ++te.size, this;
                    te = this.__data__ = new Sn(_e)
                }
                return te.set(I, F), this.size = te.size, this
            };
            var na = Nr ? function(I) {
                    return null == I ? [] : (I = Object(I), function De(I, F) {
                        for (var te = -1, _e = null == I ? 0 : I.length, gt = 0, je = []; ++te < _e;) {
                            var mt = I[te];
                            F(mt, te, I) && (je[gt++] = mt)
                        }
                        return je
                    }(Nr(I), function(F) {
                        return Dr.call(I, F)
                    }))
                } : function Wi() {
                    return []
                },
                An = kn;

            function ia(I, F) {
                return !!(F = F ? ? re) && ("number" == typeof I || Ge.test(I)) && I > -1 && I % 1 == 0 && I < F
            }

            function Vr(I) {
                if (null != I) {
                    try {
                        return ht.call(I)
                    } catch {}
                    try {
                        return I + ""
                    } catch {}
                }
                return ""
            }

            function Ki(I, F) {
                return I === F || I != I && F != F
            }(an && An(new an(new ArrayBuffer(1))) != C || vn && An(new vn) != fe || Rt && An(Rt.resolve()) != et || At && An(new At) != Ft || zt && An(new zt) != R) && (An = function(I) {
                var F = kn(I),
                    te = F == Je ? I.constructor : void 0,
                    _e = te ? Vr(te) : "";
                if (_e) switch (_e) {
                    case Yt:
                        return C;
                    case Xt:
                        return fe;
                    case er:
                        return et;
                    case Bt:
                        return Ft;
                    case tr:
                        return R
                }
                return F
            });
            var eu = Rs(function() {
                    return arguments
                }()) ? Rs : function(I) {
                    return ci(I) && Ye.call(I, "callee") && !Dr.call(I, "callee")
                },
                Ii = Array.isArray,
                Vi = Pn || function nu() {
                    return !1
                };

            function Ns(I) {
                if (!Gi(I)) return !1;
                var F = kn(I);
                return F == Ie || F == ve || F == de || F == jt
            }

            function aa(I) {
                return "number" == typeof I && I > -1 && I % 1 == 0 && I <= re
            }

            function Gi(I) {
                var F = typeof I;
                return null != I && ("object" == F || "function" == F)
            }

            function ci(I) {
                return null != I && "object" == typeof I
            }
            var Pi = Pe ? function ft(I) {
                return function(F) {
                    return I(F)
                }
            }(Pe) : function As(I) {
                return ci(I) && aa(I.length) && !!Fe[kn(I)]
            };

            function ru(I) {
                return function oa(I) {
                    return null != I && aa(I.length) && !Ns(I)
                }(I) ? function Jo(I, F) {
                    var te = Ii(I),
                        _e = !te && eu(I),
                        gt = !te && !_e && Vi(I),
                        je = !te && !_e && !gt && Pi(I),
                        mt = te || _e || gt || je,
                        ir = mt ? function st(I, F) {
                            for (var te = -1, _e = Array(I); ++te < I;) _e[te] = F(te);
                            return _e
                        }(I.length, String) : [],
                        hr = ir.length;
                    for (var ct in I)(F || Ye.call(I, ct)) && (!mt || !("length" == ct || gt && ("offset" == ct || "parent" == ct) || je && ("buffer" == ct || "byteLength" == ct || "byteOffset" == ct) || ia(ct, hr))) && ir.push(ct);
                    return ir
                }(I) : function Ts(I) {
                    if (! function ki(I) {
                            var F = I && I.constructor;
                            return I === ("function" == typeof F && F.prototype || dt)
                        }(I)) return Kr(I);
                    var F = [];
                    for (var te in Object(I)) Ye.call(I, te) && "constructor" != te && F.push(te);
                    return F
                }(I)
            }
            Ve.exports = function tu(I, F) {
                return Oe(I, F)
            }
        },
        514: Ve => {
            "use strict";

            function ne(_) {
                try {
                    return JSON.stringify(_)
                } catch {
                    return '"[Circular]"'
                }
            }
            Ve.exports = function ce(_, ye, we) {
                var E = we && we.stringify || ne;
                if ("object" == typeof _ && null !== _) {
                    var Ee = ye.length + 1;
                    if (1 === Ee) return _;
                    var Ne = new Array(Ee);
                    Ne[0] = E(_);
                    for (var de = 1; de < Ee; de++) Ne[de] = E(ye[de]);
                    return Ne.join(" ")
                }
                if ("string" != typeof _) return _;
                var he = ye.length;
                if (0 === he) return _;
                for (var pe = "", ze = 0, Ie = -1, ve = _ && _.length || 0, fe = 0; fe < ve;) {
                    if (37 === _.charCodeAt(fe) && fe + 1 < ve) {
                        switch (Ie = Ie > -1 ? Ie : 0, _.charCodeAt(fe + 1)) {
                            case 100:
                            case 102:
                                if (ze >= he || null == ye[ze]) break;
                                Ie < fe && (pe += _.slice(Ie, fe)), pe += Number(ye[ze]), Ie = fe + 2, fe++;
                                break;
                            case 105:
                                if (ze >= he || null == ye[ze]) break;
                                Ie < fe && (pe += _.slice(Ie, fe)), pe += Math.floor(Number(ye[ze])), Ie = fe + 2, fe++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (ze >= he || void 0 === ye[ze]) break;
                                Ie < fe && (pe += _.slice(Ie, fe));
                                var it = typeof ye[ze];
                                if ("string" === it) {
                                    pe += "'" + ye[ze] + "'", Ie = fe + 2, fe++;
                                    break
                                }
                                if ("function" === it) {
                                    pe += ye[ze].name || "<anonymous>", Ie = fe + 2, fe++;
                                    break
                                }
                                pe += E(ye[ze]), Ie = fe + 2, fe++;
                                break;
                            case 115:
                                if (ze >= he) break;
                                Ie < fe && (pe += _.slice(Ie, fe)), pe += String(ye[ze]), Ie = fe + 2, fe++;
                                break;
                            case 37:
                                Ie < fe && (pe += _.slice(Ie, fe)), pe += "%", Ie = fe + 2, fe++, ze--
                        }++ze
                    }++fe
                }
                return -1 === Ie ? _ : (Ie < ve && (pe += _.slice(Ie)), pe)
            }
        },
        8456: (Ve, ne, ce) => {
            "use strict";

            function _(ye, we) {
                return we = we || {}, new Promise(function(E, re) {
                    var Ee = new XMLHttpRequest,
                        Ne = [],
                        de = [],
                        he = {},
                        pe = function() {
                            return {
                                ok: 2 == (Ee.status / 100 | 0),
                                statusText: Ee.statusText,
                                status: Ee.status,
                                url: Ee.responseURL,
                                text: function() {
                                    return Promise.resolve(Ee.responseText)
                                },
                                json: function() {
                                    return Promise.resolve(Ee.responseText).then(JSON.parse)
                                },
                                blob: function() {
                                    return Promise.resolve(new Blob([Ee.response]))
                                },
                                clone: pe,
                                headers: {
                                    keys: function() {
                                        return Ne
                                    },
                                    entries: function() {
                                        return de
                                    },
                                    get: function(Ie) {
                                        return he[Ie.toLowerCase()]
                                    },
                                    has: function(Ie) {
                                        return Ie.toLowerCase() in he
                                    }
                                }
                            }
                        };
                    for (var ze in Ee.open(we.method || "get", ye, !0), Ee.onload = function() {
                            Ee.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(Ie, ve, fe) {
                                Ne.push(ve = ve.toLowerCase()), de.push([ve, fe]), he[ve] = he[ve] ? he[ve] + "," + fe : fe
                            }), E(pe())
                        }, Ee.onerror = re, Ee.withCredentials = "include" == we.credentials, we.headers) Ee.setRequestHeader(ze, we.headers[ze]);
                    Ee.send(we.body || null)
                })
            }
            ce.r(ne), ce.d(ne, {
                default: () => _
            })
        },
        3569: Ve => {
            "use strict";
            Ve.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        4308: (Ve, ne, ce) => {
            "use strict";
            ce.r(ne), ce.d(ne, {
                __assign: () => we,
                __asyncDelegator: () => et,
                __asyncGenerator: () => Je,
                __asyncValues: () => jt,
                __await: () => Ke,
                __awaiter: () => de,
                __classPrivateFieldGet: () => k,
                __classPrivateFieldSet: () => ue,
                __createBinding: () => pe,
                __decorate: () => re,
                __exportStar: () => ze,
                __extends: () => ye,
                __generator: () => he,
                __importDefault: () => Qe,
                __importStar: () => Ft,
                __makeTemplateObject: () => Lt,
                __metadata: () => Ne,
                __param: () => Ee,
                __read: () => ve,
                __rest: () => E,
                __spread: () => fe,
                __spreadArrays: () => it,
                __values: () => Ie
            });
            var _ = function(R, N) {
                return (_ = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(C, q) {
                        C.__proto__ = q
                    } || function(C, q) {
                        for (var P in q) q.hasOwnProperty(P) && (C[P] = q[P])
                    })(R, N)
            };

            function ye(R, N) {
                function C() {
                    this.constructor = R
                }
                _(R, N), R.prototype = null === N ? Object.create(N) : (C.prototype = N.prototype, new C)
            }
            var we = function() {
                return we = Object.assign || function(N) {
                    for (var C, q = 1, P = arguments.length; q < P; q++)
                        for (var b in C = arguments[q]) Object.prototype.hasOwnProperty.call(C, b) && (N[b] = C[b]);
                    return N
                }, we.apply(this, arguments)
            };

            function E(R, N) {
                var C = {};
                for (var q in R) Object.prototype.hasOwnProperty.call(R, q) && N.indexOf(q) < 0 && (C[q] = R[q]);
                if (null != R && "function" == typeof Object.getOwnPropertySymbols) {
                    var P = 0;
                    for (q = Object.getOwnPropertySymbols(R); P < q.length; P++) N.indexOf(q[P]) < 0 && Object.prototype.propertyIsEnumerable.call(R, q[P]) && (C[q[P]] = R[q[P]])
                }
                return C
            }

            function re(R, N, C, q) {
                var O, P = arguments.length,
                    b = P < 3 ? N : null === q ? q = Object.getOwnPropertyDescriptor(N, C) : q;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) b = Reflect.decorate(R, N, C, q);
                else
                    for (var oe = R.length - 1; oe >= 0; oe--)(O = R[oe]) && (b = (P < 3 ? O(b) : P > 3 ? O(N, C, b) : O(N, C)) || b);
                return P > 3 && b && Object.defineProperty(N, C, b), b
            }

            function Ee(R, N) {
                return function(C, q) {
                    N(C, q, R)
                }
            }

            function Ne(R, N) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(R, N)
            }

            function de(R, N, C, q) {
                return new(C || (C = Promise))(function(b, O) {
                    function oe(ee) {
                        try {
                            z(q.next(ee))
                        } catch (ae) {
                            O(ae)
                        }
                    }

                    function be(ee) {
                        try {
                            z(q.throw(ee))
                        } catch (ae) {
                            O(ae)
                        }
                    }

                    function z(ee) {
                        ee.done ? b(ee.value) : function P(b) {
                            return b instanceof C ? b : new C(function(O) {
                                O(b)
                            })
                        }(ee.value).then(oe, be)
                    }
                    z((q = q.apply(R, N || [])).next())
                })
            }

            function he(R, N) {
                var q, P, b, O, C = {
                    label: 0,
                    sent: function() {
                        if (1 & b[0]) throw b[1];
                        return b[1]
                    },
                    trys: [],
                    ops: []
                };
                return O = {
                    next: oe(0),
                    throw: oe(1),
                    return: oe(2)
                }, "function" == typeof Symbol && (O[Symbol.iterator] = function() {
                    return this
                }), O;

                function oe(z) {
                    return function(ee) {
                        return function be(z) {
                            if (q) throw new TypeError("Generator is already executing.");
                            for (; C;) try {
                                if (q = 1, P && (b = 2 & z[0] ? P.return : z[0] ? P.throw || ((b = P.return) && b.call(P), 0) : P.next) && !(b = b.call(P, z[1])).done) return b;
                                switch (P = 0, b && (z = [2 & z[0], b.value]), z[0]) {
                                    case 0:
                                    case 1:
                                        b = z;
                                        break;
                                    case 4:
                                        return C.label++, {
                                            value: z[1],
                                            done: !1
                                        };
                                    case 5:
                                        C.label++, P = z[1], z = [0];
                                        continue;
                                    case 7:
                                        z = C.ops.pop(), C.trys.pop();
                                        continue;
                                    default:
                                        if (!(b = (b = C.trys).length > 0 && b[b.length - 1]) && (6 === z[0] || 2 === z[0])) {
                                            C = 0;
                                            continue
                                        }
                                        if (3 === z[0] && (!b || z[1] > b[0] && z[1] < b[3])) {
                                            C.label = z[1];
                                            break
                                        }
                                        if (6 === z[0] && C.label < b[1]) {
                                            C.label = b[1], b = z;
                                            break
                                        }
                                        if (b && C.label < b[2]) {
                                            C.label = b[2], C.ops.push(z);
                                            break
                                        }
                                        b[2] && C.ops.pop(), C.trys.pop();
                                        continue
                                }
                                z = N.call(R, C)
                            } catch (ee) {
                                z = [6, ee], P = 0
                            } finally {
                                q = b = 0
                            }
                            if (5 & z[0]) throw z[1];
                            return {
                                value: z[0] ? z[1] : void 0,
                                done: !0
                            }
                        }([z, ee])
                    }
                }
            }

            function pe(R, N, C, q) {
                void 0 === q && (q = C), R[q] = N[C]
            }

            function ze(R, N) {
                for (var C in R) "default" !== C && !N.hasOwnProperty(C) && (N[C] = R[C])
            }

            function Ie(R) {
                var N = "function" == typeof Symbol && Symbol.iterator,
                    C = N && R[N],
                    q = 0;
                if (C) return C.call(R);
                if (R && "number" == typeof R.length) return {
                    next: function() {
                        return R && q >= R.length && (R = void 0), {
                            value: R && R[q++],
                            done: !R
                        }
                    }
                };
                throw new TypeError(N ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function ve(R, N) {
                var C = "function" == typeof Symbol && R[Symbol.iterator];
                if (!C) return R;
                var P, O, q = C.call(R),
                    b = [];
                try {
                    for (;
                        (void 0 === N || N-- > 0) && !(P = q.next()).done;) b.push(P.value)
                } catch (oe) {
                    O = {
                        error: oe
                    }
                } finally {
                    try {
                        P && !P.done && (C = q.return) && C.call(q)
                    } finally {
                        if (O) throw O.error
                    }
                }
                return b
            }

            function fe() {
                for (var R = [], N = 0; N < arguments.length; N++) R = R.concat(ve(arguments[N]));
                return R
            }

            function it() {
                for (var R = 0, N = 0, C = arguments.length; N < C; N++) R += arguments[N].length;
                var q = Array(R),
                    P = 0;
                for (N = 0; N < C; N++)
                    for (var b = arguments[N], O = 0, oe = b.length; O < oe; O++, P++) q[P] = b[O];
                return q
            }

            function Ke(R) {
                return this instanceof Ke ? (this.v = R, this) : new Ke(R)
            }

            function Je(R, N, C) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var P, q = C.apply(R, N || []),
                    b = [];
                return P = {}, O("next"), O("throw"), O("return"), P[Symbol.asyncIterator] = function() {
                    return this
                }, P;

                function O(W) {
                    q[W] && (P[W] = function(Se) {
                        return new Promise(function(Ge, Fe) {
                            b.push([W, Se, Ge, Fe]) > 1 || oe(W, Se)
                        })
                    })
                }

                function oe(W, Se) {
                    try {
                        ! function be(W) {
                            W.value instanceof Ke ? Promise.resolve(W.value.v).then(z, ee) : ae(b[0][2], W)
                        }(q[W](Se))
                    } catch (Ge) {
                        ae(b[0][3], Ge)
                    }
                }

                function z(W) {
                    oe("next", W)
                }

                function ee(W) {
                    oe("throw", W)
                }

                function ae(W, Se) {
                    W(Se), b.shift(), b.length && oe(b[0][0], b[0][1])
                }
            }

            function et(R) {
                var N, C;
                return N = {}, q("next"), q("throw", function(P) {
                    throw P
                }), q("return"), N[Symbol.iterator] = function() {
                    return this
                }, N;

                function q(P, b) {
                    N[P] = R[P] ? function(O) {
                        return (C = !C) ? {
                            value: Ke(R[P](O)),
                            done: "return" === P
                        } : b ? b(O) : O
                    } : b
                }
            }

            function jt(R) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var C, N = R[Symbol.asyncIterator];
                return N ? N.call(R) : (R = Ie(R), C = {}, q("next"), q("throw"), q("return"), C[Symbol.asyncIterator] = function() {
                    return this
                }, C);

                function q(b) {
                    C[b] = R[b] && function(O) {
                        return new Promise(function(oe, be) {
                            ! function P(b, O, oe, be) {
                                Promise.resolve(be).then(function(z) {
                                    b({
                                        value: z,
                                        done: oe
                                    })
                                }, O)
                            }(oe, be, (O = R[b](O)).done, O.value)
                        })
                    }
                }
            }

            function Lt(R, N) {
                return Object.defineProperty ? Object.defineProperty(R, "raw", {
                    value: N
                }) : R.raw = N, R
            }

            function Ft(R) {
                if (R && R.__esModule) return R;
                var N = {};
                if (null != R)
                    for (var C in R) Object.hasOwnProperty.call(R, C) && (N[C] = R[C]);
                return N.default = R, N
            }

            function Qe(R) {
                return R && R.__esModule ? R : {
                    default: R
                }
            }

            function k(R, N) {
                if (!N.has(R)) throw new TypeError("attempted to get private field on non-instance");
                return N.get(R)
            }

            function ue(R, N, C) {
                if (!N.has(R)) throw new TypeError("attempted to set private field on non-instance");
                return N.set(R, C), C
            }
        },
        9653: (Ve, ne, ce) => {
            "use strict";
            ce.r(ne), ce.d(ne, {
                __assign: () => we,
                __asyncDelegator: () => et,
                __asyncGenerator: () => Je,
                __asyncValues: () => jt,
                __await: () => Ke,
                __awaiter: () => de,
                __classPrivateFieldGet: () => k,
                __classPrivateFieldSet: () => ue,
                __createBinding: () => pe,
                __decorate: () => re,
                __exportStar: () => ze,
                __extends: () => ye,
                __generator: () => he,
                __importDefault: () => Qe,
                __importStar: () => Ft,
                __makeTemplateObject: () => Lt,
                __metadata: () => Ne,
                __param: () => Ee,
                __read: () => ve,
                __rest: () => E,
                __spread: () => fe,
                __spreadArrays: () => it,
                __values: () => Ie
            });
            var _ = function(R, N) {
                return (_ = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(C, q) {
                        C.__proto__ = q
                    } || function(C, q) {
                        for (var P in q) q.hasOwnProperty(P) && (C[P] = q[P])
                    })(R, N)
            };

            function ye(R, N) {
                function C() {
                    this.constructor = R
                }
                _(R, N), R.prototype = null === N ? Object.create(N) : (C.prototype = N.prototype, new C)
            }
            var we = function() {
                return we = Object.assign || function(N) {
                    for (var C, q = 1, P = arguments.length; q < P; q++)
                        for (var b in C = arguments[q]) Object.prototype.hasOwnProperty.call(C, b) && (N[b] = C[b]);
                    return N
                }, we.apply(this, arguments)
            };

            function E(R, N) {
                var C = {};
                for (var q in R) Object.prototype.hasOwnProperty.call(R, q) && N.indexOf(q) < 0 && (C[q] = R[q]);
                if (null != R && "function" == typeof Object.getOwnPropertySymbols) {
                    var P = 0;
                    for (q = Object.getOwnPropertySymbols(R); P < q.length; P++) N.indexOf(q[P]) < 0 && Object.prototype.propertyIsEnumerable.call(R, q[P]) && (C[q[P]] = R[q[P]])
                }
                return C
            }

            function re(R, N, C, q) {
                var O, P = arguments.length,
                    b = P < 3 ? N : null === q ? q = Object.getOwnPropertyDescriptor(N, C) : q;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) b = Reflect.decorate(R, N, C, q);
                else
                    for (var oe = R.length - 1; oe >= 0; oe--)(O = R[oe]) && (b = (P < 3 ? O(b) : P > 3 ? O(N, C, b) : O(N, C)) || b);
                return P > 3 && b && Object.defineProperty(N, C, b), b
            }

            function Ee(R, N) {
                return function(C, q) {
                    N(C, q, R)
                }
            }

            function Ne(R, N) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(R, N)
            }

            function de(R, N, C, q) {
                return new(C || (C = Promise))(function(b, O) {
                    function oe(ee) {
                        try {
                            z(q.next(ee))
                        } catch (ae) {
                            O(ae)
                        }
                    }

                    function be(ee) {
                        try {
                            z(q.throw(ee))
                        } catch (ae) {
                            O(ae)
                        }
                    }

                    function z(ee) {
                        ee.done ? b(ee.value) : function P(b) {
                            return b instanceof C ? b : new C(function(O) {
                                O(b)
                            })
                        }(ee.value).then(oe, be)
                    }
                    z((q = q.apply(R, N || [])).next())
                })
            }

            function he(R, N) {
                var q, P, b, O, C = {
                    label: 0,
                    sent: function() {
                        if (1 & b[0]) throw b[1];
                        return b[1]
                    },
                    trys: [],
                    ops: []
                };
                return O = {
                    next: oe(0),
                    throw: oe(1),
                    return: oe(2)
                }, "function" == typeof Symbol && (O[Symbol.iterator] = function() {
                    return this
                }), O;

                function oe(z) {
                    return function(ee) {
                        return function be(z) {
                            if (q) throw new TypeError("Generator is already executing.");
                            for (; C;) try {
                                if (q = 1, P && (b = 2 & z[0] ? P.return : z[0] ? P.throw || ((b = P.return) && b.call(P), 0) : P.next) && !(b = b.call(P, z[1])).done) return b;
                                switch (P = 0, b && (z = [2 & z[0], b.value]), z[0]) {
                                    case 0:
                                    case 1:
                                        b = z;
                                        break;
                                    case 4:
                                        return C.label++, {
                                            value: z[1],
                                            done: !1
                                        };
                                    case 5:
                                        C.label++, P = z[1], z = [0];
                                        continue;
                                    case 7:
                                        z = C.ops.pop(), C.trys.pop();
                                        continue;
                                    default:
                                        if (!(b = (b = C.trys).length > 0 && b[b.length - 1]) && (6 === z[0] || 2 === z[0])) {
                                            C = 0;
                                            continue
                                        }
                                        if (3 === z[0] && (!b || z[1] > b[0] && z[1] < b[3])) {
                                            C.label = z[1];
                                            break
                                        }
                                        if (6 === z[0] && C.label < b[1]) {
                                            C.label = b[1], b = z;
                                            break
                                        }
                                        if (b && C.label < b[2]) {
                                            C.label = b[2], C.ops.push(z);
                                            break
                                        }
                                        b[2] && C.ops.pop(), C.trys.pop();
                                        continue
                                }
                                z = N.call(R, C)
                            } catch (ee) {
                                z = [6, ee], P = 0
                            } finally {
                                q = b = 0
                            }
                            if (5 & z[0]) throw z[1];
                            return {
                                value: z[0] ? z[1] : void 0,
                                done: !0
                            }
                        }([z, ee])
                    }
                }
            }

            function pe(R, N, C, q) {
                void 0 === q && (q = C), R[q] = N[C]
            }

            function ze(R, N) {
                for (var C in R) "default" !== C && !N.hasOwnProperty(C) && (N[C] = R[C])
            }

            function Ie(R) {
                var N = "function" == typeof Symbol && Symbol.iterator,
                    C = N && R[N],
                    q = 0;
                if (C) return C.call(R);
                if (R && "number" == typeof R.length) return {
                    next: function() {
                        return R && q >= R.length && (R = void 0), {
                            value: R && R[q++],
                            done: !R
                        }
                    }
                };
                throw new TypeError(N ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function ve(R, N) {
                var C = "function" == typeof Symbol && R[Symbol.iterator];
                if (!C) return R;
                var P, O, q = C.call(R),
                    b = [];
                try {
                    for (;
                        (void 0 === N || N-- > 0) && !(P = q.next()).done;) b.push(P.value)
                } catch (oe) {
                    O = {
                        error: oe
                    }
                } finally {
                    try {
                        P && !P.done && (C = q.return) && C.call(q)
                    } finally {
                        if (O) throw O.error
                    }
                }
                return b
            }

            function fe() {
                for (var R = [], N = 0; N < arguments.length; N++) R = R.concat(ve(arguments[N]));
                return R
            }

            function it() {
                for (var R = 0, N = 0, C = arguments.length; N < C; N++) R += arguments[N].length;
                var q = Array(R),
                    P = 0;
                for (N = 0; N < C; N++)
                    for (var b = arguments[N], O = 0, oe = b.length; O < oe; O++, P++) q[P] = b[O];
                return q
            }

            function Ke(R) {
                return this instanceof Ke ? (this.v = R, this) : new Ke(R)
            }

            function Je(R, N, C) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var P, q = C.apply(R, N || []),
                    b = [];
                return P = {}, O("next"), O("throw"), O("return"), P[Symbol.asyncIterator] = function() {
                    return this
                }, P;

                function O(W) {
                    q[W] && (P[W] = function(Se) {
                        return new Promise(function(Ge, Fe) {
                            b.push([W, Se, Ge, Fe]) > 1 || oe(W, Se)
                        })
                    })
                }

                function oe(W, Se) {
                    try {
                        ! function be(W) {
                            W.value instanceof Ke ? Promise.resolve(W.value.v).then(z, ee) : ae(b[0][2], W)
                        }(q[W](Se))
                    } catch (Ge) {
                        ae(b[0][3], Ge)
                    }
                }

                function z(W) {
                    oe("next", W)
                }

                function ee(W) {
                    oe("throw", W)
                }

                function ae(W, Se) {
                    W(Se), b.shift(), b.length && oe(b[0][0], b[0][1])
                }
            }

            function et(R) {
                var N, C;
                return N = {}, q("next"), q("throw", function(P) {
                    throw P
                }), q("return"), N[Symbol.iterator] = function() {
                    return this
                }, N;

                function q(P, b) {
                    N[P] = R[P] ? function(O) {
                        return (C = !C) ? {
                            value: Ke(R[P](O)),
                            done: "return" === P
                        } : b ? b(O) : O
                    } : b
                }
            }

            function jt(R) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var C, N = R[Symbol.asyncIterator];
                return N ? N.call(R) : (R = Ie(R), C = {}, q("next"), q("throw"), q("return"), C[Symbol.asyncIterator] = function() {
                    return this
                }, C);

                function q(b) {
                    C[b] = R[b] && function(O) {
                        return new Promise(function(oe, be) {
                            ! function P(b, O, oe, be) {
                                Promise.resolve(be).then(function(z) {
                                    b({
                                        value: z,
                                        done: oe
                                    })
                                }, O)
                            }(oe, be, (O = R[b](O)).done, O.value)
                        })
                    }
                }
            }

            function Lt(R, N) {
                return Object.defineProperty ? Object.defineProperty(R, "raw", {
                    value: N
                }) : R.raw = N, R
            }

            function Ft(R) {
                if (R && R.__esModule) return R;
                var N = {};
                if (null != R)
                    for (var C in R) Object.hasOwnProperty.call(R, C) && (N[C] = R[C]);
                return N.default = R, N
            }

            function Qe(R) {
                return R && R.__esModule ? R : {
                    default: R
                }
            }

            function k(R, N) {
                if (!N.has(R)) throw new TypeError("attempted to get private field on non-instance");
                return N.get(R)
            }

            function ue(R, N, C) {
                if (!N.has(R)) throw new TypeError("attempted to set private field on non-instance");
                return N.set(R, C), C
            }
        },
        1590: (Ve, ne, ce) => {
            "use strict";
            const _ = ce(514);
            Ve.exports = re;
            const ye = function Qe() {
                    function k(ue) {
                        return typeof ue < "u" && ue
                    }
                    try {
                        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                            get: function() {
                                return delete Object.prototype.globalThis, this.globalThis = this
                            },
                            configurable: !0
                        }), globalThis
                    } catch {
                        return k(self) || k(window) || k(this) || {}
                    }
                }().console || {},
                we = {
                    mapHttpRequest: it,
                    mapHttpResponse: it,
                    wrapRequestSerializer: Ke,
                    wrapResponseSerializer: Ke,
                    wrapErrorSerializer: Ke,
                    req: it,
                    res: it,
                    err: function ve(k) {
                        const ue = {
                            type: k.constructor.name,
                            msg: k.message,
                            stack: k.stack
                        };
                        for (const R in k) void 0 === ue[R] && (ue[R] = k[R]);
                        return ue
                    }
                };

            function re(k) {
                (k = k || {}).browser = k.browser || {};
                const ue = k.browser.transmit;
                if (ue && "function" != typeof ue.send) throw Error("pino: transmit option must have a send function");
                const R = k.browser.write || ye;
                k.browser.write && (k.browser.asObject = !0);
                const N = k.serializers || {},
                    C = function E(k, ue) {
                        return Array.isArray(k) ? k.filter(function(N) {
                            return "!stdSerializers.err" !== N
                        }) : !0 === k && Object.keys(ue)
                    }(k.browser.serialize, N);
                let q = k.browser.serialize;
                Array.isArray(k.browser.serialize) && k.browser.serialize.indexOf("!stdSerializers.err") > -1 && (q = !1), "function" == typeof R && (R.error = R.fatal = R.warn = R.info = R.debug = R.trace = R), !1 === k.enabled && (k.level = "silent");
                const b = k.level || "info",
                    O = Object.create(R);
                O.log || (O.log = Je), Object.defineProperty(O, "levelVal", {
                    get: function be() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(O, "level", {
                    get: function z() {
                        return this._level
                    },
                    set: function ee(W) {
                        if ("silent" !== W && !this.levels.values[W]) throw Error("unknown level " + W);
                        this._level = W, Ee(oe, O, "error", "log"), Ee(oe, O, "fatal", "error"), Ee(oe, O, "warn", "error"), Ee(oe, O, "info", "log"), Ee(oe, O, "debug", "log"), Ee(oe, O, "trace", "log")
                    }
                });
                const oe = {
                    transmit: ue,
                    serialize: C,
                    asObject: k.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: fe(k)
                };
                return O.levels = re.levels, O.level = b, O.setMaxListeners = O.getMaxListeners = O.emit = O.addListener = O.on = O.prependListener = O.once = O.prependOnceListener = O.removeListener = O.removeAllListeners = O.listeners = O.listenerCount = O.eventNames = O.write = O.flush = Je, O.serializers = N, O._serialize = C, O._stdErrSerialize = q, O.child = function ae(W, Se) {
                    if (!W) throw new Error("missing bindings for child Pino");
                    Se = Se || {}, C && W.serializers && (Se.serializers = W.serializers);
                    const Ge = Se.serializers;
                    if (C && Ge) {
                        var Fe = Object.assign({}, N, Ge),
                            $t = !0 === k.browser.serialize ? Object.keys(Fe) : C;
                        delete W.serializers, he([W], $t, Fe, this._stdErrSerialize)
                    }

                    function on(_t) {
                        this._childLevel = 1 + (0 | _t._childLevel), this.error = pe(_t, W, "error"), this.fatal = pe(_t, W, "fatal"), this.warn = pe(_t, W, "warn"), this.info = pe(_t, W, "info"), this.debug = pe(_t, W, "debug"), this.trace = pe(_t, W, "trace"), Fe && (this.serializers = Fe, this._serialize = $t), ue && (this._logEvent = Ie([].concat(_t._logEvent.bindings, W)))
                    }
                    return on.prototype = this, new on(this)
                }, ue && (O._logEvent = Ie()), O
            }

            function Ee(k, ue, R, N) {
                const C = Object.getPrototypeOf(ue);
                ue[R] = ue.levelVal > ue.levels.values[R] ? Je : C[R] ? C[R] : ye[R] || ye[N] || Je,
                    function Ne(k, ue, R) {
                        !k.transmit && ue[R] === Je || (ue[R] = function(N) {
                            return function() {
                                const q = k.timestamp(),
                                    P = new Array(arguments.length),
                                    b = Object.getPrototypeOf && Object.getPrototypeOf(this) === ye ? ye : this;
                                for (var O = 0; O < P.length; O++) P[O] = arguments[O];
                                if (k.serialize && !k.asObject && he(P, this._serialize, this.serializers, this._stdErrSerialize), k.asObject ? N.call(b, function de(k, ue, R, N) {
                                        k._serialize && he(R, k._serialize, k.serializers, k._stdErrSerialize);
                                        const C = R.slice();
                                        let q = C[0];
                                        const P = {};
                                        N && (P.time = N), P.level = re.levels.values[ue];
                                        let b = 1 + (0 | k._childLevel);
                                        if (b < 1 && (b = 1), null !== q && "object" == typeof q) {
                                            for (; b-- && "object" == typeof C[0];) Object.assign(P, C.shift());
                                            q = C.length ? _(C.shift(), C) : void 0
                                        } else "string" == typeof q && (q = _(C.shift(), C));
                                        return void 0 !== q && (P.msg = q), P
                                    }(this, R, P, q)) : N.apply(b, P), k.transmit) {
                                    const oe = k.transmit.level || ue.level,
                                        z = re.levels.values[R];
                                    if (z < re.levels.values[oe]) return;
                                    ! function ze(k, ue, R) {
                                        const N = ue.send,
                                            C = ue.ts,
                                            q = ue.methodLevel,
                                            P = ue.methodValue,
                                            b = ue.val,
                                            O = k._logEvent.bindings;
                                        he(R, k._serialize || Object.keys(k.serializers), k.serializers, void 0 === k._stdErrSerialize || k._stdErrSerialize), k._logEvent.ts = C, k._logEvent.messages = R.filter(function(oe) {
                                            return -1 === O.indexOf(oe)
                                        }), k._logEvent.level.label = q, k._logEvent.level.value = P, N(q, k._logEvent, b), k._logEvent = Ie(O)
                                    }(this, {
                                        ts: q,
                                        methodLevel: R,
                                        methodValue: z,
                                        transmitLevel: oe,
                                        transmitValue: re.levels.values[k.transmit.level || ue.level],
                                        send: k.transmit.send,
                                        val: ue.levelVal
                                    }, P)
                                }
                            }
                        }(ue[R]))
                    }(k, ue, R)
            }

            function he(k, ue, R, N) {
                for (const C in k)
                    if (N && k[C] instanceof Error) k[C] = re.stdSerializers.err(k[C]);
                    else if ("object" == typeof k[C] && !Array.isArray(k[C]))
                    for (const q in k[C]) ue && ue.indexOf(q) > -1 && q in R && (k[C][q] = R[q](k[C][q]))
            }

            function pe(k, ue, R) {
                return function() {
                    const N = new Array(1 + arguments.length);
                    N[0] = ue;
                    for (var C = 1; C < N.length; C++) N[C] = arguments[C - 1];
                    return k[R].apply(this, N)
                }
            }

            function Ie(k) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: k || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function fe(k) {
                return "function" == typeof k.timestamp ? k.timestamp : !1 === k.timestamp ? et : jt
            }

            function it() {
                return {}
            }

            function Ke(k) {
                return k
            }

            function Je() {}

            function et() {
                return !1
            }

            function jt() {
                return Date.now()
            }
            re.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, re.stdSerializers = we, re.stdTimeFunctions = Object.assign({}, {
                nullTime: et,
                epochTime: jt,
                unixTime: function Lt() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function Ft() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);