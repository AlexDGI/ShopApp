import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme, View } from 'react-native';

import Colors from '../../constants/Colors';


function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  focused: boolean;
}) {
  return (
    <View style={props.focused ? { width: 50, height: 50, borderRadius: 10, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', marginTop: 20 } : {}}>
      <FontAwesome size={28} style={{ color: props.focused ? 'white' : 'grey' }} {...props} />
    </View>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveBackgroundColor: 'transparent', // Asegúrate de que el fondo esté transparente
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={color} focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="catalogo"
        options={{
          title: 'Catálogo',
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="list" color={color} focused={focused} />,
        }}
      />
    </Tabs>
  );
}
