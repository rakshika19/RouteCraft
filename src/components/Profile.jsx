import React from 'react';
import { User, Code, Award } from 'lucide-react';

const styles = {
  container: {
    width:'72rem',
    margin: '0 auto',
    padding: '16px',
  },
  breadcrumb: {
    marginBottom: '16px',
    color: 'white',
  },
  breadcrumbLink: {
    color: '#3490dc',
    textDecoration: 'none',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '0 0 0 8px',
    color:'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
  
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  primaryButton: {
    backgroundColor: '#3490dc',
    color: 'white',
  },
  secondaryButton: {
    backgroundColor: '#f1f5f8',
    color: '#3490dc',
  },
  ghostButton: {
    backgroundColor: 'transparent',
    color: '#3490dc',
  },
  smallButton: {
    padding: '4px 8px',
    fontSize: '14px',
  },
};

const Card = ({ children, style }) => (
  <div style={{ ...styles.card, ...style }}>{children}</div>
);

const Button = ({ children, variant = 'primary', size = 'md', style, ...props }) => {
  const buttonStyle = {
    ...styles.button,
    ...(variant === 'primary' ? styles.primaryButton : {}),
    ...(variant === 'secondary' ? styles.secondaryButton : {}),
    ...(variant === 'ghost' ? styles.ghostButton : {}),
    ...(size === 'sm' ? styles.smallButton : {}),
    ...style,
  };
  return (
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

const Profile = () => {
  const user = {
    name: 'Prasen Shinde',
    username: 'prasen_10',
    country: 'India',
    type: 'Other',
    activePlan: 'No Active Plan',
    totalPoints: '1456 CP',
    activeRoadmaps: [
      { name: 'React.js complete bootcamp', date: '4/05/2024' },
      { name: 'node.js roadmap', date: '4/05/2024' },
      { name: 'python in 100Days', date: '4/05/2024' },
    ],
    badges: [
      { name: 'Code Enthusiast', progress: '0 / 10', description: 'Explain 10 Solutions to get Bronze Badge' },
      { name: 'Contest Contender', progress: '0 / 5', description: 'Participate in 5 Contests to get Bronze Badge' },
      { name: 'Problem Solver', progress: '0 / 50', description: 'Solve 50 Problems to get Bronze Badge' },
    ],
  };

  const subscriptionPlans = [
    { name: 'Basic Plan', price: '₹999/month', features: ['Create unlimited roadmaps', 'Access to public templates', 'Basic support'] },
    { name: 'Pro Plan', price: '₹9999/month', features: ['Everything in Basic Plan', 'Custom templates', 'Priority support'] },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <a href="#" style={styles.breadcrumbLink}>Home</a> » {user.name}
      </div>
      
      <div style={styles.header}>
        <User size={32} color="#3490dc" />
        <h1 style={styles.headerTitle}>{user.name}</h1>
        <div style={{ marginLeft: 'auto' }}>
          <Button variant="ghost"><Code size={16} /></Button>
          <Button variant="ghost"><Award size={16} /></Button>
        </div>
      </div>

      <Card>
        <h2 style={styles.cardTitle}>Profile Information</h2>
        <div style={styles.grid}>
          <div>
            <p style={{ fontWeight: 'bold' }}>Username</p>
            <p>{user.username}</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>Country</p>
            <p>{user.country}</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>Type</p>
            <p>{user.type}</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold' }}>RouteCraft active plan</p>
            <p>{user.activePlan} <a href="#" style={styles.breadcrumbLink}>View Details</a></p>
          </div>
        </div>
      </Card>

      <div style={styles.grid}>
        <Card>
          <h2 style={styles.cardTitle}>TOTAL POINTS</h2>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{user.totalPoints}</p>
        </Card>

        <Card>
          <h2 style={styles.cardTitle}>Active Roadmap</h2>
          {user.activeRoadmaps.map((roadmap, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <p>{roadmap.name}</p>
              <p style={{ fontSize: '14px', color: '#718096' }}>date:{roadmap.date}</p>
              <Button size="sm" variant="secondary">View</Button>
            </div>
          ))}
        </Card>

        <Card>
          <h2 style={styles.cardTitle}>Badges</h2>
          {user.badges.map((badge, index) => (
            <div key={index} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {index === 0 && <Code size={16} style={{ marginRight: '8px' }} />}
                {index === 1 && <Award size={16} style={{ marginRight: '8px' }} />}
                <p>{badge.name} - No Badge</p>
              </div>
              <p style={{ fontSize: '14px', color: '#718096' }}>{badge.progress}</p>
              <p style={{ fontSize: '12px', color: '#a0aec0' }}>{badge.description}</p>
            </div>
          ))}
        </Card>
      </div>

      <Card>
        <h2 style={{ ...styles.cardTitle, fontSize: '24px' }}>Our Subscription Plans</h2>
        <div style={styles.grid}>
          {subscriptionPlans.map((plan, index) => (
            <div key={index} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{plan.name}</h3>
              <p style={{ fontSize: '18px', marginBottom: '8px' }}>Price: {plan.price}</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '16px' }}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              <Button>Choose Plan</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Profile;