import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";

const FlexBotTest = () => {
  const [flexDirection, setFlexDirection] = useState("column");
  const [direction, setDirection] = useState("ltr");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [alignContent, setAlignContent] = useState("flex-start");
  const [position, setPosition] = useState("relative");

  return (
    <ScrollView>
      <PreviewLayout
        label="flexDirection"
        values={["column", "row", "column-reverse", "row-reverse"]}
        selectedValue={flexDirection}
        setSelectedValue={setFlexDirection}>
          <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
          <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
          <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
      </PreviewLayout>
      <PreviewLayout
      label="direction"
      values={["ltr", "rtl"]}
      selectedValue={direction}
      setSelectedValue={setDirection}>
        <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
      </PreviewLayout>
      <PreviewLayout
      label="justifyContent"
      values={["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"]}
      selectedValue={justifyContent}
      setSelectedValue={setJustifyContent}>
        <View style={[styles.box, { backgroundColor: "powderblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue" }]}></View>
      </PreviewLayout>
      <PreviewLayout
      label="alignItems"
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      selectedValue={alignItems}
      setSelectedValue={setAlignItems}>
        <View style={[styles.box, { backgroundColor: "powderblue", width: "auto", alignSelf: "stretch" }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue" }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue", minWidth: 200 }]}></View>
      </PreviewLayout>
      <PreviewLayout
      label="alignContent"
      values={["stretch", "flex-start", "flex-end", "center", "space-between", "space-around"]}
      selectedValue={alignContent}
      setSelectedValue={setAlignContent}>
        <View
          style={[styles.box, { backgroundColor: "orangered" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "orange" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "mediumseagreen" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "deepskyblue" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "mediumturquoise" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "mediumslateblue" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "purple" }]}
        />
      </PreviewLayout>
      <PreviewLayout
      label="position"
      values={["relative", "absolute"]}
      selectedValue={position}
      setSelectedValue={setPosition}>
        <View style={[styles.box, { backgroundColor: "powderblue", position, top: 25, left: 25 }]}></View>
        <View style={[styles.box, { backgroundColor: "skyblue", position, top: 50, left: 50 }]}></View>
        <View style={[styles.box, { backgroundColor: "steelblue", position, top: 75, left: 75 }]}></View>
      </PreviewLayout>
    </ScrollView>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value)=> (
        <TouchableOpacity
          key={value}
          onPress={()=>setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
          >
            <Text style={[styles.buttonLabel, selectedValue === value && styles.selectedLabel]}>
              {value}
            </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, {[label]: selectedValue}]}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",//"nowrap",
    marginTop: 8,
    backgroundColor: "aliceblue",
    height: 200
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexBotTest;
