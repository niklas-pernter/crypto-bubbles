import * as React from 'react';
import Chart from "react-apexcharts";

const generateData = (baseval: number, count: number, yrange: any) => {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    console.log(series)
    return series;
}


const createApexSeries = (): any => {
    return [{
        name: 'Bubble1',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
        })
    }];
};

const BubbleMap = () => {
    const [apexOptions, setApexOptions] = React.useState<any>({
        chart: {
            type: 'bubble',
            toolbar: {
                show: true,
                tools: {
                    download: false,
                    pan: false,
                    selection: false,
                    zoom: true,
                    zoomin: false,
                    zoomout: false,
                    reset: true,
                },
            },

        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 0.8
        },

        tooltip: {
            custom: function ({series, seriesIndex, dataPointIndex, w}: any) {
                let datapoint = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
                console.log(datapoint)
                return `
                        <div class="bubble-map-tooltip">

                        </div>
                    `;
            }
        },
        xaxis: {
            show: false,
            labels: {
                show: false,
            }
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false
        }
    })

    const [apexSeries, setApexSeries] = React.useState<any>(createApexSeries());

    return (


            <Chart
                options={apexOptions}
                series={apexSeries}
                type={"bubble"}
                height={"800vh"} width={"100%"}>
            </Chart>

    );
}


export default BubbleMap;