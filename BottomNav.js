import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// Array de ícones para a barra de navegação inferior
const bottomNavItems = [
  { id: 1, icon: 'home', label: 'Home', defaultColor: '#C1C7D0', activeColor: '#1e88e5' }, // Cor padrão e ativa
  { id: 2, icon: 'add-circle-outline', label: 'Adicionar', defaultColor: '#C1C7D0', activeColor: '#1e88e5' }, // Cor padrão e ativa
  { id: 3, icon: 'person-outline', label: 'Configurações', defaultColor: '#C1C7D0', activeColor: '#1e88e5' }, // Cor padrão e ativa
];

export default function BottomNav({ activeId, setActiveId }) {
  return (
    <View style={styles.bottomNav}>
      {bottomNavItems.map(({ id, icon, label, defaultColor, activeColor }) => (
        <TouchableOpacity 
          key={id} 
          style={styles.navItem} 
          onPress={() => setActiveId(id)} // Define o botão ativo
        >
          <Ionicons 
            name={icon} 
            size={width * 0.07} 
            color={activeId === id ? activeColor : defaultColor} // Altera a cor conforme o botão ativo
          />
          <Text style={styles.navLabel}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: height * 0.02,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center', // Alinha o ícone e o texto ao centro
    flex: 1
  },
  navLabel: {
    fontSize: width * 0.03, // Tamanho da fonte para os rótulos
  },
});
