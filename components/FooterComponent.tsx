import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function FooterComponent() {
  return (
    <Footer container className="bg-[#253C95] rounded-none">
      <div className="w-full container mx-auto">
        <div className="grid w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="inline text-white">
          <Image
            className="mr-3 h-6 sm:h-9"
            src="https://istad.co/resources/img/logo_md.png"
            alt="Cstad Logo"
            width={36}
            height={24}
          />
            <p>Start your IT career with CSTAD</p>
          </div>
          <div>
            <FooterTitle className="text-white" title="LEARN MORE" />
            <FooterLinkGroup col>
              <FooterLink className="text-white" href="#">
                Course
              </FooterLink>
              <FooterLink className="text-white" href="#">
                IT News
              </FooterLink>
              <FooterLink className="text-white" href="#">
                Job Opportunity
              </FooterLink>
              <FooterLink className="text-white" href="#">
                Privacy Policy
              </FooterLink>
              <FooterLink className="text-white" href="#">
                FAQ
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="CONTACT US" />
            <FooterLinkGroup col>
              <FooterLink className="text-white" href="#">
                (+855) 95-990-910
              </FooterLink>
              <FooterLink className="text-white" href="#">
                (+855) 93-990-910
              </FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle className="text-white" title="FOLLOW US" />
            <FooterLinkGroup col>
              <FooterLink
                className="text-white"
                href="https://web.facebook.com/istad.co?ref=embed_page"
              >
                Facebook Page
              </FooterLink>
              <FooterLink className="text-white" href="#">
                Terms &amp; Conditions
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full">
          <FooterCopyright
            className="text-white"
            href="#"
            by="Center of Science and Technology Advanced Development | All Rights Reserved™"
            year={2022}
          />
        </div>
      </div>
    </Footer>
  );
}
