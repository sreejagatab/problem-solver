// useSEO.js
import { useState } from 'react';
import { runSEOAnalysis, generateSitemap } from '../utils/seo';

const useSEO = () => {
  const [seoAnalysisResults, setSEOAnalysisResults] = useState({});
  const [sitemapUrl, setSitemapUrl] = useState('');

  const performSEOAnalysis = async () => {
    const results = await runSEOAnalysis();
    setSEOAnalysisResults(results);
  };

  const createSitemap = async () => {
    const sitemapData = await generateSitemap();
    setSitemapUrl(sitemapData.sitemapUrl);
  };

  return { seoAnalysisResults, sitemapUrl, performSEOAnalysis, createSitemap };
};

export default useSEO;