#!/usr/bin/env python
# coding: utf-8

# In[1]:

import json
import sys

cinput = sys.stdin.readlines()
data = cinput[0]
JSON_data = json.loads(data)
x1=JSON_data['Symptom1']
x2=JSON_data['Symptom2']
x3=JSON_data['Symptom3']
x4=JSON_data['Symptom4']
x5=JSON_data['Symptom5']


#do whatever you want
# 

import pandas as pd
import numpy as np


# In[2]:


# Load Training data
df = pd.read_csv('data/clean/Training.csv')

df.head()


# In[3]:


X = df.iloc[:, :-1]
y = df['prognosis']


# In[4]:


# Train, Test split
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=20)


# In[5]:


# Random Forest Classifier
from sklearn.ensemble import RandomForestClassifier

rf_clf = RandomForestClassifier()


# In[6]:


rf_clf.fit(X_train, y_train)

#print("Accuracy on split test: ", rf_clf.score(X_test,y_test))


# In[7]:


# Load real test data
df_test = pd.read_csv('data/clean/Testing.csv')


# In[8]:


X_acutal_test = df_test.iloc[:, :-1]
y_actual_test = df_test['prognosis']


# In[9]:


#print("Accuracy on acutal test: ", rf_clf.score(X_acutal_test, y_actual_test))


# In[10]:


symptoms_dict = {}

for index, symptom in enumerate(X):
    symptoms_dict[symptom] = index


# In[19]:


symptoms_dict


# In[20]:


input_vector = np.zeros(len(symptoms_dict))


# In[21]:


input_vector[[symptoms_dict[x1],symptoms_dict[x2],symptoms_dict[x3],symptoms_dict[x4],symptoms_dict[x5]]] = 1


# In[ ]:





# In[22]:


rf_clf.predict_proba([input_vector])

x=rf_clf.predict([input_vector])
a=str(x[0])
print(a)
# In[23]:



