import BaseContainer from "../base-container/base-container.wrapper";
import * as Styles from "./styles";
import { ReactComponent as FacebookSVG } from "../../../assets/icons/5296499_fb_facebook_facebook logo_icon.svg";
import { ReactComponent as WhatsappSVG } from "../../../assets/icons/5296520_bubble_chat_mobile_whatsapp_whatsapp logo_icon.svg";
import { ReactComponent as InstagramSVG } from "../../../assets/icons/5296765_camera_instagram_instagram logo_icon.svg";
import { useTranslations } from "../../../hooks/useTranslations";

const Footer = () => {
  const { t } = useTranslations();
  return (
    <Styles.Footer>
      <BaseContainer>
        <Styles.FooterContainer>
          <Styles.FooterLeft>
            <Styles.FooterLogo>Furniture React App 🛋️</Styles.FooterLogo>
            <Styles.FooterIcons>
              <Styles.FooterLink
                href="https://www.facebook.com/"
                target="_blank"
              >
                <FacebookSVG width="50px" />
              </Styles.FooterLink>
              <Styles.FooterLink
                href="https://www.instagram.com/"
                target="_blank"
              >
                <InstagramSVG width="50px" />
              </Styles.FooterLink>
              <Styles.FooterLink
                href="https://web.whatsapp.com/#"
                target="_blank"
              >
                <WhatsappSVG width="50px" />
              </Styles.FooterLink>
            </Styles.FooterIcons>
          </Styles.FooterLeft>
          <Styles.FooterInfo>
            <p>{t["footer.info.about"]}</p>
            <p>{t["footer.info.payment"]}</p>
            <p>{t["footer.info.delivery"]}</p>
            <p>{t["footer.info.response"]}</p>
            <p>{t["footer.info.sales"]}</p>
            <p>{t["footer.info.warranty"]}</p>
          </Styles.FooterInfo>
          <Styles.FooterContacts>
            <a href="mailto:dmytro.kantsiber7@gmail.com">
              📧 dmytro.kantsiber7@gmail.com
            </a>
            <a href="tel:+123123123">📞 +38(067)123-45-67</a>
            <p>🌍 м. Київ, вул. Меблева 212</p>
            <p>🕓 Працюємо кожен день з 9:30 до 18:30</p>
          </Styles.FooterContacts>
        </Styles.FooterContainer>
      </BaseContainer>
    </Styles.Footer>
  );
};

export default Footer;
