
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


input_vector[[symptoms_dict['fatigue'],symptoms_dict['anxiety'],symptoms_dict['joint_pain'],symptoms_dict['mood_swings']]] = 1


# In[ ]:





# In[22]:


rf_clf.predict_proba([input_vector])


# In[23]:
