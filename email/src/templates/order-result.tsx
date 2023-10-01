import {
  Mjml,
  MjmlHead,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlText,
  MjmlDivider,
  MjmlSpacer,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import React from "react";

import { renderReactToMjml } from "./util";

export type OrderInfo = {
  orderNumber: string;
  orderDate: string;
  shipTo: string;
  billTo: string;
  products: Product[];
  shipping: string;
  tax: number;
  total: number;
  logoURL: string;
  extraInfo: string;
  orderURL: string;
  receiverEmail: string;
};

export type Product = {
  thumbnail: string;
  name: string;
  shipTime: string;
  price: number;
};

export function toHtml(order: OrderInfo) {
  return renderReactToMjml(
      <Mjml>
        <MjmlHead>
          <MjmlStyle>
            {`
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

        `}
          </MjmlStyle>
        </MjmlHead>

        <MjmlBody>
          <MjmlSection>
            <MjmlColumn>
              <MjmlImage
                  src={order.logoURL}
                  width={309}
                  height={108}
              ></MjmlImage>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection backgroundColor="#000" borderRadius={"10px 10px 0 0 "}>
            <MjmlColumn>
              <MjmlText fontSize={20} color={"#fff"} align="center">
                Thanks For Your Order!
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlWrapper
              border={"1px solid #010101"}
              borderRadius={"0 0 10px 10px"}
              paddingLeft={50}
              paddingRight={50}
              paddingTop={20}
              paddingBottom={20}
          >
            <MjmlSection>
              <MjmlColumn>
                <MjmlText fontSize={14}>
                  We’ll e-mail you again to let you know when your order ships.
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
            <MjmlDivider borderWidth={2}></MjmlDivider>

            <MjmlSection>
              <MjmlColumn>
                <MjmlText fontSize={16}>SHIP TO</MjmlText>
                <MjmlText fontSize={14}>{order.shipTo}</MjmlText>
              </MjmlColumn>
              <MjmlColumn>
                <MjmlText fontSize={16}>BILL TO</MjmlText>
                <MjmlText fontSize={14}>{order.billTo}</MjmlText>
              </MjmlColumn>
            </MjmlSection>
            <MjmlDivider borderWidth={2}></MjmlDivider>
            <MjmlSection>
              <MjmlColumn>
                <MjmlText fontWeight="bold" fontSize={14}>
                  ORDER NUMBER:#{order.orderNumber}
                </MjmlText>
                <MjmlText fontSize={14}>ORDER DATE: {order.orderDate}</MjmlText>
                <MjmlSpacer></MjmlSpacer>
                <MjmlText fontSize={14}>
                  {order.extraInfo}
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
            <MjmlDivider borderWidth={2}></MjmlDivider>
            <MjmlSection>
              <MjmlSection padding={0}>
                <MjmlColumn>
                  <MjmlText fontSize={16} fontWeight="bold">
                    Here are what comming in your box!
                  </MjmlText>
                </MjmlColumn>
              </MjmlSection>
              {order.products.map((n) => {
                return (
                    <>
                      <MjmlSection>
                        <MjmlColumn>
                          <MjmlImage
                              cssClass="product-img"
                              src={n.thumbnail}
                          ></MjmlImage>
                        </MjmlColumn>
                        <MjmlColumn>
                          <MjmlText>{n.name}</MjmlText>
                          <MjmlText>{n.shipTime}</MjmlText>
                          <MjmlText>${n.price}</MjmlText>
                        </MjmlColumn>
                      </MjmlSection>
                    </>
                );
              })}
            </MjmlSection>
            <MjmlDivider borderWidth={2}></MjmlDivider>
            <MjmlWrapper>
              <MjmlColumn></MjmlColumn>
              <MjmlColumn>
                <MjmlSection padding={0}>
                  <MjmlColumn>
                    <MjmlText fontSize={14} fontWeight="bold">
                      Shipping
                    </MjmlText>
                  </MjmlColumn>
                  <MjmlColumn>
                    <MjmlText fontSize={14} fontWeight="bold">
                      {order.shipping}
                    </MjmlText>
                  </MjmlColumn>
                </MjmlSection>
                <MjmlSection padding={0}>
                  <MjmlColumn>
                    <MjmlText fontSize={14} fontWeight="bold">
                      Tax
                    </MjmlText>
                  </MjmlColumn>
                  <MjmlColumn>
                    <MjmlText fontSize={14} fontWeight="bold">
                      ${order.tax}
                    </MjmlText>
                  </MjmlColumn>
                </MjmlSection>
                <MjmlSection padding={0}>
                  <MjmlColumn>
                    <MjmlText fontSize={14} fontWeight="bold">
                      Total
                    </MjmlText>
                  </MjmlColumn>
                  <MjmlColumn>
                    <MjmlText fontSize={14} fontWeight="bold">
                      ${order.total}
                    </MjmlText>
                  </MjmlColumn>
                </MjmlSection>
              </MjmlColumn>
            </MjmlWrapper>
            <MjmlSection>
              <MjmlColumn>
                <MjmlButton
                    padding={20}
                    backgroundColor="#010101"
                    href={order.orderURL}
                    align="center"
                    borderRadius={"8px 8px 8px 8px"}
                    fontSize={16}
                    fontWeight="bold"
                    cssClass="view-order-btn"
                >
                  <MjmlText>View Order</MjmlText>
                </MjmlButton>
              </MjmlColumn>
            </MjmlSection>
          </MjmlWrapper>
        </MjmlBody>
      </Mjml>
  );
}
