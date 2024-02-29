interface ChartDataProps {
  range: string;
  tokenPair: string[];
  chainId: string;
}

export interface ChartData {
  [token: string]: {
    series: {
      time: number;
      value: number;
    }[];
    priceChangePercentage: number;
    minValue: number;
    maxValue: number;
  };
}

interface ChartDataResponse {
  result: {
    data: {
      json: ChartData;
    };
  };
}

function buildApiInput({ tokenPair, range, chainId }: ChartDataProps) {
  const input = {
    json: {
      tokens: tokenPair,
      chainId,
      dateRange: range,
    },
  };

  const urlParams = new URLSearchParams();
  const encodedInput = JSON.stringify(input);

  urlParams.append("input", encodedInput);

  return urlParams.toString();
}

export async function getChartData(
  props: ChartDataProps
): Promise<ChartDataResponse> {
  const apiUrl = process.env.CHART_DATA_API ?? "";
  const params = buildApiInput(props);

  const request = await fetch(`${apiUrl}?${params}`);
  const response = await request.json();

  return response;
}
