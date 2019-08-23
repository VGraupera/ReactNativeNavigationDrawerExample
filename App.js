import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
} from 'native-base';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

const MyHeader = props => {
  return (
    <Header>
      <Left style={{paddingLeft:10}}>
        <Button transparent onPress={props.navigation.openDrawer}>
          <Icon ios="ios-menu" android="md-menu" style={{fontSize: 24}} />
        </Button>
      </Left>
      <Body style={{flex: 3, flexDirection: 'row', justifyContent: 'center'}}>
        <Title>{props.title}</Title>
      </Body>
      <Right />
    </Header>
  );
};

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <MyHeader {...this.props} title="Home" />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', marginTop: 20}}>Home</Text>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Container>
        <MyHeader {...this.props} title="Settings" />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', marginTop: 20}}>Settings</Text>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#ddd',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#0366d6',
    },
  },
);

export default createAppContainer(DrawerNavigator);
