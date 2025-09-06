"use client";

import React from "react";
import * as Icons from "@phosphor-icons/react";
import { Question } from "phosphor-react";

type PhosphorIconProps = {
    iconName: string;
    size?: number;
    weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
    color?: string;
    className?: string;
};

const PhosphorIcon: React.FC<PhosphorIconProps> = ({
    iconName,
    size = 32,
    weight = "regular",
    color = "#1D4355",
    className = '',
}) => {
    const IconComponent = (Icons as any)[iconName] || Question;

    return <IconComponent className={`${className}`} size={size} weight={weight} color={color} />;
};

export default PhosphorIcon;
