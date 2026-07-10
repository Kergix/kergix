import React from "react";
import {
  Layers, Code2, FileCode, Paintbrush, Terminal, LayoutTemplate,
  Cloud, CloudLightning, Box, Network, Cpu, Play, Database, Zap,
  DatabaseBackup, BrainCircuit, LineChart, HardDrive, Smartphone,
  Apple, SmartphoneNfc, Wind, Globe, Code, Layout, TrendingUp,
  Users, Shield, Building, Truck, ShoppingBag, ShieldAlert,
  HeartPulse, Flame, HelpCircle, ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers, Code2, FileCode, Paintbrush, Terminal, LayoutTemplate,
  Cloud, CloudLightning, Box, Network, Cpu, Play, Database, Zap,
  DatabaseBackup, BrainCircuit, LineChart, HardDrive, Smartphone,
  Apple, SmartphoneNfc, Wind, Globe, Code, Layout, TrendingUp,
  Users, Shield, Building, Truck, ShoppingBag, ShieldAlert,
  HeartPulse, Flame, ArrowRight
};

interface IconRendererProps {
  name: string;
  className?: string;
}

export default function IconRenderer({ name, className }: IconRendererProps) {
  const IconComp = iconMap[name] || HelpCircle;
  return <IconComp className={className} />;
}
