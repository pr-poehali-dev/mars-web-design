
CREATE TABLE t_p66354309_mars_web_design.leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    source VARCHAR(100) DEFAULT 'website',
    status VARCHAR(30) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT NOW()
);
