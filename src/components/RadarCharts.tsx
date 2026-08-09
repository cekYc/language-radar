import { useMemo } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import type { CareerRegion, ChartMetric, Technology } from '../types';
import { toChartMetrics } from '../utils/metrics';

interface TechnologyRadarProps {
  data: ChartMetric[];
  color: string;
  showAxis?: boolean;
}

export function TechnologyRadar({ data, color, showAxis = true }: TechnologyRadarProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid gridType="polygon" stroke="#4b5563" strokeDasharray="3 3" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 10, fontWeight: 'bold' }} />
        {showAxis && <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />}
        <Radar name="Puan" dataKey="score" stroke={color} strokeWidth={3} fill={color} fillOpacity={0.5} />
        <Tooltip
          contentStyle={{ backgroundColor: '#1f2937', borderRadius: '8px', border: '1px solid #374151', color: '#fff' }}
          itemStyle={{ color, fontWeight: 'bold' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

interface ComparisonRadarProps {
  technologies: Technology[];
  careerRegion: CareerRegion;
}

export function ComparisonRadar({ technologies, careerRegion }: ComparisonRadarProps) {
  const combinedData = useMemo(() => {
    if (technologies.length === 0) return [];
    return toChartMetrics(technologies[0]!, careerRegion).map(({ key, subject }) => {
      const entry: Record<string, string | number> = { subject };
      technologies.forEach((technology) => {
        entry[technology.name] = toChartMetrics(technology, careerRegion)
          .find((metric) => metric.key === key)?.score ?? 0;
      });
      return entry;
    });
  }, [careerRegion, technologies]);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={combinedData}>
        <PolarGrid stroke="#4b5563" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#e2e8f0', fontSize: 12, fontWeight: '600' }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} />
        <Legend wrapperStyle={{ color: '#fff' }} />
        {technologies.map((technology) => (
          <Radar
            key={technology.id}
            name={technology.name}
            dataKey={technology.name}
            stroke={technology.color}
            strokeWidth={3}
            fill={technology.color}
            fillOpacity={0.1}
          />
        ))}
      </RadarChart>
    </ResponsiveContainer>
  );
}
