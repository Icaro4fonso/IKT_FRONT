
<template>
  <section>
    <div class="header-row">
      <h1 class="brown-header">Upload your excel file to our system</h1>
      <h3 class="brown-header">The statistics will be updated after processing</h3>
    </div>
    <div class="action-card">
      <h2 class="imports-header">Import Records</h2>
      <div class="upload-area">
        <input type="file" id="file-upload" @change="handleFileUpload" accept=".xlsx" hidden />

        <label for="file-upload" class="custom-file-upload">
          <span v-if="!selectedFile">Choose File</span>
          <span v-else>{{ selectedFile.name }}</span>
        </label>

        <button class="btn-upload" :disabled="!selectedFile" @click="uploadFile">
          Start Processing
        </button>

      </div>
      <p v-if="status" :class="statusType">{{ status }}</p>
    </div>
  </section>

</template>

<script setup>
import { ref } from 'vue';
import api from '@/services/api'  


const selectedFile = ref(null);
const status = ref('');
const statusType = ref('');

const handleFileUpload = (e) => { selectedFile.value = e.target.files[0]; };

const uploadFile = async () => {
  
  const formData = new FormData();
  formData.append('file', selectedFile.value);
  try {
    status.value = 'Processing...';
    await api.post('/api/sales/upload-records', formData);
    status.value = 'Success!'; 
    statusType.value = 'success';
  } catch (e) {
    status.value = 'Upload Failed.'; 
    statusType.value = 'error';
  }
};
</script>

<style scoped>
.action-card {
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.10);
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
  border-radius: 12px;
  text-align: center;
}

.back-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: #42b883;
  color: white !important;
  text-decoration: none;
  margin-bottom: 20px;
  border-radius: 4px;
  font-weight: bold;
  transition: opacity 0.3s;
}

.back-link:hover {
  opacity: 0.8;
}

.upload-area {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.btn-upload {
  background: #834821;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 8px;
  font-weight: bold;
  min-width: 500px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn-upload:hover {
  opacity: 0.8;
}

.btn-upload:disabled {
  background-color: #e7e1e1;
  cursor: not-allowed;
  color: #9e9898;
  min-width: 500px;
  padding: 16px;
  opacity: 1;
}

.success {
  color: #42b883;
}

.error {
  color: #ff5252;
}

.imports-header {
  color: #894a35;
  font-weight: bold;
  margin-bottom: 50px;
}

.custom-file-upload {
  background-color: transparent;
  color: #834821;
  border: 2px solid #ded9d3;
  padding: 14px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 400px;
}

.custom-file-upload:hover {
  background-color: #ded9d3;
}
</style>