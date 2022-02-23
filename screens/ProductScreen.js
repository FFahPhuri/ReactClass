import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
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
            onPress={() => navigation.navigate("Register")}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  //DEFINE VALUE
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  let cancelToken;

  //getData() for get data from backend
  const getData = async () => {
    setLoading(true);
    const res = await axios.get("https://api.codingthailand.com/api/course", {
      cancelToken: cancelToken.token,
    });
    //alert(JSON.stringify(res.data.data)); //JSON.stringify แปลง JS --> JSON
    setProduct(res.data.data); //Update Product จากค่าที่ดึงมา
    setLoading(false);
  };
  //useEffect ทำงานเมื่อคลิกที่เมนูสินค้า [เรียกครั้งเดียว เวลาคลิก]
  // useEffect(() => {
  //   getData();
  // }, []);

  // ทุกๆครั้งที่เข้าหน้า Product หรือ focus ที่หน้า product
  // Always pull data from server
  useFocusEffect(
    // usecallback ใช้ optimize function เพื่อไม่ให้ re-render ของ child component
    React.useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getData();
      return () => {
        cancelToken.cancel();
        //alert("Exit ProductScreen");
      };
    }, [])
  );

  if (loading === true) {
    return (
      <View style={styles.container}>
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
        data={product}
        //keyExtractor คีย์หลัก (อารมณ์ PK)
        keyExtractor={(item) => item.id.toString()}
        //keyExtractor = {(item, index)=> item.id.toString()}
        //pull to refresh ที่ดึงลงมาแล้วรีหน้า
        onRefresh={_onRefresh}
        refreshing={loading} //ถ้า true จะรอให้ refresh จนจบก่อน
        //renderItem สำหรับ render หน้า UI ที่จะให้ User มองเห็น
        renderItem={({ item }) => (
          <ListItem
            thumbnail
            onPress={() => {
              navigation.navigate("Detail", {
                id: item.id,
                title: item.title, //นำค่า title จาก backend
              });
            }}
          >
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
