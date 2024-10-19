import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import BottomNav from './BottomNav'; // Importa o componente da barra de navegação

const { width, height } = Dimensions.get('window');

// Array de exemplos de listas com nomes individuais
const listas = [
  { id: 1, nome: 'Tarefas diárias' },
  { id: 2, nome: 'Remédios' },
  { id: 3, nome: 'Trabalhos' },
];

export default function App() {
  const [activeId, setActiveId] = useState(null); // Estado para rastrear qual botão está ativo

  return (
    <View style={styles.container}>
      {/* Conteúdo Superior - Botões */}
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="calendar-outline" size={width * 0.06} color="#305B9E" />
          <Text style={styles.cardTitle}>Hoje</Text>
          <Text style={styles.cardNumber}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="event" size={width * 0.06} color="#EB4E3D" />
          <Text style={styles.cardTitle}>Programados</Text>
          <Text style={styles.cardNumber}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <FontAwesome name="tasks" size={width * 0.06} color="#F19A37" />
          <Text style={styles.cardTitle}>Todos</Text>
          <Text style={styles.cardNumber}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="checkmark-circle-outline" size={width * 0.06} color="#5EB95D" />
          <Text style={styles.cardTitle}>Concluídos</Text>
          <Text style={styles.cardNumber}>2</Text>
        </TouchableOpacity>
      </View>

      {/* Seção Rolável de Listas */}
      <View style={styles.listSection}>
        {/* Título "Listas" com botão de três pontinhos ao lado */}
        <View style={styles.listTitleContainer}>
          <Text style={styles.listTitle}>Listas</Text>
          <TouchableOpacity style={styles.dotsButton}>
            <Ionicons name="ellipsis-horizontal" size={width * 0.06} color="#000" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollContent}>
          {/* Gerar botões de lista dinamicamente */}
          {listas.map(({ id, nome }) => (
            <TouchableOpacity key={id} style={styles.listItem}>
              <Text style={styles.listItemText}>{nome}</Text>
              <Ionicons name="chevron-forward" size={width * 0.05} color="#000" />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Barra de Navegação Inferior */}
      <BottomNav activeId={activeId} setActiveId={setActiveId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Distribui os cards horizontalmente
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02, // Espaçamento entre os cards na vertical
    marginTop: height * 0.05,
  },
  card: {
    backgroundColor: '#fff',
    width: '47%', // Mantém os cards lado a lado com o mesmo tamanho
    height: height * 0.12,
    borderRadius: 25,
    padding: width * 0.03,
    justifyContent: 'space-between',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 5,
    marginBottom: height * 0.02, // Espaçamento vertical igual ao horizontal
    marginRight: width * 0.02, // Espaçamento horizontal igual ao vertical
  },
  cardTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  cardNumber: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    position: 'absolute',
    width: width * 0.08,
  },
  listSection: {
    marginTop: height * 0.00,
    paddingHorizontal: width * 0.05,
    flex: 1, // Permite que a seção de listas ocupe o espaço restante
  },
  listTitleContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: height * 0.015,
  },
  listTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  dotsButton: {
    width: width * 0.10,
    height: width * 0.10,
    borderRadius: width * 0.05,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1, // Permite que o conteúdo do ScrollView cresça
  },
  listItem: {
    backgroundColor: '#fff',
    padding: width * 0.04,
    borderRadius: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  listItemText: {
    fontSize: width * 0.04,
  },
});
