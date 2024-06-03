"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

interface NavigationViewerProps {
  prefix: string;
  href: string;
}

interface NavigationViewerData {
  home_link?: string;
  data?: NavigationViewerProps[];
}

export const NavigationViewer = ({
  data,
  home_link = "/home",
}: NavigationViewerData) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={home_link}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {data &&
          data.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={item.href}>{item.prefix}</BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
