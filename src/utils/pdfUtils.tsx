// src/utils/pdfUtils.ts
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  task: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "black",
    color: "white",
    borderRadius: 5,
  },
  button: {
    marginRight: 5,
    padding: 5,
    borderRadius: 3,
    color: "white",
    textAlign: "center",
    fontSize: 10,
  },
  editButton: {
    backgroundColor: "blue",
  },
  deleteButton: {
    backgroundColor: "red",
  },
});

export const generateTasksPDF = (tasks: { task: string; id: number }[]) => {
  return (
    <PDFDownloadLink
      document={
        <Document>
          <Page style={styles.container}>
            <View>
              <Text style={{ fontSize: 18, marginBottom: 20 }}>Task List</Text>
              {tasks.map((task) => (
                <View key={task.id} style={styles.task}>
                  <Text>{task.task}</Text>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <Text style={[styles.button, styles.editButton]}>Edit</Text>
                    <Text style={[styles.button, styles.deleteButton]}>
                      Delete
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </Page>
        </Document>
      }
      fileName="tasks.pdf"
    >
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  );
};
