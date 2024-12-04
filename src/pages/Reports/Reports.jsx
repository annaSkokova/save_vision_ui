import Menu from "../../components/Menu/Menu";
import {Grid2} from "@mui/material";
import Container from "../../components/assets/Container/Container";
import {BarChart} from "@mui/x-charts/BarChart";
import * as React from "react";
import {axisClasses} from "@mui/x-charts/ChartsAxis";
import Button from "@mui/material/Button";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import './Report.scss'
const chartSetting = {
  yAxis: [
    {
      label: 'amount',
    },
  ],
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
  },
};

function valueFormatter(value) {
  return `${value}`;
}


const Reports = () => {
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <>
      <Grid2 container spacing={2} ref={contentRef}>
        <Grid2 item size={6}>
          <Container>
            <BarChart
              dataset={dataset}
              xAxis={[{scaleType: 'band', dataKey: 'month'}]}
              series={[
                {dataKey: 'violations', label: 'Violations', valueFormatter},
              ]}
              {...chartSetting}
            />
          </Container>
        </Grid2>
        <Grid2 item size={6}>
          <Container>
            <BarChart
              dataset={dataset2}
              xAxis={[{scaleType: 'band', dataKey: 'month'}]}
              series={[
                {dataKey: 'faceMasks', label: 'Face masks', valueFormatter},
                {dataKey: 'respirators', label: 'Respirators', valueFormatter},
                {dataKey: 'gowns', label: 'Gowns', valueFormatter},
                {dataKey: 'gloves', label: 'Gloves', valueFormatter},
              ]}
              {...chartSetting}
            />
          </Container>
        </Grid2>
        <Grid2 className="no-printme" item size={12}>
          <Container >
            <Button variant="contained" color="success" onClick={() => reactToPrintFn()}>
              Download Report
            </Button>
          </Container>
        </Grid2>
      </Grid2>
    </>
  )
}

export default Reports

const dataset = [
  {
    violations: 59,
    month: '15.11',
  },
  {
    violations: 61,
    month: '16.11',
  },
  {
    violations: 50,
    month: '17.11',
  },
  {
    violations: 53,
    month: '18.11',
  },
  {
    violations: 59,
    month: '19.11',
  },
  {
    violations: 70,
    month: '20.11',
  },
  {
    violations: 72,
    month: '21.11',
  },
  {
    violations: 61,
    month: '22.11',
  },
  {
    violations: 63,
    month: '23.11',
  },
  {
    violations: 50,
    month: '24.11',
  },
  {
    violations: 53,
    month: '25.11',
  },
  {
    violations: 63,
    month: '27.11',
  },
];

const dataset2 = [
  {
    faceMasks: 10,
    respirators: 5,
    gowns: 15,
    gloves: 16,
    month: '15.11',
  },
  {
    faceMasks: 11,
    respirators: 6,
    gowns: 14,
    gloves: 13,
    month: '16.11',
  },
  {
    faceMasks: 10,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '17.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '18.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '19.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '20.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '21.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '22.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '23.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '24.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '25.11',
  },
  {
    faceMasks: 11,
    respirators: 7,
    gowns: 15,
    gloves: 14,
    month: '27.11',
  },
];