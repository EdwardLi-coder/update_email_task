"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHtml = void 0;
const mjml_react_1 = require("@faire/mjml-react");
const react_1 = __importDefault(require("react"));
const util_1 = require("./util");
function toHtml(order) {
    return (0, util_1.renderReactToMjml)(react_1.default.createElement(mjml_react_1.Mjml, null,
        react_1.default.createElement(mjml_react_1.MjmlHead, null,
            react_1.default.createElement(mjml_react_1.MjmlStyle, null, `
          body {
            padding: 20px 20px;
          }
          .product-img  img {
            max-width: 160px;
            max-height: 160px;
            overflow: hidden;
          }
          .view-order-btn a {
            padding: 10px 80px!important;
          }

        `)),
        react_1.default.createElement(mjml_react_1.MjmlBody, null,
            react_1.default.createElement(mjml_react_1.MjmlSection, null,
                react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                    react_1.default.createElement(mjml_react_1.MjmlImage, { src: order.logoURL, width: 309, height: 108 }))),
            react_1.default.createElement(mjml_react_1.MjmlSection, { backgroundColor: "#000", borderRadius: "10px 10px 0 0 " },
                react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                    react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 20, color: "#fff", align: "center" }, "Thanks For Your Order!"))),
            react_1.default.createElement(mjml_react_1.MjmlWrapper, { border: "1px solid #010101", borderRadius: "0 0 10px 10px", paddingLeft: 50, paddingRight: 50, paddingTop: 20, paddingBottom: 20 },
                react_1.default.createElement(mjml_react_1.MjmlSection, null,
                    react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                        react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14 }, "We\u2019ll e-mail you again to let you know when your order ships."))),
                react_1.default.createElement(mjml_react_1.MjmlDivider, { borderWidth: 2 }),
                react_1.default.createElement(mjml_react_1.MjmlSection, null,
                    react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                        react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 16 }, "SHIP TO"),
                        react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14 }, order.shipTo)),
                    react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                        react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 16 }, "BILL TO"),
                        react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14 }, order.billTo))),
                react_1.default.createElement(mjml_react_1.MjmlDivider, { borderWidth: 2 }),
                react_1.default.createElement(mjml_react_1.MjmlSection, null,
                    react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                        react_1.default.createElement(mjml_react_1.MjmlText, { fontWeight: "bold", fontSize: 14 },
                            "ORDER NUMBER:#",
                            order.orderNumber),
                        react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14 },
                            "ORDER DATE: ",
                            order.orderDate),
                        react_1.default.createElement(mjml_react_1.MjmlSpacer, null),
                        react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14 }, order.extraInfo))),
                react_1.default.createElement(mjml_react_1.MjmlDivider, { borderWidth: 2 }),
                react_1.default.createElement(mjml_react_1.MjmlSection, null,
                    react_1.default.createElement(mjml_react_1.MjmlSection, { padding: 0 },
                        react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                            react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 16, fontWeight: "bold" }, "Here are what comming in your box!"))),
                    order.products.map((n) => {
                        return (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(mjml_react_1.MjmlSection, null,
                                react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                                    react_1.default.createElement(mjml_react_1.MjmlImage, { cssClass: "product-img", src: n.thumbnail })),
                                react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                                    react_1.default.createElement(mjml_react_1.MjmlText, null, n.name),
                                    react_1.default.createElement(mjml_react_1.MjmlText, null, n.shipTime),
                                    react_1.default.createElement(mjml_react_1.MjmlText, null,
                                        "$",
                                        n.price)))));
                    })),
                react_1.default.createElement(mjml_react_1.MjmlDivider, { borderWidth: 2 }),
                react_1.default.createElement(mjml_react_1.MjmlWrapper, null,
                    react_1.default.createElement(mjml_react_1.MjmlColumn, null),
                    react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                        react_1.default.createElement(mjml_react_1.MjmlSection, { padding: 0 },
                            react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                                react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14, fontWeight: "bold" }, "Shipping")),
                            react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                                react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14, fontWeight: "bold" }, order.shipping))),
                        react_1.default.createElement(mjml_react_1.MjmlSection, { padding: 0 },
                            react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                                react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14, fontWeight: "bold" }, "Tax")),
                            react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                                react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14, fontWeight: "bold" },
                                    "$",
                                    order.tax))),
                        react_1.default.createElement(mjml_react_1.MjmlSection, { padding: 0 },
                            react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                                react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14, fontWeight: "bold" }, "Total")),
                            react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                                react_1.default.createElement(mjml_react_1.MjmlText, { fontSize: 14, fontWeight: "bold" },
                                    "$",
                                    order.total))))),
                react_1.default.createElement(mjml_react_1.MjmlSection, null,
                    react_1.default.createElement(mjml_react_1.MjmlColumn, null,
                        react_1.default.createElement(mjml_react_1.MjmlButton, { padding: 20, backgroundColor: "#010101", href: order.orderURL, align: "center", borderRadius: "8px 8px 8px 8px", fontSize: 16, fontWeight: "bold", cssClass: "view-order-btn" },
                            react_1.default.createElement(mjml_react_1.MjmlText, null, "View Order"))))))));
}
exports.toHtml = toHtml;
