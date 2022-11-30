import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ReactPdfTable  from "react-pdf-table";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument= () => <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
          <ReactPdfTable.TableRow>
		<ReactPdfTable.TableCell  text="Cell 1"  align="right" />
		<ReactPdfTable.TableCell  text="Cell 1"  align="center" />
		<ReactPdfTable.TableCell  text="Cell 1"  align="left" />
	</ReactPdfTable.TableRow>
           
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>

export default MyDocument