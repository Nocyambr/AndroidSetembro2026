import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Dashboard.styles";

const equipamentos = [
  {
    emoji: "🥽",
    nome: "Óculos",
    detalhe: "Speed Pro",
    status: "Pronto para uso",
    statusType: "ok",
  },
  {
    emoji: "🧢",
    nome: "Touca",
    detalhe: "Silicone",
    status: "Pronto para uso",
    statusType: "ok",
  },
  {
    emoji: "🏊",
    nome: "Nadadeiras",
    detalhe: "Treino curto",
    status: "Levar na próxima aula",
    statusType: "info",
  },
  {
    emoji: "▰",
    nome: "Prancha",
    detalhe: "Técnica de pernas",
    status: "Disponível",
    statusType: "ok",
  },
  {
    emoji: "◉",
    nome: "Pull buoy",
    detalhe: "Treino de braços",
    status: "Disponível",
    statusType: "ok",
  },
  {
    emoji: "✋",
    nome: "Palmar",
    detalhe: "Força e técnica",
    status: "Revisar ajuste",
    statusType: "warning",
  },
];

const aulas = [
  { dia: "08 SET", titulo: "Técnica de Crawl", horario: "18:30", foco: "Respiração e braçada" },
  { dia: "10 SET", titulo: "Pernada e resistência", horario: "18:30", foco: "Prancha e nadadeiras" },
  { dia: "15 SET", titulo: "Viradas", horario: "18:30", foco: "Impulsão e tempo" },
];

const menu = [
  { id: "inicio", label: "Início", icon: "⌂" },
  { id: "aulas", label: "Aulas", icon: "🏊" },
  { id: "progresso", label: "Progresso", icon: "↗" },
  { id: "perfil", label: "Perfil", icon: "●" },
];

function Inicio() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>SWIM TRACKER</Text>
          <Text style={styles.titulo}>Olá, nadador!</Text>
          <Text style={styles.subtitulo}>Prepare seu treino antes de cair na água.</Text>
        </View>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>MS</Text>
        </View>
      </View>

      <View style={styles.heroCard}>
        <View style={styles.heroTopRow}>
          <View>
            <Text style={styles.heroLabel}>PRÓXIMA AULA</Text>
            <Text style={styles.heroTitle}>Técnica de Crawl</Text>
          </View>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>TER</Text>
          </View>
        </View>
        <Text style={styles.heroTime}>18:30 • Piscina principal</Text>
        <View style={styles.heroDivider} />
        <View style={styles.heroFooter}>
          <Text style={styles.heroFooterText}>🥽 Óculos</Text>
          <Text style={styles.heroFooterText}>🧢 Touca</Text>
          <Text style={styles.heroFooterText}>🏊 Nadadeiras</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Meus equipamentos</Text>
          <Text style={styles.sectionSubtitle}>6 itens cadastrados</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.sectionAction}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.equipmentGrid}>
        {equipamentos.map((item) => (
          <View key={item.nome} style={styles.equipmentCard}>
            <View style={styles.equipmentIcon}>
              <Text style={styles.equipmentEmoji}>{item.emoji}</Text>
            </View>
            <Text style={styles.equipmentName}>{item.nome}</Text>
            <Text style={styles.equipmentDetail}>{item.detalhe}</Text>
            <View
              style={[
                styles.statusPill,
                item.statusType === "warning"
                  ? styles.statusWarning
                  : item.statusType === "info"
                    ? styles.statusInfo
                    : styles.statusOk,
              ]}
            >
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Resumo da semana</Text>
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>Aulas</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>3.4 km</Text>
          <Text style={styles.statLabel}>Distância</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>94%</Text>
          <Text style={styles.statLabel}>Presença</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function Aulas() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageEyebrow}>AGENDA</Text>
      <Text style={styles.pageTitle}>Próximas aulas</Text>
      <Text style={styles.pageSubtitle}>Organize seus equipamentos para cada treino.</Text>

      {aulas.map((aula, index) => (
        <View key={aula.dia} style={styles.lessonCard}>
          <View style={styles.dateBox}>
            <Text style={styles.dateText}>{aula.dia}</Text>
          </View>
          <View style={styles.lessonInfo}>
            <Text style={styles.lessonTitle}>{aula.titulo}</Text>
            <Text style={styles.lessonMeta}>{aula.horario} • {aula.foco}</Text>
          </View>
          <Text style={styles.lessonArrow}>›</Text>
        </View>
      ))}

      <View style={styles.tipCard}>
        <Text style={styles.tipIcon}>💧</Text>
        <View style={styles.tipContent}>
          <Text style={styles.tipTitle}>Dica de treino</Text>
          <Text style={styles.tipText}>Separe óculos, touca e garrafa de água antes de sair para a aula.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function Progresso() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageEyebrow}>DESEMPENHO</Text>
      <Text style={styles.pageTitle}>Seu progresso</Text>
      <Text style={styles.pageSubtitle}>Acompanhe sua evolução dentro da piscina.</Text>

      <View style={styles.progressHero}>
        <Text style={styles.progressHeroLabel}>DISTÂNCIA NO MÊS</Text>
        <Text style={styles.progressHeroValue}>12,8 km</Text>
        <Text style={styles.progressHeroDelta}>↑ 18% em relação ao mês anterior</Text>
      </View>

      <View style={styles.progressGrid}>
        <View style={styles.progressCard}>
          <Text style={styles.progressCardLabel}>Aulas concluídas</Text>
          <Text style={styles.progressCardValue}>8</Text>
          <Text style={styles.progressCardFooter}>de 10 planejadas</Text>
        </View>
        <View style={styles.progressCard}>
          <Text style={styles.progressCardLabel}>Melhor ritmo</Text>
          <Text style={styles.progressCardValue}>1:48</Text>
          <Text style={styles.progressCardFooter}>por 100 metros</Text>
        </View>
      </View>

      <View style={styles.goalCard}>
        <View style={styles.goalRow}>
          <Text style={styles.goalTitle}>Meta mensal</Text>
          <Text style={styles.goalPercent}>64%</Text>
        </View>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.goalText}>12,8 km de 20 km</Text>
      </View>
    </ScrollView>
  );
}

function Perfil() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.pageEyebrow}>CONTA</Text>
      <Text style={styles.pageTitle}>Perfil</Text>

      <View style={styles.profileCard}>
        <View style={styles.profileAvatar}>
          <Text style={styles.profileAvatarText}>MS</Text>
        </View>
        <Text style={styles.profileName}>Maycon Santos</Text>
        <Text style={styles.profileLevel}>Nível intermediário</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileItem}>
          <Text style={styles.profileItemIcon}>🏊</Text>
          <View style={styles.profileItemContent}>
            <Text style={styles.profileItemTitle}>Modalidade principal</Text>
            <Text style={styles.profileItemText}>Natação • Crawl</Text>
          </View>
        </View>
        <View style={styles.profileSeparator} />
        <View style={styles.profileItem}>
          <Text style={styles.profileItemIcon}>🎯</Text>
          <View style={styles.profileItemContent}>
            <Text style={styles.profileItemTitle}>Objetivo</Text>
            <Text style={styles.profileItemText}>Melhorar resistência e técnica</Text>
          </View>
        </View>
        <View style={styles.profileSeparator} />
        <View style={styles.profileItem}>
          <Text style={styles.profileItemIcon}>🎒</Text>
          <View style={styles.profileItemContent}>
            <Text style={styles.profileItemTitle}>Equipamentos</Text>
            <Text style={styles.profileItemText}>6 itens cadastrados</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("inicio");

  function renderContent() {
    if (activeTab === "aulas") return <Aulas />;
    if (activeTab === "progresso") return <Progresso />;
    if (activeTab === "perfil") return <Perfil />;
    return <Inicio />;
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4FAFD" />
      <View style={styles.content}>{renderContent()}</View>

      <View style={styles.bottomNav}>
        {menu.map((item) => {
          const active = activeTab === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.navItem}
              activeOpacity={0.7}
              onPress={() => setActiveTab(item.id)}
            >
              <View style={[styles.navIconBox, active && styles.navIconBoxActive]}>
                <Text style={[styles.navIcon, active && styles.navIconActive]}>{item.icon}</Text>
              </View>
              <Text style={[styles.navLabel, active && styles.navLabelActive]}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
