"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      <BreadcrumbList className="text-sm text-black/60">
        <BreadcrumbItem>
          <BreadcrumbLink href={home_link}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {data?.map((item, index) => (
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
