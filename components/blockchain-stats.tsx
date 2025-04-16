"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { getBlockchainStats } from "@/lib/data"

export function BlockchainStats() {
  const stats = getBlockchainStats()

  return (
    <div className="p-6 border rounded-lg">
      <h3 className="mb-6 text-lg font-medium">Projects by Blockchain</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stats}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
