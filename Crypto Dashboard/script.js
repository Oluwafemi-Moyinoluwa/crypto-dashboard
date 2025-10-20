
   
        // Page Navigation
        function showPage(pageId) {
            document.querySelectorAll('.page-container').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            
            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        // Toggle Submenu
        function toggleSubmenu(header) {
            const submenu = header.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                const isHidden = submenu.style.display === 'none';
                submenu.style.display = isHidden ? 'block' : 'none';
                const arrow = header.querySelector('span:last-child');
                if (arrow && arrow.textContent === '›') {
                    arrow.textContent = isHidden ? '▾' : '›';
                }
            }
        }

        // Timer Toggle
        function toggleTimer() {
            const toggle = document.getElementById('timerToggle');
            toggle.classList.toggle('off');
            showNotification(toggle.classList.contains('off') ? 'Timer stopped' : 'Timer started');
        }

        // Modal Functions
        function openModal(title, body, action) {
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalBody').textContent = body;
            document.getElementById('modal').classList.add('active');
            if (action) {
                document.getElementById('modalAction').onclick = action;
            }
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
        }

        function showNotification(message) {
            openModal('Notification', message, closeModal);
        }

        // User Actions
        function openAddUserModal() {
            openModal('Add User', 'Enter the email or username of the person you want to add to this report.', () => {
                showNotification('User added successfully!');
                closeModal();
            });
        }

        function viewUserProfile(name) {
            openModal(`${name}'s Profile`, `Viewing detailed profile and performance metrics for ${name}.`, closeModal);
        }

        function openOptionsMenu() {
            openModal('More Options', 'Select an action: Export, Share, Duplicate, or Delete this report.', closeModal);
        }

        function openAddModal() {
            openModal('Add New Item', 'What would you like to add? Choose from: New Report, New Dashboard, or New Goal.', closeModal);
        }

        // Contributor Actions
        function viewContributorDetails(name) {
            openModal(`${name}'s Performance`, `Detailed breakdown of ${name}'s contributions, deals, and revenue metrics.`, closeModal);
        }

        // Platform Actions
        function viewPlatformDetails(platform) {
            openModal(`${platform} Analytics`, `Viewing detailed analytics for ${platform} including conversion rates, deal flow, and revenue trends.`, closeModal);
        }

        function viewPlatformValue() {
            openModal('Platform Value Breakdown', 'Total platform value: $19,532. Win/Loss ratio: 373 wins, 276 losses. View detailed analytics?', closeModal);
        }

        // Filter and Sort Actions
        function openSortMenu() {
            openModal('Sort Options', 'Sort by: Amount (High to Low), Amount (Low to High), Platform Name, or Percentage.', closeModal);
        }

        function openFiltersPanel() {
            openModal('Apply Filters', 'Filter by: Date Range, Platform Type, Deal Status, Revenue Range, or Team Member.', closeModal);
        }

        function openChartView() {
            openModal('Chart View Options', 'Select chart type: Bar Chart, Line Chart, Pie Chart, or Area Chart.', closeModal);
        }

        // Chart Actions
        function expandChart() {
            openModal('Expanded Chart View', 'Viewing full-screen chart with detailed data points and interactive elements.', closeModal);
        }

        function changeCategory() {
            openModal('Change Category', 'Select referrer category: Direct, Social Media, Email, Organic Search, or Paid Ads.', closeModal);
        }

        function viewBarDetails(barNum) {
            openModal(`Bar ${barNum} Details`, `Viewing detailed breakdown of data for bar segment ${barNum}.`, closeModal);
        }

        function switchChartView(view) {
            document.querySelectorAll('#revenueBtn, #leadsBtn, #wlBtn').forEach(btn => {
                btn.style.background = '#f5f5f5';
                btn.style.color = '#1a1a1a';
            });
            
            if (view === 'revenue') {
                document.getElementById('revenueBtn').style.background = '#000';
                document.getElementById('revenueBtn').style.color = 'white';
            } else if (view === 'leads') {
                document.getElementById('leadsBtn').style.background = '#000';
                document.getElementById('leadsBtn').style.color = 'white';
            } else if (view === 'wl') {
                document.getElementById('wlBtn').style.background = '#000';
                document.getElementById('wlBtn').style.color = 'white';
            }
            
            showNotification(`Switched to ${view.toUpperCase()} view`);
        }

        // Stats Actions
        function viewTopSales() {
            openModal('Top Sales Performance', 'Mikasa leads with 72 sales. View detailed breakdown and comparison with other team members.', closeModal);
        }

        function viewBestDeal() {
            openModal('Best Deal: Roll Inc.', 'Deal value: $42,300. Closed on: Aug 15, 2023. View full deal details and timeline.', closeModal);
        }

        function viewAllDeals() {
            openModal('All Deals (253)', 'Viewing all 253 deals with filtering options by status, date, value, and team member.', closeModal);
        }

        function viewFavorites() {
            openModal('Favorite Deals (5)', 'Your 5 starred deals with quick access and priority tracking.', closeModal);
        }

        // Table Actions
        function sortTable(column) {
            showNotification(`Sorting table by ${column}`);
        }

        function viewSalesPersonDetails(name) {
            openModal(`${name}'s Details`, `Complete performance profile for ${name} including deals, revenue, leads, and conversion rates.`, closeModal);
        }

        function viewSalesStreak() {
            openModal('Sales Streak', 'Current streak leaders and historical streak data. Track consistency and momentum.', closeModal);
        }

        function viewTopReview() {
            openModal('Top Reviews', 'Highest rated deals and customer feedback. View testimonials and success stories.', closeModal);
        }

        function viewSalesDynamic() {
            openModal('Sales Dynamic Analysis', '45.3% growth with $71,048 in trending revenue. View detailed trend analysis and forecasts.', closeModal);
        }

        // Date Range Actions
        function showDateRangePicker() {
            openModal('Select Date Range', 'Choose custom date range or select from presets: Last 7 days, Last 30 days, Last quarter, or Custom range.', closeModal);
        }

        // Quick Stats
        function openQuickStats() {
            openModal('Quick Statistics', 'Overview: Total Revenue: $528,976 | Active Deals: 253 | Team Members: 12 | Avg Deal Size: $2,091', closeModal);
        }

        // Search Functionality
        document.getElementById('searchInput').addEventListener('input', function(e) {
            if (e.target.value.length > 2) {
                showNotification(`Searching for: ${e.target.value}`);
            }
        });

        // Generic Actions
        function clearRecent() {
            openModal('Clear History', 'Are you sure you want to clear your recent activity history? This action cannot be undone.', () => {
                showNotification('Recent history cleared');
                closeModal();
            });
        }

        function createGoal() {
            openModal('Create New Goal', 'Set up a new sales goal with target amount, deadline, and assigned team members.', () => {
                showNotification('Goal created successfully!');
                closeModal();
            });
        }

        function exportData() {
            openModal('Export Data', 'Select export format: CSV, Excel, PDF, or JSON. Choose data range and fields to include.', () => {
                showNotification('Export started! Download will begin shortly.');
                closeModal();
            });
        }

        function viewSharedItems() {
            openModal('Shared Items', 'Viewing all reports and dashboards shared with you. Filter by person, date, or type.', closeModal);
        }

        function shareReport() {
            openModal('Share Report', 'Enter email addresses to share this report. Set permissions: View only or Edit access.', () => {
                showNotification('Report shared successfully!');
                closeModal();
            });
        }

        function customizeAnalytics() {
            openModal('Customize Analytics', 'Personalize your analytics view: Add widgets, rearrange layout, or create custom metrics.', closeModal);
        }

        function takeTour() {
            openModal('Welcome Tour', 'Let us show you around! Learn about key features, navigation, and best practices for using Codename.', () => {
                showNotification('Tour completed! You\'re all set.');
                closeModal();
            });
        }

        // Click outside modal to close
        document.getElementById('modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Initialize
        console.log('Dashboard fully loaded with all buttons functional!');
