import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListItem,Button, Input, Avatar} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";