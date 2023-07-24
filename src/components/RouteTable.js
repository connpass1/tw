import React from 'react'
import { Table } from 'antd';
import { useMemo } from 'react';
import route_points from '../data/route_points.json'
import PropTypes from 'prop-types';
const columns = [
  {
    title: 'Маршрут',
    dataIndex: 'route',
    key: 'route',
  },
  {
    title: 'Точка 1 (lat, lng)',
    dataIndex: 'point1',
    key: 'point1',
  }, {
    title: 'Точка 2 (lat, lng)',
    dataIndex: 'point2',
    key: 'point2',
  },
  {
    title: 'Точка 3 (lat, lng)',
    dataIndex: 'point3',
    key: 'point3',
  }
];
const format_coordinates = (coord, i) => `${coord[i][0]}, ${coord[i][1]}`
const RouteTable = ({ route_number, setRoute_number }) => {
  const data = useMemo(
    () => {
      const arr = []
      for (let i = 0; i < route_points.length; i++) {
        let index = i + 1;
        arr.push({
          key: `arr${index}`,
          route: `Маршрут №${index}`,
          point1: format_coordinates(route_points[i], 0),
          point2: format_coordinates(route_points[i], 1),
          point3: format_coordinates(route_points[i], 2),
        })
      }
      return arr;
    },
    []
  );
  return <Table dataSource={data} columns={columns}
    onRow={(record, index) => {
      return {
        onClick: (event) => {
          setRoute_number(index)
        }
      };
    }}
    rowClassName={(record, index) => index === route_number ? 'table-row-selected' : 'table-row'}
    pagination={false}
  />
}
export default RouteTable
RouteTable.propTypes = {
  route_number: PropTypes.number,
  setRoute_number: PropTypes.func
};