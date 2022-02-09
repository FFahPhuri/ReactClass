import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
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
const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="register"
            iconName="person-add"
            onPress={() => alert("ลงทะเบียน")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  //DEFINE VALUE
  const [product, setProduct] = useState([]);

  //useEffect ทำงานเมื่อคลิกที่เมนูสินค้า [เรียกครั้งเดียว เวลาคลิก]
  useEffect(() => {
    //getData() for get data from backend
    const getData = async () => {
      const res = await axios.get("https://api.codingthailand.com/api/course");
      //alert(JSON.stringify(res.data.data)); //JSON.stringify แปลง JS --> JSON
      setProduct(res.data.data); //Update Product จากค่าที่ดึงมา
    };
    getData();
  }, []);

  return (
    <View>
      <FlatList
        //DATA ใช้ loop แสดง data ใน backend
        data={product}
        //keyExtractor คีย์หลัก (อารมณ์ PK)
        keyExtractor={(item) => item.id.toString()} //keyExtractor = {(item, index)=> item.id.toString()}
        //renderItem สำหรับ render หน้า UI ที่จะให้ User มองเห็น
        renderItem={({ item }) => (
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: item.picture }} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <Badge danger>
                <Text>{item.view}</Text>
              </Badge>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
