import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from "native-base";

const DetailScreen = ({ navigation, route }) => {
  const { id, title } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      // static set
      // title: "รายละเอียดสินค้า",
      title: title,
    });
  }, [navigation]);
  //ใน [] คือบอกว่า ทำเมื่อมีการ navigate มา

  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (id) => {
    setLoading(true);
    const res = await axios.get(
      "https://api.codingthailand.com/api/course/" + id
    );
    setDetail(res.data.data); //Update Detail จากค่าที่ดึงมา
    setLoading(false);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }
  const _onRefresh = () => {
    getData();
  };

  return (
    <View>
      <FlatList
        //DATA ใช้ loop แสดง data ใน backend
        data={detail}
        //keyExtractor คีย์หลัก (อารมณ์ PK)
        keyExtractor={(item, index) => item.ch_id.toString()}
        //pull to refresh ที่ดึงลงมาแล้วรีหน้า
        onRefresh={_onRefresh}
        refreshing={loading} //ถ้า true จะรอให้ refresh จนจบก่อน
        //renderItem สำหรับ render หน้า UI ที่จะให้ User มองเห็น
        renderItem={({ item, index }) => (
          <ListItem thumbnail>
            <Left>
              <Text>{index + 1}</Text>
            </Left>
            <Body>
              <Text>{item.ch_title}</Text>
              <Text note numberOfLines={1}>
                {item.ch_detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.ch_view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
