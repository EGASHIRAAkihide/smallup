# Product Requirement Document (PRD)

## Project Name: SMALLUP
### Description:
SMALLUP is a **Global Small Business Booking Platform** designed to help freelancers, personal trainers, beauty salons, and dance instructors manage their bookings, payments, and customer communications. The platform will support **multilingual functionality** and integrate **AI-powered customer service**.

---

## 1. Product Vision
Empower small businesses worldwide by providing an **easy-to-use** yet **powerful booking platform** that automates business operations and improves customer experience.

---

## 2. Key Features

### Core Features:
- User Authentication (NextAuth.js)
- Booking Calendar System
- Payment Gateway (Stripe Integration)
- Multilingual Support (English, Japanese, Spanish)
- Automatic Reminder Notifications (Email, LINE, WhatsApp)
- Dashboard with Business Insights (Reservation Metrics, Revenue Tracking)
- AI Chatbot for Handling Customer Requests

### Optional Features (Phase 2):
- Social Media Auto Posting
- Customer Review System
- Membership Tiers with Discounts

---

## 3. Target Audience
| Persona                  | Description                  | Pain Points               |
|--------------------------|-----------------------------|--------------------------|
| Freelancers             | Personal Trainers, Dance Instructors | Struggles with manual bookings, no automated reminders |
| Small Businesses        | Beauty Salons, Photographers | No centralized reservation system, payment delays |
| International Businesses | Southeast Asia + Latin America | Language barrier, lack of payment gateway support |

---

## 4. Tech Stack
| Layer       | Technology       |
|-------------|-----------------|
| Frontend    | Next.js (App Router), TailwindCSS |
| Backend     | Next.js API Routes, PostgreSQL |
| Authentication | NextAuth.js (Google, LINE, Instagram Login) |
| Payment     | Stripe API |
| AI Chatbot  | OpenAI API |
| Hosting     | Vercel |
| Image Upload | Cloudinary |

---

## 5. Wireframes
### Pages
1. Landing Page
2. Sign Up / Login
3. Business Dashboard
4. Booking Page (Calendar View)
5. Payment Page
6. Settings (Language + Payment Preferences)

---

### Figma Wireframes
**Wireframes Link:** [Coming Soon]

---

## 6. User Stories
### User Types:
- Business Owner
- Customer

#### Business Owner
- As a business owner, I want to register my business and create a booking page.
- As a business owner, I want to receive notifications when customers book appointments.
- As a business owner, I want to set business hours and available services.

#### Customer
- As a customer, I want to book appointments online.
- As a customer, I want to receive booking confirmations.
- As a customer, I want to make payments online securely.

---

## 7. Monetization Model
| Plan      | Features             | Price     |
|-----------|--------------------|----------|
| Free      | 10 Appointments/Month | $0       |
| Pro       | Unlimited Appointments + AI Chatbot | $29/Month |
| Premium   | Multilingual Support + Social Media Auto Posting | $49/Month |

---

## 8. Roadmap
| Phase      | Timeline      | Deliverables               |
|------------|-------------|---------------------------|
| MVP       | March 2025   | Booking System + Payments + Auth |
| Beta Launch | April 2025   | Multilingual Support + AI Chatbot |
| Public Launch | June 2025   | Marketing Campaign + Subscription Model |

---

## 9. Next Steps
1. Build Wireframes using Figma (**In Progress**)
2. Set up Next.js Boilerplate Code (**In Progress**)
3. Database Design (PostgreSQL)
4. API Design (Booking, Payment, Auth)
5. Develop MVP

---

## Repository
**GitHub Link:** [Coming Soon]

