/* 
   🌐 Internet (Interconnected Network) 
   -------------------------------------
   - A global system of interconnected computers and networks.
   - Decentralized: No single entity owns or controls it.
   - Uses a standardized set of protocols (TCP/IP) for communication.
   - Provides various services beyond just websites.

   🚀 Key Features:
   - Expansive → Connects billions of devices worldwide.
   - Decentralized → No central authority; governed by multiple organizations.
   - Multi-Service Platform → Supports diverse applications beyond the Web.

   <------- Internet vs Web ------->
   
   Web (World Wide Web - WWW) is a subset of the Internet.
   - A collection of websites and web pages, accessible via browsers.
   - Uses HTTP/HTTPS for data transfer.
   - Websites are built using HTML, CSS, JavaScript.

   🌍 Other Internet Services (Beyond the Web):
   1️⃣ Email (SMTP, IMAP, POP3) → Sending and receiving messages.
   2️⃣ File Transfer (FTP, SFTP) → Uploading and downloading files.
   3️⃣ Remote Access (Telnet, SSH) → Controlling devices remotely.
   4️⃣ Internet Calls (VoIP - Skype, Zoom, WhatsApp) → Voice communication over IP.
   5️⃣ Instant Messaging (XMPP, WhatsApp, Telegram, Slack) → Real-time text communication.
   6️⃣ Video Conferencing (Zoom, Google Meet, Microsoft Teams) → Live video meetings.
   7️⃣ Gaming & Streaming (Twitch, YouTube, Netflix, Cloud Gaming)→ Entertainment services.
   8️⃣ IoT (Internet of Things) → Smart devices communicating via the internet.





Authentication: Verifies who you are (e.g., login with username & password).
Authorization: Determines what you can do (e.g., access control based on roles).
🔑 AuthN (Authentication) → Identity Verification
🔐 AuthZ (Authorization) → Permission Management
*/

// What is a Server?
// A server is essentially just another computer that runs backend code but is optimized for handling multiple requests concurrently.

// Why Do Servers Need Special Hardware & Configuration?
// Concurrency: A single server may handle thousands of requests simultaneously.
// Limited Ports: The number of available network ports is limited, so requests are queued and processed efficiently.
// Processing Power: Unlike a personal computer, a server must handle heavy loads 24/7.
// Reliability: Regular operating systems aren't designed for high-concurrency environments.
// Performance Optimization: Server-grade hardware is used to enhance speed, efficiency, and reliability.
// Key Hardware & Features of a Server:
// Server-Grade Processors (e.g., Intel Xeon, AMD EPYC)
// More cores & threads for efficient multiprocessing.
// ECC RAM (Error-Correcting Code RAM)
// Detects & corrects memory errors, improving reliability.
// Larger Cache Memory
// Faster access to frequently used data.
// Backup Power Supply (UPS - Uninterruptible Power Supply)
// Prevents downtime due to power failures.
// RAID (Redundant Array of Independent Disks) for Storage
// Provides redundancy to prevent data loss in case of disk failures.
// Optimized Operating Systems
// Examples: Windows Server, Linux Server (Ubuntu Server, CentOS, etc.).
// Types of Servers (Based on Services Provided)
// Web/Application Server (Primary Server)

// Stores and serves website/application files.
// Handles HTTP requests.
// Examples: Apache, Nginx, Node.js, Express.
// Database Server (Secondary Server)

// Stores and manages structured data.
// Used by APIs and applications to retrieve or modify data.
// Examples: PostgreSQL, MySQL, MongoDB.
// Email Server (Secondary Server)

// Implements SMTP (Simple Mail Transfer Protocol) to send and receive emails.
// Examples: Postfix, Microsoft Exchange, Sendmail.
// Server Setup Options:
// A single server can handle all three roles (web, database, email) for small-scale applications.
// For better performance & scalability, dedicated servers are used for each role in larger applications.

// <--------------------- Does server runs only baclend code ? --------------->
// Not necessarily! While servers primarily run backend code, they can also serve frontend files. Here's the breakdown:

// 1. Backend Code Execution
// Servers mainly run backend logic, handling requests, processing data, and interacting with databases.
// Examples:
// Node.js (Express)
// Python (Django, Flask)
// Java (Spring Boot)
// PHP (Laravel)
// 2. Serving Frontend Files
// A server can also store and serve static frontend files (HTML, CSS, JavaScript).
// Example:
// Nginx or Apache can serve static React or Vue files.
// A Node.js server can serve a frontend via express.static().
// 3. Full-Stack Servers
// Some servers handle both frontend & backend:
// Example: Next.js (renders frontend and runs backend API routes).
// Example: PHP (handles frontend rendering and backend logic).
// 4. Edge Cases
// Some frontend-heavy apps use server-side rendering (SSR) for performance.
// A server does not execute client-side JavaScript but may send pre-rendered HTML.
// So, while a server primarily runs backend code, it can also serve frontend assets or even render pages dynamically.

// <-------------- Client-Server Model -------------->

// In a distributed architecture, clients (e.g., web browsers, mobile apps) send requests to a server, and the server processes these requests before sending a response back.
// The server, typically written in languages like Node.js, Python, Java, PHP, or Go, can validate the request (if needed) before processing it.
// Servers often interact with a database server (e.g., PostgreSQL, MySQL, MongoDB) to fetch or store data before sending the response to the client.
// Various types of servers exist, including:
// Web servers (serve websites and web applications)
// Application servers (handle business logic)
// Database servers (store and manage data)
// FTP servers (handle file transfers)
// Email servers (manage email communication)
// This model ensures a clear separation of concerns, allowing scalability, security, and efficient resource management in distributed systems. 
// A small website might run on one server, but a big app (e.g., Facebook, YouTube) uses thousands of distributed servers across different regions to balance load, reduce latency, and ensure high availability.

// <------------------ Is there only one server or multiple servers ? ---------------->
// There can be one or multiple servers, depending on the scale and requirements of the system. Here's how the load is managed in different scenarios:
// 1. Single Server (Monolithic Architecture)
// A single server handles all client requests, processes data, and interacts with the database.
// Simple to set up but not scalable—it becomes a bottleneck as traffic increases.
// 2. Multiple Servers (Distributed Architecture)
// In large-scale applications, multiple servers handle requests to distribute the load efficiently.
// Load can be distributed using Load Balancing and Microservices.
// How Load is Distributed?
// 1. Load Balancing
// A Load Balancer (e.g., Nginx, AWS Elastic Load Balancer) sits between clients and servers. It:

// Distributes requests evenly across multiple servers.
// Prevents overload on any single server.
// Improves fault tolerance (if one server fails, another takes over).
// Example:
// Client → Load Balancer → Server 1 / Server 2 / Server 3

// 2. Horizontal Scaling (Adding More Servers)
// Instead of upgrading a single server (vertical scaling), multiple servers are added to handle more traffic.

// Example: Instead of one powerful database server, multiple database replicas (read/write separation) are used.
// 3. Microservices Architecture
// Instead of a single backend, different services handle different tasks.

// Example:
// Auth Service → Handles login/signup
// User Service → Manages user profiles
// Payment Service → Processes transactions
// Each microservice can be scaled independently based on demand.
// 4. Content Delivery Networks (CDN) for Static Files

// For faster response times, static assets (images, JS, CSS) are served via CDNs like Cloudflare, AWS CloudFront, or Akamai instead of hitting the main server.

// <----------------- Peer to Peer (P2P) Architecture ---------------->

// 