import { ElementType } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface DashboardMenuProps {
  title: string;
  content: string;
  contentResume: string;
  icon: ElementType;
}

export function DashboardMenu({ title, content, contentResume, icon: Icon }: DashboardMenuProps) {
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="text-xs text-muted-foreground">{contentResume}</p>
      </CardContent>
    </Card>
  );
}
