import React, { useRef, useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { cryptoNewsApi, useGetCryptoNewsQuery } from "../services/cryptonewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

//mainFunction:
const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency'); //Select name coins
  const { data } = useGetCryptosQuery(100); //data name coin
  const count = simplified ? 6 : 12;
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count })
  console.log(cryptoNews)
  if (!cryptoNews?.value) return "loading...";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          {/* Search */}
          <Select showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLocaleLowerCase()) >= 0}
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins?.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col sx={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <p className="news-title" level={4}>{news.name}</p>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} />
              </div>
              <p className="news-description">
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description
                }
              </p>

              <div className="provider-container">
                <div className="provider-info">
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                  <Text className="provider-name"> {news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export default News;
